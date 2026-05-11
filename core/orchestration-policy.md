# Orchestration Policy

The orchestrator coordinates work but does not invent requirements, bypass gates, or mark work complete without evidence.

## Required Orchestrator Duties

- read `.ai-state/project-state.json` before assigning work
- assign only ready tasks or planning tasks
- maintain active locks and file ownership
- route outputs through required gates
- update durable state after every checkpoint
- escalate high-risk ambiguity
- prevent uncontrolled context growth

## Parallelism

Parallel work is allowed only when tasks have non-overlapping file ownership and no unresolved shared contract dependency.

Sequential work is required for:

- schema or API contract changes
- migrations
- auth or permissions
- security-sensitive files
- shared architecture decisions
- merge conflict resolution involving high-risk files

## Handoffs

Every agent handoff must include:

- task ID
- scope
- assumptions
- decisions
- files touched
- tests run
- evidence paths
- blockers
- next actions

Handoffs must be written to durable files, not only conversation history.
