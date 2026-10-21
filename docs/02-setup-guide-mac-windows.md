# Setup guide for Mac and Windows

## 1. What We Are Doing

We will install the tools needed for the course and check that the starter project runs.

- **Week 1:** Complete Step 1 to Step 3.
- **Week 4:** Complete Step 4 and Step 5.
- **Week 11:** Complete Step 6.
- **Every week:** Use Step 7.
- **When something fails:** Use Step 8.

Follow the instructions for your operating system.

Linux: ask in Discord.

## 2. Why We Are Doing It

Git downloads the project and tracks changes. VS Code lets you edit files. Node.js runs the application tools. npm installs the project's dependencies, which are packages the project needs.

PostgreSQL stores data from Week 4 onward. The setup checks help you find problems before starting course tasks.

A passing starter check confirms that the supplied project works on your computer. It is not an assessment answer.

## 3. What to Learn First (Prerequisites)

You need:

- A Mac or a Windows 10/11 computer.
- An internet connection.
- At least **10 GB of free disk space**.
- Permission to install software on your computer.
- A GitHub account. Follow the [official account instructions](https://docs.github.com/en/get-started/start-your-journey/creating-an-account-on-github) if you need one.

**Check it worked:** You can sign in to GitHub, and your computer has at least 10 GB free.

**Open a terminal**

On **Mac**, press Command+Space, type `Terminal`, and press Enter. Use zsh, the default shell on current macOS installations.

On **Windows**, open Start, type `PowerShell`, and open Windows PowerShell. You do not need to run it as administrator for normal course commands.

A terminal is a window where you type commands. A shell, such as zsh or PowerShell, reads those commands.

To run a command: **copy a command, paste it, press Enter**. Run commands one at a time. Do not copy the surrounding code fences or a prompt such as `$`, `PS>`, or `postgres=#`.

**Check it worked:** A terminal window is open and ready for you to type.

**Know these six terminal actions**

| Action                   | Mac: zsh            | Windows: PowerShell | Meaning                                                |
| ------------------------ | ------------------- | ------------------- | ------------------------------------------------------ |
| Show your current folder | `pwd`               | `Get-Location`      | Shows where commands will run.                         |
| List files and folders   | `ls`                | `dir`               | Shows what is in the current folder.                   |
| Change folder            | `cd Documents`      | `cd Documents`      | Moves into a folder. Use `cd ..` to move up one level. |
| Create a folder          | `mkdir course-work` | `mkdir course-work` | Creates a folder with this name.                       |
| Clear the screen         | `clear`             | `clear`             | Clears visible output without deleting files.          |
| Stop a running command   | Ctrl+C              | Ctrl+C              | Hold Ctrl and press C.                                 |

If a folder path contains spaces, put it in quotes, for example `cd "My Projects"`.

**Check it worked:** Run `pwd` on Mac or `Get-Location` on Windows, then list the files with `ls` or `dir`.

The **repository root** is the main project folder named `RUSTBRIDGE_SPRINT_1`. It contains `package.json` and folders such as `docs`, `students`, and `fixtures`.

Run all project commands from the repository root unless an instruction says otherwise.

## 4. Where to Find Resources

Use these official resources:

- VS Code: [Mac download and setup](https://code.visualstudio.com/docs/setup/mac), [Windows download and setup](https://code.visualstudio.com/docs/setup/windows), and [integrated terminal guide](https://code.visualstudio.com/docs/terminal/getting-started).
- Git: [downloads](https://git-scm.com/downloads), [Mac](https://git-scm.com/downloads/mac), and [Windows](https://git-scm.com/downloads/win).
- Node.js: [official downloads](https://nodejs.org/en/download).
- Optional Node version managers: [nvm for Mac](https://github.com/nvm-sh/nvm) and [nvm-windows](https://github.com/coreybutler/nvm-windows).
- PostgreSQL: [Windows installers](https://www.postgresql.org/download/windows/), [Mac installers](https://www.postgresql.org/download/macosx/), and [Postgres.app for Mac](https://postgresapp.com/).
- Terminal basics: [MDN command line guide](https://developer.mozilla.org/en-US/docs/Learn_web_development/Getting_started/Environment_setup/Command_line).
- Windows script permissions: [PowerShell execution policies](https://learn.microsoft.com/en-us/powershell/module/microsoft.powershell.core/about/about_execution_policies).

For the cohort invitation and repository access, follow [Set up GitHub](03-student-guide.md#set-up-github).

For setup failures, read the [troubleshooting guide](09-troubleshooting.md).

When you ask for help in Discord, post:

- The command you ran.
- The exact error text.
- Your operating system.
- What you already tried.

Do not post passwords, session keys, or `.env` contents. Remove secrets from error text before sharing it.

## 5. Step-by-Step Guide

### Step 1. Terminal, Git and VS Code (needed in Week 1)

**1. Open your terminal.**

Use Terminal on Mac or PowerShell on Windows, as described above.

**Check it worked:** You can type a command and press Enter.

**2. Install Git.**

**Mac:**

Run:

```sh
git --version
```

If macOS offers to install Xcode Command Line Tools, accept and finish the installation. Run the command again afterward.

If needed, use the installation options on the [official Git Mac page](https://git-scm.com/downloads/mac).

**Windows:**

Download and run the [Git for Windows installer](https://git-scm.com/downloads/win). Keep the default options. Finish installation, close PowerShell, and open it again.

On either system, run:

```sh
git --version
```

**Check it worked:** You see a Git version, such as `git version 2.x.x`.

**3. Set your Git name and email.**

On both systems, run these commands after replacing the example values with your own:

```sh
git config --global user.name "Your Name"
git config --global user.email "YOUR_GITHUB_EMAIL"
```

Use an email associated with your GitHub account, or your GitHub-provided private email.

Check the saved values:

```sh
git config --global user.name
git config --global user.email
```

**Check it worked:** Git prints your chosen name and email.

**4. Accept your cohort invitation.**

Follow [Set up GitHub](03-student-guide.md#set-up-github). Sign in with the GitHub account you will use for the course.

**Check it worked:** You can open the cohort repository while signed in.

**5. Download VS Code.**

**Mac:**

Open the [official Mac setup page](https://code.visualstudio.com/docs/setup/mac) and download VS Code.

**Windows:**

Open the [official Windows setup page](https://code.visualstudio.com/docs/setup/windows) and download the installer.

**Check it worked:** The download finishes.

**6. Install VS Code.**

**Mac:**

Open the downloaded archive if needed. Move Visual Studio Code into Applications.

**Windows:**

Run the downloaded installer. Keep the default options. Complete installation.

**Check it worked:** Installation finishes.

**7. Open VS Code.**

**Mac:** Open Visual Studio Code from Applications.

**Windows:** Open VS Code from Start.

To check the version:

- **Mac:** Choose **Code > About Visual Studio Code**.
- **Windows:** Choose **Help > About**.

**Check it worked:** VS Code opens and its About window shows a version number.

**8. Open a folder in VS Code.**

In VS Code, choose **File > Open Folder** and select a folder for now. In Step 3, you will create your course folder and open the cloned repository instead.

**Check it worked:** VS Code shows the folder in its Explorer panel.

**9. Open the integrated terminal.**

Choose **Terminal > New Terminal**.

On Mac, use a zsh terminal. On Windows, use a PowerShell terminal. If needed, select the terminal profile using the arrow beside the terminal's `+` button.

**Check it worked:** VS Code shows a terminal at the bottom.

**10. Install the formatter.**

Open the **Extensions** panel on the left. Search for **Prettier - Code formatter**, extension ID `esbenp.prettier-vscode`, and click **Install**.

**Check it worked:** Prettier appears as installed.

**11. Configure the formatter.**

In Settings, select Prettier as the default formatter and enable **Editor: Format On Save**.

**Check it worked:** Git prints its version, VS Code opens folders and a terminal, Prettier appears as installed, and format-on-save is enabled.

### Step 2. Node.js 22 (needed in Week 1)

The project requires **Node.js 22.17.0 or newer within 22.x**. Its `package.json` engine range is `>=22.17.0 <23`, and `setup:check` enforces it.

A newer major version, such as **24**, will fail `setup:check`.

**1. Download Node.js 22.**

Open [Node.js downloads](https://nodejs.org/en/download). Explicitly select the **22.x LTS** line, even if the page recommends a newer major version.

- **Mac:** Download the `.pkg` installer.
- **Windows:** Download the `.msi` installer.

**Check it worked:** The download finishes.

**2. Install Node.js 22.**

**Mac:** Open the downloaded `.pkg` installer. Follow the installation steps.

**Windows:** Open the downloaded `.msi` installer. Keep the default options, including npm and PATH support.

npm comes with Node.js. You do not need a separate npm installer.

**Check it worked:** The installer finishes successfully.

**3. Restart your terminal.**

Close Terminal or PowerShell and open it again. If you use VS Code's terminal, close and reopen VS Code too.

Restarting lets your terminal find the newly installed programs.

Run:

```sh
node --version
npm --version
```

If Node shows another major version, install or select Node 22 before continuing.

**Optional: use an existing version manager**

If you already use [nvm on Mac](https://github.com/nvm-sh/nvm) or [nvm-windows](https://github.com/coreybutler/nvm-windows), run:

```sh
nvm install 22
nvm use 22
node --version
npm --version
```

Beginners should use the official installer above. Do not add a version manager just for this guide.

**Check it worked:** `node --version` shows `v22.x.x`, at least `v22.17.0`, and `npm --version` prints a version number.

### Step 3. Clone the repository, install and run the first check (needed in Week 1)

**1. Create your course folder.**

Run the command for your system.

**Mac:**

```sh
mkdir -p ~/Documents/course
```

**Windows (PowerShell):**

```powershell
mkdir $HOME\Documents\course
```

**Check it worked:** The command finishes without an error.

**2. Enter your course folder.**

Run the command for your system.

**Mac:**

```sh
cd ~/Documents/course
```

**Windows (PowerShell):**

```powershell
Set-Location $HOME\Documents\course
```

`cd $HOME\Documents\course` also works in PowerShell.

Use this course folder for the repository.

**Check it worked:** `pwd` on Mac or `Get-Location` on Windows shows a path ending in `Documents/course`.

**3. Get the official repository clone URL.**

Open the repository from your cohort invitation, using [Set up GitHub](03-student-guide.md#set-up-github). Click **Code**, select **HTTPS**, and copy the clone URL.

Use that official URL. Do not use a classmate's fork.

**Check it worked:** You have copied the HTTPS clone URL from the cohort repository.

**4. Clone the repository.**

You are in your course folder from action 2. In the command below, replace `OFFICIAL_REPOSITORY_URL` with the URL you copied. Do not run the placeholder literally.

```sh
git clone OFFICIAL_REPOSITORY_URL
```

**Check it worked:** Git finishes downloading and creates `RUSTBRIDGE_SPRINT_1`.

**5. Enter the repository root.**

**Mac:**

```sh
cd RUSTBRIDGE_SPRINT_1
```

**Windows:**

```powershell
Set-Location RUSTBRIDGE_SPRINT_1
```

`cd RUSTBRIDGE_SPRINT_1` also works in PowerShell.

Check the folder contents:

- **Mac:** Run `ls`.
- **Windows:** Run `dir`.

Open this folder in VS Code with **File > Open Folder**.

**Check it worked:** You can see `package.json`, `docs`, `students`, and `fixtures`.

**6. Check your Git identity and student number.**

Run:

```sh
git config user.name
git config user.email
```

If either value is missing or incorrect, repeat the Git configuration commands in Step 1.

Open [students/README.md](../students/README.md) and find your **RB number**. If you cannot find yourself, ask in Discord.

**Check it worked:** Git shows your identity, and you know your RB number.

**7. Install the project dependencies.**

From the repository root, run:

```sh
npm ci
```

This installs the exact dependencies recorded in the committed lockfile. A lockfile records the exact package versions the project uses. Wait until your terminal prompt returns.

**Check it worked:** Installation finishes without an error.

**8. Run the setup and project checks.**

Run these separately:

```sh
npm run setup:check
```

```sh
npm run check
```

The checks can take a few minutes the first time. Neither requires PostgreSQL or database credentials.

**Check it worked:** Both commands finish successfully and return to the terminal prompt.

**9. Start the API shell.**

Run:

```sh
npm run dev:api
```

Leave this terminal running. Open `http://localhost:3000/health/live` in your browser.

**Check it worked:** The browser shows a successful health response.

**10. Start the web shell in a second terminal.**

In VS Code, choose **Terminal > New Terminal**. Confirm this terminal is also in the repository root.

Run:

```sh
npm run dev:web
```

Open `http://localhost:5173` in your browser.

Neither starter shell needs PostgreSQL.

**Check it worked:** The starter web page opens.

**11. Stop both servers.**

Click inside each running terminal and press Ctrl+C.

**Check it worked:** Both servers stop, the terminal prompts return, and the setup and project checks have passed.

### Step 4. PostgreSQL 17 (needed in Week 4)

Start this step in Week 4. Install a local PostgreSQL **17** server. The course requires port `5432` (the default). If port 5432 is busy, ask in Discord.

**1. Install PostgreSQL on your system.**

**Windows:**

1. Open the [official PostgreSQL Windows download page](https://www.postgresql.org/download/windows/).
2. Follow its installer link and choose PostgreSQL **17**.
3. Run the installer.
4. Select the **server** and **command line tools**. pgAdmin is optional.
5. Use port `5432` (the default). If port 5432 is busy, ask in Discord.
6. Remember the administrator password you choose for the `postgres` user.
7. Finish installation.
8. Reopen PowerShell.

Run:

```powershell
psql --version
```

If PowerShell cannot find `psql`, run:

```powershell
$env:Path += ";C:\Program Files\PostgreSQL\17\bin"
```

For a permanent fix, search Start for **Edit environment variables for your account**, edit your user **Path**, add `C:\Program Files\PostgreSQL\17\bin`, save, and reopen PowerShell.

**Mac option A: Postgres.app, the easiest option**

1. Open [Postgres.app](https://postgresapp.com/).
2. Choose a download that includes PostgreSQL **17**.
3. Download the app.
4. Move the app into Applications.
5. Open the app.
6. Select version **17** when creating the server.
7. Click **Initialize**.
8. Open Terminal.
9. Run `touch ~/.zshrc` to create the file if it is missing.
10. Run `open -e ~/.zshrc` to open the file.
11. Add this line and save the file:

```sh
export PATH="/Applications/Postgres.app/Contents/Versions/17/bin:$PATH"
```

12. Run this command to reload the file:

```sh
source ~/.zshrc
```

This path assumes the app is installed in Applications and includes version 17. The app's documentation explains its command line tools.

**Mac option B: PostgreSQL installer**

1. Open the [official PostgreSQL Mac download page](https://www.postgresql.org/download/macosx/).
2. Follow its installer link and choose PostgreSQL **17**.
3. Install the server.
4. Install the command line tools. pgAdmin is optional.
5. Remember the administrator password for `postgres`.
6. Use port `5432` (the default). If port 5432 is busy, ask in Discord.
7. Reopen Terminal.

For the standard installer location, run `touch ~/.zshrc` if the file is missing. Run `open -e ~/.zshrc`. Add this line and save the file:

```sh
export PATH="/Library/PostgreSQL/17/bin:$PATH"
```

Then run this command to reload the file:

```sh
source ~/.zshrc
```

Choose one Mac installation method.

On either system, run:

```sh
psql --version
```

**Check it worked:** The command prints `psql (PostgreSQL) 17.x`, and your installed server is running version 17.

**2. Open an administrator database connection.**

**Windows or Mac installer:**

Run:

```sh
psql -h localhost -U postgres -d postgres
```

Enter the administrator password chosen during installation. Password characters may not appear while you type.

**Mac with Postgres.app:**

Postgres.app normally uses your Mac username as its initial database administrator. With the app's server running, connect using:

```sh
psql -d postgres
```

You do not need to create a separate `postgres` login for this route.

**Check it worked:** You see a psql prompt, usually `postgres=#`. You are now inside PostgreSQL, not your normal shell.

**3. Create the course role and databases.**

Run the following only if these names do not already exist. Paste them **inside the psql prompt**, one line at a time.

```sql
CREATE ROLE merchantdesk LOGIN;
\password merchantdesk
CREATE DATABASE merchantdesk_practice OWNER merchantdesk;
CREATE DATABASE merchantdesk_test OWNER merchantdesk;
CREATE DATABASE merchantdesk OWNER merchantdesk;
\q
```

At `\password merchantdesk`, enter a new password twice. Remember it for Step 5. The password is not included in a shell command.

These databases are dedicated to the course. Do not drop, overwrite, or reuse an existing personal database. If a name already exists, stop and ask in Discord for a dedicated name and help updating configuration.

**Check it worked:** PostgreSQL reports that the role and databases were created. After `\q`, your normal terminal prompt returns.

**4. Load the practice data.**

Return to the repository root. On either system, run:

```sh
psql -h localhost -U merchantdesk -d merchantdesk_practice -v ON_ERROR_STOP=1 -f fixtures/practice.sql
```

Enter the password for `merchantdesk`, not the administrator password.

Then run:

```sh
psql -h localhost -U merchantdesk -d merchantdesk_practice -c "SELECT COUNT(*) FROM practice.events;"
```

The supplied seed is safe to run again. It creates only the `practice` schema. A schema is a named group of database objects. It is not the final product migration.

**Check it worked:** PostgreSQL 17 is available, the course databases exist, and the query returns a count of **6** events.

### Step 5. Local configuration and database checks (needed in Week 4)

**1. Create `.env` only if it does not already exist.**

In VS Code's Explorer, look for `.env` in the repository root. If it exists, keep it and skip the copy command.

If it does not exist, run the command for your system from the repository root.

**Mac:**

```sh
cp .env.example .env
```

**Windows:**

```powershell
Copy-Item -LiteralPath ".env.example" -Destination ".env"
```

Do not overwrite an existing `.env`.

**Check it worked:** `.env` appears beside `.env.example`.

**2. Add your local database password.**

Open `.env` in VS Code. Replace each relevant `REPLACE_LOCALLY` password placeholder with the password you set for `merchantdesk`.

In connection URLs, percent-encode special characters in the password. To percent-encode means to write a special character as a percent sign and a code. For example:

| Password character | Use in the URL |
| ------------------ | -------------- |
| `@`                | `%40`          |
| `:`                | `%3A`          |
| `#`                | `%23`          |
| `%`                | `%25`          |

Encode the password characters, not the entire connection URL. A generated password containing only letters and numbers avoids this issue.

Keep the practice connection pointed at `merchantdesk_practice` and the test connection pointed at `merchantdesk_test`.

Never commit `.env` or paste its contents into chat.

**Check it worked:** The database password placeholders are replaced, and the test database name ends in `_test`.

**3. Check that `.env` is ignored by Git.**

Run:

```sh
git check-ignore .env
```

If it prints nothing, stop and ask for help before making any commit.

**Check it worked:** Git prints `.env`.

**4. Run the database checks.**

Run these separately:

```sh
npm run db:check
```

```sh
npm run test:db
```

`db:check` checks connectivity to the practice database.

`test:db` requires a database whose name ends in `_test`. It creates a random owned test schema and removes only that schema afterward. Do not point it at the product or practice database.

The starter tests cover the supplied fixtures. Students add product database tests later.

**Check it worked:** Both database commands pass, and `.env` remains local and ignored by Git.

### Step 6. Session key (needed in Week 11)

Complete Step 5 first.

**1. Generate the key locally.**

Run this command in Mac Terminal or Windows PowerShell:

```sh
node -e "console.log(require('node:crypto').randomBytes(32).toString('hex'))"
```

Copy the command exactly, including the straight quotes.

If quoting fails in PowerShell, use:

```powershell
node -p "require('node:crypto').randomBytes(32).toString('hex')"
```

**Check it worked:** The command prints 64 hexadecimal characters, using only `0` to `9` and `a` to `f`.

**2. Save the key in `.env`.**

Copy the generated value into `SESSION_KEY` in `.env`. Keep the variable name and `=` sign. Do not share the value.

This is a **32-byte key represented by 64 hexadecimal characters**. It is not a 64-byte session plugin key.

When wiring the application, validate the format and decode it with `Buffer.from(value, 'hex')` before passing it to the session plugin. Missing or malformed keys must fail startup without printing the value. See [application wiring](12-application-wiring.md).

**Check it worked:** `SESSION_KEY` contains exactly the 64 generated characters.

**3. Set the browser origin.**

A browser origin is the scheme, host, and port of a web page, for example `http://localhost:5173`.

In `.env`, set:

```dotenv
APP_ORIGIN=http://localhost:5173
```

Use `http://localhost:5173` in your browser. Do not mix `localhost` and `127.0.0.1`.

**Check it worked:** `.env` contains the session key and the exact `APP_ORIGIN` above, and `git check-ignore .env` still prints `.env`.

### Step 7. Quality commands (every week)

Run these commands from the repository root. They work on both Mac and Windows.

Run one command at a time and wait for it to finish.

| Command                     | What it does                                        |
| --------------------------- | --------------------------------------------------- |
| `npm run verify:curriculum` | Checks the supplied curriculum structure and links. |
| `npm run typecheck`         | Checks TypeScript types.                            |
| `npm test`                  | Runs the regular automated tests.                   |
| `npm run build`             | Checks that the project builds.                     |
| `npm run check`             | Runs the project's combined base checks.            |
| `npm run format`            | Formats supported files after editing.              |
| `npm run format:check`      | Checks formatting before a pull request.            |

The base `check` does not require PostgreSQL. Run database checks separately after Week 4. Later shared product work must also pass its actual database tests.

If a command fails, read its error before continuing. Use Step 8 or the [troubleshooting guide](09-troubleshooting.md).

**Check it worked:** The relevant checks finish successfully, and `npm run format:check` reports no formatting problems.

### Step 8. Common problems and fixes

| Problem                               | What you see                                                   | Fix                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| ------------------------------------- | -------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Git not found                         | `git: command not found` or “git is not recognized”            | Complete the Git installation in Step 1. On Mac, finish the Command Line Tools installation. On Windows, reopen PowerShell after installing Git. Retry `git --version`.                                                                                                                                                                                                                                                                     |
| Node not found                        | `node: command not found` or “node is not recognized”          | Install Node 22 using Step 2. Close and reopen your terminal and VS Code. Retry `node --version`.                                                                                                                                                                                                                                                                                                                                           |
| npm not found                         | `npm: command not found` or “npm is not recognized”            | Reinstall Node 22 with npm included. Reopen your terminal. Retry `npm --version`.                                                                                                                                                                                                                                                                                                                                                           |
| Wrong Node version                    | `setup:check` rejects the Node version                         | Run `node --version`. Install or select Node 22.17.0 or newer within 22.x. Node 24 fails this requirement. If you already use nvm, run `nvm install 22` and `nvm use 22`.                                                                                                                                                                                                                                                                   |
| PowerShell blocks npm                 | “running scripts is disabled” or an error mentioning `npm.ps1` | In PowerShell, run `Set-ExecutionPolicy -Scope CurrentUser RemoteSigned`, then reopen PowerShell. This changes the policy for your user account. Alternatively, use Command Prompt and run the npm commands there. See the [official policy documentation](https://learn.microsoft.com/en-us/powershell/module/microsoft.powershell.core/about/about_execution_policies). If a school or employer manages the policy, ask its support team. |
| Permission denied on Mac              | `Permission denied` or `EACCES`                                | Keep the repository in a folder owned by your account, such as Documents. Do not run `sudo npm ci` or apply broad permission changes. Share the exact command and error in Discord if it continues.                                                                                                                                                                                                                                         |
| Port 3000 or 5173 is busy             | `EADDRINUSE`, or the web server chooses another port           | Find your earlier development terminal and press Ctrl+C. Restart the intended server. Close any other app using that port. Keep the course web server on 5173.                                                                                                                                                                                                                                                                              |
| psql not found on Windows             | “psql is not recognized”                                       | Run `$env:Path += ";C:\Program Files\PostgreSQL\17\bin"`. For the permanent fix, add that folder to your user Path and reopen PowerShell. Retry `psql --version`.                                                                                                                                                                                                                                                                           |
| psql not found on Mac                 | `psql: command not found`                                      | Run `touch ~/.zshrc` if the file is missing. Run `open -e ~/.zshrc`. For Postgres.app, add `export PATH="/Applications/Postgres.app/Contents/Versions/17/bin:$PATH"`. For the standard installer, add `export PATH="/Library/PostgreSQL/17/bin:$PATH"`. Save the file. Run `source ~/.zshrc`. Reopen Terminal and retry `psql --version`.                                                                                                   |
| Database password rejected            | `password authentication failed`                               | Check the username. `postgres` uses the installer administrator password; `merchantdesk` uses the password set with `\password merchantdesk`. In `.env`, percent-encode special password characters. Do not share the password.                                                                                                                                                                                                             |
| Database server unavailable           | `connection refused`                                           | Open Postgres.app or check that the installed PostgreSQL server service is running. Confirm the server uses port 5432. Retry the connection from Step 4.                                                                                                                                                                                                                                                                                    |
| `npm ci` fails because of the network | Timeout, connection reset, or registry connection error        | Check your internet connection and retry `npm ci`. On a school or work network, ask whether a proxy is required. Do not disable certificate checks or delete the lockfile.                                                                                                                                                                                                                                                                  |
| `npm ci` reports a lockfile mismatch  | Error says `package.json` and the lockfile do not agree        | Confirm you are using the supplied project version. Share the exact error in Discord. Do not replace the lockfile to bypass the error.                                                                                                                                                                                                                                                                                                      |
| Git push denied                       | `403`, “permission denied”, or “repository not found”          | Confirm you accepted the cohort invitation and are signed in with the invited account. Check the remote with `git remote -v`. Follow [Set up GitHub](03-student-guide.md#set-up-github). Do not force-push to bypass access rules.                                                                                                                                                                                                          |
| Windows line-ending warning           | “LF will be replaced by CRLF” or similar                       | This warning alone does not mean the command failed. Keep the repository's formatting settings, avoid changing Git settings just to hide it, and run `npm run format:check`.                                                                                                                                                                                                                                                                |
| npm cannot find `package.json`        | `ENOENT` mentioning `package.json`                             | You are probably in the wrong folder. Enter `RUSTBRIDGE_SPRINT_1`, then confirm `package.json` appears with `ls` or `dir`.                                                                                                                                                                                                                                                                                                                  |

**Check it worked:** Retry the command that failed. If it still fails, post the command, exact error text, operating system, and what you tried in Discord, without secrets.

## 6. What to Commit

Nothing in this guide needs to be committed. Never commit `.env`.

Use this checklist to record your progress:

- [ ] Git is installed: `git --version` prints a version.
- [ ] Git name and email are set: `git config user.name` and `git config user.email` show my details.
- [ ] VS Code is installed: its About window shows a version.
- [ ] Prettier - Code formatter is installed, and format-on-save is enabled.
- [ ] Node is installed: `node --version` shows Node 22.17.0 or newer within 22.x.
- [ ] npm is installed: `npm --version` prints a version.
- [ ] I accepted the cohort invitation and cloned the official repository.
- [ ] I can find the repository root and my RB number.
- [ ] `npm ci` finished successfully.
- [ ] `npm run setup:check` passes.
- [ ] `npm run check` passes.
- [ ] Both development servers start, and their browser checks work.
- [ ] **Week 4:** PostgreSQL is installed: `psql --version` shows 17.x.
- [ ] **Week 4:** The course role and three dedicated databases exist.
- [ ] **Week 4:** The practice fixture query returns 6 events.
- [ ] **Week 4:** `.env` is created, configured locally, and NOT committed.
- [ ] **Week 4:** `git check-ignore .env` prints `.env`.
- [ ] **Week 4:** `npm run db:check` and `npm run test:db` pass.
- [ ] **Week 11:** `SESSION_KEY` contains my generated key, and `APP_ORIGIN` is exactly `http://localhost:5173`.
