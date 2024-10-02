// @ts-check
import { GreyCat, runtime } from '@greycat/sdk';
import { displayValue } from './_utils.js';

await GreyCat.init();

const tasks = await runtime.Task.history(0, 10);
displayValue(tasks);