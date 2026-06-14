# Security Policy

This project is a beta framework for AI-assisted development workflows. It provides security-oriented protocols and gates, but it does not replace threat modeling, code review, penetration testing, or production security ownership.

## Reporting Security Issues

Do not disclose suspected vulnerabilities publicly before maintainers have had a chance to review them. Report issues through the repository security advisory channel or a private maintainer contact if available.

## Framework Security Expectations

Projects using this framework should treat these areas as high-risk and require explicit review:

- authentication
- authorization
- secrets handling
- payments
- personal data
- data deletion
- migrations
- external integrations
- deployment automation
- CI/CD credentials

AI agents must not invent security decisions, bypass existing protections, or mark security-sensitive work complete without evidence and gate approval.
