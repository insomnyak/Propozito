# Application Relationship Graph

The application relationship graph is a deterministic machine-readable map of how project artifacts connect.

Canonical artifact: `.ai-state/app-relationship-graph.json`

Schema: `schemas/app-relationship-graph.schema.json`

Templates:

- `templates/app-relationship-graph.json`
- `templates/app-relationship-graph.mmd`

Validators:

- `scripts/validate-relationship-graph.js`
- `scripts/impact-check.js`

The graph models features, slices/stories/tasks, files, modules, services, APIs, routes, pages, components, tests, data stores, external systems, placeholders, decisions, risks, signoffs, and evidence. Edges describe dependencies, implementations, calls, proxying, rendering, state ownership, reads/writes, verification, placeholder replacement, regression surfaces, source-of-truth links, and direct/indirect/planned impact.

Visual graphs and Mermaid diagrams are projections of this deterministic graph, not the source of truth.
