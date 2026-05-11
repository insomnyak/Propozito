---
name: skill-requirements-analyst
description: Translates high-level features into detailed functional and non-functional requirements.
version: 1.0.0
author: Manus AI
inputs:
  - name: feature_goal_contract
    type: file
    description: Markdown file detailing the feature goals and acceptance criteria.
  - name: project_state
    type: file
    description: The current PROJECT_STATE.json file.
outputs:
  - name: detailed_requirements_specification
    type: file
    description: Markdown file detailing functional and non-functional requirements.
  - name: updated_project_state
    type: file
    description: The updated PROJECT_STATE.json file.
protocols:
  - type: file_based
    format: markdown
    path: /home/ubuntu/project_name/docs/features/*.md
  - type: file_based
    format: markdown
    path: /home/ubuntu/project_name/docs/requirements/*.md
  - type: file_based
    format: json
    path: /home/ubuntu/project_name/PROJECT_STATE.json
---

# Requirements Analyst Skill Instructions

## Goal
To transform high-level feature goals and acceptance criteria into precise, unambiguous functional and non-functional requirements that can guide engineering efforts.

## Workflow
1.  **Receive Feature Goal Contract**: The Orchestrator Agent provides a `feature-goal-contract.md` and the current `PROJECT_STATE.json`.
2.  **Analyze Feature Goals**: Thoroughly review the user goal, business goal, and acceptance criteria within the `feature-goal-contract.md`.
3.  **Elicit Functional Requirements**: Identify all necessary behaviors and functionalities the system must exhibit to meet the feature goals. Document these clearly and concisely.
4.  **Elicit Non-Functional Requirements**: Determine constraints and quality attributes such as performance, security, usability, scalability, and maintainability. Document these with measurable metrics where possible.
5.  **Create Detailed Requirements Specification**: Generate a `requirements-<feature_name>.md` file in the `docs/requirements/` directory, detailing:
    *   Functional Requirements (e.g., "The system SHALL allow users to log in with email and password.")
    *   Non-Functional Requirements (e.g., "The login process SHALL complete within 2 seconds under normal load.")
    *   Dependencies on other features or external systems.
    *   Assumptions and constraints.
6.  **Update Project State**: Record the creation of the requirements specification in `PROJECT_STATE.json`.
7.  **Submit for Review**: Notify the Orchestrator Agent that the requirements are ready for review by the Integrity Auditor and the System Architect Agent.

## Integrity Checks (Self-Assessment)
*   Are all requirements traceable back to the `feature-goal-contract.md`?
*   Are the requirements clear, unambiguous, and testable?
*   Do the requirements avoid prescribing implementation details?
*   Are both functional and non-functional aspects adequately covered?
*   Is the `PROJECT_STATE.json` accurately updated with references to the new requirements document?
