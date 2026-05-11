---
name: skill-test-engineer
description: Writes unit, integration, and end-to-end tests for developed features.
version: 1.0.0
author: Manus AI
inputs:
  - name: detailed_requirements_specification
    type: file
    description: Markdown file detailing functional and non-functional requirements.
  - name: code_to_test
    type: directory
    description: Directory containing the code developed by other agents (frontend, backend).
  - name: project_state
    type: file
    description: The current PROJECT_STATE.json file.
outputs:
  - name: test_suites
    type: directory
    description: Directory containing comprehensive test suites.
  - name: updated_project_state
    type: file
    description: The updated PROJECT_STATE.json file.
protocols:
  - type: file_based
    format: markdown
    path: /home/ubuntu/project_name/docs/requirements/*.md
  - type: file_based
    format: json
    path: /home/ubuntu/project_name/PROJECT_STATE.json
---

# Test Engineer Skill Instructions

## Goal
To develop comprehensive and effective test suites (unit, integration, end-to-end) that validate the functionality, performance, and reliability of the application against the detailed requirements.

## Workflow
1.  **Receive Requirements and Code**: The Orchestrator Agent provides `detailed-requirements-specification.md`, the relevant `code_to_test` (from frontend/backend agents), and the current `PROJECT_STATE.json`.
2.  **Analyze Requirements and Code**: Thoroughly review the requirements and the implemented code to identify all testable components and scenarios.
3.  **Design Test Cases**: Create detailed test cases covering:
    *   **Unit Tests**: For individual functions, methods, and components.
    *   **Integration Tests**: For interactions between different modules or services.
    *   **End-to-End Tests**: For complete user flows and system-wide functionality.
    *   **Edge Cases and Error Handling**: Test for unexpected inputs and failure scenarios.
4.  **Implement Test Suites**: Write automated tests using appropriate testing frameworks and tools.
5.  **Ensure Test Coverage**: Strive for high test coverage to minimize untested code paths.
6.  **Update Project State**: Record the paths to the developed test suites in `PROJECT_STATE.json`.
7.  **Submit for Review**: Notify the Orchestrator Agent that the test suites are complete and ready for review by the Integrity Auditor and QA Agent.

## Integrity Checks (Self-Assessment)
*   Are all requirements from `detailed-requirements-specification.md` covered by test cases?
*   Are the test suites comprehensive (unit, integration, end-to-end)?
*   Are tests automated, repeatable, and reliable?
*   Do tests accurately reflect the expected behavior of the code?
*   Is the `PROJECT_STATE.json` accurately updated with references to the new test suites?
