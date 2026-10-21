# Week 17: Connect the interface to the protected backend

MerchantDesk | Sprint 1 | C: Client Integration + E: Engineering and Delivery

## 1. What We Are Doing

This week you connect your React client to the protected MerchantDesk API. You replace static data with real fetch calls. You add paging, filters and a detail view. You add login and logout with the cookie session. At the end, a signed-in merchant operator can inspect only its own events saved in PostgreSQL. You also write down the request's route from the browser to the database.

This week has three project tasks and one problem-solving block:

- `C04.1`: Fetch and render real events (120 minutes)
- `C04.2`: Connect login and logout (110 minutes)
- `E08.1`: Witness the browser-to-database path (70 minutes)
- `P17.1`: weekly problem-solving block (120 minutes)

Outcome: A signed-in merchant can inspect its own persisted events through React.

## 2. Why We Are Doing It

**The project need:** The interface currently shows static data and needs real authenticated event queries.

The MerchantDesk interface currently shows static data and needs real authenticated event queries. A real backend job is not only writing routes: you must prove that the browser sends the right request, the server enforces authorization, and the UI shows honest loading, empty and error states. This week is where the client and the backend finally meet.

## 3. What to Learn First (Prerequisites)

**Before you start:** Keep editing your week-16/client scaffold. Start only one UI on port 5173 and the API on 3000; Vite proxies /api to the API. The browser uses relative /api URLs.

**Review these ideas first:**

- Fetch: the browser function that sends HTTP requests and returns a Promise.
- Effect: React code that runs after render, used for loading data.
- Loading, empty, data, error: the four states the UI must show.
- Cancellation: stopping an old request when a new one starts.
- Stale response: an old reply that arrives late and must be ignored.
- HttpOnly cookie: a session cookie the JavaScript code cannot read.
- Relative /api path: a URL without host, sent through the Vite proxy.

**By the end of this week you can:**

- finish `C04.1`: fetch, effects, loading/error/empty states and cancellation
- finish `C04.2`: controlled credentials, cookie sessions and authentication UX
- finish `E08.1`: browser network tools and end-to-end evidence

## 4. Where to Find Resources

**Where you work.** Write code in VS Code. Run commands in the VS Code terminal, from the repository root. Open the pull request and read reviews in your browser on GitHub. Replace `<student-id>` with your number, for example `RB7`. New to the setup? Use the [setup guide for Mac and Windows](../docs/02-setup-guide-mac-windows.md). Lost in the folders? See the [repository map](../docs/17-repo-map.md). Build and test code pieces first in your [own project repository](../docs/19-own-project-repo.md). When a piece works, copy it into your cohort folder and open the pull request, as shown in the [VS Code workflow](../docs/18-vscode-workflow.md).

**Your week in order**

