// @ts-check
import { readFileSync } from 'node:fs';
import { Abi, AbiReader, core, GreyCat, stdlib } from '@greycat/sdk';

const buffer = readFileSync('./gcdata/abi').buffer;
const abi = new Abi(buffer, [stdlib]);
GreyCat.initWithAbi({ abi });

const data = readFileSync('./files/history.gcb').buffer;
const reader = new AbiReader(abi, data);

reader.headers(); // read headers

const start = performance.now();
for (const _ of reader) {
  // console.log(entry);
}

const end = performance.now();
console.log(`Read all records in ${core.duration.from_ms(end - start)}`);
