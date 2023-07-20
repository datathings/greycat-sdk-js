import { readFile } from 'node:fs/promises';
import { Abi, AbiReader, stdlib } from './dist/esm/index.js';
import assert from 'node:assert';

const buffer = (await readFile('gcdata/store/abi')).buffer;
const abi = new Abi(buffer, [stdlib]);

const data = (await readFile('out.gcb')).buffer;
const reader = new AbiReader(abi, data);

reader.headers(); // read headers

const expected_values = [
  true,
  '*',
  0,
  1,
  -1,
  63,
  -64,
  64,
  -65,
  8191,
  -8192,
  8192,
  -8193,
  1048575,
  -1048576,
  1048576,
  -1048577,
  134217727,
  -134217728,
  134217728,
  -134217729,
  17179869183,
  -17179869184,
  17179869184,
  -17179869185,
  2199023255551,
  -2199023255552,
  2199023255552,
  -2199023255553,
  281474976710655,
  -281474976710656,
  281474976710656,
  -281474976710657,
  36028797018963967n,
  -36028797018963968n,
  36028797018963968n,
  -36028797018963969n,
  9223372036854775807n,
  -9223372036854775808n,
  13.37,
  'Hello world',
  'Hello world',
];
let i = 0;
for (;;) {
  const actual = reader.deserialize();
  const expected = expected_values[i];
  if (expected !== undefined) {
    assert.strictEqual(actual, expected);
    console.log(`${actual} === ${expected}`);
  }
  i++;
}
