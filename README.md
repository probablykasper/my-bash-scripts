# my-bash-scripts

These are the basic bash scripts I've made for myself. They're made for macOS, so some of them may not work on other platforms.

## Install

1. Download the scripts and put them in whatever folder you want. In my case, I just keep them with my other git repos.
2. Add the folder to your PATH, so you can call the scripts by their filename in your terminal from anywhere.
- For `bash`, add the following to your `~/.bash_profile`:
    ```bash
    export PATH=<YOUR_FOLDER>:$PATH
    ```
- For `fish`, add the following to your `~/.config/fish/config.fish`:
    ```fish
    set PATH "/Users/kasper/dev/git/my-bash-scripts/bin:$PATH"
    ```

## Scripts

Some of the scripts are described below. To see the help menus for the other scripts, either open the files inside `bin` or run the commands directly.

### welp
Lists all scripts in the `bin` folder.

### to

```
Usage:
    to <format> [options] <file1> [file2...]

Options:
    format           Format to convert to.
    --formats        List all supported formats.
    -v, --verbose    If you love logs.
    -h, --help       Show this help message.

    Prefix arguments with - to pass them directly to
    FFmpeg or ImageMagick, like --ac -128k.
```

Running `to --formats` shows the supported formats:
```
Video formats:
    mp4
    mp4-h265
    mov
    webm

Audio formats:
    mp3      320kbps. Custom bitrate example: mp3:128
    flac
    aiff
    opus     256kbps. Custom bitrate example: opus:128

Image formats:
    jpg      90 quality. Custom quality example: jpg:75 (0-100)
    png
    webp     90 quality. Custom quality example: webp:75 (0-100)
    gif
```

### dco
Basic wrapper around the `docker-compose` command. The command works the same as `docker-compose`, except:
- When running `dco run`, the `--rm` argument is added (as long as `-d` or `--detach` are not present).
- When running `dco up`, `dco down` runs afterwards (as long as `-d` or `--detach` are not present).

If you've installed auto completion for `docker-compose` ([here's how to do that](https://docs.docker.com/compose/completion/)), this is how you can enable auto completion for `dco`:
- For `bash`, add the following to your `~/.bash_profile`:
    ```bash
    complete -F _docker_compose dco
    ```
- For `fish`, add the following to your `~/.config/fish/config.fish`:
    ```fish
    complete --command dco --wraps docker-compose
    ```

### sleepy
Puts your computer to sleep.
