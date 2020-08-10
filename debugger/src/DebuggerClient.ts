import { Socket } from 'net';
import { EventEmitter } from 'events';
import { IBreakpoint } from './model/IBreakpoint';
import { IDebuggerEvent, IBreakpointsInfoEvent, IStackTraceEvent, ICurrentInfoEvent } from './protocol';
import { IDebuggerClient } from './model/IDebuggerClient';
import { ISourceBreakpoint } from './model';
import { IStackFrame } from './model/IStackFrame';
import { ICurrentInfo } from './model/ICurrentInfo';

const MESSAGE_REGEX = /([^:]*)(:([\s\S]*))?/;

export class DebuggerClient implements IDebuggerClient {
  private _socket: Socket | null;
  private _isStarted: boolean;
  private _error: Error | null;
  private _debugEventEmitter: EventEmitter;

  constructor() {
    this._socket = null;
    this._isStarted = false;
    this._error = null;
    this._debugEventEmitter = new EventEmitter();
  }

  async start(port: number = 9494) {
    if (this._socket) {
      throw new Error(`Already started`);
    }

    return new Promise<void>((resolve, reject) => {
      this._socket = new Socket({ readable: true, writable: true });
      this._socket.once('error', reject);
      let data = '';
      this._socket.on('data', (buffer) => {
        data += buffer.toString('utf-8');
        // tslint:disable-next-line:no-console
        // console.log('--------- DATA ---------');
        // console.log(data);
        // console.log('------------------------');
        let msgEndIndex = data.indexOf('\r\n');
        while (msgEndIndex !== -1) {
          const msg = data.substr(0, msgEndIndex);
          this._parseMessage(msg);
          data = data.substr(msgEndIndex + 2); // + 2 is '\n\n' length
          msgEndIndex = data.indexOf('\r\n');
        }
      });
      this._socket.on('close', this._onClose.bind(this));
      this._socket.on('error', this._onError.bind(this));

      this._socket.connect({ port }, () => {
        this._isStarted = true;
        this._socket?.off('error', reject);
        resolve();
      });
    });
  }

  async stop() {
    return new Promise<void>((resolve, reject) => {
      if (this._isStarted && this._socket) {
        this._socket.write('s', (err) => {
          if (err) {
            reject(err);
          } else {
            resolve();
          }
        });
      } else {
        reject(new Error('Socket is not connected'));
      }
    });
  }

  async removeBreakpoints() {
    return new Promise<void>((resolve, reject) => {
      if (this._isStarted && this._socket) {
        this._socket.write('b', (err) => {
          if (err) {
            reject(err);
          } else {
            resolve();
          }
        });
      } else {
        reject(new Error('Socket is not connected'));
      }
    });
  }

  async setBreakpoints(uri: string, breakpoints: IBreakpoint[]) {
    return new Promise<void>((resolve, reject) => {
      if (!this._isStarted || this._socket == null) {
        reject(new Error('Debugger client must be started'));
        return;
      }

      const msg = `b "${uri}" ${breakpoints.map((b) => `${b.line}${b.column ? `:${b.column}` : ''}`).join(' ')}`;
      this._socket.write(msg, (err) => {
        if (err) {
          reject(err);
        } else {
          resolve();
        }
      });
    });
  }

  async getBreakpoints() {
    return new Promise<ISourceBreakpoint[]>((resolve, reject) => {
      if (!this._isStarted || this._socket == null) {
        reject(new Error('Debugger client must be started'));
        return;
      }

      const responseHandler = (e: IBreakpointsInfoEvent) => {
        resolve(
          e.breakpoints.map((b) => ({
            uri: b.source,
            location: { line: b.location[0], column: b.location[1] },
          })),
        );
      };

      this._debugEventEmitter.once('?', responseHandler);
      this._socket.write('?', (err) => {
        if (err) {
          this._debugEventEmitter.off('?', responseHandler);
          reject(err);
        }
      });
    });
  }

  async getCurrentInfo() {
    return new Promise<ICurrentInfo | {}>((resolve, reject) => {
      if (!this._isStarted || this._socket == null) {
        reject(new Error('Debugger client must be started'));
        return;
      }

      const responseHandler = (e: ICurrentInfoEvent) => resolve(e.info);
      this._debugEventEmitter.once('v', responseHandler);
      this._socket.write('v', (err) => {
        if (err) {
          this._debugEventEmitter.off('v', responseHandler);
          reject(err);
        }
      });
    });
  }

