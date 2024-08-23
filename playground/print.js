import { join } from 'path';
import { readFileSync } from 'fs';
import { Abi, AbiReader } from '@greycat/sdk';

const [filepath] = process.argv.slice(2);
if (!filepath) {
  console.log('usage: print.js <filepath>');
  process.exit(1);
}

const abi = new Abi(readFile(join(process.cwd(), 'gcdata', 'abi')));
const reader = new AbiReader(abi, readFile(filepath));

try {
  reader.headers();
  for (const value of reader) {
    console.log(JSON.parse(JSON.stringify(value)));
  }
} catch (err) {
  console.error(err);
  process.exit(1);
}

/**
 * Node.js API can return re-used buffers from `readFileSync`
 * so we have to slice to the proper offset to get our own shrinked
 * `ArrayBuffer` from it.
 * @param {string} filepath
 * @returns
 */
function readFile(filepath) {
  const b = readFileSync(filepath);
  return b.buffer.slice(b.byteOffset, b.byteOffset + b.byteLength);
}
