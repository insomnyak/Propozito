# Evidence Storage Policy

Propozito distinguishes committed evidence metadata from generated heavy artifacts.

Canonical artifact: `.ai-state/evidence-manifest.json`

Schema: `schemas/evidence-policy.schema.json`

Template: `templates/evidence-manifest.json`

Validator: `scripts/check-evidence-storage.js`

Committed by default:

- evidence manifest
- command metadata
- exit codes
- hashes of generated artifacts
- relative paths
- summaries
- prompt history
- signoff records

Not committed by default:

- screenshots
- videos
- Playwright traces
- PDFs
- ZIP exports
- large raw logs
- generated reports

Generated artifacts may live in local, CI, object storage, or artifact-server locations referenced by manifest hash and path.
