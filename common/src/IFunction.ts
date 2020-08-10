import { IGraph } from './IGraph';
import { IContext } from './IContext';
import { ExecutionCallback } from './ExecutionCallback';
import { Keys } from '.';

export type IFunctionLike = IFunctionBody | IFunctionBodyAndParams;
export type IFunctionBody = (ctx: IContext) => void;
export interface IParam {
  /**
   * The name of the param
   *
   * It allows you to get the parameter back from the context:
   *
   * ```ts
   * graph.newFunction().then({
   *   params: [{ name: 'myParam', type: Keys.g_bool }],
   *   body: (ctx) => {
   *     // this function returns the negation of the given bool
   *     ctx.set('result', !ctx.get('myParam'));
   *   }
   * }).
   * ```
   */
  name: string;
  /**
   * The type of the parameter, can be a string, an array of strings, a Key or an array of Keys
   *
   * Greycat Keys are not type-specific so beware to only give type-related keys:
   *
   *   - eg. `Keys.g_int`, `Keys.g_String`
   *
   * If `undefined`, then `any` is used
   */
  type?: Keys | Keys[];
  /** Specify whether or not the param should be `optional`;
   *
   * if `undefined`, then `false` is used
   */
  optional?: boolean;
}
export interface IFunctionBodyAndParams {
  params: IParam[];
  body: IFunctionBody;
}

export interface IFunction {
  /**
   * Parses the given GCL script and returns an IFunction
   *
   * @param script GreyCat Language script to parse as function
   * @param uri the URI of the script if any (used by error reporting)
   * @throws an error if parse failed
   */
  then(script: string, uri?: string): IFunction;

  /**
   * Pipes the given function after the current one
   *
   * @param func a function to pipe
   */
  then(func: IFunction): IFunction;

  /**
   * Pipes the given native function after the current one
   *
   * @param func a native function to pipe
   */
  // tslint:disable-next-line: unified-signatures
  then(func: IFunctionLike): IFunction;

  /**
   * Executes the function on a new created context.
   *
   * If a callback `cb` is given, then it is **up to you to unmark the context when you are done with it**,
   * if no callback is given, then the context will be unmarked for you after the execution.
   * @param cb an optional callback to be executed when done
   * @returns the same function in order to give you the possibility to directly `unmark` it
   */
  execute(cb?: ExecutionCallback): IFunction;

  /**
   * Executes the function on the given context, or a newly created one if `null`.
   *
   * **It is up to you to unmark the context when you are done with it.**
   *
   * @param ctx the context to execute the function on (if `null` a new one will be created for you)
   * @param cb? called when your flow is done executing
   * @returns the same function in order to give you the possibility to directly `unmark` it
   */
  execute(ctx: IContext, cb?: ExecutionCallback): IFunction;

  /**
   * Adds a param to the current function
   *
   * **NB**: Order matter, you should define params before defining the body
   *
   * @param param
   */
  defineParam(param: IParam): IFunction;

  graph(): IGraph;
  unmark(): void;
  toJSON(): any;
}
