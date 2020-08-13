import { ILogger, IConsole, IResolver } from './common';

/**
 * Those interfaces are just here to type-check the addon usage
 *
 * **Update this when you update exported C functions**
 */
export type AddonAPI = CommonAPI &
  GraphAPI &
  ContextAPI &
  FunctionAPI &
  TypeAPI &
  StringAPI &
  ObjectAPI &
  ArrayAPI &
  MapAPI &
  SlotAPI &
  SlotNTypeAPI;

interface CommonAPI {
  __pointers: { [k: string]: any };
  Logger: ILogger;
  Console: IConsole;
  Resolver?: IResolver;
  then(cb: (addon: AddonAPI) => void): void;

  /** @returns type hash key */
  _ptype__to(gptype_ptr: number): number;

  // emscripten-related API
  UTF8ToString(buffer: string, length: number): string;
  allocateUTF8(buffer: string): number;
  getTempRet0(): number;
  _free(ptr: number): void;
}

interface GraphAPI {
  /** @returns ggraph_t pointer */
  _graph__create(cacheSize: number, bufferSize: number): number;
  /** @returns garray_t pointer */
  _ggraph__create_array(graph_ptr: number): number;
  /** @returns gobject_t pointer */
  _ggraph__create_open_object(graph_ptr: number): number;
  /** @returns gstring_t pointer */
  _ggraph__create_string(graph_ptr: number): number;
  /** @returns gctx_t pointer */
  _ggraph__create_context(graph_ptr: number): number;
  /** @returns gfunction_t pointer */
  _ggraph__create_function(graph_ptr: number): number;
  /** @returns gmap_t pointer */
  _ggraph__create_map(graph_ptr: number): number;
  /** @returns 0 = false, 1 = true */
  _ggraph__is_meta(graph_ptr: number, key: number): number;
  _ggraph__declare_meta(graph_ptr: number, key: number, str_ptr: number): void;
  _ggraph_export_types(graph_ptr: number, gstr_ptr: number): void;
  _ggraph__destroy(graph_ptr: number): void;
}

interface ContextAPI {
  _ctx__wrap(ptr: number): void;
  _ctx__wrap(ptr: number): void;
  /** @returns the type of the specified hashed key (as a Greycat.Key int32_t) */
  _ctx__get_type(ctx_ptr: number, key: number): number;

  /** @returns 0 = false, 1 = true */
  _gctx__get_bool(ctx_ptr: number, key: number): number;
  _gctx__get_int(ctx_ptr: number, key: number): number;
  _gctx__get_uint(ctx_ptr: number, key: number): number;
  _gctx__get_long(ctx_ptr: number, key: number): number;
  _gctx__get_ulong(ctx_ptr: number, key: number): number;
  _gctx__get_float(ctx_ptr: number, key: number): number;
  _gctx__get_double(ctx_ptr: number, key: number): number;
  /** @returns gobject_t pointer */
  _gctx__get_object(ctx_ptr: number, key: number): number;

  _gctx__set_bool(ctx_ptr: number, key: number, value: any): void;
  _gctx__set_int(ctx_ptr: number, key: number, value: any): void;
  _gctx__set_uint(ctx_ptr: number, key: number, value: any): void;
  _ctx__set_long(ctx_ptr: number, key: number, high: number, low: number): void;
  _gctx__set_null(ctx_ptr: number, key: number): void;
  _gctx__set_ulong(ctx_ptr: number, key: number, value: any): void;
  _gctx__set_float(ctx_ptr: number, key: number, value: any): void;
  _gctx__set_double(ctx_ptr: number, key: number, value: any): void;
  _gctx__set_object(ctx_ptr: number, key: number, value: any): void;
}

interface ObjectAPI {
  _gobject__un_mark(obj_ptr: number): void;
  /** @returns gstring_t pointer */
  _object__to_json(obj_ptr: number): number;
  /** @returns type hash key */
  _object__type_key(gobj_ptr: number): number;
  /** @returns gptype_t pointer */
  _object__key_type(obj_ptr: number, key: number): number;
  /** @returns ggraph_t pointer */
  _object__graph(obj_ptr: number): number;

