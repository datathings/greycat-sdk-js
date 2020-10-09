#define NAPI_EXPERIMENTAL


#include <stdio.h>

#include <node_api.h>

#include "common.h"

#include <greycat/function/gctx.h>
#include <greycat/graph.h>
#include <greycat/rt/object.h>

void context_error_handler(gctx_t *ctx, gc_rt_error_t *err) {
    napi_env env = (napi_env) ctx->ext.env;
    if (env != NULL) {
        gc_graph_t *graph = (gc_graph_t *) ctx->header.type->graph;

        gc_rt_buffer_t *g_stack = (gc_rt_buffer_t *) gc_graph__create_object(graph, g_Buffer);
        gc_rt_error__stack_to_string(err, g_stack);
        gc_rt_buffer__close(g_stack);

        napi_value reason;
        NAPI_CALL_RETURN_VOID(env, napi_create_string_utf8(env, err->msg == NULL ? "" : err->msg->buffer, err->msg == NULL ? 0 : err->msg->size, &reason));

        napi_value stack;
        NAPI_CALL_RETURN_VOID(env, napi_create_string_utf8(env, g_stack->buffer, g_stack->size, &stack));

        // release gstring_t stacktrace
        gc_rt_object__un_mark((gc_rt_object_t *) g_stack);

        napi_value error_ctr;
        NAPI_CALL_RETURN_VOID(env, napi_get_reference_value(env, gerror_constructor_ref, &error_ctr));

        // create a JavaScript Error using the gstring_t stack message
        napi_value argv[2] = {reason, stack};
        napi_value error;
        NAPI_CALL_RETURN_VOID(env, napi_new_instance(env, error_ctr, 2, argv, &error));

        napi_value js_ctx;
        NAPI_CALL_RETURN_VOID(env, napi_get_reference_value(env, (napi_ref) ctx->ext.companion, &js_ctx));
        napi_value js_ctx_onerror;
        NAPI_CALL_RETURN_VOID(env, napi_get_named_property(env, js_ctx, "errorHandler", &js_ctx_onerror));
        NAPI_CALL_RETURN_VOID(env, napi_call_function(env, js_ctx, js_ctx_onerror, 1, &error, NULL));
    }
    // release gctx error
    gc_rt_object__un_mark((gc_rt_object_t *) ctx->error);
    ctx->error = NULL;
}

napi_value context__get_key(napi_env env, napi_callback_info info) {
    size_t argc = 2;
    napi_value argv[2];

    NAPI_CALL(env, napi_get_cb_info(env, info, &argc, argv, NULL, NULL));

    gctx_t *ctx;
    NAPI_CALL(env, napi_unwrap(env, argv[0], (void **) &ctx));

    if (ctx == NULL) {
        napi_throw_error(env, NULL, "Unwrapped context is null (context__get_key)");
        return NULL;
    }

    int32_t key;
    NAPI_CALL(env, napi_get_value_int32(env, argv[1], &key));

    gptype_t result_type;
    gc_rt_slot_t result = gctx__get(ctx, key, &result_type);

    return to_js_object(env, (gc_graph_t *) ctx->header.type->graph, result, result_type);
}

napi_value context__set_key(napi_env env, napi_callback_info info) {
    size_t argc = 3;
    napi_value argv[3];
    NAPI_CALL(env, napi_get_cb_info(env, info, &argc, argv, NULL, NULL));

    gctx_t *ctx;
    NAPI_CALL(env, napi_unwrap(env, argv[0], (void **) &ctx));

    if (ctx == NULL) {
        napi_throw_error(env, NULL, "Unwrapped context is null (context__set_key)");
        return NULL;
    }

    int32_t key;
    NAPI_CALL(env, napi_get_value_int32(env, argv[1], &key));

    gc_rt_slot_t slot;
    gptype_t type;
    from_js_object(env, argv[2], (gc_graph_t *) ctx->header.type->graph, &slot, &type);

    gctx__declare_slot(ctx, key, slot, type);

    if (type == gc_sbi_slot_type_object) {
        gc_rt_object__un_mark(slot.object);
    }

    return NULL;
}

napi_value context__set_result(napi_env env, napi_callback_info info) {
    size_t argc = 2;
    napi_value argv[2];
    NAPI_CALL(env, napi_get_cb_info(env, info, &argc, argv, NULL, NULL));

    gctx_t *ctx;
    NAPI_CALL(env, napi_unwrap(env, argv[0], (void **) &ctx));

    if (ctx == NULL) {
        napi_throw_error(env, NULL, "Unwrapped context is null (context__set_key)");
        return NULL;
    }

    gc_rt_slot_t slot;
    gptype_t type;
    from_js_object(env, argv[1], (gc_graph_t *) ctx->header.type->graph, &slot, &type);

    gctx__set_result(ctx, slot, type);

    if (type == gc_sbi_slot_type_object) {
        gc_rt_object__un_mark(slot.object);
    }

    return NULL;
}

napi_value context__get_graph(napi_env env, napi_callback_info info) {
    size_t argc = 1;
    napi_value argv[1];

    NAPI_CALL(env, napi_get_cb_info(env, info, &argc, argv, NULL, NULL));

    gctx_t *ctx;
    NAPI_CALL(env, napi_unwrap(env, argv[0], (void **) &ctx));

    if (ctx == NULL) {
        NAPI_CALL(env, napi_throw_error(env, NULL, "Unwrapped context is null (context__get_graph)"));
        return NULL;
    }

    napi_value js_graph;
    NAPI_CALL(env, napi_get_reference_value(env, ((gc_graph_t *) ctx->header.type->graph)->ext.companion, &js_graph));

    return js_graph;
}
