---
name: skill-backend-engineer
description: Develops server-side logic, APIs, and integrates with databases.
version: 1.0.0
author: Manus AI
inputs:
  - name: api_contracts
    type: file
    description: Markdown or OpenAPI specification for API endpoints.
  - name: detailed_requirements_specification
    type: file
    description: Markdown file detailing functional and non-functional requirements.
  - name: project_state
    type: file
    description: The current PROJECT_STATE.json file.
outputs:
  - name: backend_code
    type: directory
    description: Directory containing implemented backend code.
  - name: api_tests
    type: directory
    description: Directory containing unit and integration tests for API endpoints.
  - name: updated_project_state
    type: file
    description: The updated PROJECT_STATE.json file.
protocols:
  - type: file_based
    format: markdown
    path: <project-root>/docs/architecture/api-contracts.md
  - type: file_based
    format: markdown
    path: <project-root>/docs/requirements/*.md
  - type: file_based
    format: json
    path: <project-root>/PROJECT_STATE.json
---

# Backend Engineer Skill Instructions

## Goal
To develop robust, scalable, and secure server-side logic and API endpoints that fulfill the defined requirements and integrate with the database.

## Workflow
1.  **Receive API Contracts and Requirements**: The Orchestrator Agent provides `api-contracts.md`, `detailed-requirements-specification.md`, and the current `PROJECT_STATE.json`.
2.  **Analyze Specifications**: Review API contracts and detailed requirements to understand the backend implementation needs.
3.  **Develop Backend Logic**: Write clean, modular, and performant code for server-side logic, business rules, and data processing.
4.  **Implement API Endpoints**: Create API endpoints as defined in `api-contracts.md`, ensuring correct request/response handling, authentication, and error management.
5.  **Integrate with Database**: Work with the Database/Data Agent to ensure seamless integration with the database, including data storage, retrieval, and manipulation.
6.  **Write API Tests**: Develop comprehensive unit, integration, and API tests to ensure the correctness and reliability of the backend services.
7.  **Update Project State**: Record the paths to the developed backend code and tests in `PROJECT_STATE.json`.
8.  **Submit for Review**: Notify the Orchestrator Agent that the backend development is complete and ready for review by the Integrity Auditor and QA Agent.

## Integrity Checks (Self-Assessment)
*   Does the backend implementation adhere to the `api-contracts.md`?
*   Are all functional and non-functional requirements from `detailed-requirements-specification.md` met?
*   Are all API endpoints covered by unit and integration tests?
*   Does the code adhere to coding standards and best practices?
*   Is the `PROJECT_STATE.json` accurately updated with references to the new code and tests?
