// @ts-check
import fs from 'node:fs';
import { GCObject, GreyCat } from '@greycat/sdk';

const args = process.argv.slice(2);
if (args.length < 1) {
  console.log(`usage: node ${process.argv[1]} <path/to/endpoint> [/path/to/args.gcb]`);
  process.exit(1);
}

const g = await GreyCat.init();

try {
  const fnArgs = args[1] ? readArgs(args[1]) : undefined;
  const value = await g.call(args[0], fnArgs);
  displayValue(value);
} catch (err) {
  console.error(err.stack);
  process.exit(1);
}

/**
 * @param {string} filepath
 * @returns {ArrayBuffer}
 */
function readArgs(filepath) {
  // Read the file into a Buffer
  const buffer = fs.readFileSync(filepath);
  // Convert Buffer to ArrayBuffer
  return buffer.buffer.slice(buffer.byteOffset, buffer.byteOffset + buffer.byteLength);
}

/**
 * @param {unknown} value
 */
function displayValue(value) {
  if (Array.isArray(value)) {
    // cloning for pretty display
    console.dir(structuredClone(value), { depth: Infinity });
  } else if (value instanceof Map) {
    const o = {};
    value.forEach((value, key) => {
      // cloning for pretty display
      o[key] = structuredClone(value);
    });
    console.dir(o, { depth: Infinity });
  } else if (value instanceof GCObject) {
    process.stdout.write(`${value.$type.name} `);
    // cloning for pretty display
    console.dir(structuredClone(value), { depth: Infinity });
  } else {
    // cloning for pretty display
    console.dir(structuredClone(value), { depth: Infinity });
  }
}
