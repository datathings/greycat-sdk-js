// @ts-check
import { readFile } from 'node:fs/promises';
import { Abi, AbiReader, stdlib } from '../dist/esm/index.js';

const buffer = (await readFile('./gcdata/store/abi')).buffer;
const abi = new Abi(buffer, [stdlib]);

const data = (await readFile('./gcdata/files/history.gcb')).buffer;
const reader = new AbiReader(abi, data);

reader.headers(); // read headers

while (!reader.is_empty) {
  reader.deserialize();
}