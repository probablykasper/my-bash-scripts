# my-bash-scripts

These are the basic bash scripts I've made for myself. They're made for macOS, so there's no guarantee they'll work on other OSes.

# Install

1. Download the scripts and put them in whatever folder you want. In my case, they are in `~/dev/my-bash-scripts/bin`.
2. Make the scripts executable by running `chmod +x <YOUR_FOLDER>/*`.
3. Add the folder to your PATH, so you can call the scripts by their filename in your terminal from anywhere. Edit the file named `.bash_profile` (or create it if it does not exist). Add the following line to it: `export PATH=<YOUR_FOLDER>:$PATH`.


# Scripts

## welp
Super simple script that lists the files in the same folder as the script is in. In other words, it lists the scripts here.

## chill
Stops execution for a specified amount of time. Useful for scheduling stuff. `chill` shows the syntax:
```
Syntax: chill #h
Syntax: chill #m
Syntax: chill #h #m
```

## d-c
Basic wrapper around the `docker-compose` command (which you should have if you got Docker installed). The command works the same as `docker-compose`, except:
- When running `d-c run`, the `--rm` argument is added (as long as `-d` or `--detach` are not present).
- When running `d-c up`, `d-c down` runs afterwards (as long as `-d` or `--detach` are not present).

If you've installed auto completion for `docker-compose` ([here's how to do that](https://docs.docker.com/compose/completion/)), you can enable auto completion for `d-c` by adding `complete -F _docker_compose d-c` to your `.bash-profile`.

## md5compare
Compares md5s of two files.
```
Usage: md5compare <file1> <file2>
```

## render
This will render [After Effects](https://www.adobe.com/products/aftereffects.html) projects, assuming you have After Effects installed in `/Applications/Adobe After Effects CC 2019` (Specifically, the `aerender` file needs to be in there). Running `render` shows the syntax:
```
Usage:
    render <file> [file...]

Options:
    file   After Effects .aep file for After Effects' aerender to render.
```
It was made to be able to support multiple path arguments, as well as taking folders as path arguments to render every .aep file inside those folders, but I don't think that works. Might fix that someday if I need it.

## reset-permissions
Resets permissions of a directory. You should probably know what you're doing before running this.

Running `reset-permissions` shows the syntax:
```
reset-permissions
usage: reset-permissions <username> <directory>
```

This is the command it will run:
```
sudo chmod -RN <DIRECTORY> && \
sudo chown -R <USERNAME> <DIRECTORY> && \
sudo chmod -R 755 <DIRECTORY>
```

## sleepy
Hibernates your computer. I usually run this after `render` or `chill`.

## to-gif
Requires [ffmpeg](https://ffmpeg.org) (which I recommend installing using [Brew](https://brew.sh)).

Converts videos into gifs. If you do this frequently I would probably use some app instead.

Running `to-gif` shows the syntax:
```
Syntax: to-gif <file> [fps] [scale] [duration] [start_at]
    file:     File to convert to gif. Required.
    fps:      Defaults to 15.
    scale:    GIF resolution. Defaults to 1.
    duration: How long the gif will be, in seconds. Defaults to 999999.
    start_at: Where the video starts, in seconds. Defaults to 0
```
