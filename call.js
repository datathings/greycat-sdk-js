// @ts-check
import { GreyCat, algebralib, patternslib, stdlib } from './dist/greycat.js';

const args = process.argv.slice(2);
if (args.length < 1) {
  console.log(`usage: node ${process.argv[1]} <path/to/endpoint>`);
  process.exit(1);
}

const g = (global.greycat.default = await GreyCat.init({
  url: new URL('http://localhost:8080'),
  libraries: [stdlib, algebralib, patternslib],
}));

try {
  const fnArgs = args[1] === '-d' ? JSON.parse(await stdin()) : undefined;
  const value = await g.call(args[0], fnArgs);
  displayValue(value);
} catch (err) {
  console.error(`Error: ${err.stack}`);
  process.exit(1);
}

function stdin() {
  return new Promise((resolve, reject) => {
    let data = '';

    process.stdin.setEncoding('utf-8');

    const id = setTimeout(() => {
      resolve('null');
    }, 1000);

    process.stdin.on('data', (chunk) => {
      data += chunk;
    });

    process.stdin.on('end', () => {
      clearTimeout(id);
      resolve(data);
    });
    process.stdin.on('error', (err) => {
      clearTimeout(id);
      reject(err);
    });
  });
}

function displayValue(value) {
  if (Array.isArray(value)) {
    console.log({ array: value });
  } else if (value instanceof Map) {
    const o = {};
    value.forEach((value, key) => {
      o[key] = value;
    });
    console.log({ map: o });
  } else if (typeof value === 'object') {
    console.dir(
      JSON.parse(
        JSON.stringify(value, (_, value) => {
          if (typeof value === 'bigint') {
            if (value < Number.MAX_SAFE_INTEGER) {
              return Number(value);
            }
            return `$bigint:${value}`;
          }
          return value;
        }),
      ),
      { depth: Infinity },
    );
  } else {
    console.log({ [typeof value]: value });
  }
}
