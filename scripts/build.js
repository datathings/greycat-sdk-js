#!/usr/bin/env node
// @ts-check
const { exec } = require('./_utils');

async function main() {
  await exec('yarn workspace @greycat/types build');
  await exec('yarn workspace @greycat/common build');
  await exec('yarn workspace @greycat/debugger build');
  await exec('yarn workspace @greycat/napi build');
}

main().catch((err) => {
  console.error(err.message);
  process.exit(1);
});
