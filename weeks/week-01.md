# Week 1: Meet the merchant and make the first change

MerchantDesk | Sprint 1 | E: Engineering and Delivery + T: TypeScript and JavaScript

## 1. What We Are Doing

This week you read the client story for MerchantDesk and write a short brief in your own words. You also run your first small TypeScript program on one synthetic payment event and open your first pull request. At the end you have a reviewed brief, a safe event summary, and one pull request with your name on it.

This week has three project tasks and one problem-solving block:

- `E01.1`: Write the brief and context map (100 minutes)
- `T01.1`: Run a safe event inspector (130 minutes)
- `E01.2`: Complete the Git and review loop (70 minutes)
- `P01.1`: weekly problem-solving block (120 minutes)

Outcome: A reviewed brief, a safe event summary, and one authored pull request. Milestone: Agreed client brief.

## 2. Why We Are Doing It

**The project need:** The client needs one place to inspect sandbox payment events, but the request is not yet a specification.

The client needs one place to inspect sandbox payment events, but the request is not yet a specification. Someone has to turn the story into a clear user, a small scope and honest open questions. That skill, plus a first safe program and a clean pull request, is the daily work of a backend engineer.

## 3. What to Learn First (Prerequisites)

**Before you start:** No programming experience is assumed. Follow docs/02-setup-guide-mac-windows.md Step 1 to Step 3; do not install PostgreSQL or study React yet.

**Review these ideas first:**

- Client brief: one short page that states the client need.
- User story: who wants what, and why, in one line.
- Non-goal: something the team agrees not to build yet.
- Context diagram: a few boxes that show how the parts talk.
- Variable: a named box that holds one value.
- tsx: a tool that runs TypeScript files without type checking.
- Typecheck: a separate compiler pass that checks your types.

**By the end of this week you can:**

- finish `E01.1`: user stories, scope and a one-page context diagram
- finish `T01.1`: values, variables, objects, console output and the TS/JS relationship
- finish `E01.2`: diffs, branches, commits and pull requests

## 4. Where to Find Resources

**Where you work.** Write code in VS Code. Run commands in the VS Code terminal, from the repository root. Open the pull request and read reviews in your browser on GitHub. Replace `<student-id>` with your number, for example `RB7`. New to the setup? Use the [setup guide for Mac and Windows](../docs/02-setup-guide-mac-windows.md). Lost in the folders? See the [repository map](../docs/17-repo-map.md). Build and test code pieces first in your [own project repository](../docs/19-own-project-repo.md). When a piece works, copy it into your cohort folder and open the pull request, as shown in the [VS Code workflow](../docs/18-vscode-workflow.md).

**Your week in order**

