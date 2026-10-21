# Week 20: Demonstrate and hand over the merchant application

MerchantDesk | Sprint 1 | E: Engineering and Delivery + C: Client Integration

## 1. What We Are Doing

This week you do not add features. You finish the delivery documents for MerchantDesk. A runbook is written steps that start the product from zero. A handover records how another person can run and maintain the product. You also record a short demo of real user actions. You do one oral explain-back, which is a spoken explanation in your own words. You also do one small repair without AI. At the end, another person can start and understand the product without you.

This week has three project tasks and one problem-solving block:

- `E12.1`: Finish the runbook and architecture (120 minutes)
- `C06.1`: Demonstrate the merchant's real actions (70 minutes)
- `E12.2`: Complete the independent start and contribution record (110 minutes)
- `P20.1`: weekly problem-solving block (120 minutes)

Outcome: An independently reproducible local product, tested extension, short demo and attributable oral/repair evidence. Milestone: Independent handover.

## 2. Why We Are Doing It

**The project need:** The product and learning evidence must survive the original builders and continue into Sprint 2.

The MerchantDesk product and its learning evidence must survive the original builders and continue into Sprint 2. In a real backend job, code without a runbook and without clear ownership is a risk, because the next person cannot start it, test it or fix it. This week you practise the handover skill that teams need every day.

## 3. What to Learn First (Prerequisites)

**Before you start:** Do not add new features this week. Bring the clean-start corrections, test matrix, approved contracts and authored contribution links.

**Review these ideas first:**

- Runbook: written steps that start the product from zero.
- Architecture diagram: boxes and arrows that match the real code.
- Synthetic data: fake payment events, never real money.
- Demo evidence: a recording plus the negative case you show.
- Attribution: proof that links a claim to your commit.
- Explain-back: saying how a request reaches the database, in your words.
- No-AI repair: you find and fix a small defect alone.

**By the end of this week you can:**

- finish `E12.1`: actual architecture, migrations, seed accounts, tests and limitations
- finish `C06.1`: user-focused demo and browser/API evidence
- finish `E12.2`: clean-start proof, authorship and technical explanation

## 4. Where to Find Resources

**Where you work.** Write code in VS Code. Run commands in the VS Code terminal, from the repository root. Open the pull request and read reviews in your browser on GitHub. Replace `<student-id>` with your number, for example `RB7`. New to the setup? Use the [setup guide for Mac and Windows](../docs/02-setup-guide-mac-windows.md). Lost in the folders? See the [repository map](../docs/17-repo-map.md). Build and test code pieces first in your [own project repository](../docs/19-own-project-repo.md). When a piece works, copy it into your cohort folder and open the pull request, as shown in the [VS Code workflow](../docs/18-vscode-workflow.md).

**Your week in order**

