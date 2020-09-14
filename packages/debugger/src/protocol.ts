import { Ctx } from './internal_types';
import { ICurrentInfo, IBreakpoint, IStackFrame, ISourceBreakpoint } from './types';

export enum Cmd {
  BREAKPOINTS     = 'breakpoints',
  CONTINUE        = 'continue',
  FRAMES          = 'frames',
  GET_BREAKPOINTS = 'get-breakpoints',
  INFO            = 'info',
  NEXT            = 'next',
  PAUSE           = 'pause',
  QUIT            = 'quit',
  REMOVE          = 'remove',
  RESET_FRAME     = 'reset',
  STEP_IN         = 'step-in',
  STEP_OUT        = 'step-out',
  STOP            = 'stop',
}

export type Msg =
  | BadFormat
  | Break
  | Breakpoints
  | Exception
  | Frames
  | Ok
  | UnknownCmd
  | Info;

// prettier-ignore
export enum Code {
  BAD_FORMAT  = 'BAD_FORMAT',
  BREAK       = 'BREAK',
  BREAKPOINTS = 'BREAKPOINTS',
  EXCEPTION   = 'EXCEPTION',
  FRAMES      = 'FRAMES',
  OK          = 'OK',
  UNKNOWN_CMD = 'UNKNOWN_CMD',
  INFO        = 'INFO',
}

export interface Break {
  code: Code.BREAK;
  info: ICurrentInfo;
}

export interface Info {
  code: Code.INFO;
  info: ICurrentInfo;
}

export interface IDebugException {
  location: IBreakpoint;
  reason: string;
  stack: IStackFrame[];
}
export interface Exception {
  code: Code.EXCEPTION;
  exception: IDebugException;
}

export interface Breakpoints {
  code: Code.BREAKPOINTS;
  breakpoints: ISourceBreakpoint[];
}

export interface Frames {
  code: Code.FRAMES;
  frames: IStackFrame[];
}

export interface UnknownCmd {
  code: Code.UNKNOWN_CMD;
}

export interface Ok {
  code: Code.OK;
}

export interface BadFormat {
  code: Code.BAD_FORMAT;
}

interface R<T = any> {
  value: T;
}

const CR = 13; // '\r'
const LF = 10; // '\n'
const WS = 32; // ' '
const ZERO = 48; // '0'
const NINE = 57; // '9'

export function parse(ctx: Ctx, msgs: Msg[]) {
  const res: Partial<R> = {};
  let prev_len = msgs.length;
  while (ctx.buf.length > 0) {
    if (jsonCmd<ICurrentInfo>(ctx, Code.BREAK, res)) {
      msgs.push({ code: Code.BREAK, info: res.value });
    }
    if (jsonCmd<ICurrentInfo>(ctx, Code.INFO, res)) {
      msgs.push({ code: Code.INFO, info: res.value });
    }
    if (jsonCmd<ISourceBreakpoint[]>(ctx, Code.BREAKPOINTS, res)) {
      msgs.push({ code: Code.BREAKPOINTS, breakpoints: res.value });
    }
    if (jsonCmd<IStackFrame[]>(ctx, Code.FRAMES, res)) {
      msgs.push({ code: Code.FRAMES, frames: res.value });
    }
    if (jsonCmd<IDebugException>(ctx, Code.EXCEPTION, res)) {
      msgs.push({ code: Code.EXCEPTION, exception: res.value });
    }
    if (noContentCmd(ctx, Code.OK)) {
      msgs.push({ code: Code.OK });
    }
    if (noContentCmd(ctx, Code.UNKNOWN_CMD)) {
      msgs.push({ code: Code.UNKNOWN_CMD });
    }
    if (noContentCmd(ctx, Code.BAD_FORMAT)) {
      msgs.push({ code: Code.BAD_FORMAT });
    }
    if (prev_len === msgs.length) {
      break;
    }
    prev_len = msgs.length;
  }
}

export function jsonCmd<T>(ctx: Ctx, tok: string, res: Partial<R>): res is R<T> {
  const buf = ctx.buf;
  if (token(ctx, tok)) {
    if (space(ctx)) {
      const bytesLen: Partial<R> = {};
      if (integer(ctx, bytesLen)) {
        if (crlf(ctx)) {
          try {
            res.value = JSON.parse(ctx.buf.slice(0, bytesLen.value).toString());
            ctx.buf = ctx.buf.slice(bytesLen.value);
            if (crlf(ctx)) {
              return true;
            }
          } catch (err) {
            console.error(`Unable to parse JSON from '${tok}' message`);
          }
        }
      }
    }
  }
  ctx.buf = buf;
  return false;
}

export function noContentCmd(ctx: Ctx, tok: string): boolean {
  const buf = ctx.buf;
  if (token(ctx, tok)) {
    if (crlf(ctx)) {
      return true;
    }
  }
  ctx.buf = buf;
  return false;
}

export function boolean(ctx: Ctx, res: Partial<R>): res is R<boolean> {
  if (token(ctx, 'true')) {
    res.value = true;
    return true;
  }
  if (token(ctx, 'false')) {
    res.value = false;
    return true;
  }
  return false;
}

export function integer(ctx: Ctx, res: Partial<R>): res is R<number> {
  let idx = 0;
  while (idx < ctx.buf.length) {
    if (ctx.buf[idx] < ZERO || ctx.buf[idx] > NINE) {
      break;
    }
    idx++;
  }
  if (idx === 0) {
    return false;
  }
  res.value = parseInt(ctx.buf.slice(0, idx).toString(), 10);
  ctx.buf = ctx.buf.slice(idx);
  return true;
}

export function token(ctx: Ctx, tok: string): boolean {
  for (let i = 0; i < tok.length; i++) {
    if (ctx.buf[i] !== tok.charCodeAt(i)) {
      return false;
    }
  }
  ctx.buf = ctx.buf.slice(tok.length);
  return true;
}

export function space(ctx: Ctx): boolean {
  if (ctx.buf[0] === WS) {
    ctx.buf = ctx.buf.slice(1);
    return true;
  }
  return false;
}

export function crlf(ctx: Ctx): boolean {
  if (ctx.buf[0] === CR && ctx.buf[1] === LF) {
    ctx.buf = ctx.buf.slice(2);
    return true;
  }
  return false;
}
