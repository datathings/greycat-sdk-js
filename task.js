// @ts-check
import { GreyCat, TaskHandler } from './dist/esm/index.js';

const greycat = (global.greycat.default = await GreyCat.init());

/** @type {import('./dist/esm/index.js').runtime.Task} */
const task = await global.greycat.default.call('project::longTask');
const handler = new TaskHandler(task);
// const handler = new TaskHandler({ user_id: 1, task_id: 1 });

setTimeout(() => {
  handler.cancel();
}, 5000);

const info = await handler.start(2000, (info) => {
  console.log(
    `user=${info.user_id}, task=${info.task_id}, created_at=${info.creation}, duration=${info.duration}, status=${info.status.key}`,
  );
});

if (info) {
  console.log(
    `user=${info.user_id}, task=${info.task_id}, created_at=${info.creation}, duration=${info.duration}, status=${info.status.key}`,
  );
}

// handler.stop();
// handler.cancel();

// const info = await promise;
// if (info) {
//   console.log(
//     `user=${info.user_id}, task=${info.task_id}, created_at=${info.creation}, duration=${info.duration}, status=${info.status.key}`,
//   );
// }
