import { runtime } from '../index.js';

interface CancellableTaskPromise extends Promise<runtime.TaskInfo | null> {
  /**
   * **Cancels the remote task** and polls one last time for updated info
   */
  cancel: () => void;
  /**
   * Stops polling for info (leaving the remote task running)
   */
  stop: () => void;
}

// using Pick<...> to catch bug earlier if `runtime.Task` changes
export type TaskLike = Pick<runtime.Task, 'user_id' | 'task_id'>;

export class TaskHandler {
  info: runtime.TaskInfo | null = null;
  private _promise: CancellableTaskPromise | null = null;

  /**
   * Constructs a `TaskHandler` by giving a `runtime.Task` or something that has at least the properties:
   *  - `user_id: number | bigint`
   *  - `task_id: number | bigint`
   */
  constructor(readonly task: TaskLike) {}

  /**
   * Starts to poll for task info periodically.
   *
   * *Does nothing if already started*
   *
   * @param delay delay in milliseconds between every poll (defaults to `2000` milliseconds)
   * @param callback an optional callback function that will be called every time the new info are polled
   * @returns
   */
  start(
    delay = 2000,
    callback?: (info: runtime.TaskInfo) => void,
  ): Promise<runtime.TaskInfo | null> {
    if (this._promise) {
      // already started
      return this._promise;
    }
    this._promise = this._poll(delay, callback);
    return this._promise;
  }

  /**
   * **Cancels the remote task** and polls one last time for updated info
   * @returns the *after-cancel* info of the task
   */
  async cancel(): Promise<runtime.TaskInfo | null> {
    if (!this._promise) {
      // not started
      return null;
    }
    this._promise.cancel();
    const info = await this._promise;
    return info;
  }

  /**
   * Stops polling for info (leaving the remote task running)
   */
  async stop(): Promise<void> {
    if (!this._promise) {
      // not started
      return;
    }
    this._promise.stop();
    await this._promise;
    return;
  }

  /**
   * Convenience method to download and deserialize this task's "result.gcb".
   *
   * *This is wrapper around `greycat.getFile('<user_id>/tasks/<task_id>/result.gcb')`*
   */
  result<T = unknown>(g = greycat.default): Promise<T> {
    return g.getFile(`${this.task.user_id}/tasks/${this.task.task_id}/result.gcb`);
  }

  /**
   * Convenience method to download and deserialize this task's "arguments.gcb".
   *
   * *This is wrapper around `greycat.getFile('<user_id>/tasks/<task_id>/arguments.gcb')`*
   */
  arguments<T = unknown>(g = greycat.default): Promise<T[]> {
    return g.getFile(`${this.task.user_id}/tasks/${this.task.task_id}/arguments.gcb`);
  }

  /**
   * This will delete all the files related to the task and cannot be undone.
   *
   * *This is wrapper around `greycat.deleteFile('<user_id>/tasks/<task_id>/')`*
   */
  delete(g = greycat.default): Promise<void> {
    return g.deleteFile(`${this.task.user_id}/tasks/${this.task.task_id}/`);
  }

  /**
   * Convenience method to download and deserialize a file from the task's directory.
   *
   * Calling:
   * ```ts
   * handler.getFile('some-file.txt')
   * ```
   * is equivalent to:
   * ```ts
   * greycat.default.getFile(`${handler.task.user_id}/tasks/${handler.task.task_id}/some-file.txt`)
   * ```
   */
  getFile<T = unknown>(filepath: string, g = greycat.default): Promise<T> {
    return g.getFile(`${this.task.user_id}/tasks/${this.task.task_id}/${filepath}`);
  }

  private _poll(
    delay: number,
    callback: (info: runtime.TaskInfo) => void = () => void 0,
  ): CancellableTaskPromise {
    const cancelCtrl = new AbortController();
    const stopCtrl = new AbortController();

    const promise = new Promise<runtime.TaskInfo | null>((resolve, reject) => {
      // if this is a bigint we have bigger issues
      const user_id = this.task.user_id as number;

      // if this is a bigint we have bigger issues
      const task_id = this.task.task_id as number;

      const handleCancel = async () => {
        // make sure GreyCat cancels the task
        await runtime.Task.cancel(task_id);
        // update info
        this.info = await runtime.Task.info(user_id, task_id);
        return this.info;
      };

      const internalPoll = async () => {
        this.info = await runtime.Task.info(user_id, task_id);
        if (this.info === null) {
          return null;
        }

        while (
          this.info != null &&
          (this.info.status.key === 'running' || this.info.status.key === 'waiting')
        ) {
          callback(this.info);
          if (cancelCtrl.signal.aborted) {
            return handleCancel();
          }
          if (stopCtrl.signal.aborted) {
            return this.info;
          }
          // update task info
          this.info = await runtime.Task.info(user_id, task_id);
          if (cancelCtrl.signal.aborted) {
            return handleCancel();
          }
          if (stopCtrl.signal.aborted) {
            return this.info;
          }

          // wait a bit before polling again
          await new Promise((resolve) => setTimeout(resolve, delay));

          if (cancelCtrl.signal.aborted) {
            return handleCancel();
          }
          if (stopCtrl.signal.aborted) {
            return this.info;
          }
        }

        if (this.info) {
          callback(this.info);
        }

        return this.info;
      };

      internalPoll().then(resolve, reject);
    });
    (promise as CancellableTaskPromise).cancel = () => cancelCtrl.abort();
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    (promise as CancellableTaskPromise).stop = () => stopCtrl.abort();

    return promise as CancellableTaskPromise;
  }
}
