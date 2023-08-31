// import { runtime } from '../index.js';

// export class TaskHandler {
//   constructor(readonly task: runtime.Task) { }

//   async completion() {
//     const cancelCtrl = new AbortController();
//     const stopCtrl = new AbortController();


//   }
// }

// // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
// const handler = new TaskHandler(null!);
// await handler.completion();

// async function pollTask(user_id: number, task_id: number, cancel: AbortSignal, stop: AbortSignal, delay: number) {
//   let info = await runtime.Task.info(user_id, task_id);
//   if (info === null) {
//     return null;
//   }

//   async function handleCancel() {
//     // make sure GreyCat cancels the task
//     await runtime.Task.cancel(task_id);
//     // update info
//     info = await runtime.Task.info(user_id, task_id);
//     return info;
//   }

//   while (
//     info != null &&
//     (info.status === runtime.TaskStatus.running() ||
//       info.status === runtime.TaskStatus.waiting())
//   ) {
//     if (cancel.aborted) {
//       return handleCancel();
//     }
//     if (stop.aborted) {
//       return info;
//     }
//     // update task info
//     info = await runtime.Task.info(user_id, task_id);
//     if (cancel.aborted) {
//       return handleCancel();
//     }
//     if (stop.aborted) {
//       return info;
//     }

//     // wait a bit before polling again
//     await new Promise((resolve) => setTimeout(resolve, delay));

//     if (cancel.aborted) {
//       return handleCancel();
//     }
//     if (stop.aborted) {
//       return info;
//     }
//   }

//   return info;
// }