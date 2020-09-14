import { Code, IDebugException } from './protocol';

export interface IStackFrame {
  name: string;
  source?: string;
  location: [number, number];
}

export interface IBreakpoint {
  line: number;
  column?: number;
}

export interface IExtendedJSONValue {
  type: string;
  value: any;
}

export interface IExtendedJSON {
  // TODO improve 'value' typing
  [key: string]: IExtendedJSONValue;
}

export interface ICurrentInfo {
  source?: string;
  location?: [number, number];
  data?: IExtendedJSON;
}

export interface ISourceBreakpoint {
  source: string;
  location: [number, number?];
}

export interface IDebuggerClient {
  readonly connected: boolean;

  /**
   * Connects to a Greycat debug server
   * @param port Greycat debug port (default: `9494`)
   * @param timeout connection timeout in milliseconds (default: `3000`)
   */
  connect(port?: number, timeout?: number): Promise<void>;

  /**
   * Closes the connection with the Greycat debug server
   */
  quit(): Promise<void>;

  /**
   * Forces exit on the Greycat debugger process.
   *
   * This will generate a runtime error in order to make the whole program exit.
   */
  stop(): Promise<void>;

  /**
   * Defines breakpoints for the given `uri` file
   *
   * Any previously set breakpoints for that `uri` will be deleted.
   *
   * @param uri the URI to a .gcl source file
   * @param breakpoints a list of location to add breakpoints to
   */
  setBreakpoints(uri: string, breakpoints: IBreakpoint[]): Promise<void>;

  /**
   * @returns the current list of breakpoints defined in the Greycat debugger server
   */
  getBreakpoints(): Promise<ISourceBreakpoint[]>;

  /**
   * Removes all breakpoints defined in the Greycat debugger server
   *
   * @param uri if `undefined` then all breakpoints will be removed,
   * otherwise only the breakpoints of that URI will be removed
   */
  removeBreakpoints(uri?: string): Promise<void>;

  /**
   * @returns the current info of the Greycat debugger server
   */
  getCurrentInfo(): Promise<ICurrentInfo>;

  /**
   * @param startFrame default to `0`
   * @param levels default to `0`
   * @returns the current stackframes of the Greycat debugger server
   */
  getStackFrames(startFrame?: number, levels?: number): Promise<IStackFrame[]>;

  /**
   * Put the Greycat debugger server's state to 'CONTINUE'
   */
  continue(): Promise<void>;

  /**
   * Put the Greycat debugger server's state to 'NEXT'
   */
  next(): Promise<void>;

  /**
   * Put the Greycat debugger server's state to 'PAUSE'
   */
  pause(): Promise<void>;

  /**
   * Put the Greycat debugger server's state to 'STEP_IN'
   */
  stepIn(): Promise<void>;

  /**
   * Put the Greycat debugger server's state to 'STEP_OUT'
   */
  stepOut(): Promise<void>;

  on(eventType: Code.BREAK, cb: (info: ICurrentInfo) => void): void;
  on(eventType: Code.EXCEPTION, cb: (exception: IDebugException) => void): void;
  on(eventType: 'close', cb: (hadError: boolean) => void): void;
  on(eventType: 'error', cb: (err: Error) => void): void;
}
