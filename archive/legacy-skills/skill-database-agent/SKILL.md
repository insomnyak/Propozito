---
name: skill-database-agent
description: Manages database schemas, migrations, and data integrity.
version: 1.0.0
author: Manus AI
inputs:
  - name: architecture_specification
    type: file
    description: Markdown file detailing the system architecture, including data models.
  - name: project_state
    type: file
    description: The current PROJECT_STATE.json file.
outputs:
  - name: database_schema
    type: file
    description: SQL or ORM definition of the database schema.
  - name: migration_scripts
    type: directory
    description: Directory containing database migration scripts.
  - name: updated_project_state
    type: file
    description: The updated PROJECT_STATE.json file.
protocols:
  - type: file_based
    format: markdown
    path: <project-root>/docs/architecture/*.md
  - type: file_based
    format: json
    path: <project-root>/PROJECT_STATE.json
---

# Database/Data Agent Skill Instructions

## Goal
To design, implement, and maintain the database schema, ensuring data integrity, consistency, and efficient access for the application.

## Workflow
1.  **Receive Architecture Specification**: The Orchestrator Agent provides the `architecture-specification.md` (which includes data models) and the current `PROJECT_STATE.json`.
2.  **Analyze Data Models**: Review the proposed data models and relationships to understand the database requirements.
3.  **Design Database Schema**: Create the database schema (e.g., SQL DDL, ORM definitions) based on the architecture specification, ensuring normalization, indexing, and data integrity constraints.
4.  **Develop Migration Scripts**: Write idempotent database migration scripts to manage schema changes over time.
5.  **Ensure Data Integrity**: Implement measures to ensure data consistency and prevent corruption.
6.  **Update Project State**: Record the paths to the database schema and migration scripts in `PROJECT_STATE.json`.
7.  **Submit for Review**: Notify the Orchestrator Agent that the database design and migrations are complete and ready for review by the Integrity Auditor and Backend Engineer Agent.

## Integrity Checks (Self-Assessment)
*   Does the database schema accurately reflect the data models in the `architecture-specification.md`?
*   Are migration scripts correctly versioned and idempotent?
*   Are data integrity constraints properly enforced?
*   Is the `PROJECT_STATE.json` accurately updated with references to the new database artifacts?
