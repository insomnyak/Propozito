# Git Checkpoint Policy

Git checkpoints make task recovery and traceability possible.

## Rules

- Use a branch per task when Git is available.
- Commit after each passing task or approved checkpoint.
- Do not mark a task complete without a commit hash or explicit no-commit reason.
- Record current branch and commit in project state.
- Create rollback points before risky changes.
- Migrations require rollback notes.
- Release candidates require a clean working tree.
- State files must be updated before handoff.

## Commit Message Format

```text
feat(scope): concise summary [TASK-ID]

Requirements: REQ-001
Tests: unit, integration, e2e
Gates: spec-trace pass, test-evidence pass
Evidence: .ai-state/evidence/TASK-ID.json
```
