#include <stdio.h>

#include <node_api.h>

#include <greycat/function/gfunction.h>
#include <greycat/function/gfunction_ops.h>
#include <greycat/ggraph.h>
#include <greycat/language/gcl_parser.h>
#include <greycat/runtime/struct/garray.h>

#include "common.h"

static gstring_t *gcl_napi_resolver(ggraph_t *graph, gstring_t *target, gstring_t *current) {
    if (gresolver_ref == NULL) {
        return gcl_default_resolver(graph, target, current);
    }

    napi_env env = (napi_env) graph->ext.env;
    if (env != NULL) {
        napi_value resolver;
        NAPI_CALL(env, napi_get_reference_value(env, gresolver_ref, &resolver));
        size_t argc = 3;
        napi_value target_str;
        NAPI_CALL(env, napi_create_string_utf8(env, target->buffer, target->size, &target_str));
        napi_value current_str;
        NAPI_CALL(env, napi_create_string_utf8(env, current->buffer, current->size, &current_str));
        napi_value js_graph;
        NAPI_CALL(env, napi_get_reference_value(env, graph->ext.companion, &js_graph));
        napi_value argv[3] = {js_graph, target_str, current_str};
        napi_value content_str;
        napi_value global;
        NAPI_CALL(env, napi_get_global(env, &global));
        NAPI_CALL(env, napi_call_function(env, global, resolver, argc, argv, &content_str));

        napi_value null;
        NAPI_CALL(env, napi_get_null(env, &null));

        bool contentIsNull;
        NAPI_CALL(env, napi_strict_equals(env, content_str, null, &contentIsNull));

        if (contentIsNull) {
            return NULL;
        }

        size_t len;
        NAPI_CALL(env, napi_get_value_string_utf8(env, content_str, NULL, 0, &len));
        char buf[len + 1];
        NAPI_CALL(env, napi_get_value_string_utf8(env, content_str, buf, len, &len));
        gstring_t *content = ggraph__create_string(graph);
        gstring__add_raw_string_ln(content, buf, len);
        gstring__close(content);
        return content;
    }

    return NULL;
}

napi_value function__parse(napi_env env, napi_callback_info info) {
    size_t argc = 3;
    napi_value argv[3];

    NAPI_CALL(env, napi_get_cb_info(env, info, &argc, argv, NULL, NULL));

    size_t script_len;
    NAPI_CALL(env, napi_get_value_string_utf8(env, argv[1], NULL, (size_t) NULL, &script_len));

    char script[script_len + 1];
    NAPI_CALL(env, napi_get_value_string_utf8(env, argv[1], script, script_len + 1, &script_len));

    napi_valuetype argv_2_t;
    NAPI_CALL(env, napi_typeof(env, argv[2], &argv_2_t));

    char *uri = NULL;
    if (argv_2_t != napi_undefined) {
        size_t uri_len;
        NAPI_CALL(env, napi_get_value_string_utf8(env, argv[2], NULL, (size_t) NULL, &uri_len));

        uri = g_malloc((size_t) uri_len + 1);
        NAPI_CALL(env, napi_get_value_string_utf8(env, argv[2], uri, uri_len + 1, &uri_len));
    }

    gfunction_t *func;
    NAPI_CALL(env, napi_unwrap(env, argv[0], (void **) &func));

    if (func == NULL) {
        napi_throw_error(env, NULL, "Unwrapped function is null (function__parse)");
        return NULL;
    }

    bool parseRes = gcl_parse(script, uri, (ggraph_t *) func->header.type->graph, &func, gcl_napi_resolver, false);
    if (uri != NULL) {
        g_free(uri);
    }

    napi_value result;
    NAPI_CALL(env, napi_get_boolean(env, parseRes, &result));

    return result;
}

napi_value function__pipe(napi_env env, napi_callback_info info) {
    size_t argc = 2;
    napi_value argv[2];

    NAPI_CALL(env, napi_get_cb_info(env, info, &argc, argv, NULL, NULL));

    gfunction_t *prev;
    gfunction_t *next;

    NAPI_CALL(env, napi_unwrap(env, argv[0], (void **) &prev));
    if (prev == NULL) {
        napi_throw_error(env, NULL, "Unwrapped prev function is null (function__pipe)");
        return NULL;
    }

    NAPI_CALL(env, napi_unwrap(env, argv[1], (void **) &next));
    if (next == NULL) {
        napi_throw_error(env, NULL, "Unwrapped next function is null (function__pipe)");
        return NULL;
    }

    gfunction__add_call_function_direct(prev, next, (gfunction_op_src_t){.line = 0, .offset = 0});

    return NULL;
}

napi_value function__pipe_external(napi_env env, napi_callback_info info) {
    size_t argc = 2;
    napi_value argv[2];

    NAPI_CALL(env, napi_get_cb_info(env, info, &argc, argv, NULL, NULL));

    gfunction_t *func;
    NAPI_CALL(env, napi_unwrap(env, argv[0], (void **) &func));
    if (func == NULL) {
        napi_throw_error(env, NULL, "Unwrapped func function is null (function__pipe_external)");
        return NULL;
    }

    napi_ref body_ref;
    NAPI_CALL(env, napi_create_reference(env, argv[1], 1, &body_ref));

    gfunction__add_external(func, body_ref, IS_EXTERNAL_FUNC, (gfunction_op_src_t){.line = 0, .offset = 0});

    return NULL;
}

