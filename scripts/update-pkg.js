#!/usr/bin/env node
// @ts-check
const path = require('path');
const { exec, readJson, writeJson } = require('./_utils');

async function main() {
  const version = process.argv[2];
  const pkgPath = path.join(process.cwd(), 'package.json');
  const pkg = await readJson(pkgPath);
  pkg.version = version;
  console.log(`${pkg.name} version updated to ${version}`);
  const greycatDeps = pkg.dependencies ? Object.keys(pkg.dependencies).filter((d) => d.startsWith('@greycat/')) : [];
  for (const dep of greycatDeps) {
    pkg.dependencies[dep] = version;
    console.log(`  - ${dep}: '${version}'`);
  }
  await writeJson(pkgPath, pkg);
}

main().catch((err) => {
  console.error(err.message);
  process.exit(1);
});
