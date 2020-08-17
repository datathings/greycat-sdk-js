import { EventEmitter } from 'events';
import { ILogger } from '@greycat/napi';

/**
 * Implements a ILogger as an EventEmitter with events: 'info', 'debug', 'warn' and 'error'
 */
export class LoggerAdapter extends EventEmitter implements ILogger {

  constructor() {
    super();
  }

  info(...args: any[]) {
    this.emit('info', ...args);
  }

  debug(...args: any[]) {
    this.emit('debug', ...args);
  }

  warn(...args: any[]) {
    this.emit('warn', ...args);
  }

  error(...args: any[]) {
    this.emit('error', ...args);
  }
}
