# Week 12: Enforce merchant ownership across every route

MerchantDesk | Sprint 1 | D: SQL and Persistence + B: Backend Development + C: Client Integration

## 1. What We Are Doing

This week you protect every route of your event API. A signed-in operator may only see and change their own merchant's events, even when they send another merchant's ID. You write SQL queries that filter by merchant, tests that call the API and check stored data, and a script that logs in before sending an event. At the end you have a working authenticated event API that rejects cross-merchant requests.

This week has three project tasks and one problem-solving block:

- `D05.1`: Scope every database operation (110 minutes)
- `B06.1`: Test the protected API end to end (120 minutes)
- `C02.1`: Update the simulator to authenticate (70 minutes)
- `P12.1`: weekly problem-solving block (120 minutes)

Outcome: A working authenticated event API with cross-merchant rejection. Milestone: Protected merchant flow.

## 2. Why We Are Doing It

**The project need:** A signed-in operator must not see or write another merchant's events.

The MerchantDesk client need is simple: a signed-in operator must not see or write another merchant's events. Real payment systems fail badly when one merchant can read another merchant's data, so ownership must be checked in the database and in the API, not only in the user interface. This week you test merchant ownership using synthetic data.

## 3. What to Learn First (Prerequisites)

**Before you start:** Seed two synthetic merchants and one operator for each. Derive merchant ownership from a verified session and current database operator, never from the request body or URL alone.

**Review these ideas first:**

- Ownership from the session: the server decides the merchant, not the request body.
- Owner-filtered query: every SQL statement also filters on merchant_id.
- Parameterized query: values travel as $1, $2, never as pasted text.
- Foreign key: the database enforces that a merchant exists.
- Same 404 for both cases: missing ID and another owner's ID look identical.
- Merchant-scoped unique key: two merchants may use the same provider_event_id.
- Negative test: a test that proves the rejected case stays rejected.

**By the end of this week you can:**

- finish `D05.1`: owner-filtered SQL, join boundaries and foreign keys
- finish `B06.1`: authentication hooks, authorization and negative integration tests
- finish `C02.1`: cookie-aware HTTP consumers and safe configuration

## 4. Where to Find Resources

**Where you work.** Write code in VS Code. Run commands in the VS Code terminal, from the repository root. Open the pull request and read reviews in your browser on GitHub. Replace `<student-id>` with your number, for example `RB7`. New to the setup? Use the [setup guide for Mac and Windows](../docs/02-setup-guide-mac-windows.md). Lost in the folders? See the [repository map](../docs/17-repo-map.md). Build and test code pieces first in your [own project repository](../docs/19-own-project-repo.md). When a piece works, copy it into your cohort folder and open the pull request, as shown in the [VS Code workflow](../docs/18-vscode-workflow.md).

**Your week in order**

