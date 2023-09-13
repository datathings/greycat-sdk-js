import { core } from '../std/index.js';

export function prettyError(err: unknown, defaultMsg: string): string {
  if (err instanceof Error) {
    return err.message;
  }
  if (typeof err === 'string') {
    return err;
  }
  if (err instanceof core.Error) {
    if (typeof err.msg === 'string' && err.msg.length > 0) {
      return err.msg;
    }
    if (typeof err.value === 'string') {
      return err.value;
    }
    return defaultMsg;
  }
  return defaultMsg;
}

/**
 * @param err
 * @param msg
 * @returns
 * @deprecated use `prettyError(...)` instead
 */
export function convertError(err: unknown, msg: string): string {
  return prettyError(err, msg) ?? msg;
}
