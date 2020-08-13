// @ts-check
const { spawn } = require('child_process');
const { mkdir, rmdir } = require('fs/promises');
const fs = require('fs');
const { promisify } = require('util');

/**
 *
 * @param {String} cmd the command to execute
 * @param {String | undefined} cwd defaults to `process.cwd()`
 * @param {NodeJS.ProcessEnv | undefined} env defaults to `process.env`
 * @returns {Promise<void>}
 */
async function exec(cmd, cwd = process.cwd(), env = process.env) {
  const [program, ...args] = cmd.split(' ').map((i) => i.trim());
  const process = spawn(program, args, { cwd, env, stdio: 'inherit' });
  return new Promise((resolve, reject) => {
    process.on('exit', (code) => {
      if (code === 0) {
        resolve();
      } else {
        reject(new Error(`Unable to run '${cmd}' (code: ${code})`));
      }
    });
  });
}

function mkdirp(dirpath) {
  return mkdir(dirpath, { recursive: true });
}

function rmrf(dirpath) {
  return rmdir(dirpath, { recursive: true });
}

const exists = promisify(fs.exists);

module.exports = { exec, mkdirp, rmrf, exists };
