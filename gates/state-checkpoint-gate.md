# State Checkpoint Gate

Gate ID: `state-checkpoint`

## Purpose

Ensure durable project memory is updated before a task is treated as complete.

## Checks

- project state reflects current branch and commit or no-commit reason
- task ledger status matches gate results
- evidence and gate paths exist
- open questions and assumptions are updated
- next recommended action is recorded

## Fail Routing

Return to state manager or orchestrator.
