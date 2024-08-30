// @ts-check
import { GreyCat, core } from '@greycat/sdk';
import assert from 'node:assert';
import { readFileSync } from 'node:fs';

const g = await GreyCat.init();

// assert.deepStrictEqual(
//   g.serializeWithHeaders(
//     core.Table.fromRows([
//       [0, 0.5, { _type: '::<name>', name: 'one' }],
//       [1, 1.5, { _type: '::<name>', name: 'two' }],
//       [2, 2.5, { _type: '::<name>', name: 'three' }],
//       [3, 3.5, { _type: '::<name>', name: 'four' }],
//     ]),
//   ),
//   readBytes('project::table3.bin'),
// );

// const value = g.deserializeWithHeader(readBytes('project::table3.bin'));
const value = await g.call('project::identity', [readBytes('project::table3.bin')]);

console.dir(JSON.parse(JSON.stringify(value)), {
  depth: Infinity,
});

/**
 * @param {string} filepath
 * @returns {ArrayBuffer}
 */
function readBytes(filepath) {
  // Read the file into a Buffer
  const buffer = readFileSync(filepath);
  // Convert Buffer to ArrayBuffer
  return buffer.buffer.slice(buffer.byteOffset, buffer.byteOffset + buffer.byteLength);
}
