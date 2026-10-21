# Working in VS Code with two repositories

This guide shows how to work in two places at the same time.

VS Code is a free code editor. A repository ("repo") is a folder that Git tracks. Git is the tool that saves versions of your work.

You will use both places every week. Read this page once, then keep it open while you work. This is new for most people. Go slowly.

Replace `<student-id>` with your number, for example RB7.

## 1. What We Are Doing

There are two places. Read this part slowly.

**Place A: the cohort clone.**

You got this folder with:

```
git clone https://github.com/StartwithDot/RUSTBRIDGE_SPRINT_1.git
```

This folder is the official repository for the sprint. Your weekly task proof lives here, in `students/<student-id>/week-NN/`. Some proof is code. Some proof is writing.

You push a branch like `rb7-week-01` to the official repository and open a pull request. A pull request ("PR") is a request to add your branch into `main`. A maintainer checks the PR and merges it. You never push to `main`.

**Place B: your own project repository.**

This is a separate repository in your own GitHub account. You build MerchantDesk there from scratch. MerchantDesk is the practice application for this sprint: it records synthetic (fake) payment events and lets a merchant operator inspect them. See `19-own-project-repo.md` for how to create it.

You work there first. When a piece works and passes its proof, you copy the weekly files into Place A and open the pull request.

Short version:

- Place B is where you build and experiment.
- Place A is where you show the proof.
- You copy only the files that pass their proof.

## 2. Why We Are Doing It

Two places give you two different things.

- Your own repository is a safe place to try, break and fix things. Nobody reviews it while you are still learning.
- The cohort clone is the shared record. The maintainer reads your branch and checks your proof. Small, clean changes are easy to review.
- Copying only the files that pass proof keeps the official repository clean and keeps secrets out of it.
- Working in one VS Code window means you can see both folders at once and copy files without leaving the editor.

## 3. What to Learn First (Prerequisites)

Before this guide, you should have:

- Node.js 22.17 or newer 22.x, and Git, installed. See `02-setup-guide-mac-windows.md`.
- The cohort clone on your computer, with `npm ci` run once inside it.
- `npm run setup:check` passing. Run it from the repository root.
- Basic Git words: clone, branch, commit, push, pull request. See `03-student-guide.md`.

You do not need to know VS Code well. This page covers what you need.

## 4. Where to Find Resources

VS Code:

- Editor basics, opening folders, saving files: https://code.visualstudio.com/docs/editor/codebasics
- The built-in terminal: https://code.visualstudio.com/docs/terminal/getting-started
- Workspaces, two folders in one window: https://code.visualstudio.com/docs/editor/workspaces
- Source Control panel: https://code.visualstudio.com/docs/sourcecontrol/overview

Git and GitHub:

- Recording changes to the repository: https://git-scm.com/book/en/v2/Git-Basics-Recording-Changes-to-the-Repository
- Creating a pull request: https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/creating-a-pull-request

Local documents in this repository:

- `02-setup-guide-mac-windows.md`: install and setup on Mac and Windows.
- `03-student-guide.md`: branch, commit and pull request rules.
- `16-team-repo-and-delivery.md`: team workflow and weekly delivery.
- `19-own-project-repo.md`: create and use your own project repository.
- `09-troubleshooting.md`: common errors and fixes.

## 5. Step-by-Step Guide

### Step 1 Open the cohort clone in VS Code

Open VS Code.

Go to File > Open Folder. Choose the cohort clone folder, the one named `RUSTBRIDGE_SPRINT_1`.

VS Code asks if you trust the folder. Accept it. Trust lets the editor run tools inside this folder.

You now see the folder in the Explorer on the left. The Explorer is the file tree of your project.

### Step 2 Open the terminal inside VS Code