| Task    | Concepts and reading                                                                                                                                                                              | Planned task minutes |
| ------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------: |
| `E12.1` | Actual architecture, migrations, seed accounts, tests and limitations. [Delivery documentation](../shared/delivery/README.md)                                                                     |                  120 |
| `C06.1` | User-focused demo and browser/API evidence. [MerchantDesk API contract](../docs/04-api-and-security-contract.md)                                                                                  |                   70 |
| `E12.2` | Clean-start proof, authorship and technical explanation. [Assessment and review](../docs/10-assessment.md), [Git book basics](https://git-scm.com/book/en/v2/Git-Basics-Getting-a-Git-Repository) |                  110 |

Task time is part of the [15-hour core weekly budget](../docs/11-scope-and-continuation.md), not the whole week. Guided learning, consolidation, review, shared work and the two-hour problem-solving block are also included. Up to five additional hours are for repetition or finishing feedback, not extra required technologies.

**Search keywords if you get stuck:**

- "backend runbook checklist"
- "postgres create database local steps"
- "http request lifecycle diagram"
- "find commit link on GitHub pull request"
- "how to explain code out loud"

Application layout: follow the [application wiring guide](../docs/12-application-wiring.md).

## 5. Step-by-Step Guide

Work on one task at a time. One task means one focused change, its required companion files and proof, and one commit. The weekly routine is in the [student guide](../docs/03-student-guide.md). The box called "Official task text" is the rule for the task. Do not change it. The numbered steps below it show you how to start.

### Core tasks

#### Task 1 - Finish the runbook and architecture (`E12.1`)

##### 1. What We Are Doing

You write the final runbook at `students/<student-id>/week-20/delivery/runbook.md`. It must let a person who never saw the repository clone, configure, create the database, migrate, seed, start the API and UI, run tests, fix common failures and shut down. You also add an architecture diagram that matches the real code and a short next-sprint boundary, all in VS Code.

##### 2. Why We Are Doing It

A new teammate or a merchant operator cannot use MerchantDesk if the start steps live only in your head. A correct runbook is the difference between a product that continues and a folder that nobody can run.

##### 3. What to Learn First

- What a runbook must contain: commands, variable names, dependencies, limits.
- How to draw a diagram that matches the real folders and services.
- The difference between Sprint 1 work that exists and future plans.
- How to name a limitation in writing without hiding it.

##### 4. Where to Find Resources

- [docs/13 API documentation](../docs/13-api-documentation.md), the routes you describe in the runbook.
- docs/02, section 7, the project commands you copy into the runbook.
- [docs/09 troubleshooting](../docs/09-troubleshooting.md), common failures and their fixes.
- Search keywords: "backend runbook checklist", "software architecture diagram simple", "local postgres setup steps".

##### 5. Step-by-Step Guide

**Official task text (do not change):**

- [ ] Consolidate the Week 15 clean-start notes and subsequent corrections into the final Mac and Windows runbook with clone/install, local configuration, database creation, migration/seed, API/UI start, tests, common failures and shutdown. Include a diagram matching actual code and a short next-sprint boundary. Propose the shared root README update in the shared-task PR.

**Primary path:** `students/<student-id>/week-20/delivery/runbook.md`.

**Proof for review:** A stranger can find every command, secret variable and dependency; unfinished product work is named, not hidden.

**Known trap:** Do not describe Docker, queues, Rust, deployment or real payments as implemented in Sprint 1.

**Where to build:** build and test code in your own project repository first ([guide](../docs/19-own-project-repo.md)). Then copy the files to the path above in your cohort clone, fix their imports, run the proof there and commit. Writing tasks can be written directly in the cohort folder.

**Steps:**

1. Open VS Code in the repository root.
2. Create the file `students/<student-id>/week-20/delivery/runbook.md`. Replace `<student-id>` with your number, for example RB7.
3. Open your Week 15 clean-start notes and every later correction. List the steps you actually ran.
4. Write the sections in this order: clone and install, local configuration, database creation, migration and seed, API and UI start, tests, common failures, shutdown.
5. Copy each command exactly from docs/02 section 7, and add "run this from the repository root" where it matters.
6. List every environment variable by name only, with one line on what it is for. Never paste a value.
7. For the tests section, name `npm run check`, `npm test`, `npm run test:student -- RBx`, `npm run test:student:db -- RBx` and `npm run test:db`, with your own id.
8. State that the database test commands need PostgreSQL running, test database names must end in `_test`, and all commands run from the repository root.
9. Draw boxes and arrows for the API, database, simulator and web client.
10. Show the delivery documents separately as documentation.
11. Add a "Common failures" list from docs/09.
12. Add a "Limitations" section that names unfinished work.
13. Add a short "Next sprint boundary" section.
14. Draft the shared root README update as a separate short note and mention it in your shared-task pull request. How to think about it: write for a stranger who is tired and in a hurry.

**If you get stuck:**

- Read the error message from the command first. It usually names the missing variable, port or database.
- Search "backend runbook checklist" or open [docs/09 troubleshooting](../docs/09-troubleshooting.md).
- Remove passwords, keys, cookies and connection-string values before posting. Never paste secrets in Discord or into an AI assistant.
- Ask in Discord with the command and the exact error text.

##### 6. What to Commit

- [ ] `students/<student-id>/week-20/delivery/runbook.md` (and any companion test, notes or migration file the task names)
- [ ] The proof from "Proof for review" is written down or passes
- [ ] I avoided the known trap
- [ ] Commit message: `E12.1 finish the runbook and architecture`

#### Task 2 - Demonstrate the merchant's real actions (`C06.1`)

##### 1. What We Are Doing

You record a demo under three minutes with synthetic data only, and write it up at `students/<student-id>/week-20/delivery/demo.md`. The demo shows login, one accepted fixture event, one focused invalid or duplicate or conflict case, filtered and paged viewing, another merchant being rejected, and logout. You also explain one request path from the browser to the API to the database, and state the local-only and session limits.

##### 2. Why We Are Doing It

A merchant operator judges the product by what they can do on screen, but a reviewer needs the backend evidence behind it. A short honest demo with one negative case shows the product works and that you know its limits.

##### 3. What to Learn First

- How to script a demo so it fits in three minutes.
- Why one negative case is stronger evidence than five happy clicks.
- How to trace a request: screen action, HTTP route, SQL query, response.
- How to state limits: local only, session revocation, synthetic data only.
- How to link a recording without committing large media.
- How to check that the UI calls your student API, not only the shared API.

##### 4. Where to Find Resources

- [docs/13 API documentation](../docs/13-api-documentation.md), the routes and responses your demo shows.
- [docs/10 assessment](../docs/10-assessment.md), what the reviewer looks for in the demo.
- docs/02, section 7, the commands that start the API and the UI.
- docs/12 application wiring, how your Week 16 client connects to your student API.
- Search keywords: "http request lifecycle diagram", "rest api negative test case", "screen recording short demo".

##### 5. Step-by-Step Guide

**Official task text (do not change):**

- [ ] Record a demo video under three minutes using synthetic data: login, one accepted fixture, a focused invalid/duplicate/conflict case, filtered/paged viewing, another merchant's rejection and logout. Include your bounded extension or link its separate short proof. Explain one UI/API/DB request path and state local-only and session-revocation limits. Link the video or a reviewable recording artifact in demo.md without committing large media or secrets.

**Primary path:** `students/<student-id>/week-20/delivery/demo.md`.

**Proof for review:** A non-author watches the real working demo and its focused negative case; the full written/test matrix covers the remaining cases. No real money, credentials or customer data appears.

**Known trap:** A polished screen does not replace backend evidence.

**Where to build:** build and test code in your own project repository first ([guide](../docs/19-own-project-repo.md)). Then copy the files to the path above in your cohort clone, fix their imports, run the proof there and commit. Writing tasks can be written directly in the cohort folder.

**Steps:**

1. Open VS Code in the repository root.
2. Create the file `students/<student-id>/week-20/delivery/demo.md`. Replace `<student-id>` with your number, for example RB7.
3. List these six actions in recording order: login, one accepted fixture event, one invalid or duplicate or conflict case, filtered and paged list, another merchant rejected, logout.
4. Add one line for your bounded extension, with a link to its short proof.
5. Open docs/12 application wiring. Identify how your Week 16 client connects to your student API.
6. Start your own API from the repository root: run `npm run db:check`, then `npm run dev:student -- RBx`. Replace RBx with your id.
7. Start your own client in a second terminal, from the repository root: run `npm run dev --prefix students/<student-id>/week-16/client`. This starts your Week 16 client. Do not use `npm run dev:web` here, because that starts the shared UI.
8. Check that the UI uses your student API as docs/12 describes, not only the shared API.
9. Do a timed dry run and cut anything that pushes past three minutes.
10. Record the screen while you run the six actions, using synthetic data only. Upload the recording to a place your reviewer can open. Do not commit the video file.
11. Put the link in `demo.md`, then trace one request in a short paragraph: which screen, which route from docs/13, which table.
12. Write a "Limits" section: local only, no real payments, session revocation limits.
13. How to think about it: one clear negative case tells the reviewer more than five happy clicks.

**If you get stuck:**

- If the demo runs long, shorten pauses and repeated explanations. Keep every required demo action.
- If the client shows the wrong data, check that you started your own client from `students/<student-id>/week-16/client`, not the shared UI.
- If a request fails, read the API error text and check the route in [docs/13 API documentation](../docs/13-api-documentation.md).
- Remove passwords, keys, cookies and connection-string values before posting. Never paste secrets in Discord or into an AI assistant.
- Ask in Discord with the command and the exact error text.

##### 6. What to Commit

- [ ] `students/<student-id>/week-20/delivery/demo.md` (and any companion test, notes or migration file the task names)
- [ ] The proof from "Proof for review" is written down or passes
- [ ] I avoided the known trap
- [ ] Commit message: `C06.1 demonstrate the merchant's real actions`

#### Task 3 - Complete the independent start and contribution record (`E12.2`)

##### 1. What We Are Doing

You complete `students/<student-id>/week-20/delivery/handover.md`. A person who did not write the code follows your runbook and records the commands and results. You link your task commits and pull requests, your bounded extension, your shared contributions, your case study and your demo. You also record the oral explain-back, the 30-minute no-AI repair, two resume statements and one improvement.

##### 2. Why We Are Doing It

The next team must know what you really built and what is still open. Clean attribution protects the product and protects you, because a claim that has no link is a claim nobody trusts.

##### 3. What to Learn First

- What an independent clean start is and how to record its result.
- How to link a claim to a commit or a pull request.
- How to explain one request-to-database path out loud.
- How to describe a repair you did without AI, step by step.
- Which claims to avoid: production ownership, Rust, smart contracts.

##### 4. Where to Find Resources

- [docs/10 assessment](../docs/10-assessment.md), the review format and the evidence list.
- Git book basics https://git-scm.com/book/en/v2/Git-Basics-Getting-a-Git-Repository, for repository and commit basics.
- [docs/13 API documentation](../docs/13-api-documentation.md), for the request path you explain out loud.
- docs/02, section 7, the commands the non-author runs.
- Search keywords: "find commit link on GitHub pull request", "write resume bullet with evidence", "explain code out loud practice".

##### 5. Step-by-Step Guide

**Official task text (do not change):**

- [ ] Have a non-author follow the final runbook and record commands/outcomes. Link your core task commits/PRs, bounded extension, shared contributions, case study and demo. Complete an oral review explaining one request-to-database path and a 30-minute no-AI repair of a small reversible defect with documentation allowed. Record technical proof, not private grades. Write two defensible resume statements and one improvement you can explain.

**Primary path:** `students/<student-id>/week-20/delivery/handover.md`.

**Proof for review:** The independent start succeeds, core and extension tests pass, and the reviewer records the explain-back/repair observation. Implementation claims are attributable; incomplete work is not labelled complete.

**Known trap:** Do not claim production ownership, Rust expertise or smart-contract work from this sprint.

**Where to build:** build and test code in your own project repository first ([guide](../docs/19-own-project-repo.md)). Then copy the files to the path above in your cohort clone, fix their imports, run the proof there and commit. Writing tasks can be written directly in the cohort folder.

**Steps:**

1. Open VS Code in the repository root.
2. Create the file `students/<student-id>/week-20/delivery/handover.md`. Replace `<student-id>` with your number, for example RB7.
3. Ask a person who did not write the code to follow your runbook from the start, and to write down each command and its result.
4. Paste their command and result list into an "Independent start" section.
5. Open your weekly pull request on GitHub. Copy its link and the links to your task commits.
6. Write one line per task ID with the commit hash or link in the contribution record.
7. Add one short line or link for your bounded extension, your shared delivery contributions, your case study and your demo.
8. Do the oral explain-back with your reviewer: one request from browser to API to database, plus what happens when it fails.
9. Do the 30-minute no-AI repair on a small reversible defect. Write what you changed and how you checked it. Documentation is allowed, AI is not.
10. Ask your reviewer to record what they observed during the explain-back and repair in `handover.md`. Record technical evidence only, without private grades.
11. Write two resume statements that you can defend with a link, and one improvement you can explain.
12. Re-read every claim and remove or soften any claim you cannot prove. How to think about it: a reviewer trusts a small true list more than a long claim.

**If you get stuck:**

- If the independent start fails, the gap is in the runbook, not in the other person. Fix the runbook first.
- Open your weekly pull request on GitHub and copy the commit links, or open [docs/10 assessment](../docs/10-assessment.md).
- Remove passwords, keys, cookies and connection-string values before posting. Never paste secrets in Discord or into an AI assistant.
- Ask in Discord with the command and the exact error text.

##### 6. What to Commit

- [ ] `students/<student-id>/week-20/delivery/handover.md` (and any companion test, notes or migration file the task names)
- [ ] The proof from "Proof for review" is written down or passes
- [ ] I avoided the known trap
- [ ] Commit message: `E12.2 complete the independent start and contribution record`

### Two-hour problem-solving block (`P20.1`)

**Focus:** Explain-back and review

Explain one prior solution without AI, state time/space costs and improve one weak test. This is foundation practice, not a hiring guarantee.

**Evidence path:** `students/<student-id>/week-20/problem-solving/README.md`.

**Proof:** Include the solution and tests, empty/boundary cases, one corrected attempt and a plain-language explanation. Revisit one earlier exercise within the same two-hour block.

**How to start:**

1. Pick one solution you wrote earlier in the sprint, for example a route handler or a query.
2. Close your notes and the AI assistant. Explain the solution out loud or in writing, step by step.
3. State the time and space cost of the main loop or query in plain words.
4. Find one weak test: a case with no empty input, no boundary value, or no failure path.
5. Improve that test, run it with `npm run test:practice -- <test file>` or `npm test`, and save the output in your notes.
6. Revisit one earlier exercise in the same two-hour block and write three lines on what you would do differently.

**If you get stuck:**

If you cannot explain one line, mark it and come back after the block. Ask in Discord with the exact line and what you think it does.

Follow the [problem-solving guide](../docs/14-problem-solving.md). This common block is included in the weekly budget and does not replace the three project tasks.

### Shared contribution

Assigned task owners contribute reviewed work to `shared/delivery/runbook.md, shared/delivery/final-architecture.md, shared/delivery/demo.md and README.md`. Record scope, non-author review and actual proof in the [Week 20 contribution log](../shared/delivery/rotations/week-20.md). Everyone completes the same core practice; no fixed pair is a prerequisite. See [team repo, shared work and delivery](../docs/16-team-repo-and-delivery.md).

## 6. What to Commit

Use this checklist at the end of the week.

- [ ] Focused task-ID commits include required implementation and failure proofs
- [ ] The common problem-solving block and one corrected attempt are recorded
- [ ] Peer review and assigned shared task or witness work are complete
- [ ] One implementation decision and failure case are explained
- [ ] One weekly pull request is open from branch `rb<number>-week-20` into `main` (see the [student guide](../docs/03-student-guide.md))

If you are short on time, cut in this order: extra reading first, then optional polish. Never cut the proof for a task.

This is the last week. Finish the handover and the clean-start proof.
