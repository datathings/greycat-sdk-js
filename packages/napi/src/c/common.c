#define NAPI_EXPERIMENTAL

#include <node_api.h>
#include <string.h>

#include <greycat/common/gcommon.h>
#include <greycat/common/gkeys.h>
#include <greycat/function/gfunction.h>
#include <greycat/function/gfunction_ops.h>
#include <greycat/ggraph.h>
#include <greycat/log.h>
#include <greycat/runtime/array.h>
#include <greycat/runtime/gstring.h>

#include "common.h"

uint32_t refCount = 0;
napi_ref gstdout_ref = NULL;
napi_ref gconsole_ref = NULL;
napi_ref gresolver_ref = NULL;
napi_ref gobject_constructor_ref = NULL;
napi_ref garray_constructor_ref = NULL;
napi_ref gfunction_constructor_ref = NULL;
napi_ref gcontext_constructor_ref = NULL;
napi_ref gerror_constructor_ref = NULL;
napi_ref gtype_constructor_ref = NULL;
napi_ref gmap_constructor_ref = NULL;
napi_ref gstring_constructor_ref = NULL;
napi_ref glogger_ref = NULL;

static const int64_t JS_MAX_INT = 9007199254740991;

int32_t g_key_from_napi_string(napi_env env, ggraph_t *graph, napi_value str_value);
static void populate_gobject(napi_env env, napi_value obj, gobject_t *gobj);
static void populate_garray(napi_env env, napi_value arr, gc_rt_array_t *garr);
static void populate_gmap(napi_env env, napi_value map, gmap_t *gmap);

bool validate_constructors_refs(napi_env env) {
    if (gobject_constructor_ref == NULL) {
        napi_throw_error(env, NULL, "A constructor for GObject must be registered.");
        return false;
    }
    if (garray_constructor_ref == NULL) {
        napi_throw_error(env, NULL, "A constructor for GArray must be registered.");
        return false;
    }
    if (gfunction_constructor_ref == NULL) {
        napi_throw_error(env, NULL, "A constructor for GFunction must be registered.");
        return false;
    }
    if (gcontext_constructor_ref == NULL) {
        napi_throw_error(env, NULL, "A constructor for GContext must be registered.");
        return false;
    }
    if (gerror_constructor_ref == NULL) {
        napi_throw_error(env, NULL, "A constructor for GreycatError must be registered.");
        return false;
    }
    if (gtype_constructor_ref == NULL) {
        napi_throw_error(env, NULL, "A constructor for GType must be registered.");
        return false;
    }
    if (gmap_constructor_ref == NULL) {
        napi_throw_error(env, NULL, "A constructor for GMap must be registered.");
        return false;
    }
    if (glogger_ref == NULL) {
        napi_throw_error(env, NULL, "An ILogger must be registered.");
        return false;
    }
    if (gconsole_ref == NULL) {
        napi_throw_error(env, NULL, "An IConsole must be registered.");
        return false;
    }
    return true;
}

bool is_instanceof_gtype(napi_env env, napi_value instance) {
    bool result = false;
    napi_value garray_ctr, gobject_ctr, gmap_ctr, gfunction_ctr;
    NAPI_CALL_BASE(env, napi_get_reference_value(env, garray_constructor_ref, &garray_ctr), false);
    NAPI_CALL_BASE(env, napi_instanceof(env, instance, garray_ctr, &result), false);
    if (result) {
        return true;
    }
    NAPI_CALL_BASE(env, napi_get_reference_value(env, gobject_constructor_ref, &gobject_ctr), false);
    NAPI_CALL_BASE(env, napi_instanceof(env, instance, gobject_ctr, &result), false);
    if (result) {
        return true;
    }
    NAPI_CALL_BASE(env, napi_get_reference_value(env, gmap_constructor_ref, &gmap_ctr), false);
    NAPI_CALL_BASE(env, napi_instanceof(env, instance, gmap_ctr, &result), false);
    if (result) {
        return true;
    }
    NAPI_CALL_BASE(env, napi_get_reference_value(env, gfunction_constructor_ref, &gfunction_ctr), false);
    NAPI_CALL_BASE(env, napi_instanceof(env, instance, gfunction_ctr, &result), false);

    return result;
}

