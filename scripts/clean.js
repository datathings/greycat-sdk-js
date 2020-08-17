#!/usr/bin/env node
// @ts-check
const { exec } = require('./_utils');

async function main() {
  await exec('yarn workspace @greycat/types clean');
  await exec('yarn workspace @greycat/common clean');
  await exec('yarn workspace @greycat/napi clean');
}

main().catch((err) => {
  console.error(err.message);
  process.exit(1);
});
