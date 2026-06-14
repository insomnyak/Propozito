# Prompt Refinement Protocol

Prompt refinement converts rough human intent into a coder-ready implementation prompt.

Inputs:

- human pre-prompt
- setup contract
- project status
- context pack
- relationship graph
- implementation map
- rework register
- prompt history
- target AI coder/tool profile

Outputs:

- objective
- non-goals
- requirements
- acceptance criteria
- affected graph nodes
- file boundaries
- test plan
- verification plan
- evidence plan
- required gates
- state updates
- commit/push policy
- rollback plan
- human escalation triggers
- completion report requirements

Schemas:

- `schemas/pre-prompt.schema.json`
- `schemas/refined-prompt.schema.json`
- `schemas/prompt-history.schema.json`

Templates:

- `templates/refined-coder-prompt.md`
- `templates/prompt-history-entry.json`

Validators:

- `scripts/validate-refined-prompt.js`
- `scripts/audit-prompt-history.js`
