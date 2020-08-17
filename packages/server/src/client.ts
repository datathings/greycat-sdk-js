import debug from 'debug';
import * as path from 'path';
import { randomBytes } from 'crypto';
import { spawn, ChildProcess } from 'child_process';
import { GreyCatError, Keys, ILogger, IConsole } from '@greycat/napi';
import { IRequestMessage, IResponseMessage, ResponseLog, ResponseConsole } from './protocol';
import { ITypedef, IServerTypedef } from './types';
import { ExecuteResult } from './execute-result';

const d = debug('greycat:client');
const DEFAULT_LOGGER: ILogger = {
  info: d.extend('info'),
  debug: d.extend('debug'),
  warn: d.extend('warn'),
  error: d.extend('error'),
};

function generateId() {
  return randomBytes(16).toString('hex');
}

export interface IGreycatClient {
  setTimeout(timeout: number): void;
  start(cacheSize?: number, bufferSize?: number, cwd?: string): Promise<void>;
  newGraph(cacheSize?: number, bufferSize?: number): Promise<void>;
  prepare(data: any): Promise<ExecuteResult>;
  execute(script: string, timeout?: number): Promise<ExecuteResult>;
  execute(script: string, uri?: string, timeout?: number): Promise<ExecuteResult>;
  execute(context: ExecuteResult, script: string, timeout?: number): Promise<ExecuteResult>;
  execute(context: ExecuteResult, script: string, uri?: string, timeout?: number): Promise<ExecuteResult>;
  unmark(result: ExecuteResult): Promise<void>;
  defineType(type: ITypedef): Promise<string>;
  stop(): Promise<void>;
}

export class GreycatClient implements IGreycatClient {
  private _isStarted: boolean;
  private _stopping: boolean;
  private _tasks: Map<string, { resolve: (result: ExecuteResult) => void; reject: (err: any) => void }>;
  private _unmarks: Map<string, ExecuteResult>;
  private _typedefs: Map<string, { resolve: (id: string) => void; reject: (err: any) => void }>;
  private _handles: Map<string, (data: any) => void>;
  private _timeouts: Map<string, NodeJS.Timeout>;
  private _server: ChildProcess | null = null;
  private _completeStart: (() => void) | undefined;
  private _completeStop: (() => void) | undefined;

  constructor(
    private _timeout: number = 60000,
    private _logger: ILogger = DEFAULT_LOGGER,
    private _console: IConsole = {
      print: process.stdout.write.bind(process.stdout),
      println: process.stdout.write.bind(process.stdout),
    },
  ) {
    this._isStarted = false;
    this._stopping = false;
    this._tasks = new Map();
    this._unmarks = new Map();
    this._typedefs = new Map();
    this._handles = new Map();
    this._timeouts = new Map();
  }

  setTimeout(timeout: number) {
    this._timeout = timeout;
  }

  isStarted() {
    return this._isStarted && !this._stopping && this._server;
  }

  async start(cacheSize = 1000, bufferSize = 100, cwd?: string) {
    return new Promise<void>((resolve, reject) => {
      if (this.isStarted()) {
        reject(new Error('Greycat server is already started'));
        return;
      }
      this._server = spawn('node', [path.resolve(__dirname, 'server.js'), cacheSize + '', bufferSize + ''], {
        cwd,
        stdio: ['inherit', 'inherit', 'inherit', 'ipc'],
      });
      this._completeStart = () => {
        this._completeStart = undefined;
        this._logger.debug(`server is ready pid:${this._server?.pid}`);
        resolve();
      };
      this._server.on('message', this._parseMessage.bind(this));
      this._server.once('error', (err) => {
        this._logger.error(`server pid:${this._server?.pid} error: %s`, err.toString());
      });
      this._server.once('exit', (code, signal) => {
        this._logger.info(`server pid:${this._server?.pid} exited (code=${code}, signal=${signal})`);
        this._server = null;
        this._isStarted = false;
        if (this._completeStop) {
          this._completeStop();
        }
      });
    });
  }

