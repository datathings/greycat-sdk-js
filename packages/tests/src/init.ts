import { init, ILogger, IConsole, IResolver } from './greycat';

class LoggerMock implements ILogger {

  readonly logs: string[] = [];
  readonly infos: string[] = [];
  readonly debugs: string[] = [];
  readonly warns: string[] = [];
  readonly errors: string[] = [];

  log(msg: string) {
    this.logs.push(msg);
  }

  info(msg: string) {
    this.infos.push(msg);
  }

  debug(msg: string) {
    this.debugs.push(msg);
  }

  warn(msg: string) {
    this.warns.push(msg);
  }

  error(msg: string) {
    this.errors.push(msg);
  }

  reset() {
    this.logs.length = 0;
    this.infos.length = 0;
    this.debugs.length = 0;
    this.warns.length = 0;
    this.errors.length = 0;
  }
}

class ConsoleMock implements IConsole {
  readonly prints: string[] = [];
  readonly printLns: string[] = [];

  print(msg: string) {
    this.prints.push(msg);
  }

  println(msg: string) {
    this.printLns.push(msg);
  }

  reset() {
    this.prints.length = 0;
    this.printLns.length = 0;
  }
}

export interface ResolveEntry {
  target: string;
  current: string;
  content: string | null;
}

class ResolverMock {

  readonly resolves: ResolveEntry[] = [];
  private _files: Map<string, ResolveEntry> = new Map();

  readonly resolver: IResolver = (_graph, target, current) => {
    const entry = this._files.get(`${current}:${target}`) ?? null;
    if (entry) {
      this.resolves.push(entry);
    } else {
      throw new Error(`Unable to resolve '${current}:${target}'`);
    }
    return null;
  }

  set(target: string, current: string, content: string | null) {
    this._files.set(`${current}:${target}`, { target, current, content });
  }

  reset() {
    this.resolves.length = 0;
    this._files = new Map();
  }
}

export const loggerMock = new LoggerMock();
export const consoleMock = new ConsoleMock();
export const resolverMock = new ResolverMock();

export default () => {
  loggerMock.reset();
  consoleMock.reset();
  resolverMock.reset();
  return init({
    logger: loggerMock,
    console: consoleMock,
    resolver: resolverMock.resolver,
  });
};