| Task    | Concepts and reading                                                                                                                                                                                                | Planned task minutes |
| ------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------: |
| `D05.1` | Owner-filtered SQL, join boundaries and foreign keys. [Parameterized node-postgres queries](https://node-postgres.com/features/queries), [PostgreSQL 17 tutorial](https://www.postgresql.org/docs/17/tutorial.html) |                  110 |
| `B06.1` | Authentication hooks, authorization and negative integration tests. [Fastify testing](https://fastify.dev/docs/v5.7.x/Guides/Testing/)                                                                              |                  120 |
| `C02.1` | Cookie-aware HTTP consumers and safe configuration. [Using Fetch](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch)                                                                           |                   70 |

Task time is part of the [15-hour core weekly budget](../docs/11-scope-and-continuation.md), not the whole week. Guided learning, consolidation, review, shared work and the two-hour problem-solving block are also included. Up to five additional hours are for repetition or finishing feedback, not extra required technologies.

**Search keywords if you get stuck:**

- node-postgres parameterized query
- fastify inject test headers cookie
- sql where clause multiple conditions
- fetch credentials cookie node
- fastify body validation additional properties

Application layout: follow the [application wiring guide](../docs/12-application-wiring.md).

## 5. Step-by-Step Guide

Work on one task at a time. One task means one focused change, its required companion files and proof, and one commit. The weekly routine is in the [student guide](../docs/03-student-guide.md). The box called "Official task text" is the rule for the task. Do not change it. The numbered steps below it show you how to start.

### Core tasks

#### Task 1 - Scope every database operation (`D05.1`)

##### 1. What We Are Doing

You write a SQL file that scopes every database operation to one merchant. You work in VS Code to write the file, then in the terminal to run the queries through node-postgres. The four paths are list, detail, conflict lookup and insert, plus one query that finds an operator's current merchant.

##### 2. Why We Are Doing It

If a query forgets the merchant filter, one operator can read another merchant's payments. Filtering in SQL is the last line of defence, and it holds even when the API code has a bug.

##### 3. What to Learn First

- Parameterized queries send SQL text and values separately. Use `$1`, `$2` and a values array.
- Filtering on two columns: event id plus merchant_id in the same WHERE clause.
- Merchant-scoped unique key: a unique rule that includes merchant_id.
- Foreign key: the database refuses an event whose merchant does not exist.
- Same response for hidden and missing: both return 404, so nothing leaks.

##### 4. Where to Find Resources

- [node-postgres queries](https://node-postgres.com/features/queries): how to pass values with $1 and a values array.
- [docs/02 setup guide, section 7](../docs/02-setup-guide-mac-windows.md): the project commands you use this week.
- [docs/04 API and security contract](../docs/04-api-and-security-contract.md): the error codes and body rules.
- [docs/12 application wiring](../docs/12-application-wiring.md): where the app factory lives and how to use your queries inside it.
- Search keywords: `postgres where two conditions`, `node-postgres parameterized query`, `postgres unique constraint two columns`.

##### 5. Step-by-Step Guide

**Official task text (do not change):**

- [ ] Apply merchant_id filters to list, detail, conflict lookup and insertion paths. Resolve an operator's current merchant in the database. For an existing event owned by another merchant return the same 404 as a missing ID. Keep duplicate keys merchant-scoped.

**Primary path:** `students/<student-id>/week-12/database/owned-queries.sql`.

**Proof for review:** Merchant A cannot read B's event even with its exact ID. Each merchant may use the same provider_event_id independently.

**Known trap:** A hidden UI button is not database authorization.

**Where to build:** build and test code in your own project repository first ([guide](../docs/19-own-project-repo.md)). Then copy the files to the path above in your cohort clone, fix their imports, run the proof there and commit. Writing tasks can be written directly in the cohort folder.

**Steps:**

1. Open VS Code in the repository root.
2. Create the folder `students/<student-id>/week-12/database`, then create the file `owned-queries.sql` inside it.
3. At the top of the file, write a short comment that lists the five queries you will write: list, detail, conflict lookup, insert, operator to merchant.
4. Write two seed `SELECT` statements that show your two synthetic merchants and the operator for each. Run them to confirm the data exists.
5. Write the list query. It must take the merchant id as a parameter and filter on it.
6. Write the detail query. Put both the event id and the merchant id in the `WHERE` clause.
7. Write the conflict lookup. Filter on merchant id and provider_event_id together.
8. Write the insert. Take merchant_id as a parameter, and rely on the merchant-scoped unique key for duplicates.
9. Write the query that resolves an operator's current merchant from the operator table.
10. Use these queries in your continuing API at `students/<student-id>/week-06/api/app.ts`. Follow the application wiring guide in docs/12.
11. Add any required constraint migration under `students/<student-id>/week-08/database/migrations`, so the merchant-scoped unique key exists in the database.
12. Run each query through node-postgres with a values array, as the node-postgres queries resource shows. Check that a merchant id from the other merchant returns zero rows.
    How to think about it: ask yourself for every query, "what stops this row from belonging to another merchant?" If the answer is only in the API code, add the filter in SQL too.

**If you get stuck:**

- Read the full psql error text. A wrong number of parameters is the most common error.
- Check that every `WHERE` clause names the table alias that really has merchant_id.
- Ask in Discord with the command and the exact error text. Remove passwords, connection strings and other secrets before posting the command or error.

##### 6. What to Commit

- [ ] `students/<student-id>/week-12/database/owned-queries.sql` (and any companion test, notes or migration file the task names)
- [ ] The proof from "Proof for review" is written down or passes
- [ ] I avoided the known trap
- [ ] Commit message: `D05.1 scope every database operation`

#### Task 2 - Test the protected API end to end (`B06.1`)

##### 1. What We Are Doing

You write an integration test file that calls your real app with Fastify `inject`, against a disposable database. The tests cover anonymous requests, one merchant reading another merchant's known ID, a forged merchant_id field in the body, and a valid write by the owner. You work in VS Code and run the tests from the terminal.

##### 2. Why We Are Doing It

Negative tests are proof. They show a reviewer that cross-merchant access fails today, and they will fail loudly the day someone removes a filter.

##### 3. What to Learn First

- `app.inject`: call your routes without starting a network listener.
- Cookie handling in tests: send the session cookie on protected requests.
- Positive and negative cases: every allowed path needs a matching rejected path.
- Safe error bodies: the response must not echo internal details.
- Body validation: an unknown owner field must be rejected, not silently dropped.

##### 4. Where to Find Resources

- [Fastify testing](https://fastify.dev/docs/v5.7.x/Guides/Testing/): `inject`, payloads, headers and cookies.
- [docs/04 API and security contract](../docs/04-api-and-security-contract.md): the status codes your tests assert.
- [docs/12 application wiring](../docs/12-application-wiring.md): where the app factory lives and how to build it in tests.
- Search keywords: `fastify inject cookies test`, `node:test before after hook`, `fastify 401 404 test`.

##### 5. Step-by-Step Guide

**Official task text (do not change):**

- [ ] Test anonymous list/read/write, A reading B's known ID, a forged merchant_id field, and a valid A write. Reject the injected owner field through body validation. Cover login/logout origins and safe error bodies. Use the existing app factory and a disposable database.

**Primary path:** `students/<student-id>/week-12/api/ownership.db.test.ts`.

**Proof for review:** 401 for anonymous, 404 for another owner's detail, 400 for forged body field, and successful own-merchant requests. No test relies only on UI behavior.

**Known trap:** Ensure Fastify does not silently strip merchant_id and make the forged request look accepted.

**Where to build:** build and test code in your own project repository first ([guide](../docs/19-own-project-repo.md)). Then copy the files to the path above in your cohort clone, fix their imports, run the proof there and commit. Writing tasks can be written directly in the cohort folder.

**Steps:**

1. Open VS Code in the repository root.
2. Create the file `students/<student-id>/week-12/api/ownership.db.test.ts`.
3. Import your app factory, not a running server.
4. Build one app instance in a setup hook.
5. Close the app instance at the end.
6. Point the test at a disposable database whose name ends in `_test`, and seed two merchants with one operator each.
7. Write the anonymous cases first: list, read one event, and write an event. Each must return 401.
8. Write the login origin cases: log in with the accepted `Origin` and expect success. Then log in with a rejected `Origin` and expect the code in docs/04.
9. Write the logout origin cases the same way: accepted `Origin` succeeds, rejected `Origin` fails with the code in docs/04.
10. Write the owner case: log in as merchant A, read A's own event, expect 200.
11. Write the cross-merchant case: log in as A, request B's known event id, expect 404 with the same body as an unknown id.
12. Write the forged field case: send a valid body that also contains another merchant's merchant_id. Expect 400, and assert the response body.
13. Write the valid A write, then log out and repeat the same request. Expect 401.
14. Run the file from the repository root with `npm run test:student:db -- RBx`. Replace `RBx` with your id.
    How to think about it: for each allowed request, ask which rejected twin proves the rule is enforced.

**If you get stuck:**

- If the forged request returns 201 instead of 400, check how your body schema treats unknown fields. It may be stripping them before validation.
- Print the full response body and status in the test with a short log line, then read it.
- Ask in Discord with the test name, the command and the exact error text.

##### 6. What to Commit

- [ ] `students/<student-id>/week-12/api/ownership.db.test.ts` (and any companion test, notes or migration file the task names)
- [ ] The proof from "Proof for review" is written down or passes
- [ ] I avoided the known trap
- [ ] Commit message: `B06.1 test the protected API end to end`

#### Task 3 - Update the simulator to authenticate (`C02.1`)

##### 1. What We Are Doing

You write a small script that logs in with disposable credentials and sends one event request with the returned cookie and a real `Origin` header. It must not print passwords or cookie values. You work in VS Code and run the script from the terminal.

##### 2. Why We Are Doing It

The shared simulator sends fake events into MerchantDesk. Once the API is protected, a simulator that cannot log in is useless, so it must behave like a real signed-in client.

##### 3. What to Learn First

- `fetch` in Node: request options, headers and reading the response.
- Reading `Set-Cookie`: use the header API that returns each cookie separately.
- Environment variables: keep credentials out of code and out of output.
- Sending `Origin`: some servers check where a request comes from.

##### 4. Where to Find Resources

- [MDN Using Fetch](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch): request options, headers and response handling.
- [docs/02 setup guide, section 7](../docs/02-setup-guide-mac-windows.md): the project commands, including `npm run practice`.
- Search keywords: `node fetch set-cookie header`, `fetch credentials include node`, `process.env missing variable error`.

##### 5. Step-by-Step Guide

**Official task text (do not change):**

- [ ] Read disposable credentials from local environment variables, log in, reuse the returned cookie on one event request, and send the configured Origin. Keep passwords/cookies out of output. Do not parse combined Set-Cookie strings by splitting on commas.

**Primary path:** `students/<student-id>/week-12/client/send-authenticated.ts`.

**Proof for review:** The same script succeeds for its merchant and fails without the cookie. A witness reproduces the flow.

**Known trap:** This is a sandbox API client, not a signed payment-provider webhook integration.

**Where to build:** build and test code in your own project repository first ([guide](../docs/19-own-project-repo.md)). Then copy the files to the path above in your cohort clone, fix their imports, run the proof there and commit. Writing tasks can be written directly in the cohort folder.

**Steps:**

1. Open VS Code in the repository root.
2. Create the file `students/<student-id>/week-12/client/send-authenticated.ts`.
3. Read `EMAIL`, `PASSWORD`, `BASE_URL` and `ORIGIN` from `process.env`. Stop with a clear message if one is missing.
4. Send a login request with `fetch` to `BASE_URL`. Include the `ORIGIN` header your API expects.
5. Read the cookies with `response.headers.getSetCookie()`. It returns one separate string for each `Set-Cookie` header. Do not join the values and split on commas.
6. Send one event request with the cookie header. Take only the cookie `name=value` pairs. Do not copy attributes such as `Path`, `HttpOnly` or `SameSite` into the request. Send the same `ORIGIN` header.
7. Log only the status and safe fields. Never log the password, the cookie or the full headers.
8. Run it from the repository root. Mac: `EMAIL=... PASSWORD=... BASE_URL=... ORIGIN=... npm run practice -- students/<student-id>/week-12/client/send-authenticated.ts`. Windows (PowerShell): `$env:EMAIL="..."; $env:PASSWORD="..."; $env:BASE_URL="..."; $env:ORIGIN="..."; npm run practice -- students/<student-id>/week-12/client/send-authenticated.ts`.
9. Run it a second time with no cookie step, or with the cookie removed, and confirm the event request fails.
10. Ask a witness in Discord to run the same flow and confirm the result. The witness uses their own disposable synthetic account. Never share passwords or cookies in Discord.

**If you get stuck:**

- Add one temporary log line that prints only the status code, then compare with the API log.
- Check the exact environment variable names and the `ORIGIN` value against your API setting.
- Ask in Discord with the command and the exact error text, but never paste a real password or cookie.

##### 6. What to Commit

- [ ] `students/<student-id>/week-12/client/send-authenticated.ts` (and any companion test, notes or migration file the task names)
- [ ] The proof from "Proof for review" is written down or passes
- [ ] I avoided the known trap
- [ ] Commit message: `C02.1 update the simulator to authenticate`

### Two-hour problem-solving block (`P12.1`)

**Focus:** Isolation and identity keys

Group events by merchant plus provider ID; demonstrate how provider ID alone conflates two merchants.

**Evidence path:** `students/<student-id>/week-12/problem-solving/README.md`.

**Proof:** Include the solution and tests, empty/boundary cases, one corrected attempt and a plain-language explanation. Revisit one earlier exercise within the same two-hour block.

**How to start:**

1. Open VS Code in the repository root and read the problem-solving block text for this week.
2. Take a small list of synthetic events with merchant ids and provider ids, and group them in plain language by merchant plus provider id.
3. Write down what goes wrong when you group by provider id alone. Name the two merchants that merge into one group.
4. Write the solution as a small TypeScript file under your week folder, and add tests for the empty list and for the one-merchant case.
5. Run the tests with `npm run test:practice -- <test file>`. If one case fails, read the output, fix one thing, and run again.
6. Write three or four plain sentences that explain the fix. Then revisit one earlier exercise within the same two-hour block.

**If you get stuck:**

If the grouping looks right but the test fails, print the grouped keys as plain strings and compare them by eye. Then ask in Discord with your file name, the command and the exact error text.

Follow the [problem-solving guide](../docs/14-problem-solving.md). This common block is included in the weekly budget and does not replace the three project tasks.

### Shared contribution

Assigned task owners contribute reviewed work to `shared/api/src/routes/events.ts, shared/api/test/ownership.db.test.ts and shared/simulator/send-event.ts`. Record scope, non-author review and actual proof in the [Week 12 contribution log](../shared/delivery/rotations/week-12.md). Everyone completes the same core practice; no fixed pair is a prerequisite. See [team repo, shared work and delivery](../docs/16-team-repo-and-delivery.md).

## 6. What to Commit

Use this checklist at the end of the week.

- [ ] Focused task-ID commits include required implementation and failure proofs
- [ ] The common problem-solving block and one corrected attempt are recorded
- [ ] Peer review and assigned shared task or witness work are complete
- [ ] One implementation decision and failure case are explained
- [ ] One weekly pull request is open from branch `rb<number>-week-12` into `main` (see the [student guide](../docs/03-student-guide.md))

If you are short on time, cut in this order: extra reading first, then optional polish. Never cut the proof for a task.

Next: [Week 13](week-13.md).
