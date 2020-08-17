#!/usr/bin/env node
// @ts-check
const path = require('path');
const { copyFile, writeFile } = require('fs/promises');
const { exec, rmrf, mkdirp, exists } = require('./_utils');

const DEFAULT_ROOT = path.resolve(__dirname, '..', '..', '..');
const DEFAULT_DIST = path.resolve(DEFAULT_ROOT, 'dist');

function generatePackage(variant, version) {
  return {
    name: `@greycat/native-${variant}`,
    version,
    description: `Greycat native N-API for ${variant}`,
    main: './greycat.node',
    license: 'MIT',
    author: 'DataThings S.à.r.l',
  };
}

function tarballPath(dist = DEFAULT_DIST, name) {
  return path.resolve(dist, 'generic', 'ts', `${name}.tgz`);
}

async function genNativeModule(distDir = DEFAULT_DIST, variant = 'x64-libc', version = '0.0.0') {
  const moduleName = `greycat-native-${variant}`;
  const moduleDir = path.resolve(distDir, 'generic', 'ts', moduleName);
  const greycat = path.resolve(distDir, variant, 'lib', 'greycat.node');

  if (await exists(greycat)) {
    await rmrf(moduleDir); // clean previous if any
    await mkdirp(moduleDir); // recreate dir
    await copyFile(greycat, path.join(moduleDir, 'greycat.node')); // copy greycat.node binary
    const pkg = generatePackage(variant, version); // generate package.json
    await writeFile(path.join(moduleDir, 'package.json'), JSON.stringify(pkg, null, 2)); // write package.json
    const tarball = tarballPath(distDir, moduleName);
    await exec(`yarn pack --cwd ${moduleDir} --filename ${tarball}`); // create a tarball
    await rmrf(moduleDir); // clean dir
  } else {
    console.log(`Skipping generation for '${moduleDir}_${version}.tgz'`);
  }
}

async function main() {
  await exec('yarn workspace @greycat/types package');
  await exec('yarn workspace @greycat/common package');
  await exec('yarn workspace @greycat/debugger package');
  await exec('yarn workspace @greycat/napi package');
  await exec('yarn workspace @greycat/cli package');
  await exec('yarn workspace @greycat/server package');
  for (const variant of ['x64-cuda-10-2', 'x64-cuda-11', 'x64-libc', 'aarch64-libc', 'armv7-eabihf-libc', 'x64-mac']) {
    await genNativeModule(process.env.DIST_DIR, variant, process.env.VERSION);
  }
}

main().catch((err) => {
  console.error(err.message);
  process.exit(1);
});
