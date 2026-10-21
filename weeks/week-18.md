# Week 18: Make failures visible and requests bounded

MerchantDesk | Sprint 1 | B: Backend Development + C: Client Integration + E: Engineering and Delivery

## 1. What We Are Doing

This week you make failures visible and you stop requests from growing without a limit. A cap is a hard maximum that you set yourself. You put caps on request bodies and page input, add database timeouts, and separate "the process is up" from "the database can serve a query". You also make your client show an honest message when a request fails, and you prove that your automated checks can actually fail.
At the end of the week you have bounded endpoints, structured logs with secrets removed, a client that labels each error, and a written proof file for your automated checks.

This week has three project tasks and one problem-solving block:

- `B09.1`: Bound and diagnose the API (120 minutes)
- `C05.1`: Make the client honest during failure (80 minutes)
- `E10.1`: Verify the current CI gate (100 minutes)
- `P18.1`: weekly problem-solving block (120 minutes)

Outcome: Bounded endpoints, redacted diagnostic logs and deliberate client errors.

## 2. Why We Are Doing It

**The project need:** A slow database, bad request or expired session should produce a useful failure rather than a misleading demo.

The MerchantDesk need this week is simple: a slow database, a bad request or an expired session should produce a useful failure instead of a misleading demo. A merchant operator who sees a wrong screen makes wrong decisions.
Real backend teams spend much of their time on limits, timeouts, logs you can trust and clients that report each failure honestly. These skills are what separates a demo from a service.

## 3. What to Learn First (Prerequisites)

**Before you start:** Reuse the existing suite and GitHub workflow. Do not introduce AWS, Docker, Redis or a monitoring vendor. Mac and Windows both remain supported run paths.

**Review these ideas first:**

- Request body limit: a hard cap on how much one request can send.
- Input bounds: maximum page size and a fixed set of allowed filter values.
- Timeouts: a slow database must fail, not hang forever.
- Liveness vs readiness: the process being up is not proof it can store events.
- Structured logs: named fields (request ID, route, outcome) instead of free text.
- Redaction: remove cookies, auth headers, passwords and session keys before logging.
- Automated checks (CI): the commands that run automatically on GitHub when you push a branch.
- Client error states: not signed in, bad request, empty list and failed request look different.

**By the end of this week you can:**

- finish `B09.1`: body/query limits, timeouts, readiness and structured logs
- finish `C05.1`: recoverable errors, accessible feedback and duplicate-submit prevention
- finish `E10.1`: existing checks, real DB tests and Mac, Windows and Linux portability

## 4. Where to Find Resources

**Where you work.** Write code in VS Code. Run commands in the VS Code terminal, from the repository root. Open the pull request and read reviews in your browser on GitHub. Replace `<student-id>` with your number, for example `RB7`. New to the setup? Use the [setup guide for Mac and Windows](../docs/02-setup-guide-mac-windows.md). Lost in the folders? See the [repository map](../docs/17-repo-map.md). Build and test code pieces first in your [own project repository](../docs/19-own-project-repo.md). When a piece works, copy it into your cohort folder and open the pull request, as shown in the [VS Code workflow](../docs/18-vscode-workflow.md).

**Your week in order**