  /** @returns 0 = false, 1 = true */
  _gobject__get_bool(ptr: number, key: number): number;
  _gobject__get_int(ptr: number, key: number): number;
  _gobject__get_uint(ptr: number, key: number): number;
  _gobject__get_long(ptr: number, key: number): number;
  _gobject__get_ulong(ptr: number, key: number): number;
  _gobject__get_float(ptr: number, key: number): number;
  _gobject__get_double(ptr: number, key: number): number;
  /** @returns gobject_t pointer */
  _gobject__get_object(ptr: number, key: number): number;

  _gobject__set_bool(ptr: number, key: number, value: any): void;
  _gobject__set_int(ptr: number, key: number, value: any): void;
  _gobject__set_uint(ptr: number, key: number, value: any): void;
  _object__set_long(ptr: number, key: number, high: number, low: number): void;
  _gobject__set_null(ptr: number, key: number): void;
  _gobject__set_ulong(ptr: number, key: number, value: any): void;
  _gobject__set_float(ptr: number, key: number, value: any): void;
  _gobject__set_double(ptr: number, key: number, value: any): void;
  _gobject__set_object(ptr: number, key: number, value: any): void;

  // C: gslot_t gobject__get_slot(gobject_t *self, int32_t key, gptype_t *type);
  _gobject__get_slot(slot_ptr: number, ptr: number, key: number, type_ptr: number): void;
}

interface ArrayAPI {
  /** @returns ggraph_t* pointer */
  _array__graph(arr_ptr: number): number;
  /** @returns gptype_t pointer */
  _array__offset_type(arr_ptr: number, offset: number): number;
  _garray__size(arr_ptr: number): number;
  _garray__resize(arr_ptr: number, new_size: number): void;

  /** @returns 0 = false, 1 = true */
  _garray__get_bool(ctx_ptr: number, offset: number): number;
  _garray__get_int(ctx_ptr: number, offset: number): number;
  _garray__get_uint(ctx_ptr: number, offset: number): number;
  _garray__get_long(ctx_ptr: number, offset: number): number;
  _garray__get_ulong(ctx_ptr: number, offset: number): number;
  _garray__get_float(ctx_ptr: number, offset: number): number;
  _garray__get_double(ctx_ptr: number, offset: number): number;
  /** @returns gobject_t pointer */
  _garray__get_object(ctx_ptr: number, offset: number): number;

  _garray__set_bool(ctx_ptr: number, offset: number, value: any): void;
  _garray__set_int(ctx_ptr: number, offset: number, value: any): void;
  _garray__set_uint(ctx_ptr: number, offset: number, value: any): void;
  _array__set_long(ctx_ptr: number, offset: number, high: number, low: number): void;
  _garray__set_null(ctx_ptr: number, offset: number): void;
  _garray__set_float(ctx_ptr: number, offset: number, value: any): void;
  _garray__set_double(ctx_ptr: number, offset: number, value: any): void;
  _garray__set_object(ctx_ptr: number, offset: number, value: any): void;

  _garray__add_bool(ctx_ptr: number, value: any): void;
  _garray__add_int(ctx_ptr: number, value: any): void;
  _garray__add_uint(ctx_ptr: number, value: any): void;
  _array__add_long(ctx_ptr: number, high: number, low: number): void;
  _garray__add_null(ctx_ptr: number): void;
  _garray__add_float(ctx_ptr: number, value: any): void;
  _garray__add_double(ctx_ptr: number, value: any): void;
  _garray__add_object(ctx_ptr: number, value: any): void;
}

interface StringAPI {
  _gstring__get(gstr_ptr: number): string;
  _gstring__size(gstr_ptr: number): number;
  _gstring__close(gstr_ptr: number): void;
  _gstring__prepare(gstr_ptr: number, needed: number): void;
  _gstring__reset(gstr_ptr: number): void;
  _gstring__add_raw_string(gstr_ptr: number, str_ptr: number): void;
}

