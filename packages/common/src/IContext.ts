import { IGraph } from './IGraph';
import { ErrorCallback } from './ErrorCallback';

// tslint:disable-next-line: no-empty-interface
export interface IContext {
  onError(handler: ErrorCallback | null): IContext;

  get<T = any>(name: string): T;

  /**
   * Sets <name, value> to the context
   *
   * If 'value' is a greycat object (GFunction, GArray, GObject, GMap)
   * it will be unmarked as the gctx_t will be its new owner
   *
   * @param name the name
   * @param value the value
   */
  set(name: string, value: any): IContext;

  setResult(value: any): IContext;

  graph(): IGraph;
  unmark(): void;
  toJSON(): any;
}