  async newGraph(cacheSize = 1000, bufferSize = 100) {
    return new Promise<void>(async (resolve, reject) => {
      if (!this.isStarted()) {
        reject(new Error('Greycat server must be started'));
        return;
      }
      const id = generateId();
      this._completeStart = resolve;
      await this._send({ event: 'newgraph', id, cacheSize, bufferSize });
      this._registerTimeout(
        id,
        () => {
          reject(`Task '${id}' (newgraph) timed out (${this._timeout}ms)`);
        },
        this._timeout,
      );
    });
  }

  async prepare(data: any) {
    return new Promise<ExecuteResult>(async (resolve, reject) => {
      if (!this.isStarted()) {
        reject(new Error('Greycat server must be started'));
        return;
      }
      const id = generateId();
      this._tasks.set(id, { resolve, reject });
      await this._send({ event: 'prepare', id, data });
      this._registerTimeout(
        id,
        () => {
          this._tasks.delete(id);
          reject(`Task '${id}' (prepare) timed out (${this._timeout}ms)`);
        },
        this._timeout,
      );
    });
  }

  async execute(
    arg0: ExecuteResult | string,
    arg1?: string | number,
    arg2?: string | number,
    arg3?: number,
  ) {
    let script: string | undefined;
    let uri: string | undefined;
    let timeout_: number | undefined;
    if (typeof arg0 === 'string') {
      script = arg0;
      if (typeof arg1 === 'number') {
        // execute(script: string, timeout?: number): Promise<ExecuteResult>;
        timeout_ = arg1;
      } else if (typeof arg1 === 'string') {
        // execute(script: string, uri: string, timeout?: number): Promise<ExecuteResult>;
        uri = arg1;
        if (typeof arg2 === 'number' || typeof arg2 === 'undefined') {
          timeout_ = arg2;
        } else {
          throw new Error(`'arg2' must be a 'number' or 'undefined' (found: ${typeof arg2})`);
        }
      }

      return this._executeScript(script, uri, timeout_);

    } else {
      const context = arg0;
      if (typeof arg1 === 'string') {
        script = arg1;
        if (typeof arg2 === 'number') {
          // execute(context: ExecuteResult, script: string, timeout?: number): Promise<ExecuteResult>;
          timeout_ = arg2;
        } else if (typeof arg2 === 'string') {
          // execute(context: ExecuteResult, script: string, uri: string, timeout?: number): Promise<ExecuteResult>;
          uri = arg2;
          if (typeof arg3 === 'number' || typeof arg3 === 'undefined') {
            timeout_ = arg3;
          } else {
            throw new Error(`'arg3' must be a 'number' or 'undefined' (found: ${typeof arg3})`);
          }
        }
        return this._executeScriptOnContext(context, script, uri, timeout_);
      } else {
        throw new Error(`'arg1' must be a script of type 'string' (found: ${typeof arg1})`);
      }
    }
  }

  async unmark(result: ExecuteResult) {
    return new Promise<void>(async (resolve, reject) => {
      if (!this.isStarted()) {
        reject(new Error('Greycat server must be started'));
        return;
      }
      result._resolve = resolve;
      this._unmarks.set(result.id, result);
      await this._send({ event: 'unmark', id: result.id });
      this._registerTimeout(
        result.id,
        () => {
          this._unmarks.delete(result.id);
          reject(`Task '${result.id}' (unmark) timed out (${this._timeout}ms)`);
        },
        this._timeout,
      );
    });
  }

  async defineType(type: ITypedef) {
    return new Promise<string>(async (resolve, reject) => {
      if (!this.isStarted()) {
        reject(new Error('Greycat server must be started'));
        return;
      }
      const id = generateId();
      this._typedefs.set(id, { resolve, reject });
      await this._send({ event: 'typedef', id, type: this._convertType(type) });
      this._registerTimeout(
        id,
        () => {
          this._typedefs.delete(id);
          reject(`Task '${id}' (typedef) timed out (${this._timeout}ms)`);
        },
        this._timeout,
      );
    });
  }