napi_value to_js_object(napi_env env, ggraph_t *graph, gc_rt_slot_t data, gptype_t data_type) {
    napi_value value = NULL;

    switch (data_type) {
    case gc_sbi_slot_type_null:
        return NULL;

    case gc_sbi_slot_type_i32: {
        NAPI_CALL(env, napi_create_int32(env, data.i32, &value));
        break;
    }

    case gc_sbi_slot_type_u32: {
        NAPI_CALL(env, napi_create_uint32(env, data.u32, &value));
        break;
    }

    case gc_sbi_slot_type_f64: {
        NAPI_CALL(env, napi_create_double(env, data.f64, &value));
        break;
    }

    case gc_sbi_slot_type_f32: {
        // consider floats as doubles
        NAPI_CALL(env, napi_create_double(env, (double) data.f32, &value));
        break;
    }

    case gc_sbi_slot_type_u64: {
        uint64_t val = data.u64;
        if (val > ((uint64_t) JS_MAX_INT)) {
            NAPI_CALL(env, napi_create_bigint_uint64(env, val, &value));
        } else {
            NAPI_CALL(env, napi_create_int64(env, val, &value));
        }
        break;
    }

    case gc_sbi_slot_type_i64: {
        int64_t val = data.i64;
        if (val < -JS_MAX_INT || val > JS_MAX_INT) {
            NAPI_CALL(env, napi_create_bigint_int64(env, val, &value));
        } else {
            NAPI_CALL(env, napi_create_int64(env, val, &value));
        }
        break;
    }

    case gc_sbi_slot_type_bool: {
        NAPI_CALL(env, napi_get_boolean(env, data.b, &value));
        break;
    }

        // case gc_sbi_slot_type_ref: {
        //     napi_value gref_constructor;
        //     NAPI_CALL(env, napi_get_reference_value(env, gref_constructor_ref, &gref_constructor));
        //     // create an instance of GRef
        //     NAPI_CALL(env, napi_new_instance(env, gref_constructor, 0, NULL, &value));
        //     // wrap gref_t instance into GRef instance
        //     NAPI_CALL(env, napi_wrap(env, value, data.refValue, NULL, NULL, NULL));
        //     break;
        // }

    case gc_sbi_slot_type_object: {
        switch (data.object->type->key) {
        case g_String: {
            gstring_t *str = (gstring_t *) data.object;
            NAPI_CALL(env, napi_create_string_utf8(env, str->buffer, str->size, &value));
            break;
        }

        case g_Function: {
            napi_value gfunction_constructor;
            NAPI_CALL(env, napi_get_reference_value(env, gfunction_constructor_ref, &gfunction_constructor));
            // create an instance of GFunction
            NAPI_CALL(env, napi_new_instance(env, gfunction_constructor, 0, NULL, &value));
            // wrap gfunction_t* instance into GFunction instance
            NAPI_CALL(env, napi_wrap(env, value, data.object, NULL, NULL, NULL));
            break;
        }

        case g_Array: {
            napi_value garray_constructor;
            NAPI_CALL(env, napi_get_reference_value(env, garray_constructor_ref, &garray_constructor));
            // create an instance of GArray
            NAPI_CALL(env, napi_new_instance(env, garray_constructor, 0, NULL, &value));
            // wrap gobject_t* instance into GArray instance
            NAPI_CALL(env, napi_wrap(env, value, data.object, NULL, NULL, NULL));
            break;
        }

        case g_Map: {
            napi_value gmap_constructor;
            NAPI_CALL(env, napi_get_reference_value(env, gmap_constructor_ref, &gmap_constructor));
            // create an instance of GMap
            NAPI_CALL(env, napi_new_instance(env, gmap_constructor, 0, NULL, &value));
            // wrap gmap_t instance into GMap instance
            NAPI_CALL(env, napi_wrap(env, value, data.object, NULL, NULL, NULL));
            break;
        }

        default: {
            // retrieve GObject constructor from registered ref
            napi_value gobj_constructor;
            NAPI_CALL(env, napi_get_reference_value(env, gobject_constructor_ref, &gobj_constructor));

            // create an instance of GObject that will be used by the proxy as target
            NAPI_CALL(env, napi_new_instance(env, gobj_constructor, 0, NULL, &value));

            // NAPI_CALL(env, napi_create_reference(env, value, 1, data->objectValue->type->extra));

            // wrap gobject_t* instance into js_garray instance
            NAPI_CALL(env, napi_wrap(env, value, data.object, NULL, NULL, NULL));
            break;
        }
        }
        break;
    }

    case gc_sbi_slot_type_time:
    case gc_sbi_slot_type_geo:
    case gc_sbi_slot_type_ref:
    default:
        // TODO
        gerror("'gc_sbi_slot_type_date', 'gc_sbi_slot_type_geocode' and 'gc_sbi_slot_type_ref' are not handled yet\n");
        break;
    }

    return value;
}

