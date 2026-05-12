#!/usr/bin/env node
const {
  exists,
  finish,
  nonEmptyFile,
  readJson,
  readTaskLedger,
  requireArray,
  requireFields,
  resolveRoot
} = require("./lib/framework-validation");
const fs = require("fs");
const path = require("path");

const root = resolveRoot(process.argv[2]);
const errors = [];
const ledger = readTaskLedger(root, errors);

function readText(relativePath) {
  return fs.readFileSync(path.resolve(root, relativePath), "utf8");
}

function hasExplicitExemption(evidence) {
  const approvals = Array.isArray(evidence.human_approvals) ? evidence.human_approvals : [];
  const exemptions = Array.isArray(evidence.exemptions) ? evidence.exemptions : [];
  return [...approvals, ...exemptions].some((value) => /exempt|waive|approved/i.test(String(value)));
}

function hasAssertion(content) {
  return /\bassert(?:\.|\()|\bexpect\s*\(|\.should\b|\bok\s*\(|\bequal\s*\(/.test(content);
}

function scanForSuspiciousClaims(evidence, label) {
  if (hasExplicitExemption(evidence)) return;
  const text = JSON.stringify(evidence).toLowerCase();
  for (const phrase of ["not tested", "manual only", "assumed working", "tests passed without output"]) {
    if (text.includes(phrase)) {
      errors.push(`${label}: suspicious completion claim '${phrase}' requires an explicit exemption`);
    }
  }
}

if (ledger) {
  for (const task of ledger.tasks || []) {
    if (task.status !== "done") continue;
    const evidence = readJson(`${root}/${task.evidence_path}`, errors);
    if (!evidence) continue;

    const label = `evidence '${task.evidence_path}'`;
    requireFields(
      evidence,
      [
        "evidence_id",
        "task_id",
        "agent",
        "timestamp",
        "changed_files",
        "requirement_ids",
        "acceptance_criteria_ids",
        "tests_added_or_modified",
        "commands",
        "known_limitations",
        "human_approvals"
      ],
      label,
      errors
    );

    if (evidence.task_id !== task.task_id) {
      errors.push(`${label}: task_id '${evidence.task_id}' does not match ledger task '${task.task_id}'`);
    }

    scanForSuspiciousClaims(evidence, label);

    for (const field of ["changed_files", "requirement_ids", "acceptance_criteria_ids", "tests_added_or_modified", "commands", "known_limitations", "human_approvals"]) {
      requireArray(evidence, field, label, errors, ["changed_files", "requirement_ids", "acceptance_criteria_ids", "commands"].includes(field) ? 1 : 0);
    }

    if (!hasExplicitExemption(evidence)) {
      requireArray(evidence, "tests_added_or_modified", label, errors, 1);
    }

    for (const changedFile of evidence.changed_files || []) {
      if (!exists(root, changedFile)) continue;
      const content = readText(changedFile);
      if (/\b(TODO|FIXME|XXX)\b/.test(content) && !hasExplicitExemption(evidence)) {
        errors.push(`${label}: completed task changed file '${changedFile}' contains TODO/FIXME/XXX placeholder text`);
      }
    }

    for (const testFile of evidence.tests_added_or_modified || []) {
      if (!exists(root, testFile)) {
        errors.push(`${label}: test file '${testFile}' is missing`);
        continue;
      }
      const content = readText(testFile).trim();
      if (!content && !hasExplicitExemption(evidence)) {
        errors.push(`${label}: test file '${testFile}' is empty`);
      } else if (!hasAssertion(content) && !hasExplicitExemption(evidence)) {
        errors.push(`${label}: test file '${testFile}' appears assertion-free`);
      }
    }

    for (const command of evidence.commands || []) {
      requireFields(command, ["command", "raw_output_path", "exit_code"], `${label}.commands[]`, errors);
      if (command.raw_output_path && !nonEmptyFile(root, command.raw_output_path)) {
        errors.push(`${label}: raw output '${command.raw_output_path}' is missing or empty`);
      } else if (command.raw_output_path && !hasExplicitExemption(evidence)) {
        const output = readText(command.raw_output_path).trim();
        if (/^(tests passed|all tests passed|passed)$/i.test(output)) {
          errors.push(`${label}: raw output '${command.raw_output_path}' looks like placeholder success text`);
        }
      }
      if (typeof command.exit_code !== "number") {
        errors.push(`${label}: command exit_code must be numeric`);
      } else if (command.exit_code !== 0) {
        errors.push(`${label}: command '${command.command}' recorded non-zero exit code ${command.exit_code}`);
      }
    }
  }
}

finish(errors, "validate-evidence: pass");
