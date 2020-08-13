#include <node_api.h>

#include <greycat/ggraph.h>
#include <greycat/runtime/gtype.h>

#include "common.h"

napi_value type__wrap(napi_env env, napi_callback_info info) {
    size_t argc = 4;
    napi_value argv[4];

    NAPI_CALL(env, napi_get_cb_info(env, info, &argc, argv, NULL, NULL));

    ggraph_t *graph;
    NAPI_CALL(env, napi_unwrap(env, argv[0], (void **) &graph));

    if (graph == NULL) {
        napi_throw_error(env, NULL, "Given graph is null");
        return NULL;
    }

    napi_ref js_type_ref;
    NAPI_CALL(env, napi_create_reference(env, argv[1], 1, &js_type_ref));

    size_t name_len;
    NAPI_CALL(env, napi_get_value_string_utf8(env, argv[2], NULL, 0, &name_len));
    char name[name_len + 1];
    NAPI_CALL(env, napi_get_value_string_utf8(env, argv[2], name, name_len + 1, &name_len));
    int32_t type_key = hash(name);

    gtype_t *type = ggraph__type(graph, type_key);
    if (type == NULL) {
        ggraph__declare_meta(graph, type_key, name);
    } else {
        // type already exist
        napi_throw_error(env, NULL, "Overriding types is not permitted");
        return NULL;
    }

    bool is_open;
    NAPI_CALL(env, napi_get_value_bool(env, argv[3], &is_open));
    if (is_open) {
        type = ggraph__create_type(graph);
    } else {
        type = ggraph__create_fixed_node_type(graph);
    }

    type->create = NULL;
    type->compute_size = NULL;
    type->key = type_key;
    type->extra = js_type_ref;

    NAPI_CALL(env, napi_wrap(env, argv[1], type, NULL, NULL, NULL));
    // TODO think about cleanup

    return NULL;
}

napi_value type__name(napi_env env, napi_callback_info info) {
    size_t argc = 1;
    napi_value argv[1];

    NAPI_CALL(env, napi_get_cb_info(env, info, &argc, argv, NULL, NULL));

    gtype_t *type;
    NAPI_CALL(env, napi_unwrap(env, argv[0], (void **) &type));

    if (type == NULL) {
        napi_throw_error(env, NULL, "Unwrapped type is null (type__name)");
        return NULL;
    }
    gstring_t *type_name = ggraph__meta(type->graph, type->key);
    if (type_name == NULL) {
        return NULL;
    }

    napi_value name;
    NAPI_CALL(env, napi_create_string_utf8(env, type_name->buffer, type_name->size, &name));
    return name;
}

napi_value type__key(napi_env env, napi_callback_info info) {
    size_t argc = 1;
    napi_value argv[1];

    NAPI_CALL(env, napi_get_cb_info(env, info, &argc, argv, NULL, NULL));

    gtype_t *type;
    NAPI_CALL(env, napi_unwrap(env, argv[0], (void **) &type));

    if (type == NULL) {
        napi_throw_error(env, NULL, "Unwrapped type is null (type__key)");
        return NULL;
    }

    napi_value key;
    NAPI_CALL(env, napi_create_int32(env, type->key, &key));
    return key;
}

napi_value type__seal(napi_env env, napi_callback_info info) {
    size_t argc = 1;
    napi_value argv[1];

    NAPI_CALL(env, napi_get_cb_info(env, info, &argc, argv, NULL, NULL));

    gtype_t *type;
    NAPI_CALL(env, napi_unwrap(env, argv[0], (void **) &type));

    if (type == NULL) {
        napi_throw_error(env, NULL, "Unwrapped type is null (type__seal)");
        return NULL;
    }

    if (type->flags.is_sealed) {
        return NULL;
    }

    ggraph__declare_type(type->graph, type);

    return NULL;
}

napi_value type__is_open(napi_env env, napi_callback_info info) {
    size_t argc = 1;
    napi_value argv[1];

    NAPI_CALL(env, napi_get_cb_info(env, info, &argc, argv, NULL, NULL));

    gtype_t *type;
    NAPI_CALL(env, napi_unwrap(env, argv[0], (void **) &type));

    if (type == NULL) {
        napi_throw_error(env, NULL, "Unwrapped type is null (type__name)");
        return NULL;
    }

    napi_value is_open;
    NAPI_CALL(env, napi_get_boolean(env, type->flags.is_open, &is_open));
    return is_open;
}

napi_value type__declare_attribute(napi_env env, napi_callback_info info) {
    size_t argc = 3;
    napi_value argv[3];

    NAPI_CALL(env, napi_get_cb_info(env, info, &argc, argv, NULL, NULL));

    gtype_t *type;
    NAPI_CALL(env, napi_unwrap(env, argv[0], (void **) &type));

    if (type == NULL) {
        napi_throw_error(env, NULL, "Unwrapped type is null (type__declare_attribute)");
        return NULL;
    }

    int32_t type_key;
    NAPI_CALL(env, napi_get_value_int32(env, argv[2], &type_key));

    if (!ggraph__is_meta(type->graph, type_key)) {
        napi_throw_error(env, NULL, "Attribute type is unknown");
        return NULL;
    }

    size_t name_len;
    NAPI_CALL(env, napi_get_value_string_utf8(env, argv[1], NULL, 0, &name_len));
    char name[name_len + 1];
    NAPI_CALL(env, napi_get_value_string_utf8(env, argv[1], name, name_len + 1, &name_len));
    int32_t key = hash(name);

    // declare attribute name as meta if not already declared
    if (!ggraph__is_meta(type->graph, key)) {
        ggraph__declare_meta(type->graph, key, name);
    }

    gtype__declare_attribute(type, key, type_key);

    return NULL;
}

