#!/usr/bin/env node
// @ts-check
const path = require('path');
const { copyFile, writeFile, readFile } = require('fs/promises');
const { copy } = require('fs-extra');
const { exec, rmrf, mkdirp, exists } = require('./_utils');

const DEFAULT_ROOT = path.resolve(__dirname, '..', '..', '..');
const DEFAULT_DIST = path.resolve(DEFAULT_ROOT, 'dist');
const NATIVE_TPL = path.resolve(__dirname, '..', 'packages', 'native');

async function readPackageJson() {
  const data = await readFile(path.join(NATIVE_TPL, 'package.json'), 'utf-8');
  return JSON.parse(data);
}

async function generatePackage(variant, version, dest) {
  const pkg = await readPackageJson();
  pkg.name = `@greycat/native-${variant}`;
  pkg.version = version;

  await writeFile(
    path.join(dest, 'package.json'),
    JSON.stringify(pkg, null, 2)
  );
}

function tarballPath(dist = DEFAULT_DIST, name) {
  return path.resolve(dist, 'generic', 'ts', `${name}.tgz`);
}

async function genNativeModule(distDir = DEFAULT_DIST, variant = 'x64-libc', version = '0.0.0') {
  const moduleName = `greycat-native-${variant}`;
  const destDir = path.resolve(distDir, 'generic', 'ts', moduleName);
  const greycat = path.resolve(distDir, variant, 'lib', 'greycat.node');

  if (await exists(greycat)) {
    await rmrf(`${destDir}*`); // clean previous if any
    await mkdirp(destDir); // recreate dir
    await copy(NATIVE_TPL, destDir); // copy native template dir to destDir
    await copyFile(greycat, path.join(destDir, 'greycat.node')); // copy greycat.node binary
    await generatePackage(variant, version, destDir); // generate package.json
    const tarball = tarballPath(distDir, moduleName);
    await exec(`yarn pack --cwd ${destDir} --filename ${tarball}`); // create a tarball
    await rmrf(destDir); // clean dir
  } else {
    console.log(`Skipping generation for '${destDir}_${version}.tgz'`);
  }
}

async function copyBinInCLI(distDir = DEFAULT_DIST, variant = 'x64-libc') {
  const greycat = path.resolve(distDir, variant, 'bin', 'greycat.shell');
  if (await exists(greycat)) {
    const destDir = path.resolve(__dirname, '..', 'packages', 'cli', 'bin', variant);
    await mkdirp(destDir);
    await copyFile(greycat, path.join(destDir, 'greycat'));
  }
}

async function main() {
  await exec('yarn workspace @greycat/types package');
  await exec('yarn workspace @greycat/common package');
  await exec('yarn workspace @greycat/debugger package');
  await exec('yarn workspace @greycat/napi package');
  await exec('yarn workspace @greycat/server package');
  for (const variant of ['x64-cuda-10-2', 'x64-cuda-11', 'x64-libc', 'aarch64-libc', 'armv7-eabihf-libc', 'x64-mac', 'x64-musl']) {
    await genNativeModule(process.env.DIST_DIR, variant, process.env.VERSION);
    await copyBinInCLI(process.env.DIST_DIR, variant);
  }
  await exec('yarn workspace @greycat/cli package');
}

main().catch((err) => {
  console.error(err.message);
  process.exit(1);
});
