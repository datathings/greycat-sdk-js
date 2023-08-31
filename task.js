import { GreyCat, runtime } from './dist/esm/index.js';

const greycat = (global.greycat.default = await GreyCat.init());

const task = await greycat.call('project::longTask');
console.dir({ ...task });

/**
 *
 * @param {number} user_id
 * @param {number} task_id
 * @param {{ cancel: AbortSignal, stop: AbortSignal, delay: number }} param2
 * @returns
 */
async function pollTask(user_id, task_id, { delay = 2000, cancel, stop } = {}) {
  let info = await runtime.Task.info(user_id, task_id);

  async function handleCancel() {
    await runtime.Task.cancel(task_id);
    info = await runtime.Task.info(user_id, task_id);
    return info;
  }

  while (
    info.status === runtime.TaskStatus.running() ||
    info.status === runtime.TaskStatus.waiting()
  ) {
    if (cancel.aborted) {
      return handleCancel();
    }
    if (stop.aborted) {
      return info;
    }
    info = await runtime.Task.info(user_id, task_id);
    if (cancel.aborted) {
      return handleCancel();
    }
    if (stop.aborted) {
      return info;
    }
    // wait a bit before polling again
    await new Promise((resolve) => setTimeout(resolve, delay));
    if (cancel.aborted) {
      return handleCancel();
    }
    if (stop.aborted) {
      return info;
    }
  }

  return info;
}

const cancelCtrl = new AbortController();
const stopCtrl = new AbortController();

pollTask(task.user_id, task.task_id, { cancel: cancelCtrl.signal, stop: stopCtrl.signal }).then(
  (info) => {
    console.log({ ...info });
  },
);

setTimeout(() => {
  stopCtrl.abort();
}, 3000);
