#!/usr/bin/env node
const fs = require("fs");
const path = require("path");
const { finish, listFiles, resolveRoot } = require("./lib/framework-validation");

const root = resolveRoot(process.argv[2] || ".");
const errors = [];
const portableRoot = path.join(root, "skills", "portable");
const allSkillFiles = listFiles(root).filter((file) => path.basename(file) === "SKILL.md");

function toRepoPath(file) {
  return path.relative(root, file).replace(/\\/g, "/");
}

function isApprovedSkillPath(file) {
  const rel = toRepoPath(file);
  return (
    rel.startsWith("skills/portable/") ||
    rel.startsWith("skills/adapters/") ||
    rel.startsWith("archive/legacy-skills/")
  );
}

for (const file of allSkillFiles) {
  if (!isApprovedSkillPath(file)) {
    errors.push(`${toRepoPath(file)}: SKILL.md is outside approved locations`);
  }
}

function parseFrontmatter(content, file) {
  if (!content.startsWith("---\n")) {
    errors.push(`${file}: missing YAML frontmatter`);
    return null;
  }
  const end = content.indexOf("\n---", 4);
  if (end === -1) {
    errors.push(`${file}: unterminated YAML frontmatter`);
    return null;
  }
  const raw = content.slice(4, end).trim();
  const keys = [];
  for (const line of raw.split(/\r?\n/)) {
    const match = line.match(/^([A-Za-z0-9_-]+):/);
    if (match) keys.push(match[1]);
  }
  return keys;
}

if (!fs.existsSync(portableRoot)) {
  errors.push("skills/portable is missing");
} else {
  const skillFiles = listFiles(portableRoot).filter((file) => path.basename(file) === "SKILL.md");
  if (skillFiles.length === 0) {
    errors.push("skills/portable contains no SKILL.md files");
  }

  for (const file of skillFiles) {
    const content = fs.readFileSync(file, "utf8");
    const keys = parseFrontmatter(content, file);
    if (!keys) continue;
    const extra = keys.filter((key) => !["name", "description"].includes(key));
    for (const key of ["name", "description"]) {
      if (!keys.includes(key)) errors.push(`${file}: missing frontmatter key '${key}'`);
    }
    if (extra.length > 0) {
      errors.push(`${file}: portable skill frontmatter has disallowed keys: ${extra.join(", ")}`);
    }
  }
}

const adapterRoot = path.join(root, "skills", "adapters");
if (fs.existsSync(adapterRoot)) {
  const adapterSkillFiles = listFiles(adapterRoot).filter((file) => path.basename(file) === "SKILL.md");
  for (const file of adapterSkillFiles) {
    const content = fs.readFileSync(file, "utf8");
    const keys = parseFrontmatter(content, file);
    if (!keys) continue;
    for (const key of ["name", "description"]) {
      if (!keys.includes(key)) errors.push(`${file}: adapter skill missing frontmatter key '${key}'`);
    }
  }
}

finish(errors, "validate-skills: pass");
