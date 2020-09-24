#include <node_api.h>

#include <greycat/ggraph.h>
#include <greycat/rt/string.h>

#include "common.h"

napi_value object__to_json(napi_env env, napi_callback_info info) {
    size_t argc = 1;
    napi_value argv[1];

    NAPI_CALL(env, napi_get_cb_info(env, info, &argc, argv, NULL, NULL));

    gobject_t *obj;
    NAPI_CALL(env, napi_unwrap(env, argv[0], (void **) &obj));

    if (obj == NULL) {
        napi_throw_error(env, NULL, "Unwrapped object is null (object__to_json)");
        return NULL;
    }

    gc_rt_string_t *str = ggraph__create_string((ggraph_t *) obj->type->graph);
    obj->type->to_json(obj, (gobject_t*)str, false);
    gc_rt_string__close(str);

    napi_value value;
    NAPI_CALL(env, napi_create_string_utf8(env, str->buffer, str->size, &value));

    gc_rt_object__un_mark((gobject_t *) str);

    return value;
}

napi_value object__un_mark(napi_env env, napi_callback_info info) {
    size_t argc = 1;
    napi_value argv[1];

    NAPI_CALL(env, napi_get_cb_info(env, info, &argc, argv, NULL, NULL));

    gobject_t *obj;
    NAPI_CALL(env, napi_remove_wrap(env, argv[0], (void **) &obj));
    // printf("unmark & remove wrap: %p\n", obj);

    gc_rt_object__un_mark(obj);

    return NULL;
}

napi_value object__get_key(napi_env env, napi_callback_info info) {
    size_t argc = 2;
    napi_value argv[2];

    NAPI_CALL(env, napi_get_cb_info(env, info, &argc, argv, NULL, NULL));

    gobject_t *obj;
    NAPI_CALL(env, napi_unwrap(env, argv[0], (void **) &obj));

    if (obj == NULL) {
        NAPI_CALL(env, napi_throw_error(env, NULL, "Unwrapped object is null (object__get_key)"));
        return NULL;
    }

    int32_t key;
    NAPI_CALL(env, napi_get_value_int32(env, argv[1], &key));

    gptype_t result_type;
    gc_rt_slot_t result = gc_rt_object__get_slot(obj, key, &result_type);

    return to_js_object(env, (ggraph_t *) obj->type->graph, result, result_type);
}

napi_value object__get_element(napi_env env, napi_callback_info info) {
    size_t argc = 2;
    napi_value argv[2];

    NAPI_CALL(env, napi_get_cb_info(env, info, &argc, argv, NULL, NULL));

    gobject_t *obj;
    NAPI_CALL(env, napi_unwrap(env, argv[0], (void **) &obj));

    if (obj == NULL) {
        NAPI_CALL(env, napi_throw_error(env, NULL, "Unwrapped object is null (object__get_element)"));
        return NULL;
    }

    int32_t offset;
    NAPI_CALL(env, napi_get_value_int32(env, argv[1], &offset));

    gptype_t result_type;
    gc_rt_slot_t result = gc_rt_object__get_slot_at(obj, offset, NULL, &result_type);

    return to_js_object(env, (ggraph_t *) obj->type->graph, result, result_type);
}

napi_value object__set_key(napi_env env, napi_callback_info info) {
    size_t argc = 3;
    napi_value argv[3];
    NAPI_CALL(env, napi_get_cb_info(env, info, &argc, argv, NULL, NULL));

    if (argc != 3) {
        NAPI_CALL(env, napi_throw_type_error(env, NULL, "Wrong number of arguments (expected 3)"));
        return NULL;
    }

    gobject_t *obj;
    NAPI_CALL(env, napi_unwrap(env, argv[0], (void **) &obj));

    if (obj == NULL) {
        NAPI_CALL(env, napi_throw_error(env, NULL, "Unwrapped object is null (object__set_key)"));
        return NULL;
    }

    size_t name_len;
    NAPI_CALL(env, napi_get_value_string_utf8(env, argv[1], NULL, 0, &name_len));
    char name[name_len + 1];
    NAPI_CALL(env, napi_get_value_string_utf8(env, argv[1], name, name_len + 1, &name_len));

    ggraph_t *graph = (ggraph_t *) obj->type->graph;
    int32_t key = hash(name);
    if (!ggraph__is_meta(graph, key)) {
        ggraph__declare_meta(graph, key, name);
    }

    gc_rt_slot_t slot;
    gptype_t type;
    from_js_object(env, argv[2], (ggraph_t *) obj->type->graph, &slot, &type);
    gc_rt_object__set_slot(obj, key, slot, type);

    if (type == gc_sbi_slot_type_object) {
        gc_rt_object__un_mark(slot.object);
    }

    return NULL;
}
