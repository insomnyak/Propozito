# Using Propozito In Your Project

Propozito is meant to be applied inside an app repository, not only read as a policy document. The repository state becomes the durable memory source for AI-assisted work.

## Basic Flow

1. Copy or reference the templates you need from `templates/`.
2. Create `.ai-state/project-state.json`.
3. Fill out a project purpose contract.
4. Create a feature goal contract with requirements, non-goals, and testable acceptance criteria.
5. Generate epics, stories, tasks, subtasks, and burst plans.
6. Run task-readiness validation before coding.
7. Execute one implementation burst.
8. Produce evidence with changed files, commands, raw output paths, exit codes, limitations, and approvals.
9. Run gates and validators.
10. Commit or checkpoint the completed task.
11. If interrupted, resume from `.ai-state/` instead of chat history.

## Suggested Project Layout

```text
your-app/
  .ai-state/
    project-state.json
    task-ledger.json
    traceability-matrix.json
    decision-log.md
    assumptions.md
    open-questions.md
    risk-register.md
    evidence/
    gate-results/
    qa-reports/
    test-history/
  docs/
    project-purpose-contract.md
    features/
  src/
  tests/
```

## Minimum First Task

For the first implementation burst, keep scope intentionally small:

- one task
- one story
- one to three changed files
- one test command
- one evidence report
- required gates only

## Recommended Commands

From the Propozito framework repo, validate an app fixture or copied example by passing the target project path:

```sh
node scripts/validate-state.js /path/to/your-app
node scripts/validate-task.js /path/to/your-app
node scripts/validate-evidence.js /path/to/your-app
node scripts/validate-gate-result.js /path/to/your-app
node scripts/validate-traceability.js /path/to/your-app
```

## Recovery Rule

After interruption or context compaction, reload:

- `.ai-state/project-state.json`
- `.ai-state/task-ledger.json`
- `.ai-state/traceability-matrix.json`
- `.ai-state/open-questions.md`
- `.ai-state/decision-log.md`
- `.ai-state/assumptions.md`
- latest evidence and gate results

If repository state conflicts with conversation memory, repository state wins unless proven stale.
