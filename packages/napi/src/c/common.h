#ifndef greycat_napi_common_h
#define greycat_napi_common_h

#include <stdio.h>
#include <node_api.h>

#include <greycat/ggraph.h>
#include <greycat/function/gfunction.h>
#include <greycat/function/gctx.h>
#include <greycat/ggraph.h>

// Empty value so that macros here are able to return NULL or void
#define NAPI_RETVAL_NOTHING  // Intentionally blank #define
#define IS_WRAPPED 1
#define IS_EXTERNAL_FUNC 2

#define GET_AND_THROW_LAST_ERROR(env)                                    \
  do {                                                                   \
    const napi_extended_error_info *error_info;                          \
    napi_get_last_error_info((env), &error_info);                        \
    bool is_pending;                                                     \
    napi_is_exception_pending((env), &is_pending);                       \
    /* If an exception is already pending, don't rethrow it */           \
    if (!is_pending) {                                                   \
      const char* error_message = error_info->error_message != NULL ?    \
        error_info->error_message :                                      \
        "empty error message";                                           \
      napi_throw_error((env), NULL, error_message);                      \
    }                                                                    \
  } while (0)

#define NAPI_ASSERT_BASE(env, assertion, message, ret_val)               \
  do {                                                                   \
    if (!(assertion)) {                                                  \
      napi_throw_error(                                                  \
          (env),                                                         \
        NULL,                                                            \
          "assertion (" #assertion ") failed: " message);                \
      return ret_val;                                                    \
    }                                                                    \
  } while (0)

// Returns NULL on failed assertion.
// This is meant to be used inside napi_callback methods.
#define NAPI_ASSERT(env, assertion, message)                             \
  NAPI_ASSERT_BASE(env, assertion, message, NULL)

// Returns empty on failed assertion.
// This is meant to be used inside functions with void return type.
#define NAPI_ASSERT_RETURN_VOID(env, assertion, message)                 \
  NAPI_ASSERT_BASE(env, assertion, message, NAPI_RETVAL_NOTHING)

#define NAPI_CALL_BASE(env, the_call, ret_val)                           \
  do {                                                                   \
    if ((the_call) != napi_ok) {                                         \
      GET_AND_THROW_LAST_ERROR((env));                                   \
      return ret_val;                                                    \
    }                                                                    \
  } while (0)

// Returns NULL if the_call doesn't return napi_ok.
#define NAPI_CALL(env, the_call)                                         \
  NAPI_CALL_BASE(env, the_call, NULL)

// Returns empty if the_call doesn't return napi_ok.
#define NAPI_CALL_RETURN_VOID(env, the_call)                             \
  NAPI_CALL_BASE(env, the_call, NAPI_RETVAL_NOTHING)

#define DECLARE_NAPI_PROPERTY(name, func)                                \
  { (name), NULL, (func), NULL, NULL, NULL, napi_default, NULL }

#define DECLARE_NAPI_GETTER(name, func)                                  \
  { (name), NULL, NULL, (func), NULL, NULL, napi_default, NULL }

extern uint32_t refCount;
extern napi_ref gobject_constructor_ref;
extern napi_ref garray_constructor_ref;
extern napi_ref gfunction_constructor_ref;
extern napi_ref gcontext_constructor_ref;
extern napi_ref gtype_constructor_ref;
extern napi_ref gerror_constructor_ref;
extern napi_ref gstring_constructor_ref;
extern napi_ref gmap_constructor_ref;
extern napi_ref glogger_ref;
extern napi_ref gconsole_ref;
extern napi_ref gresolver_ref;

bool validate_constructors_refs(napi_env env);

void context_error_handler(gctx_t *ctx);

napi_value to_js_object(napi_env env, ggraph_t *graph, gslot_t data, gptype_t data_type);

void from_js_object(napi_env env, napi_value value, ggraph_t *graph, gslot_t *data, gptype_t *data_type);

napi_value greycat__create_context(napi_env env, ggraph_t *graph);

/**
 * @param env
 * @param graph
 * @param g_fn if not NULL => the wrapped gfunction_t*
 * @returns a js GFunction instance
 */
napi_value greycat__create_function(napi_env env, ggraph_t *graph, gfunction_t **g_fn);

#endif //greycat_napi_common_h