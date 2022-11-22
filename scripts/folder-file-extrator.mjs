import fs from 'fs'
import path from 'path'
import readline from 'readline/promises'
import { fileURLToPath } from 'url'
const jsFilePath = fileURLToPath(import.meta.url)

let argv = process.argv
if (argv[0].endsWith('/node')) argv = argv.slice(1)
if (argv[0] === jsFilePath) argv = argv.slice(1)

if (argv.length < 2) {
  console.log(`\nUsage: node ${path.basename(jsFilePath)} <fromFolder> <toFolder>\n`)
  process.exit()
}

async function confirmToContinue() {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  })
  const answer = await rl.question('Continue? (y) ')
  if (answer !== 'y') {
    console.log('Cancelled');
    process.exit()
  }
}
process.on('SIGINT', () => process.exit())
process.on('SIGTERM', () => process.exit())

const fromFolder = argv[0];
const toFolder = argv[1];

const subfolders = fs.readdirSync(fromFolder)
  .map(name => ({
    path: path.join(fromFolder, name),
    match: name.match(/^([0-9]+) .*$/),
  }))
  .filter(subfolder => subfolder.match)
  .map(subfolder => ({
    prefix: subfolder.match[1],
    ...subfolder
  }))
  .filter(({ prefix }) => prefix >= 135 && prefix <= 158)
  .map(subfolder => {
    const subfiles = fs.readdirSync(subfolder.path)
      .filter(name => name.endsWith('.wav'))
      .map(name => path.join(subfolder.path, name));
    console.log(subfiles.join('\n'))
    console.log();
    return {
      files: subfiles,
      ...subfolder,
    }
  })

console.log('Copy from folder: ' + fromFolder);
console.log('Copy to folder: ' + fromFolder + '\n');

if (fs.existsSync(toFolder)) {
  console.log('toFolder already exists, quitting');
  process.exit()
}

await confirmToContinue('Press y to continue')

fs.mkdirSync(toFolder, { recursive: true })

let count = subfolders.flatMap(({ files }) => files).length
let i = 0
for (const subfolder of subfolders) {
  for (const file of subfolder.files) {
    const name = subfolder.prefix + ' ' + path.basename(file)
    process.stdout.clearLine(0)
    process.stdout.cursorTo(0)
    process.stdout.write(`${i + 1}/${count} ${name}`)
    await fs.promises.copyFile(file, path.join(toFolder, name))
    i++
  }
}

process.stdout.clearLine(0)
process.stdout.cursorTo(0)
process.exit()
