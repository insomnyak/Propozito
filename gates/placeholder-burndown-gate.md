# Placeholder Burn-Down Gate

Gate ID: `placeholder-burndown`

## Purpose

Prevent placeholders, stubs, mocks, hardcoded data, or fake UI from being treated as completed work.

## Checks

- each placeholder has owner, risk, replacement criteria, verification surface, and state
- completed work has no live placeholders unless explicitly deferred and approved
- placeholder evidence and signoff are recorded where applicable

## Failure Routing

Return to implementation or product planning. Do not mark affected feature complete.