| Task    | Concepts and reading                                                                                                                                                                                         | Planned task minutes |
| ------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | -------------------: |
| `B09.1` | Body/query limits, timeouts, readiness and structured logs. [Fastify logging](https://fastify.dev/docs/v5.7.x/Reference/Logging/), [node-postgres pooling](https://node-postgres.com/features/pooling)       |                  120 |
| `C05.1` | Recoverable errors, accessible feedback and duplicate-submit prevention. [React quick start](https://react.dev/learn), [Using Fetch](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch) |                   80 |
| `E10.1` | Existing checks, real DB tests and Mac, Windows and Linux portability. [GitHub Actions](https://docs.github.com/en/actions)                                                                                  |                  100 |

Task time is part of the [15-hour core weekly budget](../docs/11-scope-and-continuation.md), not the whole week. Guided learning, consolidation, review, shared work and the two-hour problem-solving block are also included. Up to five additional hours are for repetition or finishing feedback, not extra required technologies.

**Search keywords if you get stuck:**

- fastify bodyLimit 413 response
- node-postgres connectionTimeoutMillis statement_timeout
- fastify logger redact cookie authorization
- readiness liveness health check difference
- react fetch response.ok error state retry
- github actions postgres service container job

Application layout: follow the [application wiring guide](../docs/12-application-wiring.md).

## 5. Step-by-Step Guide

Work on one task at a time. One task means one focused change, its required companion files and proof, and one commit. The weekly routine is in the [student guide](../docs/03-student-guide.md). The box called "Official task text" is the rule for the task. Do not change it. The numbered steps below it show you how to start.

### Core tasks

#### Task 1 - Bound and diagnose the API (`B09.1`)

##### 1. What We Are Doing

Your API must refuse work it cannot handle safely. In this task you cap the event body at 16 KiB, bound page and filter inputs, and set database connection and query timeouts. You also separate liveness from readiness and write one structured log line per request with no secrets in it.
You work in VS Code and the terminal, on `students/<student-id>/week-18/api/operation.ts`.

##### 2. Why We Are Doing It

One oversized body or one stuck query can block the API for every merchant. A readiness check that fails when the database is down stops traffic from reaching a server that cannot store events.

##### 3. What to Learn First

- How to set a body limit on one route or the whole server.
- How a connection timeout differs from a query timeout.
- Why liveness and readiness answer two different questions.
- Which fields make one log line useful for tracing a fault.
- Why secrets must be removed before anything is written to a log.

##### 4. Where to Find Resources

- [Fastify logging](https://fastify.dev/docs/v5.7.x/Reference/Logging/)
- [node-postgres pooling](https://node-postgres.com/features/pooling)
- [docs/04-api-and-security-contract](../docs/04-api-and-security-contract.md)
- [docs/12-application-wiring](../docs/12-application-wiring.md)
- Search keywords: "fastify bodyLimit 413", "node-postgres statement_timeout", "fastify logger redact cookies"

##### 5. Step-by-Step Guide

**Official task text (do not change):**

- [ ] Enforce the 16 KiB event body cap, bounded page/filter inputs and database connection/query timeouts. Keep liveness separate from readiness: readiness must fail when the database cannot serve a simple check. Log request ID, route, outcome and safe event ID, with cookie/auth/password/session key redaction.

**Primary path:** `students/<student-id>/week-18/api/operation.ts`.

**Proof for review:** Oversized body and unavailable DB have deliberate failures; a request ID traces one fault without credentials in logs.

**Known trap:** A process being alive is not evidence that it can store events. No unbounded payload logging.

**Where to build:** build and test code in your own project repository first ([guide](../docs/19-own-project-repo.md)). Then copy the files to the path above in your cohort clone, fix their imports, run the proof there and commit. Writing tasks can be written directly in the cohort folder.

**Steps:**

1. Open VS Code in the repository root.
2. Open `students/<student-id>/week-18/api/operation.ts`. Replace `<student-id>` with your number, for example RB7.
3. Write one small named constant for the 16 KiB event body cap, one for the maximum page size and one for each allowed filter value.
4. Read the node-postgres pooling page and write down the two timeouts you will set. The connection timeout is a setting on the pool you create. The query timeout is a PostgreSQL setting that you apply to the session or to one query. Write in your file where each one goes.
5. Now write how you will check that each timeout is active. One way: time one slow check before you set the timeout and after you set it.
6. Split your health checks into two. Write what liveness returns and what readiness returns when the database cannot answer a simple check.
7. Write your log field list: request ID, route, outcome, safe event ID. Mark every field that must be redacted (cookie, auth header, password, session key).
8. Connect your module to the running API. Open `students/<student-id>/week-06/api/app.ts` and wire your operation module into it, following `docs/12-application-wiring.md`. A file that is never wired in never runs.
9. Prove the body cap: send a body larger than 16 KiB and write the exact error it returns.
10. Stop PostgreSQL. Use the start and stop instructions in the setup guide, `docs/02-setup-guide-mac-windows.md`. Mac and Windows use different commands, so open your platform section. Then call readiness and write the exact error.
11. Restart PostgreSQL with the setup guide instructions. Call readiness again and confirm that it now passes.
12. Run `npm run typecheck` and then `npm run check` from the repository root.
13. Commit your files: `git add students/<student-id>/week-18/api/operation.ts students/<student-id>/week-06/api/app.ts`, then `git diff --cached`, then `git commit -m "B09.1 bound and diagnose the API"`.
    How to think about it: every failure needs one clear error for the client and one log line for you, and that log line never carries a credential.

**If you get stuck:**

- Read the exact error text first. A 413 usually means your body cap works. A request that never returns usually means a missing timeout.
- If your new code seems to have no effect, check that `week-06/api/app.ts` really imports and uses your module.
- Search "node-postgres connectionTimeoutMillis statement_timeout" and read the pooling page again.
- Ask in Discord with the command you ran and the exact error text. Never paste a real cookie or session key.

##### 6. What to Commit

- [ ] `students/<student-id>/week-18/api/operation.ts` (and any companion test, notes or migration file the task names)
- [ ] The proof from "Proof for review" is written down or passes
- [ ] I avoided the known trap
- [ ] Commit message: `B09.1 bound and diagnose the API`

#### Task 2 - Make the client honest during failure (`C05.1`)

##### 1. What We Are Doing

You take the existing login, list and detail screens and make them honest when something goes wrong. You exercise a 401, a 400 response, empty data and a stopped API, and you show a different, labelled message for each case.
You work in VS Code and the browser, on `students/<student-id>/week-16/client/src/App.tsx`.

##### 2. Why We Are Doing It

A merchant operator must know if they are signed out, if there are simply no matching records, or if the request failed. A screen that guesses makes the operator trust wrong information.

##### 3. What to Learn First

- How to check a fetch response before you show anything.
- That `fetch` does not reject when the server returns an error status. It gives you a normal response with a status like 400 or 401, so you must check `response.ok` yourself.
- What separates 401, 400, an empty list and a network failure.
- How to disable a button while a request is still running.
- How to keep filter state so a retry uses the same filters.
- Why automatic write retries can create duplicate events.

##### 4. Where to Find Resources

- [React quick start](https://react.dev/learn)
- [docs/04-api-and-security-contract](../docs/04-api-and-security-contract.md)
- [docs/12-application-wiring](../docs/12-application-wiring.md)
- [docs/13-api-documentation](../docs/13-api-documentation.md)
- Search keywords: "react fetch response.ok error state", "react disable button while loading", "react keep state on retry"

##### 5. Step-by-Step Guide

**Official task text (do not change):**

- [ ] Exercise 401, a 400 response, empty data and a stopped API on the existing login/list/detail interface. Preserve useful filter state, label errors, disable an in-flight login or navigation action and offer a retry for failed reads. Event submission stays in the API/simulator; no event-entry form is required. Do not add automatic write retries that hide an event's identity.

**Primary path:** `students/<student-id>/week-16/client/src/App.tsx`.

**Proof for review:** A peer can distinguish not signed in, no matching records and a failed request; retry does not invent extra events.

**Known trap:** Do not show a success toast before checking the response.

**Where to build:** build and test code in your own project repository first ([guide](../docs/19-own-project-repo.md)). Then copy the files to the path above in your cohort clone, fix their imports, run the proof there and commit. Writing tasks can be written directly in the cohort folder.

**Steps:**

1. Open VS Code in the repository root.
2. In the first terminal, start your own API: `npm run dev:student -- <student-id>`. Replace `<student-id>` with your number, for example RB7. Leave it running on port 3000.
3. Your client must call this API, the one you started in step 2, and not another server.
4. In a second terminal, start your own client. Follow the client startup instructions in `docs/12-application-wiring.md`. Open `students/<student-id>/week-16/client`, the client you edited, not the shared UI. Then open the address the guide shows in the browser.
5. Open `students/<student-id>/week-16/client/src/App.tsx`.
6. Write down the four states you must show: not signed in (401), bad request (400), no matching records (empty data), failed request (API stopped).
7. Check the response before you show any message. Test `response.ok` first. No success message and no empty view before the check.
8. Disable the login button and the navigation actions while a request is still running.
9. Keep filter values in state and add a retry button only for failed reads.
10. Test the stopped API: stop the API with Ctrl+C in its terminal, reload the page and read the message.
11. Restart the API with `npm run dev:student -- <student-id>` and leave it running.
12. Clear the session cookie in the browser and reload the page. Check that the 401 message appears.
13. Use the API contract in `docs/04-api-and-security-contract.md` to send one request that the contract calls invalid. Check that the labelled 400 message appears.
14. Choose a valid filter value that matches no synthetic records. Check that the empty message appears, and that it is not the same text as the 400 message.
15. Commit the change: `git add students/<student-id>/week-16/client/src/App.tsx`, then `git diff --cached`, then `git commit -m "C05.1 make the client honest during failure"`.
    How to think about it: write each message for the operator, not for the console, and never invent data to fill a failed read.

**If you get stuck:**

- If your change does not appear in the browser, check that you started your own client from `docs/12-application-wiring.md`, not the shared UI.
- Look at the browser Network tab. If the request status is 401 or 400, the message must come from your check, not from a generic error.
- Search "react fetch response.ok error state" and compare your code with a small example.
- Ask in Discord with your console output and the exact error text. Remove request headers before you paste.

##### 6. What to Commit

- [ ] `students/<student-id>/week-16/client/src/App.tsx` (and any companion test, notes or migration file the task names)
- [ ] The proof from "Proof for review" is written down or passes
- [ ] I avoided the known trap
- [ ] Commit message: `C05.1 make the client honest during failure`

#### Task 3 - Verify the current CI gate (`E10.1`)

##### 1. What We Are Doing

You read the CI workflow that is already committed and explain each job in your own words. You check how your real database tests are discovered, practise the change you would need in your own folder, add a product migration test, and break one check on purpose to show the checks can fail.
You work in VS Code, the terminal and GitHub, and you write `students/<student-id>/week-18/quality/ci-proof.md`.

##### 2. Why We Are Doing It

A green check on a branch means something only if the checks can fail. MerchantDesk keeps its promises to merchants only when a broken migration never reaches main.

##### 3. What to Learn First

- What a workflow, a job and a step are in GitHub Actions.
- What the PostgreSQL service container gives a job.
- Why practice fixture checks are not proof of product migrations.
- How the database suite discovers your `.db.test.ts` files.
- Why a Windows run path and a Linux run path can behave differently.

##### 4. Where to Find Resources

- [GitHub Actions: understand GitHub Actions](https://docs.github.com/en/actions/get-started/understand-github-actions)
- [docs/02 setup guide, section 7 commands](../docs/02-setup-guide-mac-windows.md)
- [docs/16-team-repo-and-delivery](../docs/16-team-repo-and-delivery.md)
- Search keywords: "github actions postgres service", "github actions job steps", "node:test glob test discovery"

##### 5. Step-by-Step Guide

**Official task text (do not change):**

- [ ] Explain the committed starter jobs and extend the database suite discovery with your actual .db.test.ts tests. The existing PostgreSQL service runs practice-fixture checks; it is not proof of product migrations. Add a product migration test and demonstrate one deliberately failing check locally and, once published, on a real PR.

**Primary path:** `students/<student-id>/week-18/quality/ci-proof.md`.

**Proof for review:** The required commands run from a clean install; a deliberately broken assertion/migration makes the relevant check fail.

**Known trap:** Do not make every student add a live root workflow. Practise in your folder; only the assigned task owner promotes the reviewed shared change.

**Where to build:** build and test code in your own project repository first ([guide](../docs/19-own-project-repo.md)). Then copy the files to the path above in your cohort clone, fix their imports, run the proof there and commit. Writing tasks can be written directly in the cohort folder.

**Steps:**

1. Open VS Code in the repository root.
2. Open `.github/workflows/checks.yml` and read it once from top to bottom. Do not change it.
3. In `students/<student-id>/week-18/quality/ci-proof.md`, write one line per job: its name, the command it runs and what it proves. Replace `<student-id>` with your number, for example RB7.
4. Find the step that discovers database test files. Write down the exact configuration it uses: the file pattern or the command, copied as it is.
5. Check whether your real `.db.test.ts` tests are found. Write down what you see.
6. If your files are not found, work out the change you need and practise it only in your own folder. Write the change you would make in your proof file. Do not edit the shared root workflow.
7. Pass your proposed change to the assigned shared task owner, in Discord or in a pull request comment. That owner, not you, promotes the reviewed change.
8. Write in the same file that the PostgreSQL service runs practice fixture checks, and that this is not proof of product migrations.
9. Add one small product migration test to your own database suite.
10. Run your own database suite to confirm that discovery finds the new test: `npm run test:student:db -- <student-id>`. Use a test database whose name ends in `_test`. Record the result.
11. Break one assertion in that new migration test on purpose. Run `npm run test:student:db -- <student-id>` again and copy the exact failure text into your file. Leave the test broken for now.
12. Run `npm ci` from the repository root, then `npm run check`. Record that result separately. This check needs no database, so it cannot prove your migration test.
13. Push your branch with the broken test and open the pull request. Open the run on GitHub and record the job names, including the job that failed.
14. Now fix the broken assertion. Run `npm run test:student:db -- <student-id>` again and record the passing result.
15. Push the fix. Open the new run on the pull request and record the passing job names next to the earlier failure.
16. A maintainer merges your pull request after review and passing checks. You do not merge your own pull request.
    How to think about it: a check you have never seen fail is a check you cannot trust, so your proof file must show one real failure next to the passing run.

**If you get stuck:**

- Read the failing job log from the first red line, not from the bottom.
- If the pull request run is green although your test was broken, your test is not discovered. Go back to step 4.
- Search "github actions postgres service" and compare the `services` block with the official example.
- Ask in Discord with the job name, the step name and the exact error text.

##### 6. What to Commit

- [ ] `students/<student-id>/week-18/quality/ci-proof.md` (and any companion test, notes or migration file the task names)
- [ ] The proof from "Proof for review" is written down or passes
- [ ] I avoided the known trap
- [ ] Commit message: `E10.1 verify the current CI gate`

### Two-hour problem-solving block (`P18.1`)

**Focus:** Bounded retries for a read exercise

Write a pure decision function for a maximum of three read attempts; test the bound without adding automatic application write retries.

**Evidence path:** `students/<student-id>/week-18/problem-solving/README.md`.

**Proof:** Include the solution and tests, empty/boundary cases, one corrected attempt and a plain-language explanation. Revisit one earlier exercise within the same two-hour block.

**How to start:**

1. Read the problem-solving block text for P18.1 and write one sentence: what counts as one read attempt, and what your function returns.
2. Create one TypeScript file in `students/<student-id>/week-18/` for the pure decision function. Pure means the output depends only on the input, and the function changes nothing outside itself. No network calls inside it.
3. Write the function so the number of attempts can never go past three, and keep it pure: the same input always gives the same output.
4. Write a second file with `node:test` cases: 0 attempts, 1, 3, 4, an empty value and a boundary value.
5. Run your test file from the repository root: `npm run test:practice -- <path to your test file>`.
6. Break one case on purpose, read the error, fix it, and write two plain sentences about what you changed. Then revisit one earlier exercise in the same block and note what you had to look up.

**If you get stuck:**

If the bound is hard to test, write the cases on paper first: 0, 1, 3, 4 and an empty value. Ask in Discord with your test output and the exact error text.

Follow the [problem-solving guide](../docs/14-problem-solving.md). This common block is included in the weekly budget and does not replace the three project tasks.

### Shared contribution

Assigned task owners contribute reviewed work to `shared/api/src/app.ts, shared/api/test/, shared/web/src/App.tsx and .github/workflows/checks.yml`. Record scope, non-author review and actual proof in the [Week 18 contribution log](../shared/delivery/rotations/week-18.md). Everyone completes the same core practice; no fixed pair is a prerequisite. See [team repo, shared work and delivery](../docs/16-team-repo-and-delivery.md).

## 6. What to Commit

Use this checklist at the end of the week.

- [ ] Focused task-ID commits include required implementation and failure proofs
- [ ] The common problem-solving block and one corrected attempt are recorded
- [ ] Peer review and assigned shared task or witness work are complete
- [ ] One implementation decision and failure case are explained
- [ ] One weekly pull request is open from branch `rb<number>-week-18` into `main` (see the [student guide](../docs/03-student-guide.md))

If you are short on time, cut in this order: extra reading first, then optional polish. Never cut the proof for a task.

Next: [Week 19](week-19.md).
