# Setup Contract

The setup contract captures project shape and owner preferences before planning or implementation begins.

It records frontend/backend/API/CLI presence, external integrations, verification mode, terminology, user communication style, autonomy level, context rotation, evidence storage, commit/push policy, project-management integration, semantic graph preference, owner signoff policy, and security boundary profile.

Canonical artifact: `.ai-state/setup-contract.json`

Schema: `schemas/setup-contract.schema.json`

Template: `templates/setup-questionnaire.md`

Validator: `scripts/validate-setup.js`

The setup contract is configuration, not memory. If it conflicts with deterministic project state, project state wins for current execution; the setup contract should then be updated through an explicit decision.