void from_js_object(napi_env env, napi_value value, ggraph_t *graph, gc_rt_slot_t *data, gptype_t *data_type) {
    napi_valuetype type;
    NAPI_CALL_RETURN_VOID(env, napi_typeof(env, value, &type));

    switch (type) {
    case napi_null: {
        *data_type = gc_sbi_slot_type_null;
        data->object = NULL;
        return;
    }

    case napi_bigint: {
        *data_type = gc_sbi_slot_type_i64;
        NAPI_CALL_RETURN_VOID(env, napi_get_value_bigint_int64(env, value, &data->i64, NULL));
        return;
    }

    case napi_number: {
        double_t number = 0;
        *data_type = gc_sbi_slot_type_f64;
        NAPI_CALL_RETURN_VOID(env, napi_get_value_double(env, value, &number));
        if (isnan(number)) {
            NAPI_CALL_RETURN_VOID(env, napi_throw_error(env, NULL, "Greycat cannot use NaN numbers"));
            return;
        }

        // check if double by casting double to intmax_t
        if ((double_t)((intmax_t) number) != number) {
            data->f64 = number;
            return;
        }

        // int32
        if (number >= INT_MIN && number <= INT_MAX) {
            *data_type = gc_sbi_slot_type_i32;
            data->i32 = (int32_t) number;
            return;
        }

        // more than i32
        *data_type = gc_sbi_slot_type_i64;
        NAPI_CALL_RETURN_VOID(env, napi_get_value_int64(env, value, &data->i64));
        return;
    }

    case napi_string: {
        *data_type = gc_sbi_slot_type_object;
        size_t str_len;
        NAPI_CALL_RETURN_VOID(env, napi_get_value_string_utf8(env, value, NULL, 0, &str_len));
        gstring_t *g_str = ggraph__create_string(graph);
        gstring__prepare(g_str, str_len + 1);
        NAPI_CALL_RETURN_VOID(env, napi_get_value_string_utf8(env, value, g_str->buffer, str_len + 1, &str_len));
        g_str->size += str_len;
        gstring__close(g_str);
        data->object = (gobject_t *) g_str;
        return;
    }

    case napi_boolean: {
        *data_type = gc_sbi_slot_type_bool;
        NAPI_CALL_RETURN_VOID(env, napi_get_value_bool(env, value, &data->b));
        return;
    }

    case napi_function: {
        *data_type = gc_sbi_slot_type_object;
        gfunction_t *fn;
        greycat__create_function(env, graph, &fn);
        napi_ref body_ref;
        NAPI_CALL_RETURN_VOID(env, napi_create_reference(env, value, 1, &body_ref));
        gfunction__add_external(fn, body_ref, IS_EXTERNAL_FUNC, (gfunction_op_src_t){.line = 0, .offset = 0});
        data->object = (gobject_t *) fn;
        return;
    }

    case napi_object: {
        *data_type = gc_sbi_slot_type_object;

        // is instance of GObject, GArray, GMap, GFunction
        if (is_instanceof_gtype(env, value)) {
            NAPI_CALL_RETURN_VOID(env, napi_unwrap(env, value, (void **) &data->object));
            // calling code of 'from_js_object' is expected to un_mark objects
            // in the case of a GArray, GObject, GMap, GFunction, it means that JS is using the object
            // so we have to increase marks in order to prevent the next unmark to release it
            gobject__mark(data->object);
            break;
        }

        // is instance of Array
        bool is_array;
        NAPI_CALL_RETURN_VOID(env, napi_is_array(env, value, &is_array));
        if (is_array) {
            gc_rt_array_t *arr = ggraph__create_array(graph);
            populate_garray(env, value, arr);
            data->object = (gobject_t *) arr;
            return;
        }

        // is instance of Map
        napi_value global;
        napi_value map_ctr;
        bool is_map;
        NAPI_CALL_RETURN_VOID(env, napi_get_global(env, &global));
        NAPI_CALL_RETURN_VOID(env, napi_get_named_property(env, global, "Map", &map_ctr));
        NAPI_CALL_RETURN_VOID(env, napi_instanceof(env, value, map_ctr, &is_map));
        if (is_map) {
            gmap_t *map = ggraph__create_map(graph);
            populate_gmap(env, value, map);
            data->object = (gobject_t *) map;
            return;
        }

        // is instance of String
        napi_value string_ctr;
        bool is_string;
        NAPI_CALL_RETURN_VOID(env, napi_get_named_property(env, global, "String", &string_ctr));
        NAPI_CALL_RETURN_VOID(env, napi_instanceof(env, value, string_ctr, &is_string));
        if (is_string) {
            *data_type = gc_sbi_slot_type_object;
            size_t str_len;
            NAPI_CALL_RETURN_VOID(env, napi_get_value_string_utf8(env, value, NULL, 0, &str_len));
            gstring_t *g_str = ggraph__create_string(graph);
            gstring__prepare(g_str, str_len + 1);
            NAPI_CALL_RETURN_VOID(env, napi_get_value_string_utf8(env, value, g_str->buffer, str_len + 1, &str_len));
            g_str->size += str_len;
            gstring__close(g_str);
            data->object = (gobject_t *) g_str;
            return;
        }

        // falls back to instance of Object
        // TODO update this to handle user-defined types
        gobject_t *obj = ggraph__create_open_object(graph);
        populate_gobject(env, value, obj);
        data->object = obj;
        return;
    }

    default: {
        *data_type = gc_sbi_slot_type_null;
        data->object = NULL;
        break;
    }
    }
}

