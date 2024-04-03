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
      info(signal?: AbortSignal): Promise<runtime.TaskInfo>;
    }
  }
}