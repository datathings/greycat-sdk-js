#define NAPI_EXPERIMENTAL


#include <stdio.h>

#include <node_api.h>

#include "common.h"

#include <greycat/function/gctx.h>
#include <greycat/ggraph.h>
#include <greycat/runtime/gobject.h>

void context_error_handler(gctx_t *ctx) {
    napi_env env = (napi_env) ctx->ext.env;
    if (env != NULL) {
        ggraph_t *graph = (ggraph_t *) ctx->header.type->graph;

        size_t stack_len = 0;
        gctx__stackframes(ctx, NULL, &stack_len, 0);
        gstackframe_t frames[stack_len];
        gctx__stackframes(ctx, frames, &stack_len, stack_len);

        gstring_t *g_stack = ggraph__create_string(graph);
        gctx__stacktrace(frames, stack_len, g_stack);

        napi_value reason;
        NAPI_CALL_RETURN_VOID(env, napi_create_string_utf8(env, ctx->error->buffer, ctx->error->size, &reason));

        napi_value stack;
        NAPI_CALL_RETURN_VOID(env, napi_create_string_utf8(env, g_stack->buffer, g_stack->size, &stack));

        // release gstring_t stacktrace
        gobject__un_mark((gobject_t *) g_stack);

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
    gobject__un_mark((gobject_t *) ctx->error);
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
    gslot_t result = gctx__get(ctx, key, &result_type);

    return to_js_object(env, (ggraph_t *) ctx->header.type->graph, result, result_type);
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

    gslot_t slot;
    gptype_t type;
    from_js_object(env, argv[2], (ggraph_t *) ctx->header.type->graph, &slot, &type);

    gctx__declare_slot(ctx, key, slot, type);

    if (type == gc_sbi_slot_type_object) {
        gobject__un_mark(slot.object);
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

    gslot_t slot;
    gptype_t type;
    from_js_object(env, argv[1], (ggraph_t *) ctx->header.type->graph, &slot, &type);

    gctx__set_result(ctx, slot, type);

    if (type == gc_sbi_slot_type_object) {
        gobject__un_mark(slot.object);
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
    NAPI_CALL(env, napi_get_reference_value(env, ((ggraph_t*)ctx->header.type->graph)->ext.companion, &js_graph));

    return js_graph;
}
