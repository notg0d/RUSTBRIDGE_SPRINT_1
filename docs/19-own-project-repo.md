# Build MerchantDesk in your own project repository

This file explains how to build the whole MerchantDesk product from scratch in your own GitHub repository, in your own GitHub account. You work there first. When a weekly piece works and passes its proof, you copy it into the cohort clone and open a pull request into the official repository.

This is new for most people. Go slowly.

## 1. What We Are Doing

You will have two copies of the work:

1. **Your own repository.** Name suggestion: `merchantdesk-rb7`, with your own number. It lives in your own GitHub account. You build the product here first.
2. **The cohort clone.** This is the clone of the official repository: `RUSTBRIDGE_SPRINT_1`.

The rhythm is simple:

1. Build the week piece in your own repository.
2. Run its proof there.
3. Copy the weekly files into the cohort clone under `students/<student-id>/week-NN/`. Replace `<student-id>` with your number, for example RB7.
4. Run the proof again in the cohort clone.
5. Open a pull request into the official repository.

A maintainer checks and merges the cohort pull request.

Not every week produces code. Some weeks produce writing: a brief, notes, a review. Code goes to both places. Writing can be written in the cohort folder directly.

The shared product in `shared/` is a separate thing. It is built by assigned owners. You do not build `shared/` in your own repository.

The cohort clone is still the place where proof is checked by the maintainers. Your own repository is your portfolio and your practice copy.

## 2. Why We Are Doing It

**You own a portfolio project.** At the end you have a full application in your own GitHub account. You can show it to an employer. You can keep working on it after the sprint.

**You practise real repository life.** You practise the same steps a team uses every day: a repository, a `.gitignore` file, small commits, branches, pull requests, review. Doing it twice, once alone and once in the cohort repo, makes the steps normal for you.

**You learn to start a project from zero.** Not only to add a file to a project someone else made. You install the dependencies, write the config, and grow the folders yourself.

## 3. What to Learn First (Prerequisites)

Before you start, you need three things:

1. **Git basics from Week 1.** You can clone a repository, check the status, add files, commit, and push. If any of these words are new, read Week 1 again first.
2. **Node 22 installed.** Check it with `node --version`. You need 22.17 or newer 22.x. If it is missing, use the Node download page in Section 4.
3. **The setup guide, Step 1 to Step 3.** That covers install, the first clone, and `npm ci`. Finish those steps before this file.

You also need Git installed and a GitHub account. Week 1 covers both.

## 4. Where to Find Resources

