---
name: skill-security-agent
description: Conducts security reviews, threat modeling, and ensures compliance.
version: 1.0.0
author: Manus AI
inputs:
  - name: architecture_specification
    type: file
    description: Markdown file detailing the system architecture.
  - name: detailed_requirements_specification
    type: file
    description: Markdown file detailing functional and non-functional requirements.
  - name: code_base
    type: directory
    description: Directory containing the entire application codebase.
  - name: project_state
    type: file
    description: The current PROJECT_STATE.json file.
outputs:
  - name: security_audit_report
    type: file
    description: Markdown file detailing security findings and recommendations.
  - name: compliance_checks
    type: file
    description: Markdown file summarizing compliance status.
  - name: updated_project_state
    type: file
    description: The updated PROJECT_STATE.json file.
protocols:
  - type: file_based
    format: markdown
    path: /home/ubuntu/project_name/docs/architecture/*.md
  - type: file_based
    format: markdown
    path: /home/ubuntu/project_name/docs/requirements/*.md
  - type: file_based
    format: json
    path: /home/ubuntu/project_name/PROJECT_STATE.json
---

# Security Agent Skill Instructions

## Goal
To identify and mitigate security vulnerabilities, perform threat modeling, and ensure the application adheres to security best practices and relevant compliance standards throughout the development lifecycle.

## Workflow
1.  **Receive Project Assets**: The Orchestrator Agent provides `architecture-specification.md`, `detailed-requirements-specification.md`, the `code_base`, and the current `PROJECT_STATE.json`.
2.  **Perform Threat Modeling**: Analyze the system architecture and data flows to identify potential threats, vulnerabilities, and attack vectors.
3.  **Conduct Code Review**: Perform static and dynamic analysis of the `code_base` to detect common security flaws (e.g., injection flaws, broken authentication, sensitive data exposure).
4.  **Review Requirements**: Ensure security requirements are adequately defined and addressed in the `detailed-requirements-specification.md`.
5.  **Check Compliance**: Verify adherence to relevant security standards, regulations, and policies (e.g., GDPR, HIPAA, OWASP Top 10).
6.  **Generate Security Audit Report**: Create a `security-audit-report.md` detailing:
    *   Identified vulnerabilities and their severity.
    *   Recommendations for remediation.
    *   Threat model summary.
    *   Compliance status.
7.  **Generate Compliance Checks Summary**: Create a `compliance-checks.md` summarizing the adherence to various standards.
8.  **Update Project State**: Record the security reports in `PROJECT_STATE.json`.
9.  **Submit for Review**: Notify the Orchestrator Agent that the security review is complete and the reports are ready for review by the Integrity Auditor and relevant engineering agents.

## Integrity Checks (Self-Assessment)
*   Was a comprehensive threat model performed?
*   Were all critical parts of the codebase reviewed for security vulnerabilities?
*   Are all identified vulnerabilities clearly documented with actionable remediation steps?
*   Is the compliance status accurately reflected?
*   Is the `PROJECT_STATE.json` accurately updated with references to the new security documents?
