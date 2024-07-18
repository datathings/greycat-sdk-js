import { std, type GreyCat } from './internal.js';

std.runtime.Task.prototype.getFile = function getFile<T = unknown>(
  filepath: string,
  signal?: AbortSignal,
  g: GreyCat = globalThis.greycat.default,
) {
  return g.getFile<T>(`${this.user_id}/tasks/${this.task_id}/${filepath}`, signal);
};

std.runtime.Task.prototype.await = function await_(
  pollEvery?: number,
  signal?: AbortSignal,
  g: GreyCat = globalThis.greycat.default,
) {
  return g.await(this, pollEvery, signal);
};

std.runtime.Task.prototype.info = function info(
  signal?: AbortSignal,
  g: GreyCat = globalThis.greycat.default,
) {
  return std.runtime.Task.info(this.user_id, this.task_id, g, signal);
};

std.runtime.Task.prototype.result = function result<T = unknown>(
  signal?: AbortSignal,
  g: GreyCat = globalThis.greycat.default,
) {
  return g
    .getFile<T>(`${this.user_id}/tasks/${this.task_id}/result.gcb`, signal)
    .then((results) => results[0]);
};

std.runtime.Task.prototype.arguments = function arguments_(
  signal?: AbortSignal,
  g: GreyCat = globalThis.greycat.default,
): Promise<unknown[]> {
  return g.getFile(`${this.user_id}/tasks/${this.task_id}/arguments.gcb`, signal);
};

std.io.File.prototype.list = function list(
  signal?: AbortSignal,
  g: GreyCat = globalThis.greycat.default,
): Promise<std.io.File[] | undefined> {
  if (this.path.endsWith('/')) {
    // directory
    return g.rawCall<std.io.File[]>(`files${this.path}`, undefined, signal, false, 'GET');
  }
  return Promise.resolve(void 0);
};

std.io.File.prototype.resolve = function resolve(
  maxDepth = 5,
  signal?: AbortSignal,
  g: GreyCat = globalThis.greycat.default,
): Promise<void> {
  return resolveFileChildrenRecursively(this, maxDepth, 0, signal, g);
};

std.core.Date.prototype.toString = function toString() {
  const month = this.month.toString().padStart(2, '0');
  const day = this.day.toString().padStart(2, '0');
  const hour = this.hour.toString().padStart(2, '0');
  const min = this.minute.toString().padStart(2, '0');
  const sec = this.second.toString().padStart(2, '0');
  if (this.microsecond > 0) {
    return `${this.year}-${month}-${day}T${hour}:${min}:${sec}.${this.microsecond}`;
  } else {
    return `${this.year}-${month}-${day}T${hour}:${min}:${sec}`;
  }
};

function compareFile(a: std.io.File, b: std.io.File): number {
  const aDir = a.path.endsWith('/');
  const bDir = b.path.endsWith('/');

  // ensures directories are first
  if (aDir && !bDir) {
    return -1; // 'a' first
  }
  if (!aDir && bDir) {
    return 1; // 'b' first
  }

  return a.path.localeCompare(b.path, undefined, {
    numeric: true,
    sensitivity: 'base',
  });
}

async function resolveFileChildrenRecursively(
  file: std.io.File,
  maxDepth: number,
  currDepth: number,
  signal?: AbortSignal,
  g?: GreyCat,
) {
  if (file.size == null) {
    // directory
    const children = await file.list(signal, g);
    if (children) {
      file.children = children;
      file.children.sort(compareFile);
      for (const child of children) {
        await resolveFileChildrenRecursively(child, maxDepth, ++currDepth, signal, g);
      }
    }
  }
}

declare module './std/index.js' {
  // eslint-disable-next-line @typescript-eslint/no-namespace
  namespace runtime {
    interface Task {
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
        signal?: AbortSignal,
        g?: GreyCat,
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
      getFile<T = unknown>(filepath: string, signal?: AbortSignal, g?: GreyCat): Promise<T | T[]>;

      /**
       * Returns the result of the task.
       *
       * *This is equivalent to `task.getFile('result.gcb')`*
       */
      result<T = unknown>(signal?: AbortSignal, g?: GreyCat): Promise<T>;

      /**
       * Returns the arguments of the task.
       *
       * *This is equivalent to `task.getFile('arguments.gcb')`*
       */
      arguments(signal?: AbortSignal, g?: GreyCat): Promise<unknown[]>;

      /**
       * Awaits for the completion of the task.
       *
       * *NB: "completion" does not mean success*
       *
       * @param pollEvery will check the status of the task once every `pollEvery` milliseconds
       * @param signal
       */
      await<T = unknown>(pollEvery?: number, signal?: AbortSignal, g?: GreyCat): Promise<T>;

      /**
       * Fetches the task info.
       */
      info(signal?: AbortSignal, g?: GreyCat): Promise<runtime.TaskInfo | null>;
    }
  }

  // eslint-disable-next-line @typescript-eslint/no-namespace
  namespace io {
    interface File {
      children?: std.io.File[];

      /**
       * Lists the current children of this file.
       *
       * If this file is not a directory, returns `undefined`.
       */
      list(signal?: AbortSignal, g?: GreyCat): Promise<std.io.File[] | undefined>;

      /**
       * Resolves this file's children recursively to a maximum depth of `maxDepth` (defaults to `5`)
       */
      resolve(maxDepth?: number, signal?: AbortSignal, g?: GreyCat): Promise<void>;
    }
  }
}
