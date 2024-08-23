// @ts-check
import { GreyCat, core } from '@greycat/sdk';
import assert from 'node:assert';
import { readFileSync } from 'node:fs';

const g = await GreyCat.init();

const actual = g.serializeWithHeaders([
  { _type: '::<name>', name: 'one' },
  { _type: '::<name>', name: 'two' },
  { _type: '::<name>', name: 'three' },
  { _type: '::<name>', name: 'four' },
]);
const expected = readBytes(`table_2.gcb`);
// console.log({actual, expected});
assert.deepStrictEqual(actual, expected);

assert.deepStrictEqual(
  g.serializeWithHeaders(
    core.Table.fromRows([
      [0, 0.5, { _type: '::<name>', name: 'one' }],
      [1, 1.5, { _type: '::<name>', name: 'two' }],
      [2, 2.5, { _type: '::<name>', name: 'three' }],
      [3, 3.5, { _type: '::<name>', name: 'four' }],
    ]),
  ),
  readBytes(`table.gcb`),
);

// const by_sdk = g.serializeWithHeaders(
//   core.Table.fromRows([
//     [0, 0.5, { _type: '::<name>', name: 'one' }],
//     [1, 1.5, { _type: '::<name>', name: 'two' }],
//     [2, 2.5, { _type: '::<name>', name: 'three' }],
//     [3, 3.5, { _type: '::<name>', name: 'four' }],
//   ]),
// );
// const by_greycat = readBytes('project::table.bin');

// console.log({ by_sdk: new Uint8Array(by_sdk), by_greycat: new Uint8Array(by_greycat) });

// console.dir({
//   sdk_table: structuredClone(new AbiReader(g.abi, by_sdk).deserializeWithHeaders()),
//   greycat_table: structuredClone(new AbiReader(g.abi, by_greycat).deserializeWithHeaders()),
// }, { depth: Infinity });

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
