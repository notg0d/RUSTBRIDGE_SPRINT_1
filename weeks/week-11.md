# Week 11: Authenticate a merchant operator

MerchantDesk | Sprint 1 | B: Backend Development + E: Engineering and Delivery

## 1. What We Are Doing

This week you add a login boundary to MerchantDesk. You store operators with hashed passwords, give a signed-in operator an expiring cookie session, and protect event routes. At the end you have login, expiry, logout, a `GET /api/me` response and a short security model note.

This week has three project tasks and one problem-solving block:

- `B05.1`: Add seeded operator login (120 minutes)
- `B05.2`: Use an expiring cookie session (100 minutes)
- `E07.1`: Review the auth and browser boundary (80 minutes)
- `P11.1`: weekly problem-solving block (120 minutes)

Outcome: Login, expiry and logout with protected API access.

## 2. Why We Are Doing It

**The project need:** The API must distinguish a signed-in operator from an anonymous request before exposing merchant data.

The MerchantDesk API must tell a signed-in operator apart from an anonymous request before it exposes merchant data. Real backends need safe sign-in, clear session expiry and browser request checks. These skills stop private data from leaking through a missing or weak auth boundary.

## 3. What to Learn First (Prerequisites)

**Before you start:** Use the supplied password helper in fixtures/passwords.ts and @fastify/secure-session. Read the exact session settings in docs/04-api-and-security-contract.md. Do not design custom encryption or teach JWT and sessions together.

**Review these ideas first:**

- Authentication proves who is making a request. Authorization decides what they may do.
- Password hashing turns a password into a slow, one-way value.
- A seed account is a demo operator created from setup data, not a public signup.
- A session cookie stores encrypted session state in the browser.
- HttpOnly keeps cookie values away from page JavaScript.
- CSRF is a trick that makes a signed-in browser send a request.
- SameSite and Origin checks reduce cross-site request risk. Expiry limits a stolen cookie.

**By the end of this week you can:**

- finish `B05.1`: authentication, password hashing, seeded accounts and generic failures
- finish `B05.2`: httpOnly cookies, plugin expiry, logout and server identity
- finish `E07.1`: authentication versus authorization, CSRF and local-only operation

## 4. Where to Find Resources

**Where you work.** Write code in VS Code. Run commands in the VS Code terminal, from the repository root. Open the pull request and read reviews in your browser on GitHub. Replace `<student-id>` with your number, for example `RB7`. New to the setup? Use the [setup guide for Mac and Windows](../docs/02-setup-guide-mac-windows.md). Lost in the folders? See the [repository map](../docs/17-repo-map.md). Build and test code pieces first in your [own project repository](../docs/19-own-project-repo.md). When a piece works, copy it into your cohort folder and open the pull request, as shown in the [VS Code workflow](../docs/18-vscode-workflow.md).

**Your week in order**

