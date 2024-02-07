// @ts-check
import { GreyCat } from './dist/esm/index.js';

const greycat = (global.greycat.default = await GreyCat.init());

const file = new File([new TextEncoder().encode(JSON.stringify({ hello: 42, foo: false }, null, 2))], 'foo.json');
await greycat.putFile('subdir/foo.json', file);
const value = await greycat.getFile('subdir/foo.json');
await greycat.deleteFile('subdir/');

console.log(value);