  async stop(timeout: number = this._timeout) {
    return new Promise<void>(async (resolve, reject) => {
      if (!this.isStarted()) {
        reject(new Error('Greycat server must be started'));
        return;
      }
      this._completeStop = resolve;
      const id = generateId();
      await this._send({ event: 'stop', id });
      this._stopping = true;
      this._registerTimeout(
        id,
        () => {
          this._logger.warn(`Task '${id}' (stop) timed out (${timeout}ms), forcing kill...`);
          this._forceKill();
        },
        timeout,
      );
    });
  }

  /**
   * @param {String} script
   * @param {String?} uri
   * @param {number} timeout defaults to global timeout (set by constructor)
   * @returns {ExecuteResult}
   */
  private async _executeScript(script: string, uri?: string, timeout: number = this._timeout) {
    return new Promise<ExecuteResult>(async (resolve, reject) => {
      if (!this.isStarted()) {
        reject(new Error('Greycat server must be started'));
        return;
      }
      const id = generateId();
      this._tasks.set(id, { resolve, reject });
      d(`executeScript(<script>, '${uri}', ${timeout})`);
      await this._send({ event: 'execute', id, script, uri });
      this._registerTimeout(
        id,
        () => {
          this._tasks.delete(id);
          reject(`Task '${id}' (execute) timed out (${timeout}ms)`);
        },
        timeout,
      );
    });
  }

  /**
   * @param {String} script
   * @param {String?} uri
   * @param {number} timeout defaults to global timeout (set by constructor)
   * @returns {ExecuteResult}
   */
  private async _executeScriptOnContext(
    context: ExecuteResult,
    script: string,
    uri?: string,
    timeout: number = this._timeout,
  ) {
    return new Promise<ExecuteResult>(async (resolve, reject) => {
      if (!this.isStarted()) {
        reject(new Error('Greycat server must be started'));
        return;
      }
      const id = generateId();
      this._tasks.set(id, { resolve, reject });
      d(`executeScriptOnContext('${context.id}', <script>, '${uri}', ${timeout})`);
      await this._send({ event: 'execute', id, contextId: context.id, script, uri });
      this._registerTimeout(
        id,
        () => {
          this._tasks.delete(id);
          reject(`Task '${id}' (execute) timed out (${timeout}ms)`);
        },
        timeout,
      );
    });
  }

  private _onResult(id: string, err: GreyCatError | string | null, data: any) {
    const p = this._tasks.get(id);
    if (!p) {
      throw new Error(`Unknown task id '${id}', result will be ignored`);
    }

    // remove completed task
    this._tasks.delete(id);

    // register ExecuteResult task
    const result = new ExecuteResult(id, data);
    this._unmarks.set(result.id, result);

    if (err) {
      p.reject(err);
    } else {
      p.resolve(result);
    }
  }

  private _onUnmarked(id: string) {
    const result = this._unmarks.get(id);
    if (!result) {
      throw new Error(`Unknown unmark id '${id}', response message ignored`);
    }

    // remove completed job
    this._unmarks.delete(id);

    if (result._releaseHandler) {
      result._releaseHandler();
    }
    if (result._resolve) {
      result._resolve();
    }
  }

  private _onTypedefed(id: string, error?: any) {
    const p = this._typedefs.get(id);
    if (!p) {
      throw new Error(`Unknown typedef id '${id}', response message ignored`);
    }

    // removed completed job
    this._typedefs.delete(id);

    if (error) {
      p.reject(error);
    } else {
      p.resolve(id);
    }
  }

  private _invokeHandle(hid: string, data: any) {
    const handle = this._handles.get(hid);

    if (!handle) {
      throw new Error(`Unknown handle id '${hid}', response message ignored`);
    }

    // TODO manage handles deletion

    handle(data);
  }

