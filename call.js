import { GreyCat } from './dist/esm/index.js';

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
try {
  const value = await greycat.call(args[0]);
  if (Array.isArray(value)) {
    console.log({ array: value });
  } else if (value instanceof Map) {
    const o = {};
    value.forEach((value, key) => {
      o[key] = value;
    });
    console.log({ map: o });
  } else if (typeof value === 'object') {
    console.log(JSON.parse(JSON.stringify(value)));
  } else {
    console.log({ [typeof value]: value });
  }
} catch (err) {
  console.log({ error: err });
} finally {
  console.timeEnd('value');
}
