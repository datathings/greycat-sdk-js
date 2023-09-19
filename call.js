// @ts-check
import { GreyCat, algebralib, stdlib } from './dist/greycat.sdk.js';

const args = process.argv.slice(2);
if (args.length < 1) {
  console.log(`usage: node ${process.argv[1]} <path/to/endpoint>`);
  process.exit(1);
}

const g = (global.greycat.default = await GreyCat.init({
  url: new URL('http://localhost:8080'),
  libraries: [stdlib, algebralib],
}));

try {
  // [204,59,127,102,158,160,246,63]
  // [205,59,127,102,158,160,256,63]
  const value = await g.call(args[0]);
  displayValue(value);
} catch (err) {
  console.error(`Error: ${err.message}`);
  process.exit(1);
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
