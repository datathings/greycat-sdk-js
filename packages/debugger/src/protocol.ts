import { IBreakpoint } from './model/IBreakpoint';
import { IStackFrame } from './model/IStackFrame';
import { ICurrentInfo } from './model';

export type IDebuggerEvent =
  | IExitEvent
  | IBreakEvent
  | IExceptionEvent
  | IBreakpointsInfoEvent
  | IStackTraceEvent
  | ICurrentInfoEvent;

export interface IExitEvent {
  type: 'exit';
  hadError: boolean;
}

export interface IBreakEvent {
  type: 'b';
  info: ICurrentInfo;
}

export interface ICurrentInfoEvent {
  type: 'v';
  info: ICurrentInfo;
}

export interface IExceptionEvent {
  type: 'e';
  location: IBreakpoint;
  reason: string;
  stack: IStackFrame[];
}

export interface IBreakpointsInfoEvent {
  type: '?';
  breakpoints: Array<{ source: string; location: [number, number] }>;
}

export interface IStackTraceEvent {
  type: 't';
  frames: IStackFrame[];
}
