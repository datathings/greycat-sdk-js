import { IContext, IGraph, hash, ErrorCallback, GreyCatError } from './common';
import { addon } from '.';
import { IGetValueHandler, ISetValueHandler, js_to_greycat, greycat_to_js } from './types';
import { GString } from './GString';

export class Context implements IContext {
  errorHandler: ErrorCallback | null = (err) => {
    console.error(`GreycatError\n  reason: ${err.reason}\n  stack:\n    ${err.stack}`);
  }

  // @ts-ignore
  private _errorHandlerAdapter: ErrorCallback = (reason_ptr: number, gstack_ptr: number) => {
    if (this.errorHandler) {
      this.errorHandler(
        new GreyCatError(
          addon.UTF8ToString(addon._gstring__get(reason_ptr), addon._gstring__size(reason_ptr)),
          addon.UTF8ToString(addon._gstring__get(gstack_ptr), addon._gstring__size(gstack_ptr)),
        ),
      );
    }
  }

  constructor(readonly ptr: number) {
    addon._ctx__wrap(this.ptr);
    addon.__pointers[this.ptr] = this;
  }

  onError(errorHandler: ErrorCallback | null) {
    this.errorHandler = errorHandler;
    return this;
  }

  get(key: string): any {
    return greycat_to_js(ctx_get_handler(this.ptr, hash(key)));
  }

  set(key: string, value: any) {
    const g = this.graph();
    if (!g.isMeta(key)) {
      g.declareMeta(key);
    }
    js_to_greycat(value, addon._object__graph(this.ptr), ctx_set_handler(this.ptr, hash(key)));
    return this;
  }

  setResult(value: any) {
    js_to_greycat(value, addon._object__graph(this.ptr), ctx_set_result_handler(this.ptr));
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
}

function ctx_get_handler(ptr: number, key: number): IGetValueHandler {
  return {
    getValueType() {
      return addon._ctx__get_type(ptr, key);
    },
    getInt32() {
      return addon._gctx__get_int(ptr, key);
    },
    getUint() {
      return addon._gctx__get_uint(ptr, key);
    },
    getDouble() {
      return addon._gctx__get_double(ptr, key);
    },
    getBool() {
      return addon._gctx__get_bool(ptr, key);
    },
    getLong() {
      return addon._gctx__get_long(ptr, key);
    },
    getULong() {
      return addon._gctx__get_ulong(ptr, key);
    },
    getFloat() {
      return addon._gctx__get_float(ptr, key);
    },
    getObject() {
      return addon._gctx__get_object(ptr, key);
    },
  };
}

function ctx_set_handler(ptr: number, key: number): ISetValueHandler {
  return {
    isInt32: (value) => {
      addon._gctx__set_int(ptr, key, value);
    },
    isDouble: (value) => {
      addon._gctx__set_double(ptr, key, value);
    },
    isBoolean: (value) => {
      addon._gctx__set_bool(ptr, key, value);
    },
    isLong: (high, low) => {
      addon._ctx__set_long(ptr, key, high, low);
    },
    isNull: () => {
      addon._gctx__set_null(ptr, key);
    },
    isObject: (obj_ptr) => {
      addon._gctx__set_object(ptr, key, obj_ptr);
    },
    isUndefined: () => {
      // noop
    },
    isNotHandled: (value: any) => {
      console.error(`Context can't set value '${value}' of type '${typeof value}'`);
    },
  };
}

function ctx_set_result_handler(_ptr: number): ISetValueHandler {
  return {
    isInt32: (_value) => {
      // tslint:disable-next-line:no-console
      console.warn(`ctx_set_result (isInt32): not implemented yet`);
    },
    isDouble: (_value) => {
      // tslint:disable-next-line:no-console
      console.warn(`ctx_set_result (isDouble): not implemented yet`);
    },
    isBoolean: (_value) => {
      // tslint:disable-next-line:no-console
      console.warn(`ctx_set_result (isBoolean): not implemented yet`);
    },
    isLong: (_high, _low) => {
      // tslint:disable-next-line:no-console
      console.warn(`ctx_set_result (isLong): not implemented yet`);
    },
    isNull: () => {
      // tslint:disable-next-line:no-console
      console.warn(`ctx_set_result (isNull): not implemented yet`);
    },
    isObject: (_obj_ptr) => {
      // tslint:disable-next-line:no-console
      console.warn(`ctx_set_result (isObject): not implemented yet`);
    },
    isUndefined: () => {
      // noop
    },
    isNotHandled: (value: any) => {
      console.error(`Context can't set result '${value}' of type '${typeof value}'`);
    },
  };
}
