// @ts-check
import { inspect } from 'util';
import { GreyCat, std } from '@greycat/sdk';

global.greycat.default = await GreyCat.init();

const root = std.io.File.create('/', null, null);
await root.resolve();

console.log(inspect(structuredClone(root), { depth: Infinity, colors: true }));
