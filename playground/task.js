// @ts-check
import { GreyCat } from '@greycat/sdk';

const greycat = await GreyCat.init();
global.greycat.default = greycat;

// spawns a task
const task = await greycat.spawn('project::task_with_params', ['Hello world', 42]);

// retrieve task info
const info = await task.info();
console.log(structuredClone(info));

// retrieve task arguments
const args = await task.arguments();
console.log(structuredClone(args));

// await for completion
await task.await();
// retrieve the result
const result = await task.result();
console.log(structuredClone(result));
