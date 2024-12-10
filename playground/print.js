import { Abi, AbiReader, algebralib } from '@greycat/sdk';
import { readBytes } from './_utils.js';

const abi_bytes = readBytes('cebi/abi');
const abi = new Abi(abi_bytes, [algebralib]);

const value_bytes = readBytes('cebi/result.gcb');
const reader = new AbiReader(abi, value_bytes);

const value = reader.deserializeWithHeaders();
console.log(value);