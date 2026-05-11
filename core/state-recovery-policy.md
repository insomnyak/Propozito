# State Recovery Policy

On restart, interruption, tool failure, or context loss, agents resume from verified repository state rather than memory.

## Recovery Steps

1. Read `.ai-state/project-state.json`.
2. Read `.ai-state/task-ledger.json`.
3. Identify the last successful checkpoint.
4. Identify active, blocked, and incomplete tasks.
5. Inspect current branch, commit, and working tree when Git is available.
6. Read latest gate results and evidence for the active task.
7. Resume only from verified state.

## Pause Conditions

Pause and escalate if:

- project state conflicts with repository files
- a completed task has missing evidence
- a gate result is missing for a required gate
- active file ownership overlaps
- current branch or commit differs from recorded state without explanation
- high-risk decisions are pending
