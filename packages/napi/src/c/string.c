#include <node_api.h>

#include <greycat/rt/string.h>

#include "common.h"

napi_value string__close(napi_env env, napi_callback_info info) {
    size_t argc = 1;
    napi_value argv[1];

    NAPI_CALL(env, napi_get_cb_info(env, info, &argc, argv, NULL, NULL));

    gc_rt_string_t *str;
    NAPI_CALL(env, napi_unwrap(env, argv[0], (void **) &str));

    if (str == NULL) {
        napi_throw_error(env, NULL, "Unwrapped string is null (string__close)");
        return NULL;
    }

    gc_rt_string__close(str);

    return NULL;
}

napi_value string__reset(napi_env env, napi_callback_info info) {
    size_t argc = 1;
    napi_value argv[1];

    NAPI_CALL(env, napi_get_cb_info(env, info, &argc, argv, NULL, NULL));

    gc_rt_string_t *str;
    NAPI_CALL(env, napi_unwrap(env, argv[0], (void **) &str));

    if (str == NULL) {
        napi_throw_error(env, NULL, "Unwrapped string is null (string__reset)");
        return NULL;
    }

    gc_rt_string__reset(str);

    return NULL;
}

napi_value string__value(napi_env env, napi_callback_info info) {
    size_t argc = 1;
    napi_value argv[1];

    NAPI_CALL(env, napi_get_cb_info(env, info, &argc, argv, NULL, NULL));

    gc_rt_string_t *str;
    NAPI_CALL(env, napi_unwrap(env, argv[0], (void **) &str));

    if (str == NULL) {
        napi_throw_error(env, NULL, "Unwrapped string is null (string__value)");
        return NULL;
    }

    napi_value string;
    NAPI_CALL(env, napi_create_string_utf8(env, str->buffer, str->size, &string));

    return string;
}

napi_value string__prepare(napi_env env, napi_callback_info info) {
    size_t argc = 2;
    napi_value argv[2];

    NAPI_CALL(env, napi_get_cb_info(env, info, &argc, argv, NULL, NULL));

    gc_rt_string_t *str;
    NAPI_CALL(env, napi_unwrap(env, argv[0], (void **) &str));

    if (str == NULL) {
        napi_throw_error(env, NULL, "Unwrapped string is null (string__prepare)");
        return NULL;
    }

    uint32_t needed;
    NAPI_CALL(env, napi_get_value_uint32(env, argv[1], &needed));

    gc_rt_string__prepare(str, needed);

    return NULL;
}

napi_value string__size(napi_env env, napi_callback_info info) {
    size_t argc = 1;
    napi_value argv[1];

    NAPI_CALL(env, napi_get_cb_info(env, info, &argc, argv, NULL, NULL));

    gc_rt_string_t *str;
    NAPI_CALL(env, napi_unwrap(env, argv[0], (void **) &str));

    if (str == NULL) {
        napi_throw_error(env, NULL, "Unwrapped string is null (string__size)");
        return NULL;
    }

    napi_value size;
    NAPI_CALL(env, napi_create_uint32(env, str->size, &size));

    return size;
}
