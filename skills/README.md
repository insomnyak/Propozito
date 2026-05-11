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

Legacy `skills/skill-*` folders, if present in older archives, should be treated as historical adapter material rather than the authoritative framework specification.
