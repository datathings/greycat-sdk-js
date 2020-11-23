#include <stdarg.h>
#include <stdio.h>

#include <node_api.h>

#include <greycat/graph.h>

#include "common.h"

void greycat_ext_body(napi_ref ref, napi_env env, int64_t id, gctx_t *ctx) {
    napi_value js_function;
    NAPI_CALL_RETURN_VOID(env, napi_get_reference_value(env, ref, &js_function));
    napi_value js_ctx;
    NAPI_CALL_RETURN_VOID(env, napi_get_reference_value(env, ctx->ext.companion, &js_ctx));
    napi_value undefined;
    NAPI_CALL_RETURN_VOID(env, napi_get_undefined(env, &undefined));
    NAPI_CALL_RETURN_VOID(env, napi_call_function(env, undefined, js_function, 1, &js_ctx, NULL));
    return;
}

void greycat_ext_cleaner(napi_ref ref, napi_env env, uint64_t id) {
    if (ref != NULL) {
        // release ref
        NAPI_CALL_RETURN_VOID(env, napi_delete_reference(env, ref));
    }
    return;
}

void greycat_ext_console_print(napi_env env, const char *format, ...) {
    va_list args;
    int len;
    char *msg;
    /* Compute length of original message */
    va_start(args, format);
    len = vsnprintf(NULL, 0, format, args);
    va_end(args);
    /* Allocate space for original message */
    uint32_t msg_len = (uint32_t) len + 1;
    msg = (char *) g_malloc((size_t) msg_len);
    /* Write original message to string */
    va_start(args, format);
    vsnprintf(msg, (size_t) msg_len, format, args);
    va_end(args);

    napi_value console;
    NAPI_CALL_RETURN_VOID(env, napi_get_reference_value(env, gconsole_ref, &console));
    napi_value print;
    NAPI_CALL_RETURN_VOID(env, napi_get_named_property(env, console, "print", &print));
    napi_value js_msg;
    NAPI_CALL_RETURN_VOID(env, napi_create_string_utf8(env, msg, (size_t) len, &js_msg));
    NAPI_CALL_RETURN_VOID(env, napi_call_function(env, console, print, 1, &js_msg, NULL));
    g_free(msg);
}

void greycat_ext_console_println(napi_env env, const char *format, ...) {
    va_list args;
    int len;
    char *msg;
    /* Compute length of original message */
    va_start(args, format);
    len = vsnprintf(NULL, 0, format, args);
    va_end(args);
    /* Allocate space for original message */
    uint32_t msg_len = (uint32_t) len + 1;
    msg = (char *) g_malloc((size_t) msg_len);
    /* Write original message to string */
    va_start(args, format);
    vsnprintf(msg, (size_t) msg_len, format, args);
    va_end(args);

    napi_value console;
    NAPI_CALL_RETURN_VOID(env, napi_get_reference_value(env, gconsole_ref, &console));
    napi_value println;
    NAPI_CALL_RETURN_VOID(env, napi_get_named_property(env, console, "println", &println));
    napi_value js_msg;
    NAPI_CALL_RETURN_VOID(env, napi_create_string_utf8(env, msg, (size_t) len, &js_msg));
    NAPI_CALL_RETURN_VOID(env, napi_call_function(env, console, println, 1, &js_msg, NULL));
    g_free(msg);
}

napi_value graph__wrap(napi_env env, napi_callback_info info) {
    if (!validate_constructors_refs(env)) {
        return NULL;
    }
    size_t argc = 4;
    napi_value argv[4];

    NAPI_CALL(env, napi_get_cb_info(env, info, &argc, argv, NULL, NULL));

    int64_t cacheSize;
    NAPI_CALL(env, napi_get_value_int64(env, argv[1], &cacheSize));
    int64_t bufferSize;
    NAPI_CALL(env, napi_get_value_int64(env, argv[2], &bufferSize));

    napi_value undefined;
    NAPI_CALL(env, napi_get_undefined(env, &undefined));
    napi_valuetype store_path_type;
    NAPI_CALL(env, napi_typeof(env, argv[3], &store_path_type));

    gc_graph_t *ggraph;
    if (store_path_type == napi_string) {
        size_t store_path_len;
        NAPI_CALL(env, napi_get_value_string_utf8(env, argv[3], NULL, (size_t) NULL, &store_path_len));

        char store_path[store_path_len + 1];
        NAPI_CALL(env, napi_get_value_string_utf8(env, argv[3], store_path, store_path_len + 1, &store_path_len));

        ggraph = gc_graph__create((uint64_t) cacheSize, (uint64_t) bufferSize, true, store_path);
    } else {
        ggraph = gc_graph__create((uint64_t) cacheSize, (uint64_t) bufferSize, true, NULL);
    }

    napi_ref js_graph_ref;
    NAPI_CALL(env, napi_wrap(env, argv[0], ggraph, NULL, NULL, NULL));
    NAPI_CALL(env, napi_create_reference(env, argv[0], 1, &js_graph_ref));

    ggraph->ext.id = IS_WRAPPED;
    ggraph->ext.companion = js_graph_ref;
    ggraph->ext.env = env;
    ggraph->ext_cleaner = (ggraph_ext_cleaner_t *) greycat_ext_cleaner;
    ggraph->ext_body = (ggraph_ext_body_t *) greycat_ext_body;
    ggraph->ext_console.print = (ggraph_ext_console_fn_t *) greycat_ext_console_print;
    ggraph->ext_console.println = (ggraph_ext_console_fn_t *) greycat_ext_console_println;

    ggraph->ext_console.println(env, "Hello world %s\n", ", how are you?");

    return NULL;
}

