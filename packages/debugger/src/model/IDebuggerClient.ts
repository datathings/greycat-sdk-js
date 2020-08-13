import { IBreakpoint } from './IBreakpoint';
import { IExitEvent, IBreakEvent, IExceptionEvent, IBreakpointsInfoEvent, IStackTraceEvent, ICurrentInfoEvent } from '../protocol';
import { ISourceBreakpoint } from './ISourceBreakpoint';
import { IStackFrame } from './IStackFrame';
import { ICurrentInfo } from './ICurrentInfo';

export interface IDebuggerClient {

  start(port?: number): Promise<void>;

  stop(): Promise<void>;

  setBreakpoints(uri: string, breakpoints: IBreakpoint[]): Promise<void>;

  getBreakpoints(): Promise<ISourceBreakpoint[]>;

  removeBreakpoints(): Promise<void>;

  getCurrentInfo(): Promise<ICurrentInfo>;

  getStackFrames(startFrame?: number, levels?: number): Promise<IStackFrame[]>;

  continue(): Promise<void>;

  next(): Promise<void>;

  pause(): Promise<void>;

  on(eventType: IExitEvent['type'], cb: (event: IExitEvent) => void): void;
  on(eventType: IBreakEvent['type'], cb: (event: IBreakEvent) => void): void;
  on(eventType: IExceptionEvent['type'], cb: (event: IExceptionEvent) => void): void;
  on(eventType: IBreakpointsInfoEvent['type'], cb: (event: IBreakpointsInfoEvent) => void): void;
  on(eventType: IStackTraceEvent['type'], cb: (event: IStackTraceEvent) => void): void;
  on(eventType: ICurrentInfoEvent['type'], cb: (event: ICurrentInfoEvent) => void): void;
  on(eventType: 'error', cb: (msg: string) => void): void;
}
