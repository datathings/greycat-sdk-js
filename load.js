import { GreyCat, Reader } from './dist/esm/index.js';

const args = process.argv.slice(2);
if (args.length !== 1) {
  console.log('usage: node sandbox.js <path/to/endpoint>');
  process.exit(1);
}

const greycat = await GreyCat.init({
  url: new URL('http://localhost:8080'),
});

const value = await greycat.call(args[0]);
