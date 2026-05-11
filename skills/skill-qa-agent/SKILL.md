---
name: skill-qa-agent
description: Performs manual and automated testing, identifies bugs, and verifies fixes.
version: 1.0.0
author: Manus AI
inputs:
  - name: application_access_details
    type: string
    description: Details for accessing the application (e.g., URL, credentials).
  - name: test_suites
    type: directory
    description: Directory containing comprehensive test suites.
  - name: detailed_requirements_specification
    type: file
    description: Markdown file detailing functional and non-functional requirements.
  - name: project_state
    type: file
    description: The current PROJECT_STATE.json file.
outputs:
  - name: qa_report
    type: file
    description: Markdown file detailing the QA findings.
  - name: bug_reports
    type: directory
    description: Directory containing markdown files for identified bugs.
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

# QA Agent Skill Instructions

## Goal
To ensure the quality and correctness of the developed application by executing test suites, performing manual testing, identifying defects, and verifying bug fixes.

## Workflow
1.  **Receive Application Details and Test Assets**: The Orchestrator Agent provides `application_access_details`, `test_suites`, `detailed-requirements-specification.md`, and the current `PROJECT_STATE.json`.
2.  **Execute Automated Tests**: Run all provided automated test suites (unit, integration, end-to-end) and record the results.
3.  **Perform Manual Testing**: Based on the `detailed-requirements-specification.md`, conduct exploratory and structured manual testing to uncover issues not caught by automated tests.
4.  **Identify and Report Bugs**: For each identified defect:
    *   Create a detailed `bug-report-<bug_id>.md` in the `bugs/` directory, including:
        *   Bug ID and Title
        *   Description
        *   Steps to Reproduce
        *   Expected Result
        *   Actual Result
        *   Severity and Priority
        *   Screenshots or logs
5.  **Verify Bug Fixes**: When a bug fix is submitted, re-test the affected functionality and verify that the bug is resolved without introducing new regressions.
6.  **Generate QA Report**: Create a `qa-report.md` summarizing:
    *   Test coverage and execution status.
    *   Number of bugs found, open, and closed.
    *   Overall quality assessment.
7.  **Update Project State**: Record the QA report and bug reports in `PROJECT_STATE.json`.
8.  **Submit for Review**: Notify the Orchestrator Agent that QA activities are complete and the report is ready for review by the Integrity Auditor.

## Integrity Checks (Self-Assessment)
*   Were all automated tests executed, and their results accurately recorded?
*   Was manual testing comprehensive and aligned with requirements?
*   Are bug reports clear, reproducible, and complete?
*   Are bug fixes thoroughly verified?
*   Is the `PROJECT_STATE.json` accurately updated with references to the QA report and bug reports?
