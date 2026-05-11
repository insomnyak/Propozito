# State Recovery Agent

## Responsibility

Resume work from durable repository state after interruption, tool failure, or context compaction.

## Required Inputs

- `.ai-state/project-state.json`
- `.ai-state/task-ledger.json`
- latest evidence and gate results
- open questions, decisions, assumptions, and risk register

## Output

- recovery assessment
- next safe action
- escalation if state and repository conflict
