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
const value = await greycat.call(args[0]);
console.timeEnd('value');
if (typeof value === 'object') {
  console.dir({ ctor: value.constructor.name, typeName: value.type.name, json: value.toJSON() });
} else {
  console.log({ [typeof value]: value });
}