int32_t g_key_from_napi_string(napi_env env, ggraph_t *graph, napi_value str_value) {
    napi_status status;
    size_t str_len;
    status = napi_get_value_string_utf8(env, str_value, NULL, 0, &str_len);
    if (status != napi_ok) {
        napi_throw_error(env, NULL, "Unable to read js string length");
        return 0;
    }
    gstring_t *g_str = ggraph__create_string(graph);
    gstring__prepare(g_str, str_len + 1);
    status = napi_get_value_string_utf8(env, str_value, g_str->buffer, str_len + 1, &str_len);
    if (status != napi_ok) {
        napi_throw_error(env, NULL, "Unable to read js string content");
        return 0;
    }
    g_str->size += str_len;
    gstring__close(g_str);
    int32_t key = hash(g_str->buffer);
    if (graph->useMeta && !ggraph__is_meta(graph, key)) {
        ggraph__declare_meta(graph, key, g_str->buffer);
    }
    gobject__un_mark((gobject_t *) g_str);
    return key;
}

napi_value greycat__create_context(napi_env env, ggraph_t *graph) {
    gctx_t *ctx = ggraph__create_context(graph);

    napi_value gcontext_constructor;
    napi_value js_ctx;
    napi_ref js_ctx_ref;
    NAPI_CALL(env, napi_get_reference_value(env, gcontext_constructor_ref, &gcontext_constructor));
    NAPI_CALL(env, napi_new_instance(env, gcontext_constructor, 0, NULL, &js_ctx));
    NAPI_CALL(env, napi_wrap(env, js_ctx, ctx, NULL, NULL, NULL));
    NAPI_CALL(env, napi_create_reference(env, js_ctx, 1, &js_ctx_ref));
    ctx->ext.id = IS_WRAPPED;
    ctx->ext.env = env;
    ctx->ext.companion = js_ctx_ref;
    ctx->error_handler = context_error_handler;

    return js_ctx;
}

napi_value greycat__create_function(napi_env env, ggraph_t *graph, gfunction_t **result) {
    gfunction_t *g_fn = ggraph__create_function(graph);

    napi_value gfunction_constructor;
    NAPI_CALL(env, napi_get_reference_value(env, gfunction_constructor_ref, &gfunction_constructor));
    napi_value js_func;
    NAPI_CALL(env, napi_new_instance(env, gfunction_constructor, 0, NULL, &js_func));
    NAPI_CALL(env, napi_wrap(env, js_func, g_fn, NULL, NULL, NULL));

    if (result != NULL) {
        *result = g_fn;
    }

    return js_func;
}