| You need                                   | Read this                                                                                                                                     |
| ------------------------------------------ | --------------------------------------------------------------------------------------------------------------------------------------------- |
| Install Node 22                            | [Node.js downloads](https://nodejs.org/en/download)                                                                                           |
| Install and first setup, Step 1 to Step 3  | [02-setup-guide-mac-windows.md](02-setup-guide-mac-windows.md)                                                                                |
| How the course works, weekly rhythm        | [03-student-guide.md](03-student-guide.md)                                                                                                    |
| Create your own repository on GitHub       | [GitHub: quickstart for repositories](https://docs.github.com/en/repositories/creating-and-managing-repositories/quickstart-for-repositories) |
| Work with a remote repository (push, pull) | [GitHub: managing remote repositories](https://docs.github.com/en/get-started/git-basics/managing-remote-repositories)                        |
| Create and edit `package.json`             | [npm: creating a package.json file](https://docs.npmjs.com/creating-a-package-json-file)                                                      |
| Run Node and npm inside VS Code            | [VS Code: Node.js tutorial](https://code.visualstudio.com/docs/nodejs/nodejs-tutorial)                                                        |
| TypeScript for beginners                   | [TypeScript from scratch](https://www.typescriptlang.org/docs/handbook/typescript-from-scratch.html)                                          |
| How `app.ts` and `server.ts` fit together  | [12-application-wiring.md](12-application-wiring.md)                                                                                          |
| Branches, pull requests, team delivery     | [16-team-repo-and-delivery.md](16-team-repo-and-delivery.md)                                                                                  |
| VS Code steps for the pull request         | [18-vscode-workflow.md](18-vscode-workflow.md)                                                                                                |
| The learning map                           | [07-resources.md](07-resources.md)                                                                                                            |

## 5. Step-by-Step Guide

### Step 1 Decide when to start

Create the repository in Week 1. Start empty. Add code as the weeks give you code.

Use this timeline:

- **Week 1:** create the repository and push your first commit. Add the TypeScript task code from Week 1.
- **Week 6:** the API starts to grow. You add `src/app.ts` and `src/server.ts` here.
- **Week 8:** PostgreSQL arrives. You add the database driver and migrations.
- **Week 16:** React arrives. You add the client in `client/`.

Do not try to add everything in Week 1. Add the piece when the week teaches it.

### Step 2 Create the repository on GitHub in your own account

1. Sign in to GitHub with your own account.
2. Click **New repository**.
3. In **Repository name**, type `merchantdesk-rb7`. Replace `7` with your own number.
4. Choose **Public** or **Private**. Both work. Public is easier to show in a portfolio.
5. Tick **Add a README file**.
6. In **Add .gitignore**, choose the **Node** template.
7. You do not need a license for this.
8. Click **Create repository**.

A `.gitignore` file lists paths that Git must not track. The Node template already ignores `node_modules`.

### Step 3 Clone it next to the cohort clone

Keep the two folders in the same parent folder. This makes copying easy later.

**Mac (zsh):**

```
cd ~/Documents/course
git clone https://github.com/<your-github-name>/merchantdesk-rb7.git
```

**Windows (PowerShell):**

```
cd ~/Documents/course
git clone https://github.com/<your-github-name>/merchantdesk-rb7.git
```

Replace `<your-github-name>` with your GitHub user name. Replace `7` in the repository name with your own number.

The commands are the same on Mac and Windows. Only the path in `cd` changes if you keep your course folder somewhere else.

When both clones are done, the parent folder looks like this:

```
course/
  RUSTBRIDGE_SPRINT_1/    <- the cohort clone
  merchantdesk-rb7/                  <- your own repository
```

A clone is a copy of a repository on your computer.

### Step 4 Set up the project from scratch

Run every command in this step from the root of your own repository. First:

**Mac (zsh):**

```
cd ~/Documents/course/merchantdesk-rb7
```

**Windows (PowerShell):**

```
cd ~/Documents/course/merchantdesk-rb7
```

Then create `package.json`:

```
npm init -y
```

Now install the runtime package. Use the exact version:

```
npm install --save-exact fastify@5.12.5
```

Install the development packages with the exact versions:

```
npm install --save-dev --save-exact typescript@5.9.3 tsx@4.23.15 @types/node@22.20.5 prettier@3.9.9
```

These are the same versions as the cohort `package.json`. Same versions mean same behaviour when you compare your work with the cohort work.

Later weeks add more packages. Do it when the week says so:

- Week 8: `npm install --save-exact pg@8.23.1` and `npm install --save-dev --save-exact @types/pg@8.23.1`
- Week 11: `npm install --save-exact @fastify/secure-session@8.4.0`
- Week 16: `npm install --save-exact react@19.3.0 react-dom@19.3.0`, `npm install --save-dev --save-exact vite@7.3.7`, and `npm install --save-dev --save-exact @types/react@19.3.0 @types/react-dom@19.3.0`

Now open `package.json` in VS Code. Add these keys. Keep the keys that are already there.

```json
{
  "type": "module",
  "engines": {
    "node": ">=22.17.0 <23"
  },
  "scripts": {
    "dev": "node --env-file-if-exists=.env --import tsx src/server.ts",
    "typecheck": "tsc -p tsconfig.json"
  }
}
```

`"type": "module"` tells Node to read your files as ES modules. `engines` records the Node version this project supports.

Tests are run one file at a time with its path. To run one test file, use `node --import tsx --test src/<path-to-your>.test.ts`. For a database test, a file ending in `.db.test.ts`, use `node --env-file-if-exists=.env --import tsx --test <file>`.

When you reach Week 16, create the React client in a folder named `client/` inside your own repository. Open `fixtures/web-starter/tsconfig.json` in the cohort clone and copy its content into `client/tsconfig.json`. Add this script to `package.json`: `"typecheck:web": "tsc -p client/tsconfig.json"`. The backend `tsconfig.json` include is already `["src"]` only. Keep it that way, so `client/` is not checked by the backend config. Copy the scripts from `fixtures/web-starter/package.json`. Then run the Vite dev command inside `client/` with `npm run dev --prefix client`. See `fixtures/web-starter/README.md` in the cohort clone.

Next, create a file named `tsconfig.json` in the same folder. Put this content in it:

```json
{
  "compilerOptions": {
    "target": "ES2022",
    "module": "NodeNext",
    "moduleResolution": "NodeNext",
    "strict": true,
    "noEmit": true,
    "skipLibCheck": true
  },
  "include": ["src"]
}
```

`strict` turns on the strong TypeScript checks. `noEmit` means the compiler only checks types, it does not write output files. `tsx` runs the files.

Create a folder named `src`. This is where your TypeScript files live.

Check your `.gitignore`. It must contain these three lines. Add any line that is missing:

```
node_modules
.env
dist
```

`node_modules` is the folder with the installed packages. Never commit it.

Now check that the setup works. Add your first source file first, named `src/hello.ts`. Put one line in it:

```ts
console.log('hello');
```

Then run:

```
npm run typecheck
```

Without a file in `src`, the compiler may say it found no input files. That is not an error in your setup. The `src/hello.ts` file fixes it.

The `dev` script points to `src/server.ts`. That file does not exist yet. You create it in Week 6. Until then, run single files with `npx tsx src/hello.ts`.

Push this setup to GitHub:

```
git add .
git commit -m "chore: project setup"
git push
```

A commit is a saved snapshot of your changes with a message.

### Step 5 Weekly rhythm

Work Monday to Friday. Make small commits. A small commit is easier to read and easier to fix.

The three commands you use every day:

```
git add <files>
git commit -m "T01.1 inspect a sandbox event"
git push
```

The commit style is the same as the cohort: the task ID first, then a short message. One focused commit per task.

In your own repository you may push to `main`. It is your repository. In the official repository you never push to `main`.

For the folder layout, use either style:

- One folder per week: `src/week-01-topic/`
- Or let `src/` grow with clear file names.

Pick one style in Week 1 and keep it.

This table shows what to build in your own repository each week.

| Week   | Build in your own repository                                   |
| ------ | -------------------------------------------------------------- |
| W1     | Event inspector script (T01.1) and a brief in `docs/`          |
| W2-3   | Pure summary functions and collection helpers                  |
| W4     | Typed event list and a SQL file for practice                   |
| W5     | Validator and tests                                            |
| W6     | Fastify app factory and server (`src/app.ts`, `src/server.ts`) |
| W7     | Event routes and a send-event client                           |
| W8     | Migrations and repository (needs PostgreSQL)                   |
| W9     | Identity and paging                                            |
| W10    | `openapi.json`                                                 |
| W11-12 | Login, sessions, ownership                                     |
| W13-15 | Tests, rollback, incident notes, runbook                       |
| W16-17 | React client                                                   |
| W18    | Limits, logs, error states                                     |
| W19    | Extension and case study                                       |
| W20    | Runbook and demo                                               |

### Step 6 Copy a finished piece to the cohort clone

Copy one file at a time. The week file names the exact target path in its `Primary path`. Use that complete path. Do not invent a new path.

Create missing folders first. Replace `<complete-destination-folder>` with the folder part of the `Primary path`, for example `students/RB7/week-01/typescript`.

**Mac (zsh):**

```
cd ~/Documents/course
mkdir -p RUSTBRIDGE_SPRINT_1/<complete-destination-folder>
cp merchantdesk-rb7/<source-path> RUSTBRIDGE_SPRINT_1/<complete-destination-path>
```

**Windows (PowerShell):**

```
cd ~/Documents/course
New-Item -ItemType Directory -Force RUSTBRIDGE_SPRINT_1\<complete-destination-folder>
Copy-Item merchantdesk-rb7\<source-path> RUSTBRIDGE_SPRINT_1\<complete-destination-path>
```

Replace `<complete-destination-path>` with the exact `Primary path`, for example `students/RB7/week-01/typescript/inspector.ts`. Replace `<student-id>` with your number, for example RB7. Replace `<source-path>` with the path of the file in your own repository.

Never put files directly in `week-NN/` unless the `Primary path` says so. Weeks 17 and 18 continue to use `week-16/client/src/` when the task path says so.

Never copy these from your own repository:

- `node_modules`
- `.env`
- `dist`
- `package-lock.json`

The cohort repository has its own versions of these. A copied `package-lock.json` can break the install for everyone.

After copying, adapt relative imports to the cohort layout. Then rerun the proof in the cohort clone. From Week 6, imports into the continuing app are described in [12-application-wiring.md](12-application-wiring.md).

Then follow the pull request steps in [18-vscode-workflow.md](18-vscode-workflow.md).

If the week produces writing only, write it in the cohort folder directly: `students/<student-id>/week-NN/`. There is nothing to copy.

### Step 7 Keep both in sync

After the maintainer merges your cohort pull request, update the cohort clone. Run these commands inside the cohort clone only:

```
git switch main
git fetch origin
git merge --ff-only origin/main
```

`--ff-only` means the update only moves forward. It never creates a merge commit.

Your own repository is not changed by this. It keeps its own history.

One rule for review: **if the reviewer asks for a change, change it in BOTH places.** Change it in your own repository first. Then copy it again to the cohort clone and push to the same branch.

### Step 8 Safety

- Use only synthetic data. Synthetic means fake data made for practice.
- Never push `.env`. It holds local settings and can hold secrets.
- Never reuse a real password. Make a new one for practice only.
- Do not paste secrets in Discord. Do not paste them into an AI assistant either.
- Never commit `node_modules`, `dist`, passwords or keys.

### Step 9 If you get stuck

Go in this order:

1. Read the error text slowly. The first line usually names the file and the line number.
2. Run `npm run setup:check` in the COHORT clone. It checks Node, Git and the dependencies.
3. Run `npm run check` in the COHORT clone. It runs the full check and needs no database.
4. In your own repository, run `npm run typecheck` and the explicit test command from Step 4 for your file.
5. Read [03-student-guide.md](03-student-guide.md) for the weekly rhythm and the common mistakes.
6. Ask in Discord. Paste the exact command you ran and the exact error text. Remove any secret first.

Go slowly here. A setup problem in Week 1 costs ten minutes. The same problem in Week 8 costs a day.

## 6. What to Commit

Use this checklist before the weekly pull request.

- [ ] My own repository `merchantdesk-rb7` exists in my GitHub account.
- [ ] I cloned it next to the cohort clone.
- [ ] `npm init -y` ran and `package.json` is in the repository root.
- [ ] The exact package versions from Step 4 are installed.
- [ ] `package.json` has `"type": "module"`, the `engines` entry, and the scripts.
- [ ] `tsconfig.json` exists and `npm run typecheck` passes.
- [ ] `.gitignore` contains `node_modules`, `.env` and `dist`.
- [ ] My first commit is pushed to my own repository.
- [ ] I made small commits this week, task ID first.
- [ ] The week files are copied to `students/<student-id>/week-NN/` in the cohort clone.
- [ ] I did not copy `node_modules`, `.env`, `dist` or `package-lock.json`.
- [ ] The proof runs in the cohort clone.
- [ ] I opened one pull request into `main` of the official repository.
- [ ] I did not push to `main` of the official repository, and I did not merge my own pull request.

## Extra notes for Week 8 and Week 16

- **Week 8 (database).** The cohort command `npm run migrate:practice` only works in the cohort clone, on `students/<student-id>/week-08/database/migrations`. In your own repository, keep the same SQL files in a `migrations/` folder and apply them with `psql` (the same files, one by one, in order). Use the same database for the migrations and for your app.
- **Week 16 (client).** Do not build the React client by hand from nothing. Copy the whole folder `fixtures/web-starter` from the cohort clone into `client/` in your own repository. It holds `package.json`, `index.html`, `vite.config.ts`, `tsconfig.json` and `src/`. Then edit `client/src/App.tsx`.
