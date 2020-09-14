import { Socket } from 'net';
import { EventEmitter } from 'events';
import { Msg, parse, Code, Cmd } from './protocol';
import { IBreakpoint, ICurrentInfo, IDebuggerClient, ISourceBreakpoint, IStackFrame } from './types';
import { DebuggerError } from './error';
import { Ctx } from './internal_types';

export class DebuggerClient implements IDebuggerClient {
  private _socket: Socket;
  private _connected: boolean;
  private _pendingRequests: EventEmitter[];
  private _debugEvent: EventEmitter;

  constructor() {
    this._socket = new Socket();
    this._connected = false;
    this._pendingRequests = [];
    this._debugEvent = new EventEmitter();

    const messages: Msg[] = [];
    const ctx: Ctx = { buf: Buffer.from([]) };
    this._socket.on('data', (chunk) => {
      ctx.buf = Buffer.concat([ctx.buf, chunk]);
      parse(ctx, messages);
      let msg = messages.shift();
      while (msg) {
        switch (msg.code) {
          // debug events
          case Code.BREAK:
            this._debugEvent.emit(msg.code, msg.info);
            break;

          case Code.EXCEPTION:
            this._debugEvent.emit(msg.code, msg.exception);
            break;

          // request messages
          default: {
            const emitter = this._pendingRequests.shift();
            if (emitter) {
              emitter.emit('resolve', msg);
            } else {
              // lost message
              console.error(`Lost message: ${msg}`);
            }
          }
        }
        msg = messages.shift();
      }
    });
  }

  get connected() {
    return this._connected;
  }

  async connect(port: number = 9494, timeout = 3000) {
    if (this._connected) {
      throw new Error(`DebuggerClient is already connected to :${this._socket.remotePort}`);
    }

    return new Promise<void>((resolve, reject) => {
      const timeoutHandler = () => {
        this._socket.destroy(new Error('Connection timeout'));
      };
      this._socket.on('error', reject);
      this._socket.on('timeout', timeoutHandler);

      this._socket.setTimeout(timeout);
      this._socket.connect(port, async () => {
        // clean-up reject/timeout handlers
        this._socket.off('error', reject);

        try {
          await this.getBreakpoints();
          this._socket.off('timeout', timeoutHandler);
        } catch (err) {
          this._socket.destroy(err);
          return;
        }

        // register close event
        this._socket.once('close', (hadError) => {
          this._connected = false;
          this._debugEvent.emit('close', hadError);
        });
        // register error event
        this._socket.once('error', (err) => {
          this._debugEvent.emit('error', err);
        });
        // all good
        this._connected = true;
        resolve();
      });
    });
  }

  async quit() {
    return new Promise<void>((r, e) => {
      this._socket.write(Cmd.QUIT, (err) => err ? e(err) : r());
    });
  }

  async stop() {
    return new Promise<void>((r, e) => {
      this._socket.write(Cmd.STOP, (err) => err ? e(err) : r());
    });
  }

  async removeBreakpoints(uri?: string) {
    const cmd = uri === undefined ? Cmd.REMOVE : `${Cmd.REMOVE} "${uri}"`;
    const msg = await this._sendCmd(cmd);
    if (msg.code === Code.OK) {
      return;
    }
    throw new DebuggerError(`Unable to send '${Cmd.REMOVE}' debugger`, msg);
  }

  async setBreakpoints(uri: string, breakpoints: IBreakpoint[]): Promise<void> {
    const msg = await this._sendCmd(`${Cmd.BREAKPOINTS} "${uri}"${bpts(breakpoints)}`);
    if (msg.code === Code.OK) {
      return;
    }
    throw new DebuggerError(`Unable to send '${Cmd.BREAKPOINTS}' debugger`, msg);
  }

  async getBreakpoints(): Promise<ISourceBreakpoint[]> {
    const msg = await this._sendCmd(Cmd.GET_BREAKPOINTS);
    if (msg.code === Code.BREAKPOINTS) {
      return msg.breakpoints;
    }
    throw new DebuggerError(`Unable to send '${Cmd.GET_BREAKPOINTS}' debugger`, msg);
  }

  async getCurrentInfo(): Promise<ICurrentInfo> {
    const msg = await this._sendCmd(Cmd.INFO);
    if (msg.code === Code.INFO) {
      return msg.info;
    }
    throw new DebuggerError(`Unable to send '${Cmd.INFO}' debugger`, msg);
  }

  async getStackFrames(startFrame: number = 0, levels: number = 0): Promise<IStackFrame[]> {
    const msg = await this._sendCmd(`${Cmd.FRAMES} ${startFrame} ${levels}`);
    if (msg.code === Code.FRAMES) {
      return msg.frames;
    }
    throw new DebuggerError(`Unable to send '${Cmd.FRAMES}' debugger`, msg);
  }

  async continue() {
    const msg = await this._sendCmd(Cmd.CONTINUE);
    if (msg.code === Code.OK) {
      return;
    }
    throw new DebuggerError(`Unable to send '${Cmd.CONTINUE}' debugger`, msg);
  }

  async next() {
    const msg = await this._sendCmd(Cmd.NEXT);
    if (msg.code === Code.OK) {
      return;
    }
    throw new DebuggerError(`Unable to send '${Cmd.NEXT}' debugger`, msg);
  }

  async pause(): Promise<void> {
    const msg = await this._sendCmd(Cmd.PAUSE);
    if (msg.code === Code.OK) {
      return;
    }
    throw new DebuggerError(`Unable to send '${Cmd.PAUSE}' debugger`, msg);
  }

  async stepIn(): Promise<void> {
    const msg = await this._sendCmd(Cmd.STEP_IN);
    if (msg.code === Code.OK) {
      return;
    }
    throw new DebuggerError(`Unable to send '${Cmd.STEP_IN}' debugger`, msg);
  }

  async stepOut(): Promise<void> {
    const msg = await this._sendCmd(Cmd.STEP_OUT);
    if (msg.code === Code.OK) {
      return;
    }
    throw new DebuggerError(`Unable to send '${Cmd.STEP_OUT}' debugger`, msg);
  }

  on(event: Code.BREAK | Code.EXCEPTION | 'error' | 'close', handler: (arg: any) => void) {
    this._debugEvent.on(event, handler);
  }

  private async _sendCmd(buf: Buffer | string): Promise<Msg> {
    const emitter = new EventEmitter();
    this._pendingRequests.push(emitter);

    const promise = new Promise<Msg>((r, e) => {
      emitter.on('resolve', r);
      emitter.on('reject', e);
    });

    try {
      await new Promise((r, e) => {
        this._socket.write(buf, (err) => err ? e(err) : r());
      });
    } catch (err) {
      // if something goes wrong while sending message: remove queued msg
      this._pendingRequests.pop();
      // re-throw error
      throw err;
    }

    return promise;
  }
}

export function bpts(breakpoints: IBreakpoint[]): string {
  if (breakpoints.length === 0) {
    return '';
  }
  return breakpoints.map((b) => {
    return b.column === undefined ? `${b.line}` : `${b.line}:${b.column}`;
  }).reduce((prev, next) => `${prev} ${next}`, ' '); // add space if at least one bpt
}