Go to View > Terminal, or press Ctrl+` (this is Ctrl on Mac too, not Cmd).

A terminal opens at the bottom of the window. A terminal is a place to type commands.

Check which folder the terminal is in:

Mac:

```
pwd
```

Windows (PowerShell):

```
Get-Location
```

The output must end with `RUSTBRIDGE_SPRINT_1`. That means you are in the repository root. If the output shows another folder, close the terminal and open a new one.

Run these from the repository root, once after cloning:

```
npm ci
npm run setup:check
```

`npm ci` installs the exact dependencies. `npm run setup:check` checks Node, Git and the dependencies.

### Step 3 Add the second folder

Now add your own project folder to the same window.

Go to File > Add Folder to Workspace... and choose your own project folder.

Then go to File > Save Workspace As... and give the workspace a name, for example `merchantdesk`. A workspace is a saved group of folders opened together.

Both folders now appear in the Explorer.

Each terminal must be opened in the right folder. Open a terminal with Terminal > New Terminal, then pick the folder. Read the path in the terminal before you type a command. The path tells you which folder is active. Check it with `pwd` on Mac or `Get-Location` on Windows (PowerShell).

Tip: open one terminal per folder and keep both open. Label them in your head: "cohort terminal" and "my project terminal".

### Step 4 Extensions and the NPM Scripts view

Install the extension named "Prettier - Code formatter". Prettier is the tool that formats your files.

Turn on format on save, so every file you save stays in the project format.

In the Explorer you can open the NPM Scripts view. It lists the scripts from `package.json`. Click one to run it in a terminal. For example, `npm run check` appears there, and so do the other npm scripts.

### Step 5 The Source Control panel

VS Code has a panel for Git.

Mac:

```
Cmd+Shift+G
```

Windows (PowerShell):

```
Ctrl+Shift+G
```

The panel lists your changed files. Click + next to a file to stage it. Staging means you choose what goes into the next commit. Type a message in the box. Click Commit.

The same steps with terminal commands, run from the repository root:

```
git add <files>
git diff --cached
git commit -m "T01.1 inspect a sandbox event"
```

`git diff --cached` shows what you staged. Read it before you commit. This one habit catches most mistakes.

Put the task ID first in the commit message. One focused commit per task. The example above is the format.

To push a branch the first time:

```
git push -u origin rb7-week-01
```

Push sends your commits to GitHub.

### Step 6 The weekly loop with both repos

This is the full week, in order.

1. In your own project folder, build the piece and test it there. Open a terminal in that folder and run your own checks.
2. In the cohort clone, update `main` and create your branch. Run these from the repository root of the cohort clone. Replace NN with the week number.

```
git switch main
git fetch origin
git merge --ff-only origin/main
git switch -c rb7-week-NN
```

Example branch name: `rb7-week-01`.

3. Copy the needed files into the complete destination path from your week file. The path below is the week 1 Primary path example. Use the Primary path from your week file. Create the folders first. Run this from the repository root of the cohort clone.

Mac:

```
mkdir -p students/<student-id>/week-01/typescript
cp <your-file> students/<student-id>/week-01/typescript/inspector.ts
```

Windows (PowerShell):

```
New-Item -ItemType Directory -Force students/<student-id>/week-01/typescript
Copy-Item <your-file> students/<student-id>/week-01/typescript/inspector.ts
```

You can also drag the files in the VS Code Explorer. Never copy `node_modules` or `.env`. A `.env` file holds secrets. A `node_modules` folder holds installed packages and is rebuilt by `npm ci`.

4. Adapt relative imports to the cohort layout and rerun the proof there. Open each copied file. Change the relative imports to match the cohort layout. Save the files. Run the proof again from the repository root of the cohort clone.

5. Run the task proof from the repository root of the cohort clone. Examples:

```
npm run practice -- <file.ts>
npm run test:student -- RB7
npm run typecheck
npm run check
```

Replace RB7 with your own id. `npm run typecheck` checks types, because tsx runs TypeScript without checking types. `npm run check` runs curriculum, format, types, tests and build, and needs no database.

6. Commit with the task ID first.

```
git add <files>
git diff --cached
git commit -m "T01.1 inspect a sandbox event"
```

7. Push your branch.

```
git push -u origin rb7-week-NN
```

8. Open the pull request on GitHub. Base is `main`. Compare is your branch. Fill in the title and the description, then create the pull request.

9. Read the review comments. Apply them in the same branch, commit, and push again. A maintainer merges after the checks pass. You do not merge your own pull request.

### Step 7 Common mistakes

| Mistake                             | What you see                                                                       | How to fix it                                                                                           |
| ----------------------------------- | ---------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------- |
| Committed in the wrong repository   | The commit is in your own project, not in the cohort clone, or the other way round | Check the folder path in the terminal first. Use `pwd` on Mac or `Get-Location` on Windows (PowerShell) |
| Pushed to `main`                    | Git rejects the push, or the maintainer asks you to move the work                  | Always switch to your branch before you commit. Never push to `main`                                    |
| Forgot to switch branch             | Your commit lands on `main` in your local clone                                    | Stop before pushing and ask in Discord. Then create the branch and move the work                        |
| Copied `node_modules` or `.env`     | Many files appear in the diff, or secret values appear                             | Never copy these. Copy only the source files for the task. Do not stage them                            |
| Terminal opened in the wrong folder | The command fails with a missing file, a missing `package.json`, or a wrong path   | Open a new terminal with Terminal > New Terminal, pick the right folder, and check the path again       |

If the diff looks wrong, do not commit. Ask in Discord first.

### Step 8 If you get stuck

Post in Discord with four things:

1. The exact command you ran.
2. The exact error text, copied, not retyped from memory.
3. Your OS: Mac or Windows.
4. What you already tried.

Never paste secrets in Discord or into an AI assistant. Never paste the contents of a `.env` file. Use only synthetic data.

Also read `09-troubleshooting.md` before you post. Many errors are already listed there.

## 6. What to Commit

Check this list at the end of every week.

- [ ] Both repositories hold the same working files for the week.
- [ ] The cohort pull request is open, with base `main`.
- [ ] Your own project repository is pushed.
- [ ] Every commit message starts with the task ID, for example `T01.1`.
- [ ] `npm run typecheck` passes from the repository root of the cohort clone.
- [ ] `npm run check` passes from the repository root of the cohort clone.
- [ ] No .env file and no node_modules folder is tracked or staged in either repository (git status shows neither).
- [ ] No passwords or keys in any commit.
- [ ] `git diff --cached` was read before each commit.

This is new for most people. Go slowly, check the path in your terminal, and ask in Discord when something looks wrong.
