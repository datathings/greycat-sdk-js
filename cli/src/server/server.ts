import debug from 'debug';
import { IRequestMessage, IResponseMessage } from './protocol';
import { init, Graph, IGraph, IContext, IFunctionLike, IType } from '../greycat-core';
import { IServerTypedef } from './types';
import { LoggerAdapter } from './logger-adapter';

const d = debug('greycat:server');
const KEYWORD = /return|result|var|att|ref|enum|static|derived|function|open|type|private|if|is|as|else|while|for|include|extern|optional|time|null|this/;

export class GreycatServer {
  private _graph!: IGraph;
  private _tasks: Map<string, IContext>;

  constructor(logger: LoggerAdapter) {
    this._tasks = new Map();

    logger.on('info', (...args) => this.send({ event: 'log', level: 'info', args }));
    logger.on('debug', (...args) => this.send({ event: 'log', level: 'debug', args }));
    logger.on('warn', (...args) => this.send({ event: 'log', level: 'warn', args }));
    logger.on('error', (...args) => this.send({ event: 'log', level: 'error', args }));

    // listen for incoming messages
    process.on('message', this._parseMessage.bind(this));
  }

  send(msg: IResponseMessage, cb?: () => void) {
    if (process.send && process.connected) {
      process.send(msg, cb);
    } else {
      throw new Error(`Unable to send message '${msg.id}', process is not connected`);
    }
  }

  ready() {
    this.send({ event: 'ready' });
  }

  newGraph(cacheSize?: number, bufferSize?: number) {
    this._tasks.forEach((t, id) => {
      t.unmark();
      this.send({ event: 'unmarked', id });
    });
    this._tasks.clear();
    if (this._graph) {
      this._graph.destroy();
    }
    this._graph = new Graph(cacheSize, bufferSize);
    this.ready();
  }

  prepare(id: string, data: any) {
    const keys = Object.keys(data);
    for (let i = 0; i < keys.length; i++) {
      const name = keys[i];
      if (name.match(KEYWORD)) {
        this.send({
          event: 'prepare-error',
          id,
          error: `you cannot used reserved keyword '${name}' as context variable`,
        });
        return;
      }
    }

    try {
      const c = this._graph.newContext();
      for (let i = 0; i < keys.length; i++) {
        const name = keys[i];
        c.set(name, data[name]);
      }
      this._tasks.set(id, c);
      this.send({ event: 'prepared', id, data: c.toJSON() });
    } catch (err) {
      this.send({ event: 'prepare-error', id, error: err.stack });
    }
  }

  execute(id: string, contextId: string | undefined, script: string, uri?: string) {
    try {
      let c: IContext | undefined;
      if (contextId) {
        c = this._tasks.get(contextId);
        if (!c) {
          throw new Error(`Unable to execute job: unknown context '${contextId}'`);
        }
      } else {
        c = this._graph.newContext().onError((err) => d("execute task '%s' failed %O", id, err));
        this._tasks.set(id, c);
      }
      const f = this._graph.newFunction();
      f.then(script, uri);
      f.execute(c, (error, ctx) => {
        this.send({ event: 'log', level: 'debug', args: [`Execute task '${id}' completed`] });
        try {
          const data = ctx.toJSON();
          this.send({ event: 'result', id, error: error || null, data });
        } catch (err) {
          this.send({ event: 'result', id, error: err.stack, data: undefined });
        }
      });
    } catch (err) {
      this.send({ event: 'result', id, error: err.stack, data: undefined });
    }
  }

  unmark(id: string) {
    const c = this._tasks.get(id);
    if (c) {
      c.unmark();
      this._tasks.delete(id);
      this.send({ event: 'unmarked', id });
    }
  }

  typedef(id: string, typedef: IServerTypedef) {
    let type: IType | undefined;
    try {
      type = this._graph.declareType(typedef.name, false);
      typedef.attributes.forEach((a) => {
        if (a.static) {
          type!.declareStaticAttribute(a.name, a.value);
        } else {
          type!.declareAttribute(a.name, a.type);
        }
      });
      typedef.functions.forEach((f) => {
        const fnDef: IFunctionLike = {
          params: f.params,
          body: (c) => this.send({ event: 'invoke', id: f.handleId, data: c.toJSON() }),
        };

        if (f.static) {
          type!.declareStaticFunction(f.name, fnDef);
        } else {
          type!.declareFunction(f.name, fnDef);
        }
      });
      type.seal();
      this.send({ event: 'typedefed', id });
    } catch (err) {
      this.send({ event: 'typedefed', id, error: err.message });
    } finally {
      if (type) {
        type.unmark();
      }
    }
  }

  stop(id: string) {
    this._tasks.forEach((c) => c.unmark());
    this._graph.destroy();
    process.removeAllListeners();
    this.send({ event: 'stopped', id });
  }

  private _parseMessage(msg: IRequestMessage) {
    d('request %O', msg);
    switch (msg.event) {
      case 'newgraph':
        this.newGraph(msg.cacheSize, msg.bufferSize);
        break;

      case 'prepare':
        this.prepare(msg.id, msg.data);
        break;

      case 'execute':
        this.execute(msg.id, msg.contextId, msg.script, msg.uri);
        break;

      case 'unmark':
        this.unmark(msg.id);
        break;

      case 'typedef':
        this.typedef(msg.id, msg.type);
        break;

      case 'stop':
        this.stop(msg.id);
        break;

      default:
        d(`Unknown message type '${(msg as any).event}' (ignored)`);
        this.send({
          event: 'log',
          level: 'warn',
          args: [`[server] Unknown message type '${(msg as any).event}' (ignored)`],
        });
        break;
    }
  }
}

async function main() {
  if (process.send) {
    const args = process.argv.slice(2);
    const cacheSize = parseInt(args[0], 10) || undefined;
    const bufferSize = parseInt(args[1], 10) || undefined;

    const loggerAdapter = new LoggerAdapter();
    await init({
      logger: loggerAdapter,
      console: {
        print: (content) => {
          server.send({ event: 'console', method: 'print', content });
        },
        println: (content) => {
          server.send({ event: 'console', method: 'println', content });
        },
      },
    });
    const server = new GreycatServer(loggerAdapter);
    server.newGraph(cacheSize, bufferSize);
  } else {
    throw new Error('GreycatServer should be spawned with IPC enabled');
  }
}

process.on('SIGINT', () => {
  // noop: let GreycatClient handle this signal
  // and propagate the appropriate cleanup behavior
});

main().catch((err) => {
  // rethrow error in order to make the process crash
  // and give a chance to the GreycatClient to handle it
  throw new Error(err.message);
});
