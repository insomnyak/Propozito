---
name: skill-frontend-engineer
description: Implements user interface components based on design specifications and API contracts.
version: 1.0.0
author: Manus AI
inputs:
  - name: ui_design_specifications
    type: file
    description: Markdown file detailing UI/UX design (e.g., wireframes, mockups).
  - name: api_contracts
    type: file
    description: Markdown or OpenAPI specification for API endpoints.
  - name: project_state
    type: file
    description: The current PROJECT_STATE.json file.
outputs:
  - name: frontend_code
    type: directory
    description: Directory containing implemented frontend code.
  - name: ui_tests
    type: directory
    description: Directory containing unit and integration tests for UI components.
  - name: updated_project_state
    type: file
    description: The updated PROJECT_STATE.json file.
protocols:
  - type: file_based
    format: markdown
    path: <project-root>/docs/ui/*.md
  - type: file_based
    format: markdown
    path: <project-root>/docs/architecture/api-contracts.md
  - type: file_based
    format: json
    path: <project-root>/PROJECT_STATE.json
---

# Frontend Engineer Skill Instructions

## Goal
To develop responsive, user-friendly, and performant frontend components that accurately reflect UI/UX design specifications and integrate seamlessly with backend APIs.

## Workflow
1.  **Receive Design and API Contracts**: The Orchestrator Agent provides `ui-design-specifications.md`, `api-contracts.md`, and the current `PROJECT_STATE.json`.
2.  **Analyze Specifications**: Review UI/UX designs and API contracts to understand implementation requirements and constraints.
3.  **Develop Frontend Components**: Write clean, modular, and maintainable code for UI components using the approved technology stack.
4.  **Integrate with APIs**: Implement data fetching and submission logic, ensuring correct interaction with backend API endpoints as defined in `api-contracts.md`.
5.  **Write UI Tests**: Develop comprehensive unit and integration tests for all implemented components to ensure functionality and prevent regressions.
6.  **Update Project State**: Record the paths to the developed frontend code and tests in `PROJECT_STATE.json`.
7.  **Submit for Review**: Notify the Orchestrator Agent that the frontend development is complete and ready for review by the Integrity Auditor and QA Agent.

## Integrity Checks (Self-Assessment)
*   Does the implemented UI match the `ui-design-specifications.md`?
*   Does the frontend correctly interact with the APIs as per `api-contracts.md`?
*   Are all UI components covered by unit and integration tests?
*   Does the code adhere to coding standards and best practices?
*   Is the `PROJECT_STATE.json` accurately updated with references to the new code and tests?
