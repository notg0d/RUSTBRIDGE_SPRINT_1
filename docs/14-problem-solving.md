# Common problem-solving practice

Every week contains the same two-hour block for all students. It is included in the 15-hour core budget, not extra homework or an alternative track. The week's P-number identifies this evidence separately from the three project task IDs.

Use JavaScript/TypeScript, the root runtime and free documentation. No paid platform, extra language or interview-site account is required.

## Two-hour loop

| Work                                                   | Minutes |
| ------------------------------------------------------ | ------: |
| Read the problem and work one tiny example by hand     |      20 |
| Implement a clear first solution                       |      40 |
| Exercise empty/boundary inputs and correct one mistake |      30 |
| Explain it and revisit an earlier problem              |      30 |
| Total                                                  |     120 |

In Week 1 a runnable function plus an expected/actual table is sufficient; automated assertions begin in Week 2. Later weeks use the existing Node test runner.

## Evidence

Use students/YOUR_ID/week-NN/problem-solving/README.md for the problem, assumptions, run/test commands, one corrected attempt and explanation. Keep solution.ts and solution.test.ts beside it when applicable. These are student-authored files, not supplied answers.

```bash
npm run practice -- students/RB1/week-03/problem-solving/solution.ts
npm run test:practice -- students/RB1/week-03/problem-solving/solution.test.ts
npm run typecheck
```

Replace ID/week and run tests only after authoring the file. Root student test discovery includes these tests. A passing execution without assertions is not a correctness proof.

## Progression

Begin with values, functions, arrays and strings. Add maps/sets, duplicate keys and simple time/space reasoning, then stacks, binary search and two-pointer exercises. Async reasoning supports the application. There is no compulsory advanced graph, dynamic-programming or competitive-programming course in Sprint 1.

The exact common problem is in each canonical week. Week 19 revisits a mentor-selected earlier problem consistently for everyone. Fast students add cases or improve explanation rather than replace core work with a different syllabus.

AI can explain concepts during ordinary practice under the [resource policy](07-resources.md). Weeks 14 and 20 have explicitly identified no-AI checkpoints; there is no claim that solving these exercises alone guarantees a job.
