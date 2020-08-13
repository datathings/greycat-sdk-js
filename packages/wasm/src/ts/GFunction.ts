import {
  IFunction,
  IFunctionLike,
  IFunctionBody,
  IContext,
  IGraph,
  ExecutionCallback,
  IFunctionBodyAndParams,
  IParam,
  hash,
  Keys,
} from './common';
import { addon } from '.';
import { Context } from './Context';
import { GString } from './GString';
import { GArray } from './GArray';
import { Graph } from './Graph';

let function_count = 0;

function isFunctionAndParams(value: any): value is IFunctionBodyAndParams {
  return typeof value.params === 'object' && typeof value.body === 'function';
}

export class GFunction implements IFunction {

  constructor(readonly ptr: number) {
    addon.__pointers[this.ptr] = this;
  }

  then(arg: string | IFunction | IFunctionLike, uri?: string): GFunction {
    switch (typeof arg) {
      case 'string':
        return this._thenParse(arg, uri);
      case 'function':
        return this._thenBody(arg);
      case 'object':
        if (isFunctionAndParams(arg)) {
          arg.params.forEach((p) => this.defineParam(p));
          return this._thenBody(arg.body);
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
    throw new Error(`GFunction.then() expects a 'string', a 'function' or a '{ params: {}, body: function }' or a 'GFunction' (given: ${typeof arg})`);
  }

  execute(
    first?: IContext | ExecutionCallback,
    second?: ExecutionCallback,
  ): GFunction {
    if (first instanceof Context && !second) {
      throw new Error(
        'Function.execute() must be called with a Context and an ExecutionCallback, not just a Context',
      );
    }
    if (first instanceof Function && !second) {
      return this._executeWithCallback(first);
    }
    if (first instanceof Context && second instanceof Function) {
      return this._executeWithContextAndCallback(first, second);
    }
    return this._execute();
  }

  defineParam(param: IParam): IFunction {
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
      addon._function__add_param(this.ptr, hash(param.name), types[0], !!param.optional);
    } else {
      const garr = new GArray(addon._ggraph__create_array((this.graph() as Graph).ptr));
      types.forEach((t) => garr.add(t));
      addon._function__add_mparam(this.ptr, hash(param.name), garr.ptr, !!param.optional);
      garr.unmark();
    }
    return this;
  }

  unmark() {
    addon._gobject__un_mark(this.ptr);
    delete addon.__pointers[this.ptr];
  }

  graph(): IGraph {
    return addon.__pointers[addon._object__graph(this.ptr)];
  }

  toJSON() {
    return JSON.parse(this.toString());
  }

  toString() {
    const str = new GString(addon._object__to_json(this.ptr));
    const json = str.value;
    str.unmark();
    return json;
  }

  private _execute() {
    const ctx = new Context(addon._function__create_context(this.ptr));
    const callback_ptr = hash(`callback_${function_count++}`);
    addon.__pointers[callback_ptr] = () => ctx.unmark();
    addon._function__execute(ctx.ptr, this.ptr, callback_ptr);
    return this;
  }

  private _executeWithCallback(cb: ExecutionCallback) {
    return this._executeWithContextAndCallback(new Context(addon._function__create_context(this.ptr)), cb);
  }

  private _executeWithContextAndCallback(ctx: Context, cb: ExecutionCallback) {
    const prevErrorHandler = ctx.errorHandler;
    ctx.onError((err) => {
      if (prevErrorHandler) {
        prevErrorHandler(err);
      }
      cb(err, ctx);
    });
    const callback_ptr = hash(`callback_${function_count++}`);
    addon.__pointers[callback_ptr] = () => cb(undefined, ctx);
    addon._function__execute(ctx.ptr, this.ptr, callback_ptr);
    return this;
  }

  private _thenParse(script: string, uri?: string) {
    const str_ptr = addon.allocateUTF8(script);
    let uri_ptr: number = 0;
    if (uri) {
      uri_ptr = addon.allocateUTF8(uri);
    }
    const success = addon._function__parse(this.ptr, str_ptr, uri_ptr);
    addon._free(str_ptr);
    if (uri_ptr !== 0) {
      addon._free(uri_ptr);
    }
    if (!success) {
      throw new Error(`Unable to parse script${uri ? ` '${uri}'` : ''}`);
    }
    return this;
  }

  private _thenBody(func: IFunctionBody) {
    const fn_ptr = hash(`func_${function_count++}`);
    addon.__pointers[fn_ptr] = func;
    addon._function__pipe_external(this.ptr, fn_ptr);
    return this;
  }

  private _then(func: IFunction) {
    addon._function__pipe(this.ptr, (func as GFunction).ptr);
    return this;
  }
}
