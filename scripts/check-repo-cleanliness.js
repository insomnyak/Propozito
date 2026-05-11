#!/usr/bin/env node
const fs = require("fs");
const path = require("path");
const { finish, listFiles, relative, resolveRoot } = require("./lib/framework-validation");

const root = resolveRoot(process.argv[2] || ".");
const errors = [];
const rootName = path.basename(root);
const files = listFiles(root);

for (const file of files) {
  const rel = relative(root, file);
  const base = path.basename(file);

  if (base === "__MACOSX" || base === ".DS_Store") {
    errors.push(`rejected generated OS artifact: ${rel}`);
  }

  if (fs.statSync(file).isDirectory() && base === rootName) {
    errors.push(`possible duplicate root folder: ${rel}`);
  }

  if (fs.statSync(file).isFile() && fs.readFileSync(file, "utf8").trim().length === 0) {
    errors.push(`empty placeholder file: ${rel}`);
  }
}

const markdownFiles = files.filter((file) => file.endsWith(".md") && fs.statSync(file).isFile());
const linkPattern = /\[[^\]]+\]\(([^)]+)\)/g;

for (const file of markdownFiles) {
  const content = fs.readFileSync(file, "utf8");
  let match;
  while ((match = linkPattern.exec(content))) {
    const target = match[1].split("#")[0];
    if (!target || target.startsWith("http://") || target.startsWith("https://") || target.startsWith("mailto:")) continue;
    if (target.includes("[") || target.includes("]")) continue;
    const resolved = path.resolve(path.dirname(file), target);
    if (!fs.existsSync(resolved)) {
      errors.push(`${relative(root, file)}: broken internal link '${target}'`);
    }
  }
}

finish(errors, "check-repo-cleanliness: pass");