| Task    | Concepts and reading                                                                                                                                                                                                        | Planned task minutes |
| ------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------: |
| `B05.1` | Authentication, password hashing, seeded accounts and generic failures. [Node 22 crypto](https://nodejs.org/docs/latest-v22.x/api/crypto.html), [Fastify secure-session](https://github.com/fastify/fastify-secure-session) |                  120 |
| `B05.2` | HttpOnly cookies, plugin expiry, logout and server identity. [Fastify secure-session](https://github.com/fastify/fastify-secure-session)                                                                                    |                  100 |
| `E07.1` | Authentication versus authorization, CSRF and local-only operation. [OWASP CSRF prevention](https://cheatsheetseries.owasp.org/cheatsheets/Cross-Site_Request_Forgery_Prevention_Cheat_Sheet.html)                          |                   80 |

Task time is part of the [15-hour core weekly budget](../docs/11-scope-and-continuation.md), not the whole week. Guided learning, consolidation, review, shared work and the two-hour problem-solving block are also included. Up to five additional hours are for repetition or finishing feedback, not extra required technologies.

**Search keywords if you get stuck:**

- node crypto scrypt password hash
- fastify secure-session cookie expiry
- httpOnly sameSite cookie
- csrf origin header json content type
- postgres parameterized query by email

Application layout: follow the [application wiring guide](../docs/12-application-wiring.md).

## 5. Step-by-Step Guide

Work on one task at a time. One task means one focused change, its required companion files and proof, and one commit. The weekly routine is in the [student guide](../docs/03-student-guide.md). The box called "Official task text" is the rule for the task. Do not change it. The numbered steps below it show you how to start.

### Core tasks

#### Task 1 - Add seeded operator login (`B05.1`)

##### 1. What We Are Doing

You add a local login path for a seeded operator. You link operator records to merchants, read demo passwords from ignored environment variables, and check a password with the supplied helper. You validate the login fields and return one generic failure when login does not work. Work in VS Code, your terminal and your local PostgreSQL database.

##### 2. Why We Are Doing It

MerchantDesk must not expose data to anonymous callers. A seeded operator lets you test the first real sign-in flow without building signup or password reset.

##### 3. What to Learn First

- A password hash is one-way. You check a password by hashing the input and comparing the result.
- A seed script uses demo values, not real user data.
- A parameterized query keeps user input out of the SQL text.
- One generic login failure avoids telling an attacker which emails exist.
- Input bounds stop empty, huge or wrong-type login values.

##### 4. Where to Find Resources

- Read [Node 22 crypto](https://nodejs.org/docs/latest-v22.x/api/crypto.html) for random values and password hashing support.
- Read [Fastify secure-session](https://github.com/fastify/fastify-secure-session) to see how login state is kept.
- Read [docs/04](../docs/04-api-and-security-contract.md) for the MerchantDesk auth rules.
- Search: `node crypto scrypt compare password`, `postgres parameterized query by email`, `generic login error message`.

##### 5. Step-by-Step Guide

**Official task text (do not change):**

- [ ] Add operators related to merchants and a local seed script that reads demo passwords from ignored environment variables. Use the supplied async password helper rather than plaintext storage. Validate and bound login fields, query by email with parameters, and return the same failure message for absent users and wrong passwords. No signup/reset feature is required.

**Primary path:** `students/<student-id>/week-11/api/login.ts`.

**Proof for review:** Correct credentials succeed; wrong credentials fail; the database and responses contain no plaintext password. Test the helper with good and bad passwords.

**Known trap:** Passwords, session keys and hashes do not belong in logs or PR screenshots.

**Where to build:** build and test code in your own project repository first ([guide](../docs/19-own-project-repo.md)). Then copy the files to the path above in your cohort clone, fix their imports, run the proof there and commit. Writing tasks can be written directly in the cohort folder.

**Steps:**

1. Open VS Code in the repository root.
2. Read [docs/04](../docs/04-api-and-security-contract.md) for the operator and login rules.
3. Open `fixtures/passwords.ts` and note how the async helper hashes a password and checks a password.
4. Create `students/<student-id>/week-11/api/login.ts`. Replace `<student-id>` with your number, for example RB7.
5. Read `shared/database/migrations/003-operators.sql` as the team reference for operator columns and the merchant link.
6. Create your own operator migration under `students/<student-id>/week-08/database/migrations`. Link operators to merchants.
7. Apply the migration with the migration command in docs/02 section 7.
8. Create a seed script under `students/<student-id>/week-11/`. Read demo passwords from the ignored environment variables `DEMO_OPERATOR_ONE_PASSWORD` and `DEMO_OPERATOR_TWO_PASSWORD`.
9. Run the seed script with `node --env-file-if-exists=.env --import tsx <seed file>` from the repository root.
10. In `login.ts`, validate email and password as strings. Set a max length for each field.
11. Look up the operator by email with a parameterized query. If no row is found, or the helper check fails, return one generic failure.
12. On success return only public operator fields. Do not return a password or hash.
13. Connect the login handler to `students/<student-id>/week-06/api/app.ts`. Follow [docs/12](../docs/12-application-wiring.md).
14. Write tests for the helper and for login. Cover a good password, a bad password, a correct credential pair, an absent email and a wrong password.
15. Run the test file with `npm run test:practice -- <test file>` from the repository root.
16. Start your own API with `npm run dev:student -- RBx` from the repository root. Replace RBx with your number, for example RB7.
17. Run `npm run typecheck` from the repository root.
    How to think about it: A login endpoint answers one question. Is this email and password pair valid? Do not reveal which part was wrong.

**If you get stuck:**

- Read the exact error text and the matching rule in [docs/04](../docs/04-api-and-security-contract.md).
- Search for `node crypto scrypt compare password` or `postgres parameterized query by email`.
- Ask in Discord with the command and the exact error text. Do not paste passwords, hashes or session keys.

##### 6. What to Commit

- [ ] `students/<student-id>/week-11/api/login.ts` (and any companion test, notes or migration file the task names)
- [ ] The proof from "Proof for review" is written down or passes
- [ ] I avoided the known trap
- [ ] Commit message: `B05.1 add seeded operator login`

#### Task 2 - Use an expiring cookie session (`B05.2`)

##### 1. What We Are Doing

You add an expiring cookie session to the API. You set the session at login, read it on each protected request, and delete it at logout. You also add `GET /api/me` and `POST /api/logout`. Work in VS Code and the terminal, then test in the browser.

##### 2. Why We Are Doing It

A cookie session lets the browser stay signed in without sending the password on every request. Expiry and logout limit the damage if a cookie is copied.

##### 3. What to Learn First

- An HttpOnly cookie cannot be read by page JavaScript.
- SameSite=Lax reduces some cross-site sends but is not a full CSRF control.
- Plugin expiry and cookie lifetime must match. Use the one-hour setting in `docs/04`.
- Regenerate the session at login. Delete it at logout.
- The server resolves the operator from the session. It does not trust a merchant ID from the client.
- `Secure` is false only for loopback HTTP development. HTTPS needs `Secure`.

##### 4. Where to Find Resources

- Read [Fastify secure-session](https://github.com/fastify/fastify-secure-session) for session setup, expiry and cookie options.
- Read [docs/04](../docs/04-api-and-security-contract.md) for the exact cookie, expiry, `GET /api/me` and `POST /api/logout` rules.
- Read [Node 22 crypto](https://nodejs.org/docs/latest-v22.x/api/crypto.html) for a random 32-byte key.
- Read [docs/12](../docs/12-application-wiring.md) to see how your files connect to `app.ts` and `server.ts`.
- Search: `fastify secure-session expiry maxAge`, `httpOnly sameSite cookie devtools`, `session regenerate logout fastify`.

##### 5. Step-by-Step Guide

**Official task text (do not change):**

- [ ] Use a generated 32-byte key from ignored configuration, explicit one-hour plugin expiry and matching cookie lifetime. Set HttpOnly and SameSite=Lax. Secure is false only for loopback HTTP development; HTTPS requires Secure. Regenerate at login, delete at logout, and protect event routes with a server-resolved operator. Implement GET /api/me with the public operator envelope and POST /api/logout with a JSON {} request, cookie deletion and bodyless 204 response; both use the same verified current operator.

**Primary path:** `students/<student-id>/week-11/api/session.ts`.

**Proof for review:** Missing/tampered/expired cookies fail; logout clears the browser session; a server-side check enforces expiry.

**Known trap:** Stateless logout clears this browser's cookie but does not revoke a stolen copy before expiry. Name that limitation.

**Where to build:** build and test code in your own project repository first ([guide](../docs/19-own-project-repo.md)). Then copy the files to the path above in your cohort clone, fix their imports, run the proof there and commit. Writing tasks can be written directly in the cohort folder.

**Steps:**

1. Open VS Code in the repository root.
2. Read [docs/04](../docs/04-api-and-security-contract.md) for the exact session settings and response shapes.
3. Create `students/<student-id>/week-11/api/session.ts`. Replace `<student-id>` with your number, for example RB7.
4. Generate a 32-byte key. Keep it in ignored configuration. Do not commit it.
5. Register the secure-session plugin with one-hour expiry and a matching cookie lifetime.
6. Set `HttpOnly` and `SameSite=Lax`. Set `Secure` to false only for loopback HTTP development.
7. At login, regenerate the session.
8. Store the operator identity in the new session.
9. At logout, delete the session.
10. Return 204 with no body from logout.
11. Add `GET /api/me` with the public operator shape from `docs/04`.
12. Add `POST /api/logout` with a JSON `{}` request.
13. Resolve and verify the current operator on the server for both `/api/me` and `/api/logout`.
14. Protect event routes with an operator resolved on the server from the session.
15. Connect the session plugin and the auth routes to `students/<student-id>/week-06/api/app.ts`. Follow [docs/12](../docs/12-application-wiring.md).
16. Start your own API with `npm run dev:student -- RBx` from the repository root.
17. Test a missing cookie, a tampered cookie and an expired cookie.
18. Run `npm run typecheck` from the repository root.
    How to think about it: Treat the cookie as a claim. Verify it on the server before you trust any merchant data.

**If you get stuck:**

- Open browser devtools and inspect the `Set-Cookie` response. Check `HttpOnly`, `Max-Age` and `SameSite`.
- Search for `fastify secure-session expiry maxAge` or `httpOnly sameSite cookie devtools`.
- Ask in Discord with the command and the exact error text. Do not paste a cookie value or session key.

##### 6. What to Commit

- [ ] `students/<student-id>/week-11/api/session.ts` (and any companion test, notes or migration file the task names)
- [ ] The proof from "Proof for review" is written down or passes
- [ ] I avoided the known trap
- [ ] Commit message: `B05.2 use an expiring cookie session`

#### Task 3 - Review the auth and browser boundary (`E07.1`)

##### 1. What We Are Doing

You write a short security model for the auth and browser boundary. You show where credentials, the encrypted cookie and the merchant ID live. You also write the JSON and Origin rules for login, logout and event writes. Work in VS Code on a Markdown file.

##### 2. Why We Are Doing It

MerchantDesk needs a clear note that separates authentication from browser request checks. A peer can then check anonymous, bad-origin and expiry cases.

##### 3. What to Learn First

- Authentication identifies the operator. Authorization limits actions and data.
- CSRF tricks a signed-in browser into sending a request.
- An Origin check compares scheme, host and port exactly.
- The scheme is `http` or `https`. The host is the server name. The port is the connection number, such as `3000`.
- Requiring `application/json` blocks simple cross-site form posts.
- SameSite helps but does not replace an Origin check.
- Loopback development is local only. HTTPS needs `Secure` cookies.

##### 4. Where to Find Resources

- Read [OWASP CSRF prevention](https://cheatsheetseries.owasp.org/cheatsheets/Cross-Site_Request_Forgery_Prevention_Cheat_Sheet.html) for Origin and JSON request checks.
- Read [docs/04](../docs/04-api-and-security-contract.md) for the MerchantDesk auth contract.
- Read [Fastify secure-session](https://github.com/fastify/fastify-secure-session) for cookie and session limits.
- Search: `csrf origin header exact match`, `sameSite vs csrf`, `credentialed cors allowed origin`.

##### 5. Step-by-Step Guide

**Official task text (do not change):**

- [ ] Draw where credentials, encrypted cookie and merchant ID live. For login/logout/event writes require application/json and an exact allowed Origin including scheme/host/port; test missing or foreign origins. Node simulator and injection tests must deliberately send the agreed Origin. Do not rely on SameSite alone.

**Primary path:** `students/<student-id>/week-11/security/auth-model.md`.

**Proof for review:** A peer checks anonymous, bad-origin and expiry cases and finds no credential exposure.

**Known trap:** An Origin check is a browser CSRF control, not authentication for arbitrary scripts. Do not enable wildcard credentialed CORS.

**Where to build:** build and test code in your own project repository first ([guide](../docs/19-own-project-repo.md)). Then copy the files to the path above in your cohort clone, fix their imports, run the proof there and commit. Writing tasks can be written directly in the cohort folder.

**Steps:**

1. Open VS Code in the repository root.
2. Create `students/<student-id>/week-11/security/auth-model.md`. Replace `<student-id>` with your number, for example RB7.
3. Make a small map of the browser, API and database. Mark where the password, hash, session cookie, session key and merchant ID sit.
4. Write the check order for login. For login, check JSON content type and the exact allowed Origin before checking credentials.
5. Write the check order for logout and event writes. For logout and event writes, also require a verified session.
6. Implement the JSON content type check and the exact Origin check for login, logout and event writes.
7. Make the simulator and injection tests send the agreed Origin.
8. Run the missing-Origin test and the foreign-Origin test. Write down each result.
9. List the other test cases: anonymous, tampered cookie and expired cookie.
10. Write one sentence about what logout cannot do for a copied cookie before it expires.
11. State that credentialed requests are allowed only from the agreed origin.
12. Ask a peer to check your note against the anonymous, bad-origin and expiry cases.
    How to think about it: A cookie proves a browser session. It does not prove that a request came from your own page. You need both checks.

**If you get stuck:**

- Re-read the Origin and JSON request parts of [OWASP CSRF prevention](https://cheatsheetseries.owasp.org/cheatsheets/Cross-Site_Request_Forgery_Prevention_Cheat_Sheet.html).
- Search for `csrf origin header exact match` or `sameSite vs csrf`.
- Ask in Discord with the command and the exact error text. Do not paste cookies, keys or secrets.

##### 6. What to Commit

- [ ] `students/<student-id>/week-11/security/auth-model.md` (and any companion test, notes or migration file the task names)
- [ ] The proof from "Proof for review" is written down or passes
- [ ] I avoided the known trap
- [ ] Commit message: `E07.1 review the auth and browser boundary`

### Two-hour problem-solving block (`P11.1`)

**Focus:** Hash maps and counting

Find whether a list of integer amounts has a pair with a stated sum; compare a simple scan and keyed solution on synthetic data.

**Evidence path:** `students/<student-id>/week-11/problem-solving/README.md`.

**Proof:** Include the solution and tests, empty/boundary cases, one corrected attempt and a plain-language explanation. Revisit one earlier exercise within the same two-hour block.

**How to start:**

1. Open a practice file under `students/<student-id>/week-11/` for this block. Replace `<student-id>` with your number, for example RB7.
2. Write the simple scan first. Use small synthetic lists of integer amounts.
3. Write tests for an empty list, one item, two items, negative amounts, duplicate values and a list with no pair.
4. Write the keyed solution with a hash map.
5. Count how many steps each solution takes on larger lists.
6. Run your tests with `npm run test:practice -- <test file>` from the repository root.
7. Write a plain-language explanation: when the simple scan is fine, and when the keyed solution helps.
8. Write what you corrected in one attempt.
9. Revisit one earlier exercise in the same two-hour block.

**If you get stuck:**

Start with the smallest list that has no pair. Draw the loop by hand. Search for `hash map pair sum javascript` or `complement target sum`. Ask in Discord with your failing test and the exact error text.

Follow the [problem-solving guide](../docs/14-problem-solving.md). This common block is included in the weekly budget and does not replace the three project tasks.

### Shared contribution

Assigned task owners contribute reviewed work to `shared/database/migrations/003-operators.sql, shared/api/src/auth.ts and shared/delivery/security-model.md`. Record scope, non-author review and actual proof in the [Week 11 contribution log](../shared/delivery/rotations/week-11.md). Everyone completes the same core practice; no fixed pair is a prerequisite. See [team repo, shared work and delivery](../docs/16-team-repo-and-delivery.md).

## 6. What to Commit

Use this checklist at the end of the week.

- [ ] Focused task-ID commits include required implementation and failure proofs
- [ ] The common problem-solving block and one corrected attempt are recorded
- [ ] Peer review and assigned shared task or witness work are complete
- [ ] One implementation decision and failure case are explained
- [ ] One weekly pull request is open from branch `rb<number>-week-11` into `main` (see the [student guide](../docs/03-student-guide.md))

If you are short on time, cut in this order: extra reading first, then optional polish. Never cut the proof for a task.

Next: [Week 12](week-12.md).
