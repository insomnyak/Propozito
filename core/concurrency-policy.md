# Concurrency Policy

Default mode is gated bursts, not uncontrolled parallel coding.

## Rules

- One implementation agent may own a file at a time.
- Parallel implementation requires non-overlapping file ownership.
- API, schema, and contract changes block dependent work until merged and documented.
- Each implementation task should use a dedicated branch or worktree.
- Merge order must follow the dependency graph.
- After conflict resolution, affected gates must rerun.
- Automated conflict resolution is not allowed for high-risk files without explicit approval.
- Shared contracts, auth, migrations, and security-sensitive files require stricter review.
- The orchestrator must maintain active locks and file ownership in project state.
