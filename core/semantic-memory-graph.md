# Semantic Memory Graph

The semantic memory graph is an optional retrieval/index layer over canonical artifacts.

Canonical truth remains:

- repo files
- `.ai-state` JSON/Markdown
- schemas
- validators
- deterministic relationship graph

Schemas:

- `schemas/semantic-memory-index.schema.json`
- `schemas/semantic-memory-node.schema.json`

Template: `templates/semantic-memory-index.json`

The vector layer may index relationship graph nodes and edges, requirements, acceptance criteria, tasks, current work files, decisions, assumptions, risks, evidence summaries, signoffs, rework entries, prompt history, implementation-map entries, and documentation pages.

No specific vector database, embedding provider, or embedding model is required. Embeddings may be inline, referenced externally, omitted, or adapter-managed.
