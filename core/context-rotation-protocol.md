# Context Rotation Protocol

Context rotation reduces long-session drift by starting fresh from durable state.

Supported policies:

- `manual_only`
- `after_each_verified_unit`
- `after_n_tasks`
- `after_token_threshold`
- `after_high_risk_task`
- `after_rework_or_rejection`
- `before_architecture_change`
- `before_release_gate`

Schemas:

- `schemas/context-rotation-policy.schema.json`
- `schemas/context-pack.schema.json`

Templates:

- `templates/working-context.md`
- `templates/current-work-item.md`
- `templates/context-pack.md`

Scripts:

- `scripts/generate-context-pack.js`
- `scripts/validate-context-pack.js`

A new session initializes from durable repo state, not chat memory.
