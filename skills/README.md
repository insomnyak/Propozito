# Skills

The canonical skill layer is `skills/portable/`.

Portable skills must use only:

```yaml
---
name:
description:
---
```

Platform-specific extensions belong in `skills/adapters/`.

Legacy `skill-*` folders are retained only under `archive/legacy-skills/`. They are historical migration material, not the authoritative framework specification.
