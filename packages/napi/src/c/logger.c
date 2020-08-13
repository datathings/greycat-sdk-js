#include <stdarg.h>
#include <stdio.h>

#include <node_api.h>

#include <greycat/glog.h>

#include "common.h"

extern struct {
    void *udata;
    log_LockFn lock;
    FILE *fp;
    int level;
    int quiet;
    log_log_ext *ext;
} glog;

napi_env js_env = NULL;

void greycat_napi_logger(int level, const char *file, int line, const char *fmt, va_list args_) {
    if (glogger_ref == NULL) {
        log_log(level, file, line, fmt, args_);
        return;
    }

    va_list args;
    va_copy(args, args_);
    int len = vsnprintf(NULL, 0, fmt, args);
    va_end(args);

    char msg[len];
    memset(msg, 0, len);
    len = vsnprintf(msg, (size_t) len + 1, fmt, args_);

    napi_value js_logger;
    NAPI_CALL_RETURN_VOID(js_env, napi_get_reference_value(js_env, glogger_ref, &js_logger));

    napi_value argv;
    NAPI_CALL_RETURN_VOID(js_env, napi_create_string_utf8(js_env, msg, (size_t) len, &argv));

    napi_value fn = NULL;
    napi_value returnValue;
    switch (level) {
    case GC_INFO:
        NAPI_CALL_RETURN_VOID(js_env, napi_get_named_property(js_env, js_logger, "info", &fn));
        break;

    case GC_DEBUG:
        NAPI_CALL_RETURN_VOID(js_env, napi_get_named_property(js_env, js_logger, "debug", &fn));
        break;

    case GC_WARN:
        NAPI_CALL_RETURN_VOID(js_env, napi_get_named_property(js_env, js_logger, "warn", &fn));
        break;

    case GC_ERROR:
        NAPI_CALL_RETURN_VOID(js_env, napi_get_named_property(js_env, js_logger, "error", &fn));
        break;

    default:
        napi_throw_error(js_env, NULL, "ILogger can only use 'info', 'debug', 'warn' or 'error'");
        return;
    }
    if (fn != NULL) {
        NAPI_CALL_RETURN_VOID(js_env, napi_call_function(js_env, js_logger, fn, 1, &argv, &returnValue));
    } else {
        NAPI_CALL_RETURN_VOID(js_env, napi_throw_error(js_env, NULL, "Logger function is NULL"));
    }
}

napi_value register_glogger(napi_env env, napi_callback_info info) {
    js_env = env;
    size_t argc = 1;
    napi_value argv[1];
    NAPI_CALL(env, napi_get_cb_info(env, info, &argc, argv, NULL, NULL));

    if (argc != 1) {
        napi_throw_type_error(env, NULL, "Wrong number of arguments (expected 1)");
        return NULL;
    }

    napi_valuetype actualType;
    NAPI_CALL(env, napi_typeof(env, argv[0], &actualType));
    if (actualType != napi_object) {
        napi_throw_type_error(env, NULL, "Given argument type is not a 'object'");
        return NULL;
    }

    NAPI_CALL(env, napi_create_reference(env, argv[0], 1, &glogger_ref));
    glog.ext = greycat_napi_logger;

    return NULL;
}
