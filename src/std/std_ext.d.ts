export namespace runtime {
  export interface Task {
    /**
     * Downloads a task file.
     *
     * The given `filepath` will be concatenated with the task path eg. `/files/${task.user_id}/tasks/${task.task_id}/${filepath}`
     *
     * Returns a `T[]` because ".gcb" files can contain multiple values.
     *
     * Note that, by default, the `T` is always unknown. It is just given for convenience if you know for sure
     * what is inside the requested file. But it gives no verifications on the content of the data.
     */
    getFile<T = unknown>(
      filepath: `${string}.gcb`,
      g?: $greycat.GreyCat,
      signal?: AbortSignal,
    ): Promise<T[]>;
    /**
     * Downloads a task file.
     *
     * The given `filepath` will be concatenated with the task path eg. `/files/${task.user_id}/tasks/${task.task_id}/${filepath}`
     *
     * Returns either a `T` or a `T[]` based on the extension of the file. All files will return `T` except ".gcb" files which
     * can contain more than one value, therefore `T[]`.
     *
     * Note that, by default, the `T` is always unknown. It is just given for convenience if you know for sure
     * what is inside the requested file. But it gives no verifications on the content of the data.
     */
    getFile<T = unknown>(filepath: string, g?: $greycat.GreyCat, signal?: AbortSignal): Promise<T | T[]>;

    /**
     * Returns the result of the task.
     *
     * *This is equivalent to `task.getFile('result.gcb')`*
     */
    result<T = unknown>(g?: $greycat.GreyCat, signal?: AbortSignal): Promise<T>;

    /**
     * Returns the arguments of the task.
     *
     * *This is equivalent to `task.getFile('arguments.gcb')`*
     */
    arguments(g?: $greycat.GreyCat, signal?: AbortSignal): Promise<unknown[]>;

    /**
     * Awaits for the completion of the task.
     *
     * *NB: "completion" does not mean success*
     *
     * @param pollEvery will check the status of the task once every `pollEvery` milliseconds
     * @param signal
     */
    await<T = unknown>(pollEvery?: number, g?: $greycat.GreyCat, signal?: AbortSignal): Promise<T>;

    /**
     * Fetches the task info.
     */
    info(g?: $greycat.GreyCat, signal?: AbortSignal): Promise<TaskInfo | null>;
  }
}

export namespace io {
  export interface File {
    children?: File[];

    /**
     * Lists the current children of this file.
     *
     * If this file is not a directory, returns `undefined`.
     */
    list(g?: $greycat.GreyCat, signal?: AbortSignal): Promise<File[] | undefined>;

    /**
     * Resolves this file's children recursively to a maximum depth of `maxDepth` (defaults to `5`)
     */
    resolve(maxDepth?: number, g?: $greycat.GreyCat, signal?: AbortSignal): Promise<void>;
  }
}

export namespace core {
  export interface Date {
    /**
     * ISO8601-ish representation of this date
     */
    toString(): string;
  }

  export interface node {
    /**
     * Calls `core.node.resolve_all` with one node, and returns the resolved value.
     * @param g 
     * @param signal 
     */
    resolve(g?: $greycat.GreyCat, signal?: AbortSignal): Promise<unknown>;
  }
}
