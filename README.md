# my-bash-scripts

These are the basic bash scripts I've made for myself. They're made for macOS, so there's no guarantee they'll work on other OS-es.

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

### welp
Lists all these scripts, aka everything in the `bin` folder.

### chill

```
chill
    Do nothing for a specified amount of time. Useful for scheduling stuff.

Usage examples:
    chill 1h
    chill 30m
    chill 50h 1m
```

### d-c
Basic wrapper around the `docker-compose` command. The command works the same as `docker-compose`, except:
- When running `d-c run`, the `--rm` argument is added (as long as `-d` or `--detach` are not present).
- When running `d-c up`, `d-c down` runs afterwards (as long as `-d` or `--detach` are not present).

If you've installed auto completion for `docker-compose` ([here's how to do that](https://docs.docker.com/compose/completion/)), this is how you can enable auto completion for `d-c`:
- For `bash`, add the following to your `~/.bash_profile`:
    ```bash
    complete -F _docker_compose d-c
    ```
- For `fish`, add the following to your `~/.config/fish/config.fish`:
    ```fish
    complete --command d-c --wraps docker-compose
    ```

### copy
Run a command and copy the output to the clipboard. For example, run `copy pwd` to copy the current path.

```
Usage:
    copy <command> [args...]
```

### md5compare
Compares md5s of two files.

```
Usage: md5compare <file1> <file2>
```

### render
This will render [After Effects](https://www.adobe.com/products/aftereffects.html) projects, assuming you have After Effects installed in `/Applications/Adobe After Effects CC 2019` (Specifically, the `aerender` file needs to be in there). Running `render` shows the syntax:

```
Usage:
  render [options] <file> [file...]

Options:
  file        .aep file for After Effects' aerender to render.
  -h, --help  Show this help text
  -k, --kill  Kill allaerendercore processes (they tend to get stuck).
              DO NOT use this if you have multiple renders running!
```

### reset-permissions
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

### sleepy
Hibernates your computer. I usually run this after `render` or `chill`.

### sfx

```
sfx:
    Play a sound effect. Example: sfx ding.

Usage:
    sfx <sound>

Sounds:
    ding beep
```

### to-gif
Requires [ffmpeg](https://ffmpeg.org) (which I recommend installing using [Homebrew](https://brew.sh)).

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