napi_value function__create_context(napi_env env, napi_callback_info info) {
    size_t argc = 1;
    napi_value argv[1];

    NAPI_CALL(env, napi_get_cb_info(env, info, &argc, argv, NULL, NULL));

    gfunction_t *function;
    NAPI_CALL(env, napi_unwrap(env, argv[0], (void **) &function));

    return greycat__create_context(env, (ggraph_t *) function->header.type->graph);
}

napi_value function__execute(napi_env env, napi_callback_info info) {
    size_t argc = 3;
    napi_value argv[3];

    NAPI_CALL(env, napi_get_cb_info(env, info, &argc, argv, NULL, NULL));

    gctx_t *ctx;
    NAPI_CALL(env, napi_unwrap(env, argv[0], (void **) &ctx));

    if (ctx == NULL) {
        napi_throw_error(env, NULL, "Unwrapped context is null (function__execute)");
        return NULL;
    }

    gfunction_t *func;
    NAPI_CALL(env, napi_unwrap(env, argv[1], (void **) &func));

    if (func == NULL) {
        napi_throw_error(env, NULL, "Unwrapped function is null (function__execute)");
        return NULL;
    }

    napi_ref callback_ref;
    NAPI_CALL(env, napi_create_reference(env, argv[2], 1, &callback_ref));

    gfunction_op_src_t src = (gfunction_op_src_t){.line = 0, .offset = 0};

    gfunction_t *wrapped_fn = ggraph__create_function((ggraph_t *) func->header.type->graph);
    gfunction__add_call_function_direct(wrapped_fn, func, src);
    gfunction__add_external(wrapped_fn, callback_ref, IS_EXTERNAL_FUNC, src);
    gfunction__execute(wrapped_fn, ctx);
    gobject__un_mark((gobject_t *) wrapped_fn);
    return NULL;
}

napi_value function__get_graph(napi_env env, napi_callback_info info) {
    size_t argc = 1;
    napi_value argv[1];

    NAPI_CALL(env, napi_get_cb_info(env, info, &argc, argv, NULL, NULL));

    gfunction_t *func;
    NAPI_CALL(env, napi_unwrap(env, argv[0], (void **) &func));

    if (func == NULL) {
        NAPI_CALL(env, napi_throw_error(env, NULL, "Unwrapped function is null (function__get_graph)"));
        return NULL;
    }

    napi_value js_graph;
    NAPI_CALL(env, napi_get_reference_value(env, ((ggraph_t*)func->header.type->graph)->ext.companion, &js_graph));
    return js_graph;
}

napi_value function__add_param(napi_env env, napi_callback_info info) {
    size_t argc = 4;
    napi_value argv[4];

    NAPI_CALL(env, napi_get_cb_info(env, info, &argc, argv, NULL, NULL));

    gfunction_t *func;
    NAPI_CALL(env, napi_unwrap(env, argv[0], (void **) &func));

    if (func == NULL) {
        NAPI_CALL(env, napi_throw_error(env, NULL, "Unwrapped function is null (function__add_param)"));
        return NULL;
    }

    int32_t p_name, p_type;
    NAPI_CALL(env, napi_get_value_int32(env, argv[1], &p_name));
    NAPI_CALL(env, napi_get_value_int32(env, argv[2], &p_type));
    bool is_optional = false;
    NAPI_CALL(env, napi_get_value_bool(env, argv[3], &is_optional));

    // TODO fix core: this should not be the client role, it should be done in gfunction__add_check_param
    if (is_optional) {
        func->optional_params++;
    }

    gfunction__add_check_param(func, p_name, p_type, (gfunction_op_src_t){.line = 0, .offset = 0}, is_optional);

    return NULL;
}

napi_value function__add_mparam(napi_env env, napi_callback_info info) {
    size_t argc = 4;
    napi_value argv[4];

    NAPI_CALL(env, napi_get_cb_info(env, info, &argc, argv, NULL, NULL));

    gfunction_t *func;
    NAPI_CALL(env, napi_unwrap(env, argv[0], (void **) &func));

    if (func == NULL) {
        NAPI_CALL(env, napi_throw_error(env, NULL, "Unwrapped function is null (function__add_param)"));
        return NULL;
    }

    int32_t p_name;
    NAPI_CALL(env, napi_get_value_int32(env, argv[1], &p_name));

    garray_t *p_types = ggraph__create_array((ggraph_t *) func->header.type->graph);
    uint32_t types_len;
    NAPI_CALL(env, napi_get_array_length(env, argv[2], &types_len));
    garray__resize(p_types, types_len);
    napi_value elem;
    for (uint32_t i = 0; i < types_len; i++) {
        NAPI_CALL(env, napi_get_element(env, argv[2], i, &elem));
        int32_t elem_type;
        NAPI_CALL(env, napi_get_value_int32(env, elem, &elem_type));
        garray__set_int(p_types, i, elem_type);
    }

    bool is_optional = false;
    NAPI_CALL(env, napi_get_value_bool(env, argv[3], &is_optional));

    // TODO fix core: this should not be the client role, it should be done in gfunction__add_check_param
    if (is_optional) {
        func->optional_params++;
    }

    gfunction__add_check_mparam(func, p_name, p_types, (gfunction_op_src_t){.line = 0, .offset = 0}, is_optional);

    gobject__un_mark((gobject_t *) p_types);

    return NULL;
}
