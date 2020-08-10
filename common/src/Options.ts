import { ILogger } from './ILogger';
import { IConsole } from './IConsole';
import { IResolver } from './IResolver';

export interface Options {
  logger?: ILogger;
  console?: IConsole;
  resolver?: IResolver;
}