  private _onLog(level: ResponseLog['level'], ...args: any[]) {
    switch (level) {
      case 'info':
        this._logger.info(...args);
        break;
      case 'debug':
        this._logger.debug(...args);
        break;
      case 'warn':
        this._logger.warn(...args);
        break;
      case 'error':
        this._logger.error(...args);
        break;
    }
  }

  private _onConsole(method: ResponseConsole['method'], content: string) {
    this._console[method](content);
  }

  private _prepared(id: string, data: any) {
    const p = this._tasks.get(id);
    if (!p) {
      throw new Error(`Unknown prepare id '${id}', response message ignored`);
    }

    // removed completed job
    this._tasks.delete(id);

    const result = new ExecuteResult(id, data);
    this._unmarks.set(result.id, result);

    p.resolve(result);
  }

  private _prepareError(id: string, error: string) {
    const p = this._tasks.get(id);
    if (!p) {
      throw new Error(`Unknown prepare id '${id}', response message ignored`);
    }

    // removed completed job
    this._tasks.delete(id);

    p.reject(error);
  }

  private _stopped() {
    // noop
  }

  private _forceKill() {
    if (this._server) {
      this._server.removeAllListeners('message');
      this._server.kill('SIGKILL');
    }
  }

  private _parseMessage(msg: IResponseMessage) {
    d('response %O', msg);
    if (msg.id) {
      const timeoutId = this._timeouts.get(msg.id);
      if (timeoutId) {
        clearTimeout(timeoutId);
        this._timeouts.delete(msg.id);
      }
    }
    switch (msg.event) {
      case 'ready':
        if (this._completeStart) {
          this._completeStart();
        }
        this._isStarted = true;
        break;

      case 'result':
        this._onResult(msg.id, msg.error, msg.data);
        break;

      case 'unmarked':
        this._onUnmarked(msg.id);
        break;

      case 'typedefed':
        this._onTypedefed(msg.id, msg.error);
        break;

      case 'invoke':
        this._invokeHandle(msg.id, msg.data);
        break;

      case 'log':
        this._onLog(msg.level, ...msg.args);
        break;

      case 'console':
        this._onConsole(msg.method, msg.content);
        break;

      case 'prepared':
        this._prepared(msg.id, msg.data);
        break;

      case 'prepare-error':
        this._prepareError(msg.id, msg.error);
        break;

      case 'stopped':
        this._stopped();
        break;

      default:
        this._logger.warn(`[client] Unknown message type '${(msg as any).event}' (ignored)`);
        break;
    }
  }

  private async _send(msg: IRequestMessage) {
    return new Promise<void>((resolve, reject) => {
      if (this._server && this._server.connected && !this._server.killed && !this._stopping) {
        this._server.send(msg, (err) => {
          if (err) {
            reject(`Unable to send message for task ${msg.event}:${msg.id} (${err.message})`);
            return;
          }
          resolve();
        });
      }
    });
  }

  private _convertType(type: ITypedef): IServerTypedef {
    const attrs = type.attributes || {};
    const fns = type.functions || {};
    return {
      name: type.name,
      attributes: Object.keys(attrs).map((name) => {
        const attr = attrs[name];
        return {
          name,
          type: attr.type,
          value: attr.value,
          static: attr.static,
        };
      }),
      functions: Object.keys(fns).map((name) => {
        const fn = fns[name];
        const hid = generateId();
        this._handles.set(hid, fn.handle);
        const params = fn.params || [];
        return {
          name,
          handleId: hid,
          static: fn.static,
          params: params.map((p) => {
            return {
              name: p.name,
              type: p.type || Keys.g_Any,
              optional: p.optional,
            };
          }),
        };
      }),
    };
  }

  private _registerTimeout(id: string, cb: () => void, timeout: number) {
    d(`task '%s' will timeout in %dms`, id, timeout);
    const timeout_id = setTimeout(() => {
      this._timeouts.delete(id);
      cb();
    }, timeout);
    this._timeouts.set(id, timeout_id);
  }
}
