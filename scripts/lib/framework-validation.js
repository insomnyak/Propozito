const fs = require("fs");
const path = require("path");

function resolveRoot(input) {
  return path.resolve(process.cwd(), input || ".");
}

function readJson(filePath, errors) {
  try {
    return JSON.parse(fs.readFileSync(filePath, "utf8"));
  } catch (error) {
    errors.push(`${filePath}: invalid or missing JSON (${error.message})`);
    return null;
  }
}

function exists(root, relativePath) {
  return fs.existsSync(path.resolve(root, relativePath));
}

function nonEmptyFile(root, relativePath) {
  const fullPath = path.resolve(root, relativePath);
  return fs.existsSync(fullPath) && fs.statSync(fullPath).isFile() && fs.readFileSync(fullPath, "utf8").trim().length > 0;
}

function requireFields(object, fields, label, errors) {
  for (const field of fields) {
    if (object[field] === undefined || object[field] === null || object[field] === "") {
      errors.push(`${label}: missing required field '${field}'`);
    }
  }
}

function requireArray(object, field, label, errors, minItems = 0) {
  if (!Array.isArray(object[field])) {
    errors.push(`${label}: '${field}' must be an array`);
    return;
  }
  if (object[field].length < minItems) {
    errors.push(`${label}: '${field}' must contain at least ${minItems} item(s)`);
  }
}

function readProjectState(root, errors) {
  return readJson(path.join(root, ".ai-state", "project-state.json"), errors);
}

function readTaskLedger(root, errors) {
  return readJson(path.join(root, ".ai-state", "task-ledger.json"), errors);
}

function readTraceability(root, errors) {
  return readJson(path.join(root, ".ai-state", "traceability-matrix.json"), errors);
}

function listFiles(root) {
  const ignored = new Set([".git", "node_modules"]);
  const results = [];

  function walk(dir) {
    for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
      if (ignored.has(entry.name)) continue;
      const fullPath = path.join(dir, entry.name);
      results.push(fullPath);
      if (entry.isDirectory()) walk(fullPath);
    }
  }

  walk(root);
  return results;
}

function finish(errors, successMessage) {
  if (errors.length > 0) {
    console.error(errors.map((error) => `ERROR: ${error}`).join("\n"));
    process.exit(1);
  }
  console.log(successMessage);
}

function relative(root, filePath) {
  return path.relative(root, filePath).replace(/\\/g, "/");
}

module.exports = {
  exists,
  finish,
  listFiles,
  nonEmptyFile,
  readJson,
  readProjectState,
  readTaskLedger,
  readTraceability,
  relative,
  requireArray,
  requireFields,
  resolveRoot
};
