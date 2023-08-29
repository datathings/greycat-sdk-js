// @ts-check
import { GreyCat } from './dist/esm/index.js';

const args = process.argv.slice(2);
if (args.length !== 1) {
  console.log(`usage: node ${process.argv[1]} <path/to/endpoint>`);
  process.exit(1);
}

console.time('abi');
const g = await GreyCat.init({
  url: new URL('http://localhost:8080'),
});
console.timeEnd('abi');

console.time('value');

try {
  const value = await g.call(args[0]);
  displayValue(value);
} catch (err) {
  console.log({ error: err });
} finally {
  console.timeEnd('value');
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
