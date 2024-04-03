// @ts-check
import { GreyCat } from './dist/esm/index.js';

const greycat = await GreyCat.init({ libraries: [] });
global.greycat.default = greycat;

const task = await greycat.spawn('project::longTask');
await task.await();
const res = await task.result();
console.log(structuredClone(res));
