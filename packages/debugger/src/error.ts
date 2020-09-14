import { Msg } from './protocol';

export class DebuggerError extends Error {
  constructor(message: string, readonly msg: Msg) {
    super(`[${msg.code}] ${message}`);
  }
}