napi_value type__declare_function(napi_env env, napi_callback_info info) {
    size_t argc = 3;
    napi_value argv[3];

    NAPI_CALL(env, napi_get_cb_info(env, info, &argc, argv, NULL, NULL));

    gtype_t *type;
    NAPI_CALL(env, napi_unwrap(env, argv[0], (void **) &type));

    if (type == NULL) {
        napi_throw_error(env, NULL, "Unwrapped type is null (type__declare_function)");
        return NULL;
    }

    size_t name_len;
    NAPI_CALL(env, napi_get_value_string_utf8(env, argv[1], NULL, 0, &name_len));
    char name[name_len + 1];
    NAPI_CALL(env, napi_get_value_string_utf8(env, argv[1], name, name_len + 1, &name_len));
    int32_t key = hash(name);

    // declare attribute name as meta if not already declared
    if (!ggraph__is_meta(type->graph, key)) {
        ggraph__declare_meta(type->graph, key, name);
    }

    gfunction_t *func;
    NAPI_CALL(env, napi_unwrap(env, argv[2], (void **) &func));

    if (func == NULL) {
        napi_throw_error(env, NULL, "Unwrapped func is null (type__declare_function)");
        return NULL;
    }

    func->is_static = false;
    gtype__declare_function(type, key, func);

    return NULL;
}

napi_value type__declare_static_attribute(napi_env env, napi_callback_info info) {
    size_t argc = 3;
    napi_value argv[3];

    NAPI_CALL(env, napi_get_cb_info(env, info, &argc, argv, NULL, NULL));

    gtype_t *type;
    NAPI_CALL(env, napi_unwrap(env, argv[0], (void **) &type));

    if (type == NULL) {
        napi_throw_error(env, NULL, "Unwrapped type is null (type__declare_static_attribute)");
        return NULL;
    }

    size_t name_len;
    NAPI_CALL(env, napi_get_value_string_utf8(env, argv[1], NULL, 0, &name_len));
    char name[name_len + 1];
    NAPI_CALL(env, napi_get_value_string_utf8(env, argv[1], name, name_len + 1, &name_len));
    int32_t key = hash(name);

    // declare attribute name as meta if not already declared
    if (!ggraph__is_meta(type->graph, key)) {
        ggraph__declare_meta(type->graph, key, name);
    }

    gslot_t slot;
    gptype_t slot_type;
    from_js_object(env, argv[2], type->graph, &slot, &slot_type);
    gtype__declare_static(type, key, slot, slot_type);

    if (slot_type == gc_sbi_slot_type_object) {
        gobject__un_mark(slot.object);
    }

    return NULL;
}

napi_value type__declare_static_function(napi_env env, napi_callback_info info) {
    size_t argc = 3;
    napi_value argv[3];

    NAPI_CALL(env, napi_get_cb_info(env, info, &argc, argv, NULL, NULL));

    gtype_t *type;
    NAPI_CALL(env, napi_unwrap(env, argv[0], (void **) &type));

    if (type == NULL) {
        napi_throw_error(env, NULL, "Unwrapped type is null (type__declare_static_function)");
        return NULL;
    }

    size_t name_len;
    NAPI_CALL(env, napi_get_value_string_utf8(env, argv[1], NULL, 0, &name_len));
    char name[name_len + 1];
    NAPI_CALL(env, napi_get_value_string_utf8(env, argv[1], name, name_len + 1, &name_len));
    int32_t key = hash(name);

    // declare attribute name as meta if not already declared
    if (!ggraph__is_meta(type->graph, key)) {
        ggraph__declare_meta(type->graph, key, name);
    }

    gfunction_t *func;
    NAPI_CALL(env, napi_unwrap(env, argv[2], (void **) &func));

    if (func == NULL) {
        napi_throw_error(env, NULL, "Unwrapped func is null (type__declare_static_function)");
        return NULL;
    }

    func->is_static = true;
    gtype__declare_function(type, key, func);

    return NULL;
}

napi_value type__graph(napi_env env, napi_callback_info info) {
    size_t argc = 1;
    napi_value argv[1];

    NAPI_CALL(env, napi_get_cb_info(env, info, &argc, argv, NULL, NULL));

    gtype_t *type;
    NAPI_CALL(env, napi_unwrap(env, argv[0], (void **) &type));

    if (type == NULL) {
        napi_throw_error(env, NULL, "Unwrapped type is null (type__graph)");
        return NULL;
    }

    napi_value js_graph;
    NAPI_CALL(env, napi_get_reference_value(env, (napi_ref) ((ggraph_t*)type->graph)->ext.companion, &js_graph));

    return js_graph;
}