  async getStackFrames(startFrame: number = 0, levels: number = 0) {
    return new Promise<IStackFrame[]>((resolve, reject) => {
      if (!this._isStarted || this._socket == null) {
        reject(new Error('Debugger client must be started'));
        return;
      }

      const responseHandler = (e: IStackTraceEvent) => resolve(e.frames);

      this._debugEventEmitter.once('t', responseHandler);
      this._socket.write(`t ${startFrame} ${levels}`, (err) => {
        if (err) {
          this._debugEventEmitter.off('t', responseHandler);
          reject(err);
        }
      });
    });
  }

  async continue() {
    return new Promise<void>((resolve, reject) => {
      if (!this._isStarted || this._socket == null) {
        reject(new Error('Debugger client must be started'));
        return;
      }

      this._socket.write('c', (err) => {
        if (err) {
          reject(err);
        } else {
          resolve();
        }
      });
    });
  }

  async next() {
    return new Promise<void>((resolve, reject) => {
      if (!this._isStarted || this._socket == null) {
        reject(new Error('Debugger client must be started'));
        return;
      }

      this._socket.write('n', (err) => {
        if (err) {
          reject(err);
        } else {
          resolve();
        }
      });
    });
  }

  async pause() {
    return new Promise<void>((resolve, reject) => {
      if (!this._isStarted || this._socket == null) {
        reject(new Error('Debugger client must be started'));
        return;
      }

      this._socket.write('p', (err) => {
        if (err) {
          reject(err);
        } else {
          resolve();
        }
      });
    });
  }

  on(eventType: IDebuggerEvent['type'] | 'error', cb: (...args: any[]) => void) {
    this._debugEventEmitter.on(eventType, cb);
  }

  private _validateEventType(header: string): header is IDebuggerEvent['type'] {
    return header === 'exit' || header === 'b' || header === 'e' || header === '?' || header === 't' || header === 'v';
  }

  // @ts-ignore
  private _parseMessage(msg: string) {
    const result = MESSAGE_REGEX.exec(msg);
    if (result) {
      if (this._validateEventType(result[1])) {
        const type = result[1];
        let event: IDebuggerEvent | undefined;
        let error: any;

        switch (type) {
          case 'exit': {
            event = { type, hadError: false };
            break;
          }

          case 'b': {
            let msgBody;
            try {
              msgBody = JSON.parse(result[3]);
              event = { type, info: msgBody };
            } catch (err) {
              error = err;
            }
            break;
          }

          case 'v': {
            let msgBody;
            try {
              msgBody = JSON.parse(result[3]);
              event = { type, info: msgBody };
            } catch (err) {
              error = err;
            }
            break;
          }

          case 'e': {
            let msgBody;
            try {
              msgBody = JSON.parse(result[3]);
              event = {
                type,
                reason: msgBody.reason,
                stack: msgBody.stack,
                location: { line: msgBody.location[0], column: msgBody.location[1] },
              };
            } catch (err) {
              error = err;
            }
            break;
          }

          case 't': {
            let msgBody;
            try {
              msgBody = JSON.parse(result[3]);
              event = { type, frames: msgBody };
            } catch (err) {
              error = err;
            }
            break;
          }

          case '?': {
            let msgBody;
            try {
              msgBody = JSON.parse(result[3]);
              event = { type, breakpoints: msgBody };
            } catch (err) {
              error = err;
            }
          }
        }

        if (event) {
          this._debugEventEmitter.emit(type, event);
        }
        if (error) {
          if (error instanceof SyntaxError) {
            // output raw message on JSON syntaxerror
            process.stdout.cursorTo(0);
            process.stdout.clearLine(1);
            console.log('------- raw message --------');
            console.log(msg);
            console.log('----------------------------');
          }
          this._debugEventEmitter.emit(
            'error',
            `Something went wrong while parsing '${type}' event (${error.message})`,
          );
        }
      } else {
        this._debugEventEmitter.emit('error', `Unknown event type '${result[1]}'`);
      }
    }
  }

  private _onError(err: Error) {
    this._error = err;
  }

  private _onClose(hadError: boolean) {
    this._isStarted = false;
    this._socket?.removeAllListeners();
    this._socket = null;
    this._debugEventEmitter.emit('exit', hadError);
  }

  get lastError() {
    return this._error;
  }
}
