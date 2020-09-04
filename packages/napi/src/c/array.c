#include <node_api.h>

#include <greycat/ggraph.h>

#include "common.h"

napi_value array__add_element(napi_env env, napi_callback_info info) {
  size_t argc = 2;
  napi_value argv[2];

  NAPI_CALL(env, napi_get_cb_info(env, info, &argc, argv, NULL, NULL));

  gc_rt_array_t *arr;
  NAPI_CALL(env, napi_unwrap(env, argv[0], (void **) &arr));

  if (arr == NULL) {
    napi_throw_error(env, NULL, "Unwrapped array is null (array__add_element)");
    return NULL;
  }

  gptype_t slot_type;
  gslot_t slot;
  from_js_object(env, argv[1], (ggraph_t *) arr->header.type->graph, &slot, &slot_type);
  gc_rt_array__add_slot(arr, slot, slot_type);

  if (slot_type == gc_sbi_slot_type_object) {
    gobject__un_mark(slot.object);
  }

  return NULL;
}

napi_value array__remove_element(napi_env env, napi_callback_info info) {
  size_t argc = 2;
  napi_value argv[2];

  NAPI_CALL(env, napi_get_cb_info(env, info, &argc, argv, NULL, NULL));

  gc_rt_array_t *arr;
  NAPI_CALL(env, napi_unwrap(env, argv[0], (void **) &arr));

  if (arr == NULL) {
    napi_throw_error(env, NULL, "Unwrapped array is null (array__add_element)");
    return NULL;
  }

  uint32_t offset;
  NAPI_CALL(env, napi_get_value_uint32(env, argv[1], &offset));

  gc_rt_array__remove(arr, offset);

  return NULL;
}

napi_value array__get_element(napi_env env, napi_callback_info info) {
  size_t argc = 2;
  napi_value argv[2];

  NAPI_CALL(env, napi_get_cb_info(env, info, &argc, argv, NULL, NULL));

  gc_rt_array_t *arr;
  NAPI_CALL(env, napi_unwrap(env, argv[0], (void **) &arr));

  if (arr == NULL) {
    napi_throw_error(env, NULL, "Unwrapped array is null (array__get_element)");
    return NULL;
  }

  uint32_t offset;
  NAPI_CALL(env, napi_get_value_uint32(env, argv[1], &offset));

  gptype_t value_type;
  gslot_t value = gc_rt_array__get_slot(arr, offset, &value_type);
  return to_js_object(env, (ggraph_t *) arr->header.type->graph, value, value_type);
}

napi_value array__set_element(napi_env env, napi_callback_info info) {
  size_t argc = 3;
  napi_value argv[3];

  NAPI_CALL(env, napi_get_cb_info(env, info, &argc, argv, NULL, NULL));

  gc_rt_array_t *arr;
  NAPI_CALL(env, napi_unwrap(env, argv[0], (void **) &arr));

  if (arr == NULL) {
    napi_throw_error(env, NULL, "Unwrapped array is null (array__set_element)");
    return NULL;
  }

  uint32_t offset;
  NAPI_CALL(env, napi_get_value_uint32(env, argv[1], &offset));

  gptype_t slot_type;
  gslot_t slot;
  from_js_object(env, argv[2], (ggraph_t *) arr->header.type->graph, &slot, &slot_type);
  gc_rt_array__set_slot(arr, offset, slot, slot_type);

  if (slot_type == gc_sbi_slot_type_object) {
    gobject__un_mark(slot.object);
  }

  return NULL;
}

napi_value array__size(napi_env env, napi_callback_info info) {
  size_t argc = 1;
  napi_value argv[1];

  NAPI_CALL(env, napi_get_cb_info(env, info, &argc, argv, NULL, NULL));

  gc_rt_array_t *arr;
  NAPI_CALL(env, napi_unwrap(env, argv[0], (void **) &arr));

  if (arr == NULL) {
    napi_throw_error(env, NULL, "Unwrapped array is null (array__size)");
    return NULL;
  }

  napi_value js_size;
  NAPI_CALL(env, napi_create_int32(env, gc_rt_array__size(arr), &js_size));

  return js_size;
}

napi_value array__resize(napi_env env, napi_callback_info info) {
  size_t argc = 2;
  napi_value argv[2];

  NAPI_CALL(env, napi_get_cb_info(env, info, &argc, argv, NULL, NULL));

  gc_rt_array_t *arr;
  NAPI_CALL(env, napi_unwrap(env, argv[0], (void **) &arr));

  if (arr == NULL) {
    napi_throw_error(env, NULL, "Unwrapped array is null (array__resize)");
    return NULL;
  }

  uint32_t new_size;
  NAPI_CALL(env, napi_get_value_uint32(env, argv[1], &new_size));

  gc_rt_array__resize(arr, new_size);

  return NULL;
}