napi_value graph__declare_meta(napi_env env, napi_callback_info info) {
    size_t argc = 2;
    napi_value argv[2];

    NAPI_CALL(env, napi_get_cb_info(env, info, &argc, argv, NULL, NULL));

    gc_graph_t *graph;
    NAPI_CALL(env, napi_unwrap(env, argv[0], (void **) &graph));
    size_t str_len;
    NAPI_CALL(env, napi_get_value_string_utf8(env, argv[1], NULL, 0, &str_len));
    char str[str_len + 1];
    NAPI_CALL(env, napi_get_value_string_utf8(env, argv[1], str, str_len + 1, &str_len));

    int32_t key = hash(str);
    gc_graph__declare_meta(graph, key, str);

    napi_value key_value;
    NAPI_CALL(env, napi_create_int32(env, key, &key_value));

    return key_value;
}

napi_value graph__is_meta(napi_env env, napi_callback_info info) {
    size_t argc = 2;
    napi_value argv[2];

    NAPI_CALL(env, napi_get_cb_info(env, info, &argc, argv, NULL, NULL));

    gc_graph_t *graph;
    NAPI_CALL(env, napi_unwrap(env, argv[0], (void **) &graph));

    if (graph == NULL) {
        NAPI_CALL(env, napi_throw_error(env, NULL, "Given graph is null (graph__is_meta)"));
        return NULL;
    }

    int32_t key;
    NAPI_CALL(env, napi_get_value_int32(env, argv[1], &key));

    napi_value isMeta;
    NAPI_CALL(env, napi_get_boolean(env, gc_graph__is_meta(graph, key), &isMeta));

    return isMeta;
}

napi_value graph__destroy(napi_env env, napi_callback_info info) {
    size_t argc = 1;
    napi_value argv[1];

    NAPI_CALL(env, napi_get_cb_info(env, info, &argc, argv, NULL, NULL));

    gc_graph_t *graph;
    NAPI_CALL(env, napi_unwrap(env, argv[0], (void **) &graph));

    if (graph == NULL) {
        napi_throw_error(env, NULL, "Given graph is null (graph__destroy)");
        return NULL;
    }

    gc_graph__destroy(graph);

    return NULL;
}

void context_error_handler(gctx_t *ctx, gc_rt_error_t *err);

napi_value graph__create_context(napi_env env, napi_callback_info info) {
    size_t argc = 1;
    napi_value argv[1];

    NAPI_CALL(env, napi_get_cb_info(env, info, &argc, argv, NULL, NULL));

    gc_graph_t *graph;
    NAPI_CALL(env, napi_unwrap(env, argv[0], (void **) &graph));

    if (graph == NULL) {
        NAPI_CALL(env, napi_throw_error(env, NULL, "Unwrapped graph is null (graph__create_context)"));
        return NULL;
    }

    return greycat__create_context(env, graph);
}

napi_value graph__create_function(napi_env env, napi_callback_info info) {
    size_t argc = 1;
    napi_value argv[1];

    NAPI_CALL(env, napi_get_cb_info(env, info, &argc, argv, NULL, NULL));

    gc_graph_t *graph;
    NAPI_CALL(env, napi_unwrap(env, argv[0], (void **) &graph));

    if (graph == NULL) {
        NAPI_CALL(env, napi_throw_error(env, NULL, "Unwrapped graph is null (graph__create_function)"));
        return NULL;
    }

    return greycat__create_function(env, graph, NULL);
}
