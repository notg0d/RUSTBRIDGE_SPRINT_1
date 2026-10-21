# Team repo, shared work and delivery

## 1. What We Are Doing

All 20 students, RB1 through RB20, complete the same individual core tasks. Together, we also build one shared MerchantDesk application.

Your individual work shows what you learned. Reviewed shared contributions become part of the team product.

Use the [official repository](https://github.com/StartwithDot/RUSTBRIDGE_SPRINT_1).

## 2. Why We Are Doing It

This workflow helps you:

- Practise every core skill yourself.
- Make small changes that others can understand.
- Review another student's work.
- Combine tested contributions into one working product.
- Record evidence of who did the work and how it was checked.

A shared contribution or review does not replace your individual practice.

## 3. What to Learn First (Prerequisites)

Complete the basic Git practice from Week 1.

You should know how to:

- Create a branch.
- Make a commit.
- Push a branch.
- Open a pull request.

A pull request, or PR, asks someone to review your branch before it joins `main`.

Before pushing, accept your collaborator invitation. The repository owner/admin must arrange Write access.

Use your assigned ID without a leading zero. For example, use `RB7` in folder paths and `rb7` in branch names.

## 4. Where to Find Resources

Read these repository files:

- `docs/03-student-guide.md`: setup, commands and individual workflow.
- `docs/06-team-roles.md`: shared tasks, review, handover and merging.
- `docs/08-shared-build-plan.md`: the shared product plan.
- `docs/10-assessment.md`: required evidence and assessment.
- `shared/delivery/rotations/week-NN.md`: the contribution log for each week. Replace `NN` with the two-digit week number, such as `08`.

Use these Git resources:

- [Git book: Recording Changes to the Repository](https://git-scm.com/book/en/v2/Git-Basics-Recording-Changes-to-the-Repository)
- [GitHub: Creating a pull request](https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/creating-a-pull-request)

## 5. Step-by-Step Guide

### Step 1. Know where your work lives

You use two repositories.

- **Your own project repository** is in your own GitHub account. You build MerchantDesk there from scratch. Build and test every code piece there first. See the [own project repository guide](19-own-project-repo.md).
- **The cohort clone** is your copy of the official repository. When a piece works, copy the weekly files into `students/<student-id>/week-NN/`, push a branch and open a pull request. A maintainer checks and merges it. See the [VS Code workflow](18-vscode-workflow.md).

Inside the cohort clone there are two places:

| Place                    | Who changes it                                                                                                       | How                                                                      |
| ------------------------ | -------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------ |
| `students/<student-id>/` | The student with that assigned ID. Everyone completes individual practice.                                           | Work on your weekly branch and open an individual PR.                    |
| `shared/`                | Students assigned bounded shared tasks. Everyone contributes to one product through implementation, tests or review. | Use separate shared-task branches and reviewed PRs. A maintainer merges. |

Replace `<student-id>` with your number, for example RB7.

Keep individual answers in your own folder. Shared code must never import from a student's folder.

### Step 2. Daily and weekly rhythm

Make small, focused commits in your own folder every working day.

Open one individual PR each week into `main`. That PR may contain the week's three focused task commits.

The commands below work in both Mac zsh and Windows PowerShell. Run them from the repository root. Replace `rb7` and `01` with your ID and week.

1. Check your current work.

   ```sh
   git status
   ```

   If you have unfinished changes, finish or inspect them before continuing. Do not discard them.

2. Switch to a clean `main` branch.

   ```sh
   git switch main
   ```

3. Fetch the latest remote changes.

   ```sh
   git fetch origin
   ```

4. Update your local `main`.

   ```sh
   git merge --ff-only origin/main
   ```

5. Create your weekly branch.

   ```sh
   git switch -c rb7-week-01
   ```

6. Complete one task from the current week's instructions.

7. Run the task's required checks.

8. Stage that task's files.

   ```text
   git add <files>
   ```

   Replace `<files>`, including the brackets, with actual file paths. For example:

   ```sh
   git add students/<student-id>/week-01/typescript/inspector.ts
   ```

9. Inspect the staged changes.

   ```sh
   git diff --cached
   ```

10. Commit the task with its task ID first.

    ```sh
    git commit -m "T01.1 inspect a sandbox event"
    ```

11. Push your branch.

    ```sh
    git push -u origin rb7-week-01
    ```

Repeat the task, check and commit steps for the remaining tasks. Use `git push` for later updates to the same branch.

Task IDs are labels, not week numbers. Follow the current week's instructions.

On GitHub:

1. Open the official repository.
2. Select **Pull requests**.
3. Select **New pull request**.
4. Set the base branch to `main`.
5. Set the compare branch to `rb7-week-01`.
6. Inspect the changed files.
7. Select **Create pull request**.
8. Enter a title that identifies your work.
9. Add task IDs, test commands and results, a failure case and one explained decision.
10. Submit the pull request.
11. Request a non-author reviewer.

Apply feedback on the same branch and PR. A maintainer handles merging. Do not merge your own PR.

### Step 3. Shared work: owner, reviewer, log coordinator

Each week, shared work is split into small tasks with an agreed file scope (the files you may change) and required proof.

Each task has:

- An available **owner** who completes the assigned work.
- A **non-author reviewer** who checks the work.

One assigned owner acts as the week's **log coordinator**. This person assembles the contribution log in `shared/delivery/rotations/week-NN.md` from actual PRs and results. Everyone should not rewrite the same log.

Rotate implementation, test and review responsibilities. Nobody is a permanent specialist. There is no fixed partner or permanent review group.

For an assigned shared task:

1. Agree the task's interfaces (how parts connect) and file scope.
2. Update your local `main` using the commands in Step 4.
3. Create a separate shared-task branch.

   ```sh
   git switch -c rb7-week-08-shared-migration
   ```

4. Adapt proven practice into the agreed shared paths.
5. Include focused tests.
6. Run the required checks.
7. Commit with the assigned task ID.
8. Push the shared-task branch.
9. Open a separate PR with base `main`.
10. Request the assigned non-author review.

Keep shared-task changes within the agreed product paths, tests and evidence. Preserve existing authorship.

Shared code must never import from `students/`.

A maintainer merges reviewed, passing work. Shared authentication, ownership and migration changes need direct maintainer review. Nobody merges their own PR. Never force-push to `main` or bypass a failed check.

Keep the shared contribution within the weekly 60-minute shared slot. Reuse tested practice. Split or replan work that does not fit.

### Step 4. Who keeps the shared repo up to date

The week's log coordinator records:

- Actual task owners.
- Task IDs and file scopes.
- Reviewers and PRs.
- Commands that were run.
- Actual results.
- Reassignments and technical next steps.

An assignment is not proof of completion. A non-author must reproduce a shared milestone before it is recorded as complete.

A maintainer merges only reviewed, passing work.

Every student updates their local copy each week. Start with clean working files. These commands work in both Mac zsh and Windows PowerShell:

```sh
git switch main
git fetch origin
git merge --ff-only origin/main
```

If an owner or reviewer becomes unavailable:

1. Tell a maintainer which task or review is affected.
2. Leave the branch or PR visible.
3. Record the current tests and results.
4. Record the next technical step.

The maintainer reassigns the unfinished work and updates the log entry. Preserve existing authored commits.

Keep personal reasons for absence and private feedback outside the public log.

Continue individual practice with the supplied fixtures and your own app. Individual practice never waits for shared work.

### Step 5. Review a pull request

Review another author's PR. Do not review your own PR.

Check these six points:

1. **Scope:** Do the files match the task and agreed paths?
2. **Behaviour:** Does the change meet the task's required outcome?
3. **Proof:** Can you run the stated checks and reproduce the results?
4. **Failure case:** Does the work handle the stated error or boundary case?
5. **Integration:** Does it fit the existing app and interfaces? Shared code must not import a student's folder.
6. **Explanation:** Are the decision, trade-off (what you gain and give up) and next step clear? Are secrets and generated files excluded?

To leave a comment on GitHub:

1. Open the PR.
2. Select **Files changed**.
3. Select the `+` beside the relevant line.
4. Write what you observed and what needs clarification or correction.
5. Select **Start a review**.
6. Select **Review changes**.
7. Choose the appropriate review outcome.
8. Submit the review.

Use **Request changes** when a correction is needed. Approve only after checking the work.

If your assigned reviewer is unavailable, request another reviewer or a maintainer.

### Step 6. Delivery at the end (Weeks 19 and 20)

Follow the Week 19 and Week 20 instructions for the exact required evidence.

The delivery must include:

| Evidence                                                                                 | File or record                                            |
| ---------------------------------------------------------------------------------------- | --------------------------------------------------------- |
| Instructions to start, operate and check the product                                     | `shared/delivery/runbook.md`                              |
| The final system structure and how its parts connect                                     | `shared/delivery/final-architecture.md`                   |
| The demo plan and evidence                                                               | `shared/delivery/demo.md`                                 |
| Extension choices and decisions                                                          | `shared/delivery/extension-decisions.md`                  |
| Guidance for presenting attributable work (work you can show you did) and the case study | `shared/delivery/portfolio-guide.md`                      |
| Actual contributors, reviews, commands and results                                       | The relevant `shared/delivery/rotations/week-NN.md` files |

Use the filenames and required contents named in the weekly instructions.

1. Complete the Week 19 extension evidence in your continuing individual app.
2. Update the shared delivery documents for your assigned task.
3. Perform the required independent clean start.
4. Record the clean-start commands and actual results in the required evidence.
5. Prepare the short demo.
6. Write your case study.
7. Identify the commits that show your own contribution.
8. Complete the Week 20 oral/no-AI repair checkpoint.

A clean start must demonstrate that the documented setup works independently. Follow the weekly instructions for the exact process.

Shared milestones also need reproduction by a non-author before they are marked complete.

Keep technical observations public. Keep grades, private feedback and personal support records outside the public repository.

### Step 7. Common problems: If you get stuck

Ask in Discord. Share the step, the command and the exact error. Never paste secrets.

| Problem                        | What to do                                                                                                                                          |
| ------------------------------ | --------------------------------------------------------------------------------------------------------------------------------------------------- |
| Push denied                    | Ask the owner/admin to confirm your invitation and Write access. Never request another person's password or token.                                  |
| Fast-forward merge fails       | Stop and inspect `git status` with a maintainer. Your local work may differ from remote `main`. Do not force-push or discard changes.               |
| Merge conflict                 | Inspect the conflicting files. Ask a maintainer for help if needed. Preserve both authors' intended work, then rerun the required checks.           |
| I committed `.env`             | Stop. Tell a maintainer. Rotate any exposed secret. Removing the file in a later commit does not remove the secret from earlier commits.            |
| My PR has other people's files | Check the base branch, compare branch and changed files. Ask a maintainer to help isolate your intended commits. Do not delete other people's work. |

## 6. What to Commit

Use this checklist each week:

- [ ] My branch has my lowercase ID and the correct week.
- [ ] My individual task commits include task IDs and required companion files.
- [ ] My commits contain no credentials, `.env` files, dependencies, databases or build output.
- [ ] My weekly individual PR is open with base `main`.
- [ ] My assigned shared work has a separate branch and PR, when applicable.
- [ ] I completed my assigned non-author review.
- [ ] My own PR has a non-author review before merging.
- [ ] My contribution log entry records the actual work, PR, review, commands and results.