interface FunctionAPI {
  /** @returns 0 = false, 1 = true */
  _function__parse(fn_ptr: number, str_ptr: number, uri_ptr: number): number;
  /** @returns gctx_t pointer */
  _function__create_context(fn_ptr: number): number;
  _function__execute(ctx_ptr: number, fn_ptr: number, callback_ptr: number): void;
  _function__pipe_external(fn_ptr: number, ext_fn_ptr: number): void;
  _function__pipe(fn_ptr: number, next_fn_ptr: number): void;
  _function__add_param(fn_ptr: number, key: number, type: number, is_optional: boolean): void;
  _function__add_mparam(fn_ptr: number, key: number, garr_types: number, is_optional: boolean): void;
}

interface TypeAPI {
  /** @returns gtype_t pointer */
  _type__create(graph_ptr: number, name_key: number, isOpen: boolean): number;
  /** @returns gstring_t pointer */
  _type__name(type_ptr: number): number;
  _type__key(type_ptr: number): number;
  /** @returns 0 = false, 1 = true */
  _type__is_open(type_ptr: number): number;
  _type__declare_attribute(type_ptr: number, name_ptr: number, type_key: number): void;
  /** @returns gfunction_t* the created greycat function */
  _type__declare_function(type_ptr: number, name_ptr: number, fn_ptr: number, is_static: boolean): number;
  /** @returns ggraph_t* */
  _type__graph(type_ptr: number): number;
  _type__seal(type_ptr: number): void;
  _type__declare_static_int(type_ptr: number, name_ptr: number, value: any): void;
  _type__declare_static_bool(type_ptr: number, name_ptr: number, value: any): void;
  _type__declare_static_long(type_ptr: number, name_ptr: number, high: number, low: number): void;
  _type__declare_static_double(type_ptr: number, name_ptr: number, value: any): void;
  _type__declare_static_null(type_ptr: number, name_ptr: number): void;
  _type__declare_static_object(type_ptr: number, name_ptr: number, value: any): void;
}

interface MapAPI {
  /** @returns ggraph_t* pointer */
  _map__graph(map_ptr: number): number;
  _map__get(map_ptr: number, key_slot_ptr: number, key_type: number, slot_and_type_ptr: number): void;
  // _map__mget(map_ptr: number, key: string | number, it: (value: string | number) => void): void;
  _map__set(map_ptr: number, key_slot_ptr: number, key_type: number, value_slot_ptr: number, value_type: number): void;
  _map__put(map_ptr: number, key_slot_ptr: number, key_type: number, value_slot_ptr: number, value_type: number): void;
  _map__remove(map_ptr: number, key_slot_ptr: number, key_type: number): boolean;
  _map__size(map_ptr: number): number;
  _map__foreach(map_ptr: number, it_ptr: number): void;
}

interface SlotAPI {
  _gslot__from_int(value: number): number;
  _gslot__from_uint(value: number): number;
  _gslot__from_float(value: number): number;
  _gslot__from_long(high: number, low: number): number;
  _gslot__from_ulong(high: number, low: number): number;
  _gslot__from_double(value: number): number;
  _gslot__from_bool(value: number): number;
  _gslot__from_object(obj_ptr: number): number;
  _gslot__from_reference(ref_ptr: number): number;
  _gslot__from_null(): number;

  /** @returns 0 = false, 1 = true */
  _gslot__get_bool(ptr: number): number;
  _gslot__get_int(ptr: number): number;
  _gslot__get_uint(ptr: number): number;
  _gslot__get_long(ptr: number): number;
  _gslot__get_ulong(ptr: number): number;
  _gslot__get_float(ptr: number): number;
  _gslot__get_double(ptr: number): number;
  /** @returns gobject_t pointer */
  _gslot__get_object(ptr: number): number;
}
interface SlotNTypeAPI {
  _slotntype__create(): number;
  _slotntype__value(ptr: number): number;
  _slotntype__type(ptr: number): number;
}
