# Week 19: Build one bounded extension and prepare the portfolio

MerchantDesk | Sprint 1 | B: Backend Development + E: Engineering and Delivery + C: Client Integration

## 1. What We Are Doing

This week you turn one small idea into a tested extension of your MerchantDesk app. You write a plan, build the change, write a case study and rehearse a short demo. At the end you have evidence that shows which work you did, a working extension and a demo you can repeat.

This week has three project tasks and one problem-solving block:

- `B11.1`: Implement a small reviewed extension (100 minutes)
- `E14.1`: Write an attributable technical case study (100 minutes)
- `C06.2`: Rehearse the complete portfolio demonstration (100 minutes)
- `P19.1`: weekly problem-solving block (120 minutes)

Outcome: One bounded tested extension, an attributable case study and a rehearsed complete demo.

## 2. Why We Are Doing It

**The project need:** Every student needs attributable implementation evidence without turning the common product into twenty unrelated applications.

The client needs proof that you can add one bounded feature without breaking the shared product. Real backend teams value small, reviewed changes, clear trade-offs and honest evidence. These skills help you show your own work and keep the common product stable.

## 3. What to Learn First (Prerequisites)

**Before you start:** Complete the core merchant flow and Week 18 failure checks first. Select one scope from docs/15-individual-extension.md and agree its proof before adding code. Reuse the existing API, database and React client.

**Review these ideas first:**

- Scope control: choose one small feature and one clear limit.
- Backward-compatible change: existing routes and tests still work.
- Tested integration: prove the new behaviour and one failure.
- Forward migration: add a database change only when the feature needs it.
- Attributable evidence: link each claim to your own commit or file.
- Demo safety: use only synthetic records and no secrets.
- Contract update: change the API spec when an endpoint changes.

**By the end of this week you can:**

- finish `B11.1`: scope control, backward-compatible changes and tested integration
- finish `E14.1`: authorship, trade-offs, hard-problem explanation and honest career evidence
- finish `C06.2`: user-focused demonstrations, safe synthetic data and portfolio communication

## 4. Where to Find Resources

**Where you work.** Write code in VS Code. Run commands in the VS Code terminal, from the repository root. Open the pull request and read reviews in your browser on GitHub. Replace `<student-id>` with your number, for example `RB7`. New to the setup? Use the [setup guide for Mac and Windows](../docs/02-setup-guide-mac-windows.md). Lost in the folders? See the [repository map](../docs/17-repo-map.md). Build and test code pieces first in your [own project repository](../docs/19-own-project-repo.md). When a piece works, copy it into your cohort folder and open the pull request, as shown in the [VS Code workflow](../docs/18-vscode-workflow.md).

**Your week in order**

