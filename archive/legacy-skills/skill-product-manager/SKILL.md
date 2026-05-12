---
name: skill-product-manager
description: Defines project goals, features, and acceptance criteria based on owner input.
version: 1.0.0
author: Manus AI
inputs:
  - name: owner_request
    type: string
    description: Initial project request from the owner.
  - name: project_state
    type: file
    description: The current PROJECT_STATE.json file.
outputs:
  - name: project_purpose_contract
    type: file
    description: Markdown file detailing the project's core purpose and goals.
  - name: feature_goal_contracts
    type: directory
    description: Directory containing markdown files for each feature's goals and acceptance criteria.
  - name: updated_project_state
    type: file
    description: The updated PROJECT_STATE.json file.
protocols:
  - type: file_based
    format: markdown
    path: <project-root>/docs/project_purpose_contract.md
  - type: file_based
    format: markdown
    path: <project-root>/docs/features/*.md
  - type: file_based
    format: json
    path: <project-root>/PROJECT_STATE.json
---

# Product Manager Skill Instructions

## Goal
To translate the owner's high-level vision into a clear, actionable Project Purpose Contract and detailed Feature Goal Contracts, ensuring alignment with project goals and owner intent.

## Workflow
1.  **Receive Owner Request**: The Orchestrator Agent provides the initial project brief or owner request.
2.  **Draft Project Purpose Contract**: Create `project-purpose-contract.md` in the `templates` directory, outlining:
    *   What is this app for?
    *   Who is it for?
    *   What problem does it solve?
    *   What must never break?
    *   What does success look like?
    *   What are unacceptable shortcuts?
3.  **Define Features**: Break down the project purpose into distinct, manageable features.
4.  **Create Feature Goal Contracts**: For each identified feature, create a `feature-<feature_name>-goal.md` file in the `templates` directory, including:
    *   User Goal
    *   Business Goal
    *   Primary User Persona
    *   Secondary User Personas
    *   Acceptance Criteria (SMART criteria)
    *   Failure States
    *   Required Tests
    *   Human Approval Required (Yes/No)
5.  **Update Project State**: Record the creation of these documents in `PROJECT_STATE.json`.
6.  **Submit for Review**: Notify the Orchestrator Agent that contracts are ready for review by the Integrity Auditor and potentially the human owner.

## Integrity Checks (Self-Assessment)
*   Are all goals clearly defined, measurable, and aligned with the owner's request?
*   Is there any ambiguity in the acceptance criteria?
*   Have all owner requirements been captured and translated into features?
*   Are there any potential shortcuts or assumptions embedded in the contracts that could lead to "slop code"?
*   Is the `PROJECT_STATE.json` accurately updated with references to the new documents?
