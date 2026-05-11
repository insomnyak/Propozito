# Platform-Agnostic Policy

## Rule

The framework standard must remain independent of any single AI coding product, chat interface, IDE, CLI, or agent runtime.

## Canonical Layer

Canonical behavior belongs in:

- `core/`
- `schemas/`
- `gates/`
- `agents/`
- `templates/`
- `workflows/`

Portable skills and platform adapters must reference this layer instead of redefining it.

## Portable Skill Metadata

Portable `SKILL.md` files may use only this frontmatter:

```yaml
---
name:
description:
---
```

No portable skill may depend on platform-only fields such as model, tool permissions, path allowlists, marketplace metadata, or product-specific execution hooks.

## Adapter Layer

Adapters may add platform-specific metadata for:

- ChatGPT/Codex
- Claude Code and Claude Skills
- Qwen Code
- Kimi Code
- future CLI or web-based AI coding systems

Adapter behavior must not change canonical gates, schemas, or completion rules.
