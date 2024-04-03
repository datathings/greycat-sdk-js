// @ts-check
import { GreyCat } from './dist/esm/index.js';

const greycat = await GreyCat.init({ libraries: [] });
global.greycat.default = greycat;

await greycat.spawnAwait('project::task_with_params', ['briliant', 42]);

// const res = await greycat.spawnAwait('project::task_with_params', ['Hello world', 42]);
// console.log(structuredClone(res));
