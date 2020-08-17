// @ts-check
const path = require('path');
const { spawn } = require('child_process');
const { createWriteStream } = require('fs');
const stream = require('stream');
const { promisify } = require('util');
const pipeline = promisify(stream.pipeline);

const PROJECT_PATH = path.resolve(__dirname, '..');
const ROOT_PROJECT_PATH = path.resolve(PROJECT_PATH, '../../../..');
const DIST_DIR = path.resolve(ROOT_PROJECT_PATH, process.env.DIST_DIR || 'dist', 'x64-libc');

async function generateStdTypes() {
  const greycat = path.resolve(DIST_DIR, 'bin/greycat');
  const p = spawn(greycat, ['-l'], { cwd: PROJECT_PATH });
  const dst = path.resolve(PROJECT_PATH, 'src/std.types.json');
  await pipeline(p.stdout, createWriteStream(dst));
}

async function generateKeys() {
  const generator = path.resolve(DIST_DIR, `tools/greycat_ts_keys`);
  const keys = path.resolve(ROOT_PROJECT_PATH, 'src/greycat/common/gkeys.txt');
  const dstKeys = path.resolve(PROJECT_PATH, 'src/keys.ts');
  const dstMetakeys = path.resolve(PROJECT_PATH, 'src/metakeys.ts');
  const p = spawn(generator, [keys, dstKeys, dstMetakeys], { cwd: PROJECT_PATH });
  return new Promise((resolve, reject) => {
    p.on('exit', (code) => {
      if (code === 0) {
        resolve();
      } else {
        reject(new Error(`Generate keys failed (code=${code})`));
      }
    });
  });
}

async function main() {
  await generateStdTypes();
  await generateKeys();
}

main().catch((err) => {
  console.error(err.message);
  process.exit(1);
});
