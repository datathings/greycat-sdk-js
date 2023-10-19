import { GreyCat, TaskHandler } from './dist/esm/index.js';

const greycat = (global.greycat.default = await GreyCat.init());

const task = await global.greycat.default.call('project::errorTask');
const handler = new TaskHandler(task);
await handler.start();
const result = await greycat.getFile(`${task.user_id}/tasks/${task.task_id}/result.gcb`);
console.log({ result });
