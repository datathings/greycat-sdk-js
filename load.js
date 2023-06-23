import { Reader } from './dist/esm/index.js';

const args = process.argv.slice(2);
if (args.length !== 1) {
  console.log('usage: node sandbox.js <path/to/endpoint>');
  process.exit(1);
}

const res = await fetch(`http://localhost:8080/${args[0]}`, { headers: { accept: 'application/octet-stream' } });

const reader = new Reader(await res.arrayBuffer());

const type = reader.read_u8();
console.log({ type });