| Task    | Concepts and reading                                                                                                                                                                                                  | Planned task minutes |
| ------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------: |
| `B11.1` | Scope control, backward-compatible changes and tested integration. [Bounded individual extension](../docs/15-individual-extension.md), [MerchantDesk API contract](../docs/04-api-and-security-contract.md)           |                  100 |
| `E14.1` | Authorship, trade-offs, hard-problem explanation and honest career evidence. [Assessment and review](../docs/10-assessment.md), [Git book basics](https://git-scm.com/book/en/v2/Git-Basics-Getting-a-Git-Repository) |                  100 |
| `C06.2` | User-focused demonstrations, safe synthetic data and portfolio communication. [MerchantDesk API contract](../docs/04-api-and-security-contract.md), [Delivery documentation](../shared/delivery/README.md)            |                  100 |

Task time is part of the [15-hour core weekly budget](../docs/11-scope-and-continuation.md), not the whole week. Guided learning, consolidation, review, shared work and the two-hour problem-solving block are also included. Up to five additional hours are for repetition or finishing feedback, not extra required technologies.

**Search keywords if you get stuck:**

- backward compatible API change
- postgres forward migration test
- fastify route integration test
- git commit authorship evidence
- merchant isolation test
- demo negative case

Application layout: follow the [application wiring guide](../docs/12-application-wiring.md).

## 5. Step-by-Step Guide

Work on one task at a time. One task means one focused change, its required companion files and proof, and one commit. The weekly routine is in the [student guide](../docs/03-student-guide.md). The box called "Official task text" is the rule for the task. Do not change it. The numbered steps below it show you how to start.

### Core tasks

#### Task 1 - Implement a small reviewed extension (`B11.1`)

##### 1. What We Are Doing

You choose one small extension from the extension guide and write a short plan before you code. Then you add the extension to your continuing MerchantDesk app with tests and an updated API spec if needed. You work in VS Code and run commands in the terminal.

##### 2. Why We Are Doing It

The client needs new value without turning the shared product into many unrelated apps. A small, tested extension shows that you can add a feature safely and keep the core flow stable.

##### 3. What to Learn First

- Scope control: pick one user need and write the limit.
- Backward-compatible changes: existing routes and tests still work.
- Tested integration: cover the happy path and one failure case.
- Forward migrations: add a database change only when needed.
- API spec updates: describe any endpoint change clearly.

##### 4. Where to Find Resources

- Read [docs/15 individual extension](../docs/15-individual-extension.md) to choose one allowed scope.
- Read [docs/04 API and security contract](../docs/04-api-and-security-contract.md) before you change an endpoint.
- Use the project commands in docs/02 section 7 for checks and tests.
- Search: backward compatible API change, fastify route integration test, postgres forward migration.

##### 5. Step-by-Step Guide

**Official task text (do not change):**

- [ ] Choose merchant-owned CSV export, one separate bounded merchant-owned search endpoint, or a request/incident diagnostic improvement from the extension guide. State the user need, exact paths, limit, failure cases and estimate before review. Implement it in your continuing app with tests, companion code and forward migrations only if justified. Update your canonical API specification for any endpoint change. Do not add a new framework.

**Primary path:** `students/<student-id>/week-19/extension/plan.md`.

**Proof for review:** A reviewer reproduces the new behavior and one failure; the existing core suite stays green. Evidence identifies your implementation rather than inherited shared code.

**Known trap:** An extension does not replace any core task, make real payments or require adding every student's feature to shared/.

**Where to build:** build and test code in your own project repository first ([guide](../docs/19-own-project-repo.md)). Then copy the files to the path above in your cohort clone, fix their imports, run the proof there and commit. Writing tasks can be written directly in the cohort folder.

**Steps:**

1. Open VS Code in the repository root.
2. Read [docs/15 individual extension](../docs/15-individual-extension.md) and pick one scope that fits your app.
3. Create `students/<student-id>/week-19/extension/plan.md`. Replace <student-id> with your number, for example RB7.
4. In `plan.md`, write the user need, exact paths, one clear limit, failure cases and a short time estimate.
5. Ask a peer or mentor in Discord to review the plan before you add code.
6. Open your continuing API files, for example `students/<student-id>/week-06/api/app.ts`, and add the smallest change that meets the plan.
7. Add tests next to your app code for the new behaviour and one failure case. Use the test pattern you used before.
8. If the change needs a database table or column, add a forward migration under `students/<student-id>/week-08/database/migrations`.
9. Update the API spec you wrote earlier if an endpoint changes.
10. Run `npm run typecheck` from the repository root.
11. Run `npm test` from the repository root.
12. Run `npm run test:student -- RBx` from the repository root. Replace RBx with your ID.
13. If you changed database behaviour, run `npm run test:student:db -- RBx` from the repository root. Replace RBx with your ID. The test database name must end in `_test`.
14. Ask a peer to reproduce the new behaviour and one failure case.
    How to think about it: a small change you can prove is stronger than a large feature you cannot explain.

**If you get stuck:**

- Read the full error text first. Check the file path and the exact failing test name.
- Search for `fastify route integration test` or `postgres forward migration test`.
- Ask in Discord with the command you ran and the exact error text.

##### 6. What to Commit

- [ ] `students/<student-id>/week-19/extension/plan.md` (and any companion test, notes or migration file the task names)
- [ ] The proof from "Proof for review" is written down or passes
- [ ] I avoided the known trap
- [ ] Commit message: `B11.1 implement a small reviewed extension`

#### Task 2 - Write an attributable technical case study (`E14.1`)

##### 1. What We Are Doing

You write a short technical case study about your own work in this sprint. You link your claims to your commits and reviews. You work in VS Code and use your code, notes and git history as evidence.

##### 2. Why We Are Doing It

The client and future employers need to see what you personally built and why. A clear case study turns code into evidence you can discuss in an interview.

##### 3. What to Learn First

- Authorship: show which commits and files are yours.
- Trade-offs: explain one choice and what you gave up.
- Hard-problem explanation: describe the problem, your failed try and the fix.
- Honest evidence: claim only work you can trace.
- Resume statements: write two short claims you can defend.

##### 4. Where to Find Resources

- Read [docs/10 assessment](../docs/10-assessment.md) for the evidence standard.
- Read [docs/11 scope and continuation](../docs/11-scope-and-continuation.md) to separate core, shared and extension work.
- Use [Git book basics](https://git-scm.com/book/en/v2/Git-Basics-Getting-a-Git-Repository) to review how to get a Git repository.
- Search: git commit authorship evidence, technical case study trade-offs, resume claim evidence.

##### 5. Step-by-Step Guide

**Official task text (do not change):**

- [ ] Write a short case study with user need, architecture, one hard problem, your failed approach, tested fix and one improvement. Link your authored core/extension commits and reviews. Distinguish your own app, shared contributions and supplied helpers. Draft two defensible resume statements; do not claim production, Rust or blockchain work from this sprint.

**Primary path:** `students/<student-id>/week-19/portfolio/case-study.md`.

**Proof for review:** A peer can trace every implementation claim to code and proof and ask you to explain one trade-off. No secrets or private grades appear.

**Known trap:** A shared repo URL or generated essay is not evidence that you personally implemented each feature.

**Where to build:** build and test code in your own project repository first ([guide](../docs/19-own-project-repo.md)). Then copy the files to the path above in your cohort clone, fix their imports, run the proof there and commit. Writing tasks can be written directly in the cohort folder.

**Steps:**

1. Open VS Code in the repository root.
2. Open your repository on GitHub and view its commit history. List three to five commits that you authored for core or extension work.
3. Create `students/<student-id>/week-19/portfolio/case-study.md`. Replace <student-id> with your number, for example RB7.
4. Write the user need and a short architecture summary. Name the files that show your work.
5. Describe one hard problem, one failed approach, the tested fix and one improvement.
6. Add links to your commits and reviews. Say clearly what is your app, what is shared work and what is supplied help.
7. Draft two resume statements. Use only claims you can prove with code, tests or a commit.
8. Ask a peer to trace each claim to a file or commit and to ask you about one trade-off.
9. Run `npm run format:check` before you finish.
   How to think about it: write for a reader who will check every claim, not for a reader who will only skim.

**If you get stuck:**

- Read the commit diff for the claim you want to make. If you cannot find it, remove or soften the claim.
- Search for `git log author evidence` or `technical case study trade-offs`.
- Ask in Discord with the claim you want to make and the commit you think proves it.

##### 6. What to Commit

- [ ] `students/<student-id>/week-19/portfolio/case-study.md` (and any companion test, notes or migration file the task names)
- [ ] The proof from "Proof for review" is written down or passes
- [ ] I avoided the known trap
- [ ] Commit message: `E14.1 write an attributable technical case study`

#### Task 3 - Rehearse the complete portfolio demonstration (`C06.2`)

##### 1. What We Are Doing

You plan and rehearse a demo under three minutes. The demo shows the core operator flow and your bounded extension (an extension with one clear limit), using synthetic records. You work in VS Code for the plan and in the browser for the rehearsal.

##### 2. Why We Are Doing It

The client needs to see the merchant flow work from start to finish. A short, safe demo shows value, limits and your own extension without exposing credentials.

##### 3. What to Learn First

- User-focused sequence: start with the operator need, then show the result.
- Safe synthetic data: use fake records only and no secrets.
- Paging and conflict cases: show normal use and one clear error.
- Two-merchant isolation: show that one merchant cannot see another merchant's data.
- Time control: rehearse with a timer and cut extra words.

##### 4. Where to Find Resources

- Read [docs/04 API and security contract](../docs/04-api-and-security-contract.md) for the routes and safe behaviour.
- Read [shared/delivery/README.md](../shared/delivery/README.md) for delivery notes.
- Use the project commands in docs/02 section 7 for setup and checks.
- Search: synthetic demo data, merchant isolation demo, three minute technical demo.

##### 5. Step-by-Step Guide

**Official task text (do not change):**

- [ ] Plan a demo under three minutes showing the core operator flow and your bounded extension. Prepare synthetic records for paging, duplicates/conflict and two-merchant isolation, and choose a focused negative case to show. Check setup steps and the updated OpenAPI; save credentials only in ignored configuration. Rehearse without silently changing the product contract.

**Primary path:** `students/<student-id>/week-19/delivery/demo-plan.md`.

**Proof for review:** A peer follows the planned sequence, sees real requests/results and identifies your extension and one limitation. The plan fits the time limit without exposing credentials.

**Known trap:** Do not use a public tunnel, paid deployment or a polished video to replace clean-start and backend test evidence.

**Where to build:** build and test code in your own project repository first ([guide](../docs/19-own-project-repo.md)). Then copy the files to the path above in your cohort clone, fix their imports, run the proof there and commit. Writing tasks can be written directly in the cohort folder.

**Steps:**

1. Open VS Code in the repository root.
2. Read [docs/04 API and security contract](../docs/04-api-and-security-contract.md) and list the core flow steps you will show.
3. Create `students/<student-id>/week-19/delivery/demo-plan.md`. Replace <student-id> with your number, for example RB7.
4. Write the demo sequence in time order. Keep it under three minutes.
5. Prepare enough synthetic records to show at least two pages.
6. Prepare one duplicate or conflict case.
7. Prepare records for two separate merchants.
8. Pick one clear failure to show, for example a bad login or a record from another merchant.
9. Check the setup steps and the updated OpenAPI file. Keep any login values in a local file that git ignores.
10. Rehearse in the browser with a timer. Do not fix or change routes during the demo.
11. Ask a peer to follow your plan and point to your extension and one limitation.
    How to think about it: show the merchant operator's actions and results. Explain only the files needed to support your claims.

**If you get stuck:**

- Run the demo once without talking. Find the slow step and cut it.
- Search for `merchant isolation demo` or `synthetic demo data`.
- Ask in Discord with the demo step that failed and the exact request or error text.

##### 6. What to Commit

- [ ] `students/<student-id>/week-19/delivery/demo-plan.md` (and any companion test, notes or migration file the task names)
- [ ] The proof from "Proof for review" is written down or passes
- [ ] I avoided the known trap
- [ ] Commit message: `C06.2 rehearse the complete portfolio demonstration`

### Two-hour problem-solving block (`P19.1`)

**Focus:** Revisit a weak earlier problem

Choose the same mentor-assigned earlier exercise for the cohort, solve it without copied code and compare the new explanation with the first attempt.

**Evidence path:** `students/<student-id>/week-19/problem-solving/README.md`.

**Proof:** Include the solution and tests, empty/boundary cases, one corrected attempt and a plain-language explanation. Revisit one earlier exercise within the same two-hour block.

**How to start:**

1. Open the mentor-assigned earlier exercise from your earlier week folder.
2. Read your first attempt and write down what was weak or unclear.
3. Solve the exercise again in a new file without copying the first answer.
4. Add tests, including one empty case and one boundary case.
5. Write a short plain-language explanation and one corrected attempt.
6. Run `npm run test:practice -- <test file>` and compare the new explanation with the first attempt.

**If you get stuck:**

Read the failing test name and the exact error text first. Search for the concept name, then ask in Discord with your command and the error text.

Follow the [problem-solving guide](../docs/14-problem-solving.md). This common block is included in the weekly budget and does not replace the three project tasks.

### Shared contribution

Assigned task owners contribute reviewed work to `shared/delivery/extension-decisions.md and shared/delivery/portfolio-guide.md`. Record scope, non-author review and actual proof in the [Week 19 contribution log](../shared/delivery/rotations/week-19.md). Everyone completes the same core practice; no fixed pair is a prerequisite. See [team repo, shared work and delivery](../docs/16-team-repo-and-delivery.md).

## 6. What to Commit

Use this checklist at the end of the week.

- [ ] Focused task-ID commits include required implementation and failure proofs
- [ ] The common problem-solving block and one corrected attempt are recorded
- [ ] Peer review and assigned shared task or witness work are complete
- [ ] One implementation decision and failure case are explained
- [ ] One weekly pull request is open from branch `rb<number>-week-19` into `main` (see the [student guide](../docs/03-student-guide.md))

If you are short on time, cut in this order: extra reading first, then optional polish. Never cut the proof for a task.

Next: [Week 20](week-20.md).
