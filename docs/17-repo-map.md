# Repository map

## 1. What We Are Doing

This page shows what each main folder and file in the course repository is for. Use it when you feel lost. You do not need to read every file. Open only the paths your week file names.

## 2. Why We Are Doing It

The repository has many folders. Some are for you. Some are for the maintainers. Knowing which is which keeps you from editing the wrong file.

## 3. What to Learn First (Prerequisites)

- A folder holds files and other folders. A path is the address of a file, for example `students/RB7/week-01/review.md`.
- "Repository root" means the top folder you get after `git clone`.

## 4. Where to Find Resources

- Setup: [setup guide for Mac and Windows](02-setup-guide-mac-windows.md)
- Weekly routine: [student guide](03-student-guide.md)
- Your own project repository: [own project repository guide](19-own-project-repo.md)

## 5. Step-by-Step Guide

### Folders you work in

| Path                                        | What it is                                                                              | Who edits it                 |
| ------------------------------------------- | --------------------------------------------------------------------------------------- | ---------------------------- |
| `students/RB1` to `students/RB20`           | One folder per student. Your weekly work and proof go in `students/<your id>/week-NN/`. | You (only your own folder)   |
| `students/RBx/week-NN/problem_statement.md` | A short pointer to the week file.                                                       | Nobody. Read only.           |
| `weeks/week-01.md` to `weeks/week-20.md`    | The full instructions for each week.                                                    | Maintainers                  |
| `docs/`                                     | The guides. See the table below.                                                        | Maintainers                  |
| `shared/`                                   | The ONE shared MerchantDesk product built by everyone through reviewed pull requests.   | Task owners, by pull request |
| `fixtures/`                                 | Supplied practice data and starter code. You copy from here. You do not edit here.      | Maintainers                  |

### Folders and files inside `shared/`

| Path                | What it is                                                                                                 |
| ------------------- | ---------------------------------------------------------------------------------------------------------- |
| `shared/api/`       | The shared API (Fastify). `src/` is the code, `test/` the tests, `openapi.json` the API description.       |
| `shared/web/`       | The shared React interface.                                                                                |
| `shared/database/`  | Database notes and migrations.                                                                             |
| `shared/simulator/` | A small program that sends fake payment events to the API.                                                 |
| `shared/delivery/`  | Written evidence: briefs, runbook, security review. `rotations/week-NN.md` is the weekly contribution log. |

### Guides in `docs/`

| File                              | Read it when                                         |
| --------------------------------- | ---------------------------------------------------- |
| `00-START-HERE.md`                | First day                                            |
| `01-project-brief.md`             | You need the MerchantDesk client story               |
| `02-setup-guide-mac-windows.md`   | You install tools                                    |
| `03-student-guide.md`             | You need the weekly Git routine                      |
| `04-api-and-security-contract.md` | You build or test the API                            |
| `05-task-index.md`                | You want a list of all 60 tasks                      |
| `06-team-roles.md`                | You take a shared task                               |
| `07-resources.md`                 | You need the reading and videos for a week           |
| `08-shared-build-plan.md`         | You want the shared plan by week                     |
| `09-troubleshooting.md`           | Something fails                                      |
| `10-assessment.md`                | You want to know what counts as proof                |
| `11-scope-and-continuation.md`    | You want the time budget and scope                   |
| `12-application-wiring.md`        | From Week 6, to keep one API app                     |
| `13-api-documentation.md`         | Week 10 OpenAPI work                                 |
| `14-problem-solving.md`           | The weekly problem-solving block                     |
| `15-individual-extension.md`      | Week 19                                              |
| `16-team-repo-and-delivery.md`    | Branches, pull requests, shared work                 |
| `17-repo-map.md`                  | This page                                            |
| `18-vscode-workflow.md`           | You use VS Code for both repositories                |
| `19-own-project-repo.md`          | You build MerchantDesk in your own GitHub repository |

### Files at the root and folders you can ignore

| Path                                                                                   | What it is                                                                  |
| -------------------------------------------------------------------------------------- | --------------------------------------------------------------------------- |
| `README.md`                                                                            | The front page of the course                                                |
| `curriculum.json`                                                                      | The list of weeks and tasks used by the checks. Do not edit.                |
| `package.json`, `package-lock.json`                                                    | The tools and versions the course uses. Install with `npm ci`. Do not edit. |
| `tsconfig.node.json`, `tsconfig.students.json`                                         | TypeScript settings. Do not edit.                                           |
| `.env.example`                                                                         | A template. You copy it to `.env` (never commit `.env`).                    |
| `.gitignore`, `.gitattributes`, `.editorconfig`, `.prettierrc.json`, `.prettierignore` | Git and formatting settings. Do not edit.                                   |
| `scripts/`                                                                             | Helper programs behind `npm run ...` commands. Do not edit.                 |
| `.github/`                                                                             | The automatic checks that run on every pull request.                        |
| `admin/`                                                                               | Notes for maintainers. Students do not need it.                             |
| `CONTRIBUTING.md`                                                                      | Short rules for contributing                                                |
| `node_modules/`                                                                        | Created by `npm ci`. Never commit it.                                       |
| `.git/`                                                                                | Hidden folder where Git keeps its history. Never edit it or copy it.        |

### Where your files go (example for RB7, Week 6)

```text
students/RB7/week-06/api/app.ts
students/RB7/week-06/api/server.ts
```

If you get stuck: ask in Discord. Post the path, the command and the exact error.

## 6. What to Commit

Nothing in this guide is committed. Check:

- [ ] I know my own folder is `students/<my id>/`.
- [ ] I know `weeks/` has the instructions and `docs/` has the guides.
- [ ] I will not edit `fixtures/`, `scripts/`, `curriculum.json` or `package.json`.
