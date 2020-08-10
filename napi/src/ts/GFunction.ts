import {
  IFunction,
  IFunctionLike,
  IFunctionBody,
  IFunctionBodyAndParams,
  IContext,
  IGraph,
  IParam,
  ExecutionCallback,
  Keys,
  hash,
} from './common';
import { addon } from './addon';
import { Context } from './Context';

function isFunctionAndParams(value: any): value is IFunctionBodyAndParams {
  return typeof value.params === 'object' && typeof value.body === 'function';
}

export class GFunction implements IFunction {
  then(arg: string | IFunction | IFunctionLike, uri?: string): GFunction {
    switch (typeof arg) {
      case 'string':
        return this._thenParse(arg, uri);

      case 'function':
        return this._thenBody(arg);

      case 'object':
        if (isFunctionAndParams(arg)) {
          arg.params.forEach((param) => this.defineParam(param));
          this._thenBody(arg.body);
          return this;
        }
        if (arg instanceof GFunction) {
          return this._then(arg);
        }
        if (arg instanceof String) {
          return this._thenParse(arg.toString(), uri);
        }
        break;

      default:
        break;
    }
    throw new Error(
      `GFunction.then() expects a 'string', a 'function' or a '{ params: {}, body: function }' or a 'GFunction' (given: ${typeof arg})`,
    );
  }

  execute(first?: IContext | ExecutionCallback, second?: ExecutionCallback): GFunction {
    if (first instanceof Context) {
      return this._executeWithContextAndCallback(first, second);
    }
    if (first instanceof Function && !second) {
      return this._executeWithCallback(first);
    }
    return this._execute();
  }

  defineParam(param: IParam) {
    const g = this.graph();
    if (!g.isMeta(param.name)) {
      g.declareMeta(param.name);
    }
    let types: Keys[] = [Keys.g_Any];
    if (param.type) {
      if (typeof param.type === 'number') {
        types[0] = param.type;
      } else {
        types = param.type;
      }
    }
    if (types.length === 1) {
      addon.function__add_param(this, hash(param.name), types[0], !!param.optional);
    } else {
      addon.function__add_mparam(this, hash(param.name), types, !!param.optional);
    }
    return this;
  }

  private _execute() {
    const ctx = addon.function__create_context(this);
    addon.function__execute(ctx, this, () => ctx.unmark());
    return this;
  }

  private _executeWithCallback(cb: ExecutionCallback) {
    return this._executeWithContextAndCallback(addon.function__create_context(this), cb);
  }

  private _executeWithContextAndCallback(ctx: Context, cb: ExecutionCallback = () => null) {
    const prevErrorHandler = ctx.errorHandler;
    ctx.onError((err) => {
      if (prevErrorHandler) {
        prevErrorHandler(err);
      }
      cb(err, ctx);
    });
    addon.function__execute(ctx, this, () => cb(undefined, ctx));
    return this;
  }

  private _thenParse(script: string, uri?: string) {
    const success = addon.function__parse(this, script, uri);
    if (!success) {
      throw new Error(`Unable to parse script${uri ? ` '${uri}'` : ''}`);
    }
    return this;
  }

  private _thenBody(func: IFunctionBody) {
    addon.function__pipe_external(this, func);
    return this;
  }

  private _then(func: IFunction) {
    addon.function__pipe(this, func);
    return this;
  }

  graph(): IGraph {
    return addon.function__get_graph(this);
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
