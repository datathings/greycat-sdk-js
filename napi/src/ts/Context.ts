import { IContext, IGraph, ErrorCallback, hash } from './common';
import { addon } from './addon';

/**
 * Context is a special kind of GObject
 */
export class Context implements IContext {

  errorHandler: ErrorCallback | null = (err) => {
    console.error(`GreycatError\n  reason: ${err.reason}\n  stack:\n    ${err.stack}`);
  }

  onError(handler: ErrorCallback | null) {
    this.errorHandler = handler;
    return this;
  }

  get(name: string) {
    return addon.context__get_key(this, hash(name));
  }

  set(name: string, value: any) {
    const g = this.graph();
    if (!g.isMeta(name)) {
      g.declareMeta(name);
    }
    addon.context__set_key(this, hash(name), value);
    return this;
  }

  setResult(value: any) {
    addon.context__set_result(this, value);
    return this;
  }

  graph(): IGraph {
    return addon.context__get_graph(this);
  }

  unmark() {
    addon.object__un_mark(this);
  }

  toJSON(): any {
    return JSON.parse(this.toString());
  }

  toString() {
    return addon.object__to_json(this);
  }
}
