// @ts-check
import { GreyCat } from './dist/greycat.js';

const greycat = (global.greycat.default = await GreyCat.init());

const file = new File([new TextEncoder().encode(JSON.stringify({ hello: 42, foo: false }, null, 2))], 'foo.json');
await greycat.putFile('foo.json', file);
const value = await greycat.getFile('foo.json');

console.log(value);
