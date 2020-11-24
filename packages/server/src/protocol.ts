import { GreyCatError } from '@greycat/napi';
import { IServerTypedef } from './types';

// ============================================
// RESPONSES
export type IResponseMessage =
  | ResponseReady
  | ResponseResult
  | ResponseUnmarked
  | ResponseTypedefed
  | ResponseInvoke
  | ResponseStopped
  | ResponseLog
  | ResponseConsole
  | ResponsePrepared
  | ResponsePrepareError;

export interface ResponseReady {
  event: 'ready';
  id?: string;
}

export interface ResponseLog {
  event: 'log';
  id?: string;
  level: 'info' | 'debug' | 'warn' | 'error';
  args: any[];
}

export interface ResponseConsole {
  event: 'console';
  id?: string;
  method: 'print' | 'println' | 'eprint' | 'eprintln';
  content: string;
}

export interface ResponseUnmarked {
  event: 'unmarked';
  id: string;
}

export interface ResponseTypedefed {
  event: 'typedefed';
  id: string;
  error?: any;
}

export interface ResponseInvoke {
  event: 'invoke';
  id: string;
  data: any;
}

export interface ResponseStopped {
  event: 'stopped';
  id: string;
}

export interface ResponsePrepared {
  event: 'prepared';
  id: string;
  data: any;
}

export interface ResponsePrepareError {
  event: 'prepare-error';
  id: string;
  error: string;
}

export interface ResponseResult {
  event: 'result';
  id: string;
  error: GreyCatError | string | null;
  data: any;
}
// ============================================

// ============================================
// REQUESTS
export type IRequestMessage =
  | RequestNewGraph
  | RequestExecute
  | RequestUnmark
  | RequestTypedef
  | RequestStop
  | RequestPrepare;

export interface RequestNewGraph {
  event: 'newgraph';
  id: string;
  cacheSize?: number;
  bufferSize?: number;
}

export interface RequestPrepare {
  event: 'prepare';
  id: string;
  data: any;
}

export interface RequestExecute {
  event: 'execute';
  id: string;
  contextId?: string;
  script: string;
  uri?: string;
}

export interface RequestUnmark {
  event: 'unmark';
  id: string;
}

export interface RequestTypedef {
  event: 'typedef';
  id: string;
  type: IServerTypedef;
}

export interface RequestStop {
  event: 'stop';
  id: string;
}
// ============================================