static void populate_garray(napi_env env, napi_value arr, gc_rt_array_t *garr) {
    ggraph_t *graph = (ggraph_t *) garr->header.type->graph;

    uint32_t arr_length;
    NAPI_CALL_RETURN_VOID(env, napi_get_array_length(env, arr, &arr_length));

    gc_rt_array__resize(garr, arr_length);

    gc_rt_slot_t value;
    gptype_t value_type;
    napi_value elem;
    for (uint32_t i = 0; i < arr_length; i++) {
        NAPI_CALL_RETURN_VOID(env, napi_get_element(env, arr, i, &elem));
        from_js_object(env, elem, graph, &value, &value_type);
        gc_rt_array__set_slot(garr, i, value, value_type);
        if (value_type == gc_sbi_slot_type_object) {
            gobject__un_mark(value.object);
        }
    }
}

static void declare_object_key(napi_env env, napi_value key, gobject_t *obj, int32_t *hashed_key) {
    size_t key_len;
    NAPI_CALL_RETURN_VOID(env, napi_get_value_string_utf8(env, key, NULL, 0, &key_len));
    char c_key[key_len + 1];
    NAPI_CALL_RETURN_VOID(env, napi_get_value_string_utf8(env, key, c_key, key_len + 1, &key_len));
    *hashed_key = hash(c_key);

    ggraph_t *graph = (ggraph_t *) obj->type->graph;
    if (!ggraph__is_meta(graph, *hashed_key)) {
        ggraph__declare_meta(graph, *hashed_key, c_key);
    }
}

static void populate_gobject(napi_env env, napi_value obj, gobject_t *gobj) {
    ggraph_t *graph = (ggraph_t *) gobj->type->graph;

    napi_value obj_keys;
    uint32_t obj_keys_length;
    NAPI_CALL_RETURN_VOID(env, napi_get_property_names(env, obj, &obj_keys));
    NAPI_CALL_RETURN_VOID(env, napi_get_array_length(env, obj_keys, &obj_keys_length));

    napi_value js_key, js_value;
    int32_t hashed_key = 0;
    gc_rt_slot_t value;
    gptype_t value_type;
    for (uint32_t i = 0; i < obj_keys_length; i++) {
        NAPI_CALL_RETURN_VOID(env, napi_get_element(env, obj_keys, i, &js_key));
        NAPI_CALL_RETURN_VOID(env, napi_get_property(env, obj, js_key, &js_value));
        declare_object_key(env, js_key, gobj, &hashed_key);
        from_js_object(env, js_value, graph, &value, &value_type);
        gobject__set_slot(gobj, hashed_key, value, value_type);
        if (value_type == gc_sbi_slot_type_object) {
            gobject__un_mark(value.object);
        }
    }
}

static napi_value js_map_iterator(napi_env env, napi_callback_info info) {
    size_t argc[2];
    napi_value argv[2];
    gmap_t *gmap;
    NAPI_CALL(env, napi_get_cb_info(env, info, argc, argv, NULL, (void **) &gmap));

    ggraph_t *graph = (ggraph_t *) gmap->header.type->graph;

    gc_rt_slot_t key;
    gptype_t key_type;
    from_js_object(env, argv[0], graph, &key, &key_type);

    gc_rt_slot_t value;
    gptype_t value_type;
    from_js_object(env, argv[1], graph, &value, &value_type);

    gmap__set(gmap, key, key_type, value, value_type);
    if (value_type == gc_sbi_slot_type_object) {
        gobject__un_mark(value.object);
    }

    return NULL;
}

static void populate_gmap(napi_env env, napi_value map, gmap_t *gmap) {
    napi_value map_size_fn, map_foreach_fn;
    NAPI_CALL_RETURN_VOID(env, napi_get_named_property(env, map, "size", &map_size_fn));
    NAPI_CALL_RETURN_VOID(env, napi_get_named_property(env, map, "forEach", &map_foreach_fn));
    napi_value map_size;
    NAPI_CALL_RETURN_VOID(env, napi_call_function(env, map, map_size_fn, 0, NULL, &map_size));
    uint32_t c_map_size;
    NAPI_CALL_RETURN_VOID(env, napi_get_value_uint32(env, map_size, &c_map_size));

    napi_value map_iterator;
    NAPI_CALL_RETURN_VOID(env, napi_create_function(env, NULL, 0, js_map_iterator, gmap, &map_iterator));
    NAPI_CALL_RETURN_VOID(env, napi_call_function(env, map, map_foreach_fn, 1, &map_iterator, NULL));
}