| Task    | Concepts and reading                                                                                                                                                                                                                                              | Planned task minutes |
| ------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------: |
| `E01.1` | User stories, scope and a one-page context diagram. [MerchantDesk client brief](../docs/01-project-brief.md)                                                                                                                                                      |                  100 |
| `T01.1` | Values, variables, objects, console output and the TS/JS relationship. [TypeScript for new programmers](https://www.typescriptlang.org/docs/handbook/typescript-from-scratch), [JavaScript guide](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide)  |                  130 |
| `E01.2` | Diffs, branches, commits and pull requests. [Git book basics](https://git-scm.com/book/en/v2/Git-Basics-Getting-a-Git-Repository), [GitHub reviews](https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/reviewing-changes-in-pull-requests) |                   70 |

Task time is part of the [15-hour core weekly budget](../docs/11-scope-and-continuation.md), not the whole week. Guided learning, consolidation, review, shared work and the two-hour problem-solving block are also included. Up to five additional hours are for repetition or finishing feedback, not extra required technologies.

**Search keywords if you get stuck:**

- "user story examples for beginners"
- "mermaid flowchart syntax"
- "javascript object property access"
- "javascript function declaration return value"
- "tsx run typescript file node"
- "git diff staged vs unstaged"
- "strict equality vs loose equality javascript"

## 5. Step-by-Step Guide

Work on one task at a time. One task means one focused change, its required companion files and proof, and one commit. The weekly routine is in the [student guide](../docs/03-student-guide.md). The box called "Official task text" is the rule for the task. Do not change it. The numbered steps below it show you how to start.

### Core tasks

#### Task 1 - Write the brief and context map (`E01.1`)

##### 1. What We Are Doing

You read the MerchantDesk client story and write a one-page brief in VS Code. The brief names the user, three useful actions, non-goals, five open questions, what a good demo would show, and a small map of the parts. You work in a markdown file inside your own week folder.

##### 2. Why We Are Doing It

A vague request costs the team weeks. A short brief lets the client say "yes, that is what I meant" before any code exists, and it protects the team from building the wrong thing.

##### 3. What to Learn First

- What a user story contains: user, action, reason.
- How to separate version 1 scope from non-goals.
- How to write open questions that the client can answer.
- The four parts of the product: simulator, API, database, merchant interface.
- What "provisional" means: a choice you can change later.

##### 4. Where to Find Resources

- [MerchantDesk client brief](../docs/01-project-brief.md)
- [docs/02-setup-guide-mac-windows.md](../docs/02-setup-guide-mac-windows.md) sections 1 to 3
- MDN "What is JavaScript" https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Scripting/What_is_JavaScript
- Search: "user story format as a i want so that", "mermaid flowchart syntax", "how to write open questions for a client"

##### 5. Step-by-Step Guide

**Official task text (do not change):**

- [ ] Read the client story. Write the user, three useful actions, non-goals, five open questions and what a successful demo would show. Add a small Mermaid map of simulator, API, database and merchant interface. Keep implementation choices provisional.

**Primary path:** `students/<student-id>/week-01/discovery/brief.md`.

**Proof for review:** A peer can explain the same user and V1 boundary from your brief. The map labels the API as the data/security boundary.

**Known trap:** A list of technologies is not a client brief.

**Where to build:** build and test code in your own project repository first ([guide](../docs/19-own-project-repo.md)). Then copy the files to the path above in your cohort clone, fix their imports, run the proof there and commit. Writing tasks can be written directly in the cohort folder.

**Steps:**

1. Open VS Code in the repository root.
2. Open `docs/01-project-brief.md` and read the client story twice, slowly.
3. Create the folder `students/<student-id>/week-01/discovery/` and a new file `brief.md` inside it. Replace `<student-id>` with your number, for example RB7.
4. Write one short paragraph: who the user is and what that person needs. Use your own words, not the client's words.
5. List three actions the user can do in version 1. One line each.
6. List the non-goals: the things the client must not expect in version 1.
7. Write five open questions you would ask the client. Questions, not guesses.
8. Write what a successful demo would show, in three to five lines.
9. Add a small Mermaid diagram with four boxes: simulator, API, database, merchant interface. Label the API box as the data and security boundary.
10. Save the file. How to think about it: a brief is written for the client, so a list of technologies is not a brief.

**If you get stuck:**

- Read your own brief out loud. If a sentence is about a tool, rewrite it as a sentence about the user.
- Compare with `docs/01-project-brief.md` and check that your version 1 boundary matches the client story.
- Ask in Discord with the sentence you are unsure about and the exact question you want the client to answer.

##### 6. What to Commit

- [ ] `students/<student-id>/week-01/discovery/brief.md` (and any companion test, notes or migration file the task names)
- [ ] The proof from "Proof for review" is written down or passes
- [ ] I avoided the known trap
- [ ] Commit message: `E01.1 write the brief and context map`

#### Task 2 - Run a safe event inspector (`T01.1`)

##### 1. What We Are Doing

You install the project dependencies, then write one small TypeScript file that reads one synthetic event object and prints its event ID, kind and amount. You also add a function that returns that summary, and a short notes file with the run command. You work in VS Code and the terminal.

##### 2. Why We Are Doing It

MerchantDesk must show payment events without ever exposing secrets or real customer data. A small, readable summary function is the first piece of that idea, and you build it on fake data only.

##### 3. What to Learn First

- Object literal syntax: curly braces with key and value pairs.
- Reading one property, for example `event.amount_minor`.
- Printing with `console.log`.
- A function that returns a value instead of printing it.
- Why `npm run typecheck` is separate from running the file.

##### 4. Where to Find Resources

- MDN "What is JavaScript" https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Scripting/What_is_JavaScript
- javascript.info "Variables" https://javascript.info/variables and "Data types" https://javascript.info/types
- TypeScript "TypeScript for new programmers" https://www.typescriptlang.org/docs/handbook/typescript-from-scratch.html
- Mosh "JavaScript Course for Beginners" https://youtu.be/W6NZfCO5SIk (48 min) from 0:00 to 35:22 (chapters What is JavaScript to Objects)
- Search: "javascript object property access", "javascript function declaration return value", "tsx vs tsc typecheck", "console.log number string"

##### 5. Step-by-Step Guide

**Official task text (do not change):**

- [ ] After npm ci, use the fixture at fixtures/events.json. Begin with one object and print its event ID, kind and amount_minor. Add a function that returns that summary. Record the run command in NOTES.md next to the script. Do not print credentials or customer data.

**Primary path:** `students/<student-id>/week-01/typescript/inspector.ts`.

**Proof for review:** npm run practice -- students/RB1/week-01/typescript/inspector.ts runs after replacing RB1. Explain that tsx runs the code without typechecking; npm run typecheck is the separate compiler check.

**Known trap:** You do not need arrays, async, React or a database to finish this first program.

**Where to build:** build and test code in your own project repository first ([guide](../docs/19-own-project-repo.md)). Then copy the files to the path above in your cohort clone, fix their imports, run the proof there and commit. Writing tasks can be written directly in the cohort folder.

**Steps:**

1. Open VS Code in the repository root.
2. Run `npm ci` in the terminal. This installs the exact dependencies and you only do it once.
3. Run `npm run setup:check` and read the output until it reports success.
4. Open `fixtures/events.json` and look at one event object. Do not edit this file.
5. Create `students/<student-id>/week-01/typescript/inspector.ts`. Replace `<student-id>` with your number, for example RB7.
6. Put one event object from the fixture into your file as a plain object, with a variable name.
7. Print the event ID, the kind and `amount_minor` with three separate `console.log` calls.
8. Add a function that returns the same three values as one summary line.
9. Print the result of calling that function.
10. Create `NOTES.md` next to the script and write the run command inside it: `npm run practice -- students/<student-id>/week-01/typescript/inspector.ts`.
11. Run that command from the repository root.
12. Run `npm run typecheck` and read the result. tsx ran your code, this command checks your types.
13. Read your printed output and remove anything private.

**If you get stuck:**

- If the run fails, read the first line of the error. It usually names the file and the line number.
- Check that the path after `npm run practice --` starts with `students/` and uses your own ID.
- Ask in Discord with the command you ran and the exact error text.

##### 6. What to Commit

- [ ] `students/<student-id>/week-01/typescript/inspector.ts` (and any companion test, notes or migration file the task names)
- [ ] The proof from "Proof for review" is written down or passes
- [ ] I avoided the known trap
- [ ] Commit message: `T01.1 run a safe event inspector`

#### Task 3 - Complete the Git and review loop (`E01.2`)

##### 1. What We Are Doing

You put your work on a task branch, look at the diff before you commit, and make small commits that start with the task ID. Then you push the branch, open one weekly pull request into `main`, and review one peer's change. You record the real links in a review file.

##### 2. Why We Are Doing It

MerchantDesk is one shared product with many contributors. Small branches, readable commits and peer review keep the shared code safe and let a maintainer trust what is merged.

##### 3. What to Learn First

- What a branch is and why each week gets its own.
- How to read `git diff --cached` before a commit.
- How a commit message names the task.
- How a pull request shows your change to a reviewer.
- What a useful review comment looks like: it explains one choice.

##### 4. Where to Find Resources

- Git book "Getting a Git Repository" https://git-scm.com/book/en/v2/Git-Basics-Getting-a-Git-Repository
- Traversy "Git & GitHub Crash Course For Beginners" https://www.youtube.com/watch?v=SWYqp7iY_Tc (33 min) whole video
- Optional: freeCodeCamp "Git and GitHub for Beginners - Crash Course" https://www.youtube.com/watch?v=RGOj5yH7evk (68 min; use chapters git branching, Undoing in git, Forking in git)
- Search: "git diff staged changes", "git commit message convention", "github pull request review comment"

##### 5. Step-by-Step Guide

**Official task text (do not change):**

- [ ] Use a task branch, inspect git diff, make focused task-ID commits and open one weekly PR. Review an assigned peer's change and record its link. Record real commit and PR links.

**Primary path:** `students/<student-id>/week-01/review.md`.

**Proof for review:** Your author identity is correct, changed files stay in your folder, and the review explains one choice.

**Known trap:** Run Git commands from the repository root, not your home directory.

**Where to build:** build and test code in your own project repository first ([guide](../docs/19-own-project-repo.md)). Then copy the files to the path above in your cohort clone, fix their imports, run the proof there and commit. Writing tasks can be written directly in the cohort folder.

**Steps:**

1. Open VS Code in the repository root and open the terminal there.
2. Follow the Git identity instructions in the setup guide: open `docs/02-setup-guide-mac-windows.md` sections 1 to 3 and set your name and email there, so Git knows who you are.
3. Run `git switch main`, then `git fetch origin`, then `git merge --ff-only origin/main`. Run this from the repository root.
4. Run `git switch -c rb<your-number>-week-01`, for example `git switch -c rb7-week-01`.
5. Run `git status`. Your new files inside `students/<student-id>/week-01/` should be listed. If this week's shared contribution is assigned to you, `shared/delivery/brief.md` or `shared/delivery/context.md` may also be listed.
6. Run `git add <files>`. Here `<files>` means the exact file paths of one task only, for example `git add students/<student-id>/week-01/discovery/brief.md`. Replace `<student-id>` with your number.
7. Run `git diff --cached` and read the whole diff before you commit.
8. Make one focused commit, task ID first, for example `git commit -m "E01.1 write the client brief"`.
9. Repeat steps 6 to 8 for the Task 2 files, with a message that starts with `T01.1`, for example `git commit -m "T01.1 inspect a sandbox event"`.
10. Run `git push -u origin rb<your-number>-week-01`.
11. Open the repository on GitHub and open one pull request from your branch into `main`. Do not merge it yourself.
12. Create `students/<student-id>/week-01/review.md` and write your branch link, your pull request link and your commit links inside it.
13. Review an assigned peer change and record its link and one sentence about a choice they made, inside `review.md`.
14. Run `git add students/<student-id>/week-01/review.md`.
15. Run `git diff --cached` and read the diff.
16. Run `git commit -m "E01.2 complete the Git and review loop"`.
17. Run `git push` on the same weekly branch, so the pull request shows your review file.

**If you get stuck:**

- If Git says "not a git repository", you are in the wrong folder. Close the terminal, open the repository folder in VS Code again, and open a new terminal from VS Code.
- If the pull request shows too many files, check that you did not commit from your home folder.
- Ask in Discord with the command, the exact error text and the output of `git status`.

##### 6. What to Commit

- [ ] `students/<student-id>/week-01/review.md` (and any companion test, notes or migration file the task names)
- [ ] The proof from "Proof for review" is written down or passes
- [ ] I avoided the known trap
- [ ] Commit message: `E01.2 complete the Git and review loop`

### Two-hour problem-solving block (`P01.1`)

**Focus:** Trace values and a simple decision

Given a synthetic amount and a boolean captured flag, return an explicit label without loose equality; explain the result for zero and a numeric string.

**Evidence path:** `students/<student-id>/week-01/problem-solving/README.md`.

**Proof:** Include a runnable decision function, an expected/actual case table, one corrected prediction and a plain-language explanation. Automated test files begin in Week 2; no algorithm knowledge is assumed.

**How to start:**

Read these synthetic cases first. Your function takes a synthetic amount `amount_minor` and a boolean `captured` flag.

- Case A: `amount_minor = 2500`, `captured = true`
- Case B: `amount_minor = 0`, `captured = true`
- Case C: `amount_minor = 2500`, `captured = false`
- Case D: `amount_minor = 0`, `captured = false`
- Case E: `amount_minor = "2500"`, `captured = true` (a numeric string, not a number)

The label rules, in this order:

1. If the amount is zero, the label is `zero amount`.
2. Otherwise, if `captured` is true, the label is `captured`.
3. Otherwise, the label is `not captured`.

Before you start, read the "Data types" page at https://javascript.info/types and search "javascript strict equality vs loose equality".

1. Read MDN "Conditionals" https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Scripting/Conditionals. Then read javascript.info "Comparisons" https://javascript.info/comparison and "Conditional branching: if, '?'" https://javascript.info/ifelse. These pages show how a program picks one branch, and how to compare values.
2. Remember the two-line shape. An `if` tests one condition, and `else` covers the other path:
   `if (isReady === true) { /* first branch */ } else { /* second branch */ }`
3. Use `===` to compare. It checks value and type together. A single `=` stores a value, and `==` compares loosely. Do not use loose equality here. This is new for most people. Go slowly.
4. Read the cases and the rules above, and write on paper what you think each case returns.
5. Create your practice file in your own folder under `students/<student-id>/week-01/typescript/`. Replace `<student-id>` with your number, for example RB7.
6. Write one small function in that file that returns the label for one case.
7. Use strict equality (`===`) everywhere. Do not use loose equality (`==`).
8. Run the file with `npm run practice -- students/<student-id>/week-01/typescript/<your-file>.ts` and compare the real output with your paper prediction.
9. Build a small table with three columns: input, expected, actual. Add one row for zero and one row for a numeric string.
10. Mark one prediction you got wrong, write the corrected prediction, and explain in plain words why the code behaves that way.
11. Save the table in a short markdown file in the same week-01 folder as your practice file.
12. Run `git add <files>` with the two file paths: your practice file and your table file.
13. Run `git commit -m "P01.1 trace values and one decision"`.

**If you get stuck:**

- Re-read the output line by line and check the data type of each value before you compare it.
- Search "javascript strict equality" and "javascript string vs number comparison".
- Ask in Discord with your input, your expected value and the exact output you saw.

Follow the [problem-solving guide](../docs/14-problem-solving.md). This common block is included in the weekly budget and does not replace the three project tasks.

### Shared contribution

Assigned task owners contribute reviewed work to `shared/delivery/brief.md and shared/delivery/context.md`. Record scope, non-author review and actual proof in the [Week 1 contribution log](../shared/delivery/rotations/week-01.md). Everyone completes the same core practice; no fixed pair is a prerequisite. See [team repo, shared work and delivery](../docs/16-team-repo-and-delivery.md).

## 6. What to Commit

Use this checklist at the end of the week.

- [ ] Focused task-ID commits include required implementation and failure proofs
- [ ] The common problem-solving block and one corrected attempt are recorded
- [ ] Peer review and assigned shared task or witness work are complete
- [ ] One implementation decision and failure case are explained
- [ ] One weekly pull request is open from branch `rb<number>-week-01` into `main` (see the [student guide](../docs/03-student-guide.md))

If you are short on time, cut in this order: extra reading first, then optional polish. Never cut the proof for a task.

Next: [Week 2](week-02.md).