| Task    | Concepts and reading                                                                                                                                                                                                    | Planned task minutes |
| ------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------: |
| `C04.1` | Fetch, effects, loading/error/empty states and cancellation. [Using Fetch](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch), [React effects](https://react.dev/learn/synchronizing-with-effects) |                  120 |
| `C04.2` | Controlled credentials, cookie sessions and authentication UX. [React state](https://react.dev/learn/state-a-components-memory), [Using Fetch](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch)  |                  110 |
| `E08.1` | Browser network tools and end-to-end evidence. [HTTP overview](https://developer.mozilla.org/en-US/docs/Web/HTTP/Overview)                                                                                              |                   70 |

Task time is part of the [15-hour core weekly budget](../docs/11-scope-and-continuation.md), not the whole week. Guided learning, consolidation, review, shared work and the two-hour problem-solving block are also included. Up to five additional hours are for repetition or finishing feedback, not extra required technologies.

**Search keywords if you get stuck:**

- react useeffect cleanup abortcontroller
- fetch response.ok json error handling
- react state pagination offset filter reset
- httponly cookie session fetch credentials
- vite dev proxy /api configuration

Application layout: follow the [application wiring guide](../docs/12-application-wiring.md).

## 5. Step-by-Step Guide

Work on one task at a time. One task means one focused change, its required companion files and proof, and one commit. The weekly routine is in the [student guide](../docs/03-student-guide.md). The box called "Official task text" is the rule for the task. Do not change it. The numbered steps below it show you how to start.

### Core tasks

#### Task 1 - Fetch and render real events (`C04.1`)

##### 1. What We Are Doing

You replace the static event list in your client with real requests to the protected API. You add next and previous page controls, a filter, and a detail view for one selected event. You create `students/<student-id>/week-16/client/src/api.ts` for your fetch helpers. You keep the UI in `App.tsx` and replace the static data usage there. You work in VS Code and you test in the browser.

##### 2. Why We Are Doing It

The operator needs to read real persisted events, not demo rows. Paging and filtering keep the list bounded, and honest error states tell the operator when the API fails instead of showing old data as if it were fresh.

##### 3. What to Learn First

- `fetch` with a relative path such as `/api/events` and a query string.
- `response.ok` and checking the response shape before you use it.
- React `useEffect` to load data after render, with a cleanup function.
- `AbortController` to cancel a request that is no longer needed.
- Modelling four states: loading, empty, data, error.

##### 4. Where to Find Resources

- [MDN "Using Fetch"](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch)
- [React "Synchronizing with Effects"](https://react.dev/learn/synchronizing-with-effects)
- [docs/04 API and security contract](../docs/04-api-and-security-contract.md), the request and response shapes
- [docs/02](../docs/02-setup-guide-mac-windows.md) section 7, the project commands
- Search: `react useeffect cleanup abortcontroller`, `fetch response.ok`

##### 5. Step-by-Step Guide

**Official task text (do not change):**

- [ ] Replace static reads with relative /api fetch calls using docs/04-api-and-security-contract.md. Add next/previous page controls using the returned limit/offset, reset offset when the filter changes, and let the operator inspect one selected event through /api/events/:id. Check response.ok and validate the expected response shape at the client boundary. Model loading, empty, data and error states explicitly. Abort superseded requests and prevent stale list/detail results from overwriting newer selections. No frontend router is needed.

**Primary path:** `students/<student-id>/week-16/client/src/api.ts`.

**Proof for review:** With more records than one page, a peer pages forward/back, filters and inspects an owned event. The UI reports an HTTP failure and keeps the newest filter/detail result under a deliberate delayed response.

**Known trap:** An effect is not a place to start unlimited requests or ignore cleanup.

**Where to build:** build and test code in your own project repository first ([guide](../docs/19-own-project-repo.md)). Then copy the files to the path above in your cohort clone, fix their imports, run the proof there and commit. Writing tasks can be written directly in the cohort folder.

**Steps:**

1. Open VS Code in the repository root.
2. Start your API from the repository root: `npm run dev:student -- <student-id>`.
3. Start your own client from `students/<student-id>/week-16/client` as described in docs/12-application-wiring.md.
4. Keep one UI only, on port 5173.
5. Check that the Vite proxy sends `/api` to your API.
6. Open `students/<student-id>/week-16/client/src/App.tsx`. Find the static data and note what you will remove.
7. Create `students/<student-id>/week-16/client/src/api.ts`. Put your fetch helpers in this file.
8. Read [docs/04](../docs/04-api-and-security-contract.md) and write down the exact list and detail response shapes you expect.
9. In `api.ts`, add one function that calls `/api/events` with `limit`, `offset` and your filter, then checks `response.ok` and the response shape. Use only relative `/api` paths.
10. In `App.tsx`, add state for `limit`, `offset`, the filter, the selected event, and the UI state.
11. Add next and previous buttons that change `offset` from the returned `limit` and `offset`. Reset `offset` to 0 when the filter changes.
12. Add a detail call to `/api/events/:id` for the selected event.
13. Create an `AbortController` in each effect. Abort it in the effect cleanup.
14. Pass the controller's `signal` to your API function. Pass that `signal` in the `fetch` options.
15. Ignore any result that belongs to an older selection.
16. If your client has no login view yet, complete C04.2 first and return here.
17. In the browser, check all four states. Stop the API and confirm the error state appears. This is new for most people. Go slowly.
    How to think about it: ask "which request is the newest one right now?" before you write each `setState` call.

**If you get stuck:**

- Read the exact browser error in the Network tab and the Console tab. A 401 or 404 tells you a different story than a shape error.
- Search `react useeffect cleanup abortcontroller` and re-read the cleanup example on the React effects page.
- If the data looks wrong, log the parsed JSON and compare it with [docs/04](../docs/04-api-and-security-contract.md).
- Ask in Discord with the command you ran and the exact error text.

##### 6. What to Commit

- [ ] `students/<student-id>/week-16/client/src/api.ts` (and any companion test, notes or migration file the task names)
- [ ] The proof from "Proof for review" is written down or passes
- [ ] I avoided the known trap
- [ ] Commit message: `C04.1 fetch and render real events`

#### Task 2 - Connect login and logout (`C04.2`)

##### 1. What We Are Doing

You add a small login form and a logout action to your client, using the protected API and the cookie session. You also handle startup, a 401 answer, and operator switching. You work in VS Code on `students/<student-id>/week-16/client/src/App.tsx` and in the browser.

##### 2. Why We Are Doing It

Only an authenticated merchant operator may inspect events, and only its own. A clean login and logout flow is the difference between a demo and an application a real merchant can trust on a shared machine.

##### 3. What to Learn First

- Controlled inputs: a controlled input reads its value from React state. Its change handler updates that state when you type.
- Cookie sessions: the browser sends the HttpOnly cookie, your code never stores a token.
- `GET /api/me` on startup to learn who is signed in.
- Handling 401 by returning to the login view.
- Clearing list and detail state on logout or operator switch.

##### 4. Where to Find Resources

- [React "State: A Component's Memory"](https://react.dev/learn/state-a-components-memory)
- [MDN "Using Fetch"](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch)
- [docs/04 API and security contract](../docs/04-api-and-security-contract.md), the login, logout and `me` routes
- Search: `react controlled form input state`, `httponly cookie session fetch credentials`

##### 5. Step-by-Step Guide

**Official task text (do not change):**

- [ ] Add a small login form and logout action using the protected API. Rely on the HttpOnly cookie; do not copy tokens into localStorage. Refresh /api/me on startup, return to login on 401, and use only relative /api paths through the proxy. Clear merchant records and cancel/ignore pending list/detail results when logging out, losing authentication or switching operators.

**Primary path:** `students/<student-id>/week-16/client/src/App.tsx`.

**Proof for review:** Login, page refresh, expired session and logout have deliberate UI states. Delay a merchant A request, switch to merchant B, then release the old response: no A records or detail may reappear.

**Known trap:** A successful login response does not replace server-side authorization on later calls.

**Where to build:** build and test code in your own project repository first ([guide](../docs/19-own-project-repo.md)). Then copy the files to the path above in your cohort clone, fix their imports, run the proof there and commit. Writing tasks can be written directly in the cohort folder.

**Steps:**

1. Open VS Code in the repository root.
2. Keep your API running with `npm run dev:student -- <student-id>`.
3. Keep your client running as described in docs/12-application-wiring.md.
4. Open `students/<student-id>/week-16/client/src/App.tsx`. Note where the static data and the current render start.
5. Read the login, logout and `me` routes in [docs/04](../docs/04-api-and-security-contract.md).
6. Add state for the typed email, the typed password and the current operator.
7. Add a small login form that posts to the relative `/api` login route, then calls `/api/me`.
8. On startup, call `/api/me` once. If the answer is 401, show the login view.
9. Add a logout button that calls the logout route, clears the operator, the list and the detail, and aborts any pending request.
10. Check the code for `localStorage`. There must be no token stored there.
11. In the browser, test: login, page refresh, an expired session, and logout. Each must show a clear UI state.
    How to think about it: the login response is only a greeting. Every later call is authorized again by the server, so always handle a 401 on every request.

**If you get stuck:**

- If login "works" but the next call returns 401, check that you use a relative `/api` path and that the cookie appears in the Network tab.
- Search `react controlled form input state` and compare your input with the React state page.
- If old merchant data stays on screen after logout, find every `setState` that writes list or detail data.
- Ask in Discord with the request URL, the status code and the exact error text.

##### 6. What to Commit

- [ ] `students/<student-id>/week-16/client/src/App.tsx` (and any companion test, notes or migration file the task names)
- [ ] The proof from "Proof for review" is written down or passes
- [ ] I avoided the known trap
- [ ] Commit message: `C04.2 connect login and logout`

#### Task 3 - Witness the browser-to-database path (`E08.1`)

##### 1. What We Are Doing

You and a peer trace one request from the browser, through the Vite development proxy, into a Fastify route, and down to a PostgreSQL query. You record login, filtering, empty data and unauthorized behaviour in a short markdown file with a small sequence diagram. You work in VS Code, the browser and a terminal.

##### 2. Why We Are Doing It

The team needs evidence that the whole path works, not only that the screen looks right. Written evidence helps a reviewer separate a UI bug from a transport bug from a backend authorization bug.

##### 3. What to Learn First

- Browser Network tab: request URL, status, headers and cookies.
- Request flow: browser, Vite proxy, Fastify route, SQL query.
- How to tell a UI failure from a transport failure from an authorization failure.
- How to write a small sequence diagram in plain text or Mermaid.
- Safe evidence: no screenshots with credentials or cookies.

##### 4. Where to Find Resources

- [MDN "HTTP overview"](https://developer.mozilla.org/en-US/docs/Web/HTTP/Overview)
- [docs/04 API and security contract](../docs/04-api-and-security-contract.md), the authorization rules you must observe
- [docs/02](../docs/02-setup-guide-mac-windows.md) section 7, the project commands
- Search: `browser devtools network tab request headers`, `mermaid sequence diagram syntax`

##### 5. Step-by-Step Guide

**Official task text (do not change):**

- [ ] Have a peer trace the browser request, Vite development proxy, Fastify route and PostgreSQL query. Record login, filtering, empty data and unauthorized behavior without screenshots containing credentials. Include a small sequence diagram.

**Primary path:** `students/<student-id>/week-17/delivery/browser-flow.md`.

**Proof for review:** A peer reproduces the flow and distinguishes UI, transport and backend authorization.

**Known trap:** The Vite proxy is development plumbing, not production hosting.

**Where to build:** build and test code in your own project repository first ([guide](../docs/19-own-project-repo.md)). Then copy the files to the path above in your cohort clone, fix their imports, run the proof there and commit. Writing tasks can be written directly in the cohort folder.

**Steps:**

1. Open VS Code in the repository root.
2. Run your API from the repository root: `npm run dev:student -- <student-id>`.
3. Run your client as described in docs/12-application-wiring.md.
4. Keep one UI only.
5. Open the browser developer tools and go to the Network tab.
6. Log in and watch the login request, then the `/api/me` request. Record the status and whether the browser received a session cookie. Do not copy the cookie value.
7. Filter the list, then open one event. Note the list URL with `limit` and `offset`, and the detail URL.
8. Read your Fastify route for that path, then find the SQL query it runs.
9. Sit with a peer. Your peer repeats the same clicks while you describe each step out loud.
10. Test the unauthorized case: log out or wait for the session to end.
11. After logout, reload the previously observed `/api/events` URL in another browser tab. Record its HTTP status in the Network tab.
12. Log in again.
13. Apply a supported filter that matches none of your synthetic events.
14. Confirm that the response contains an empty list and the UI shows its empty state.
15. Create `students/<student-id>/week-17/delivery/browser-flow.md` and write the four flows you observed: login, filtering, empty data, unauthorized.
16. Add a small sequence diagram with the browser, the proxy, Fastify and PostgreSQL as the lanes. Do not include cookies or passwords in any text or screenshot.
    How to think about it: for each step, ask "is this the UI, the transport, or the backend deciding?" and write the answer down.

**If you get stuck:**

- If a request never appears in the Network tab, the click did not start a fetch. Check the handler.
- If a request fails, check that the Network tab request URL uses the UI's origin and an `/api` path. Then check that the fetch call in your code uses a relative `/api` path.
- Read the HTTP overview page for status codes and headers.
- Ask in Discord with the request URL, the status code and the exact error text.

##### 6. What to Commit

- [ ] `students/<student-id>/week-17/delivery/browser-flow.md` (and any companion test, notes or migration file the task names)
- [ ] The proof from "Proof for review" is written down or passes
- [ ] I avoided the known trap
- [ ] Commit message: `E08.1 witness the browser-to-database path`

### Two-hour problem-solving block (`P17.1`)

**Focus:** Async reasoning

Use a controlled delayed Promise to demonstrate why an older result must not overwrite a newer selection; record the resolved order.

**Evidence path:** `students/<student-id>/week-17/problem-solving/README.md`.

**Proof:** Include the solution and tests, empty/boundary cases, one corrected attempt and a plain-language explanation. Revisit one earlier exercise within the same two-hour block.

**How to start:**

1. Open VS Code in the repository root and make a small file in your week-17 folder for this exercise.
2. Write two functions that return Promises with different delays, one slow and one fast, and call them in the order that makes the older result arrive last.
3. Record the resolved order in a short note. Do not guess it, run it.
4. Run the file with `npm run practice -- <path to your file>`.
5. Add tests with `node:test` for the normal case and the empty or boundary case, then run `npm run test:practice -- <path to your test file>`.
6. Write one corrected attempt where the older result is ignored, then explain in plain words why the first attempt was wrong.
7. Revisit one earlier exercise from this week or last week within the same two-hour block.

**If you get stuck:**

Run the file and read the printed order before you reason about it. If the result surprises you, write down each Promise and its delay on paper, and ask in Discord with your printed output and the exact error text.

Follow the [problem-solving guide](../docs/14-problem-solving.md). This common block is included in the weekly budget and does not replace the three project tasks.

### Shared contribution

Assigned task owners contribute reviewed work to `shared/web/src/api.ts, shared/web/src/App.tsx and shared/delivery/browser-flow.md`. Record scope, non-author review and actual proof in the [Week 17 contribution log](../shared/delivery/rotations/week-17.md). Everyone completes the same core practice; no fixed pair is a prerequisite. See [team repo, shared work and delivery](../docs/16-team-repo-and-delivery.md).

## 6. What to Commit

Use this checklist at the end of the week.

- [ ] Focused task-ID commits include required implementation and failure proofs
- [ ] The common problem-solving block and one corrected attempt are recorded
- [ ] Peer review and assigned shared task or witness work are complete
- [ ] One implementation decision and failure case are explained
- [ ] One weekly pull request is open from branch `rb<number>-week-17` into `main` (see the [student guide](../docs/03-student-guide.md))

If you are short on time, cut in this order: extra reading first, then optional polish. Never cut the proof for a task.

Next: [Week 18](week-18.md).
