# The Terminal
A text input and output environment used to interact with your computer's operating system.

## Different Terms

- **Command Line**: Any interface that is used by entering textual commands (gen. Windows centric)

- **Terminal**: This is a type of command line (gen. Mac centric)

- **Console**: A command-line interface used to work with your computer

- **Shell**: A program running on terminal

- **Bash**: A popular shell on Mac OS/Linux

- **Z-Shell (Zsh)**: Another shell (defualt)

## Basic Commands

| Command | Description                           |
|---------|---------------------------------------|
| `ls`    | List files (show my files)            |
| `pwd`   | Print working directory (where am i?) |
| `clear` | Clear screen                          |

- Up arrow : Browse previous commands

- Down arrow : Move forward in command history

## Navigation
Inside & Ouside Directories

- `cd` : Change directory

- `cd Desktop` : Go to Desktop

- `cd ..` : Go back one directory

- `cd ../..` : Go back two directories

- `cd ~` : Go to the home directory

- `cd /` : Go to the root directory

- `code .` : Open current folder in VS Code (VS Code CLI required)

Pressing `Tab` **auto-completes** directory names.

If multiple matches exist, press `Tab` **twice** to see suggestions.

- **Paths in Navigation**

  - **Absolute & Relative**

    - `cd Desktop/Projects` : Relative path (Relative to the current directory)

    - `cd /Users/yourname/Desktop/Projects` : Absolute path (Full path from the root directory)

  - `/` : Root directory

  - `~` ; Home directory

## Making  Directories

- `mkdir` : Make a directory

- `mkdir NewFolder` : Create a new folder in the current directory

- Use relative or absolute paths:

  - Relative: `mkdir Desktop/Projects/NewFolder`

  - Absolute: `mkdir /Users/yourname/Desktop/Projects/NewFolder`

## Flags in Commands
Flags are characters that we pass with commands to modify their behaviour

**Manual Command**

- `man ls` : give info about `ls` command

- `man mkdir` : give info about `mkdir` command

Press `q` to exit the manual page view.

| Command  | Description                                                           |
|----------|-----------------------------------------------------------------------|
| `ls -l`  | Lists files with detailed info (permissions, size, date, etc.)        |
| `ls -a`  | Lists all files including hidden ones (those starting with a dot `.`) |
| `ls -la` | Combines both `-l` and `-a` flags                                     | 

## Touch Command
Used to create files

- `touch index.html` : Create an HTML file

- `touch app.js` : Create a JavaScript file

- `touch README.md` : Create a markdown file

## Deleting Files & Folders

- `rm` : Removes files (eg. `rm FileName`)

- `rmdir` : Removes empty folders (eg. `rmdir FolderName`)

- `rm -rf` : Removes any folder (eg. `rm -rf Foldername`)

> [!WARNING]
> Deletions made through the terminal are permanent and cannot be undone.

## Handy Shortcuts

- **Tab** : Auto-complete file or folder names

- **Up/Down Arrows** : Scroll through previous commands

- **Ctrl + C** : Stop a running command

- **Ctrl + L** : Clear terminal  screen (like `clear` command)
