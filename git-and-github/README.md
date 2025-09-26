# Git & GitHub Documentation

## What is Git?
Free & Open Source **Version Control System** - a tool that help to track changes in code.

- Track history
- Help to collaborate

To get started with Git, [download Git here](https://git-scm.com).

## What is GitHub?
Website where we host repositories online

[Create a GitHub Account](https://github.com)

## Using Git
You can interact with Git using several methods:

- Command Line (Most Popular)
- IDE/Code Editor (like VS Code)
- Graphical User Interface (like GitKraken)

## Configuring Git
Before using Git, configure your Git user:

```bash
# Set your Git username
git config --global user.name "Your Name"

# Set your Git email (must match the email used in your GitHub account)
git config --global user.email "youremail@example.com"
```

## Basic Git Commands

- **clone**:  cloning a repository on our local machine
    ```bash
    git clone RepositoryLink
    ```

- **status**: display the state of the code
    ```bash
    git status
    ```

- **log**: used to view the history of commits in your git repository
    ```bash
    git log
    ```

- **add**: adds new or changed files in your working directory to the git staging area.
    ```bash
    git add FileName
    ```

    ```bash
    git add .
    # is used in Git to stage all changes in the current directory and all subdirectories for the next commit.
    ```

- **commit**: it is the record of change
    ```bash
    git commit -m "some message"
    ```

- **push**: uploads local repo content to remote repo
    ```bash
    git push origin main
    ```

- **init**: used to initialize a new Git repository in your current project directory.
    ```bash
    git init
    ```

## Pushing Local Repo

- **Initialize Git** (if not already done)
    ```bash
    git init
    ```

-  **Add files to staging area**
    ```bash
    git add .
    ```

-  **Commit the staged files**
    ```bash
    git commit -m "Initial commit"
    ```

- **Add a remote repository**:
    ```bash
    git remote add origin RepositoryLink
    ```

- **Verify remote repository**:  
    ```bash
    git remote -v
    # to verify remote
    ```

- **Check the current branch**:  
    ```bash
    git branch
    # to check branch
    ```

- **Rename the current branch**:  
    ```bash
    git branch -M main
    # to rename branch
    ```

- **Push to remote repository**:  
    ```bash
    git push origin main
    # Pushes 'main' branch to the 'origin' remote (one-time push)

    git push -u origin main
    # -u sets upstream: links local 'main' to 'origin/main'
    # After this, you can just use:
    git push    # to push changes
    git pull    # to pull updates
    ```

## Workflow
A **Git workflow** is the process or set of steps developers follow to use Git effectively. It includes creating or cloning repositories, making changes, staging those changes, committing them, and syncing with a remote repository. The workflow helps track project history, collaborate with others, and manage code changes systematically.

## Git Branches
**Git branches** are independent lines of development within a project. They allow developers to work on new features, fixes, or experiments separately from the main codebase. Branches help isolate changes, making it easier to manage different versions of the project without affecting the stable code. Once work on a branch is complete, it can be merged back into the main branch.

- **Branch Commands**

    - **Check the current branch**:  
        ```bash
        git branch
        # to check branch
        ```

    - **Rename a branch**:  
        ```bash
        git branch -m new_name
        # to rename branch
        ```

    - **Switch to another branch**:  
        ```bash
        git checkout branch_name
        # to navigate

    - **Create a new branch**:  
        ```bash
        git checkout -b new_branch_name
        # to create new branch
        ```

    - **Delete a branch**:  
        ```bash
        git branch -d branch_name
        # to delete branch
        ```

    - **Merging Branches**

        - **Compare changes between branches**:  
            ```bash
            git diff branch_name
            # to compare commits, branches, files & more
            ```

        - **Merge branches**:
            ```bash
            git merge branch_name
            # to merge 2 branches
            ```

        **Alternatively**, create a Pull Request (PR) on GitHub to merge branches.

- **Pull Request** <br>
    It lets you tell others about changes you've pushed to a branch in a repository on GitHub.

    - **Pull Command**:

        ```bash
        git pull origin main
        ```

        used to fetch and download content from a remote repo and immediately update the local repo to match that content

- **Merge Conflicts** <br>
    An event that takes places when Git is unable to automatically resolve differences in code between two commits.

## Fixing Mistakes

- **Case 1: Staged Changes**

    ```bash
    git reset FileName
    # Unstage a specific file (keeps changes in working directory)
    ```

    ```bash
    git reset
    # Unstage all staged files (keeps changes in working directory)
    ```

- **Case 2: Undo the Last Commit**

    ```bash
    git reset HEAD~1
    # Undo the last commit (keeps changes in working directory, unstaged)
    ```

    ```bash
    git reset --soft HEAD~1
    # Undo the last commit but keep changes staged (ready to recommit)
    ```

- **Case 3: Undo Multiple Commits**

    ```bash
    git reset commit_hash
    # Soft reset: keep changes in working directory and staging area
    ```

    ```bash
    git reset --hard commit_hash
    # ⚠️ Hard reset: deletes all changes after the target commit (cannot be undone)
    ```

- **Case 4: Sync Remote After Reset**

    ```bash
    git push origin HEAD --force
    # ⚠️ Force push to overwrite remote history after reset (use with caution)
    ```

    ```bash
    git push --force-with-lease
    # ✅ Safer force push: only if no one else pushed after your last pull
    ```

## What is Forking?
A fork is a new repository that shares code and visibility settings with the original "upstream" repository. Fork is a rough copy.
