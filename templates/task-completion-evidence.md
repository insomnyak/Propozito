# Task Completion Evidence

## 1. Task ID
[Insert Unique Task Identifier Here]

## 2. Goal Alignment
[Clearly state how the completed work aligns with a specific feature goal and the overall project purpose. Provide links to relevant `feature-goal-contract.md` and `project-purpose-contract.md`.]

## 3. Code Changes
[List paths to all modified or newly created code files. Include relevant commit hashes if applicable.]

## 4. Test Results
[Provide the full output of all relevant test suites (unit, integration, end-to-end) that validate this task. This must include successful execution and coverage reports. If no tests are applicable, explain why.]

```bash
# Example: Output of test command
npm test
```

## 5. Verification Command Output
[Provide the output of a shell command that objectively demonstrates the work. This could be `ls -l <new_file>`, `curl <api_endpoint>`, `docker ps`, etc. If no command is applicable, explain why.]

```bash
# Example: Output of verification command
ls -l src/new_feature.py
```

## 6. Self-Reflection
[A brief analysis by the agent on the task completion. Address the following:
*   What challenges were encountered and how were they resolved?
*   Were any shortcuts taken? If so, why, and what are the implications?
*   Are there any areas of uncertainty or assumptions made?
*   What could have been done better?]

## 7. Integrity Checksum
[Provide the hash of the `PROJECT_STATE.json` file *before* and *after* this task was completed. This ensures state consistency and detects unauthorized modifications.]

*   **PROJECT_STATE.json (Before Task)**: [Insert Hash Here]
*   **PROJECT_STATE.json (After Task)**: [Insert Hash Here]
