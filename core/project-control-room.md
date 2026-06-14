# Project Control Room

The Project Control Room is a human-visible status surface generated from `.ai-state`.

Canonical artifact: `.ai-state/project-status.json`

Schema: `schemas/project-status.schema.json`

Template: `templates/project-status.md`

Validator: `scripts/validate-status.js`

It tracks project goal, progress using configured terminology, active and blocked work, bugs, enhancements, open questions, escalations, agents, branch/commit, gates, evidence, tests, verification status, owner signoffs, placeholder burn-down, relationship graph health, and next recommended action.

The control room may render to Markdown, HTML, dashboard UI, API, or export formats. Rendered views are derived artifacts; `.ai-state/project-status.json` remains the machine-readable source for the status surface.
