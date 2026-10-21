# Contributing

1. One focused task purpose per commit, with its stable ID first.
2. One weekly individual PR can hold the three focused task commits.
3. Build individual code first in your own project repository, then copy the working weekly files into your RB folder for cohort proof and review. Change shared paths only for an assigned project task.
4. Do not commit .env, credentials, local databases, dependencies or build output.
5. Shared changes need tests, a non-author check and maintainer review.
6. Preserve student authorship; do not squash when the cohort uses authored commits as evidence.
7. Do not force-push main, overwrite somebody else's work or silently change an applied migration.
8. Writing and diagrams are reviewed for reasoning, not just presence.
9. Use plain hyphens, no em dashes in authored repository text or commit messages.
10. Keep private feedback and answer keys out of the public student repo.

Push your task branch to the official repository and open a PR into main. Do not push directly to main. Individual practice and shared-project tasks use separate branches/PRs. Agree the task owner, non-author reviewer and file scope using the [shared-project responsibilities](docs/06-team-roles.md).

```bash
npm run format
npm run check
```

Product/database work also runs `npm run test:db`. Student labs run their exact listed test command. Read [the student guide](docs/03-student-guide.md) and [assessment evidence](docs/10-assessment.md).
