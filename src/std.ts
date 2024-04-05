import { std } from './index.js';

std.runtime.Task.prototype.getFile = function getFile<T = unknown>(filepath: string, signal?: AbortSignal, g = globalThis.greycat.default) {
  return g.getFile<T>(`${this.user_id}/tasks/${this.task_id}/${filepath}`, signal);
};

std.runtime.Task.prototype.await = function await_(pollEvery?: number, signal?: AbortSignal, g = globalThis.greycat.default) {
  return g.await(this, pollEvery, signal);
};

std.runtime.Task.prototype.info = function info(signal?: AbortSignal, g = globalThis.greycat.default) {
  return std.runtime.Task.info(this.user_id, this.task_id, g, signal);
};

std.runtime.Task.prototype.result = function result<T = unknown>(signal?: AbortSignal, g = globalThis.greycat.default) {
  return g.getFile<T>(`${this.user_id}/tasks/${this.task_id}/result.gcb`, signal);
};

std.runtime.Task.prototype.arguments = function arguments_<T = unknown>(signal?: AbortSignal, g = globalThis.greycat.default) {
  return g.getFile<T>(`${this.user_id}/tasks/${this.task_id}/arguments.gcb`, signal);
};

declare module './std/index.js' {
  // eslint-disable-next-line @typescript-eslint/no-namespace
  namespace runtime {
    interface Task {
      /**
       * Downloads a task file.
       * 
       * The given `filepath` will be concatenated with the task path eg. `/files/${task.user_id}/tasks/${task.task_id}/${filepath}`
       */
      getFile<T = unknown>(filepath: string, signal?: AbortSignal): Promise<T>;

      /**
       * Returns the result of the task.
       * 
       * *This is equivalent to `task.getFile('result.gcb')`*
       */
      result<T = unknown>(signal?: AbortSignal): Promise<T>;

      /**
       * Returns the arguments of the task.
       * 
       * *This is equivalent to `task.getFile('arguments.gcb')`*
       */
      arguments(signal?: AbortSignal): Promise<unknown[]>;

      /**
       * Awaits for the completion of the task.
       * 
       * *NB: "completion" does not mean success*
       *
       * @param pollEvery will check the status of the task once every `pollEvery` milliseconds
       * @param signal 
       */
      await<T = unknown>(pollEvery?: number, signal?: AbortSignal): Promise<T>;

      /**
       * Fetches the task info.
       */
      info(signal?: AbortSignal): Promise<runtime.TaskInfo | null>;
    }
  }
}