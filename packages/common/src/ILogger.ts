export interface ILogger {
  info(msg?: any, ...optionalParams: any[]): void;
  debug(msg?: any, ...optionalParams: any[]): void;
  warn(msg?: any, ...optionalParams: any[]): void;
  error(msg?: any, ...optionalParams: any[]): void;
}
