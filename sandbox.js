import { GreyCat, GCEnum } from './dist/esm/index.js';

const args = process.argv.slice(2);
if (args.length !== 1) {
  console.log('usage: node sandbox.js <path/to/endpoint>');
  process.exit(1);
}

console.time('abi');
const greycat = await GreyCat.init({
  url: new URL('http://localhost:8080'),
});
console.timeEnd('abi');

console.time('value');
const value = await greycat.call(args[0]);
console.timeEnd('value');
console.log(json(value));

function json(value) {
  return JSON.parse(JSON.stringify(value, jsonReplacer));
}

function jsonReplacer(_, value) {
  if (value instanceof Map) {
    const o = { _type: "core.Map" };
    value.forEach((value, key) => {
      if (key instanceof GCEnum) {
        o[key.toJSON()] = value;
      } else {
        o[key] = value;
      }
    });
    return o;
  }

  if (typeof value === 'bigint') {
    if (value <= Number.MAX_SAFE_INTEGER) {
      return Number(value);
    }
    return `${value}`;
  }

  return value;
}
