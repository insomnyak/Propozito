# Verification Center

The Verification Center turns evidence into human-verifiable proof surfaces.

Canonical artifact: `.ai-state/verification-surfaces.json`

Schemas:

- `schemas/verification-surface.schema.json`
- `schemas/signoff.schema.json`

Template: `templates/verification-card.md`

Validator: `scripts/validate-signoffs.js`

A verification surface explains what was tested, why it matters, how it was run, where raw output lives, what visual or manual proof exists, what limitations remain, and whether the owner accepted, rejected, or deferred signoff.

The Verification Center must not assume a frontend. It supports frontend, CLI, API, backend, headless CI, hybrid, and manual review modes.
