#define NAPI_VERSION 3

#include <node_api.h>

#include "common.h"

napi_value register_glogger(napi_env env, napi_callback_info info);

napi_value graph__destroy(napi_env env, napi_callback_info info);
napi_value graph__wrap(napi_env env, napi_callback_info info);
napi_value graph__is_meta(napi_env env, napi_callback_info info);
napi_value graph__declare_meta(napi_env env, napi_callback_info info);
napi_value graph__create_context(napi_env env, napi_callback_info info);
napi_value graph__create_function(napi_env env, napi_callback_info info);

napi_value function__parse(napi_env env, napi_callback_info info);
napi_value function__pipe(napi_env env, napi_callback_info info);
napi_value function__pipe_external(napi_env env, napi_callback_info info);
napi_value function__create_context(napi_env env, napi_callback_info info);
napi_value function__execute(napi_env env, napi_callback_info info);
napi_value function__get_graph(napi_env env, napi_callback_info info);
napi_value function__add_param(napi_env env, napi_callback_info info);
napi_value function__add_mparam(napi_env env, napi_callback_info info);

napi_value context__get_key(napi_env env, napi_callback_info info);
napi_value context__set_key(napi_env env, napi_callback_info info);
napi_value context__set_result(napi_env env, napi_callback_info info);
napi_value context__get_graph(napi_env env, napi_callback_info info);

napi_value object__to_json(napi_env env, napi_callback_info info);
napi_value object__un_mark(napi_env env, napi_callback_info info);
napi_value object__get_key(napi_env env, napi_callback_info info);
napi_value object__set_key(napi_env env, napi_callback_info info);
napi_value object__get_element(napi_env env, napi_callback_info info);

napi_value array__add_element(napi_env env, napi_callback_info info);
napi_value array__remove_element(napi_env env, napi_callback_info info);
napi_value array__get_element(napi_env env, napi_callback_info info);
napi_value array__set_element(napi_env env, napi_callback_info info);
napi_value array__size(napi_env env, napi_callback_info info);
napi_value array__resize(napi_env env, napi_callback_info info);

napi_value type__wrap(napi_env env, napi_callback_info info);
napi_value type__name(napi_env env, napi_callback_info info);
napi_value type__key(napi_env env, napi_callback_info info);
napi_value type__seal(napi_env env, napi_callback_info info);
napi_value type__is_open(napi_env env, napi_callback_info info);
napi_value type__graph(napi_env env, napi_callback_info info);
napi_value type__declare_attribute(napi_env env, napi_callback_info info);
napi_value type__declare_function(napi_env env, napi_callback_info info);
napi_value type__declare_static_attribute(napi_env env, napi_callback_info info);
napi_value type__declare_static_function(napi_env env, napi_callback_info info);

napi_value map__get(napi_env env, napi_callback_info info);
// napi_value map__mget(napi_env env, napi_callback_info info);
napi_value map__set(napi_env env, napi_callback_info info);
napi_value map__put(napi_env env, napi_callback_info info);
napi_value map__remove(napi_env env, napi_callback_info info);
napi_value map__foreach(napi_env env, napi_callback_info info);
napi_value map__size(napi_env env, napi_callback_info info);

napi_value string__size(napi_env env, napi_callback_info info);
napi_value string__close(napi_env env, napi_callback_info info);
napi_value string__reset(napi_env env, napi_callback_info info);
napi_value string__prepare(napi_env env, napi_callback_info info);
napi_value string__value(napi_env env, napi_callback_info info);

napi_value register_gresolver(napi_env env, napi_callback_info info) {
  size_t argc = 1;
  napi_value argv[1];
  NAPI_CALL(env, napi_get_cb_info(env, info, &argc, argv, NULL, NULL));
  NAPI_CALL(env, napi_create_reference(env, argv[0], 1, &gresolver_ref));
  return NULL;
}

napi_value register_gconsole(napi_env env, napi_callback_info info) {
  size_t argc = 1;
  napi_value argv[1];
  NAPI_CALL(env, napi_get_cb_info(env, info, &argc, argv, NULL, NULL));
  NAPI_CALL(env, napi_create_reference(env, argv[0], 1, &gconsole_ref));
  return NULL;
}

napi_value register_gobject_constructor(napi_env env, napi_callback_info info) {
  size_t argc = 1;
  napi_value argv[1];
  
  NAPI_CALL(env, napi_get_cb_info(env, info, &argc, argv, NULL, NULL));

  if (gobject_constructor_ref != NULL) {
    napi_throw_error(env, NULL, "A constructor for GObject is already registered.");
    return NULL;
  }

  NAPI_CALL(env, napi_create_reference(env, argv[0], 1, &gobject_constructor_ref));
  return NULL;
}

napi_value register_garray_constructor(napi_env env, napi_callback_info info) {
  size_t argc = 1;
  napi_value argv[1];
  
  NAPI_CALL(env, napi_get_cb_info(env, info, &argc, argv, NULL, NULL));

  if (garray_constructor_ref != NULL) {
    napi_throw_error(env, NULL, "A constructor for GArray is already registered.");
    return NULL;
  }

  NAPI_CALL(env, napi_create_reference(env, argv[0], 1, &garray_constructor_ref));
  return NULL;
}

napi_value register_gfunction_constructor(napi_env env, napi_callback_info info) {
  size_t argc = 1;
  napi_value argv[1];
  
  NAPI_CALL(env, napi_get_cb_info(env, info, &argc, argv, NULL, NULL));

  if (gfunction_constructor_ref != NULL) {
    napi_throw_error(env, NULL, "A constructor for GFunction is already registered.");
    return NULL;
  }

  NAPI_CALL(env, napi_create_reference(env, argv[0], 1, &gfunction_constructor_ref));
  return NULL;
}

napi_value register_gcontext_constructor(napi_env env, napi_callback_info info) {
  size_t argc = 1;
  napi_value argv[1];
  
  NAPI_CALL(env, napi_get_cb_info(env, info, &argc, argv, NULL, NULL));

  if (gcontext_constructor_ref != NULL) {
    napi_throw_error(env, NULL, "A constructor for Context is already registered.");
    return NULL;
  }

  NAPI_CALL(env, napi_create_reference(env, argv[0], 1, &gcontext_constructor_ref));
  return NULL;
}

napi_value register_gstring_constructor(napi_env env, napi_callback_info info) {
  size_t argc = 1;
  napi_value argv[1];
  
  NAPI_CALL(env, napi_get_cb_info(env, info, &argc, argv, NULL, NULL));

  if (gstring_constructor_ref != NULL) {
    napi_throw_error(env, NULL, "A constructor for GString is already registered.");
    return NULL;
  }

  NAPI_CALL(env, napi_create_reference(env, argv[0], 1, &gstring_constructor_ref));
  return NULL;
}

napi_value register_gerror_constructor(napi_env env, napi_callback_info info) {
  size_t argc = 1;
  napi_value argv[1];

  NAPI_CALL(env, napi_get_cb_info(env, info, &argc, argv, NULL, NULL));

  if (gerror_constructor_ref != NULL) {
    napi_throw_error(env, NULL, "A constructor for GreyCatError is already registered.");
    return NULL;
  }

  NAPI_CALL(env, napi_create_reference(env, argv[0], 1, &gerror_constructor_ref));
  return NULL;
}

napi_value register_gtype_constructor(napi_env env, napi_callback_info info) {
  size_t argc = 1;
  napi_value argv[1];

  NAPI_CALL(env, napi_get_cb_info(env, info, &argc, argv, NULL, NULL));

  if (gtype_constructor_ref != NULL) {
    napi_throw_error(env, NULL, "A constructor for GType is already registered.");
    return NULL;
  }

  NAPI_CALL(env, napi_create_reference(env, argv[0], 1, &gtype_constructor_ref));
  return NULL;
}

napi_value register_gmap_constructor(napi_env env, napi_callback_info info) {
  size_t argc = 1;
  napi_value argv[1];

  NAPI_CALL(env, napi_get_cb_info(env, info, &argc, argv, NULL, NULL));

  if (gmap_constructor_ref != NULL) {
    napi_throw_error(env, NULL, "A constructor for GMap is already registered.");
    return NULL;
  }

  NAPI_CALL(env, napi_create_reference(env, argv[0], 1, &gmap_constructor_ref));
  return NULL;
}

napi_value init(napi_env env, napi_value exports) {
  napi_property_descriptor props[] = {
    DECLARE_NAPI_PROPERTY("register_gobject_constructor", register_gobject_constructor),
    DECLARE_NAPI_PROPERTY("register_garray_constructor", register_garray_constructor),
    DECLARE_NAPI_PROPERTY("register_gfunction_constructor", register_gfunction_constructor),
    DECLARE_NAPI_PROPERTY("register_gcontext_constructor", register_gcontext_constructor),
    DECLARE_NAPI_PROPERTY("register_gerror_constructor", register_gerror_constructor),
    DECLARE_NAPI_PROPERTY("register_gtype_constructor", register_gtype_constructor),
    DECLARE_NAPI_PROPERTY("register_gmap_constructor", register_gmap_constructor),
    DECLARE_NAPI_PROPERTY("register_gstring_constructor", register_gstring_constructor),
    DECLARE_NAPI_PROPERTY("register_glogger", register_glogger),
    DECLARE_NAPI_PROPERTY("register_gconsole", register_gconsole),
    DECLARE_NAPI_PROPERTY("register_gresolver", register_gresolver),

    DECLARE_NAPI_PROPERTY("graph__wrap", graph__wrap),
    DECLARE_NAPI_PROPERTY("graph__destroy", graph__destroy),
    DECLARE_NAPI_PROPERTY("graph__is_meta", graph__is_meta),
    DECLARE_NAPI_PROPERTY("graph__declare_meta", graph__declare_meta),
    DECLARE_NAPI_PROPERTY("graph__create_context", graph__create_context),
    DECLARE_NAPI_PROPERTY("graph__create_function", graph__create_function),

    DECLARE_NAPI_PROPERTY("function__parse", function__parse),
    DECLARE_NAPI_PROPERTY("function__pipe", function__pipe),
    DECLARE_NAPI_PROPERTY("function__pipe_external", function__pipe_external),
    DECLARE_NAPI_PROPERTY("function__create_context", function__create_context),
    DECLARE_NAPI_PROPERTY("function__execute", function__execute),
    DECLARE_NAPI_PROPERTY("function__get_graph", function__get_graph),
    DECLARE_NAPI_PROPERTY("function__add_param", function__add_param),
    DECLARE_NAPI_PROPERTY("function__add_mparam", function__add_mparam),

    DECLARE_NAPI_PROPERTY("context__get_key", context__get_key),
    DECLARE_NAPI_PROPERTY("context__set_key", context__set_key),
    DECLARE_NAPI_PROPERTY("context__set_result", context__set_result),
    DECLARE_NAPI_PROPERTY("context__get_graph", context__get_graph),

    DECLARE_NAPI_PROPERTY("object__get_key", object__get_key),
    DECLARE_NAPI_PROPERTY("object__set_key", object__set_key),
    DECLARE_NAPI_PROPERTY("object__to_json", object__to_json),
    DECLARE_NAPI_PROPERTY("object__un_mark", object__un_mark),
    DECLARE_NAPI_PROPERTY("object__get_element", object__get_element),

    DECLARE_NAPI_PROPERTY("array__add_element", array__add_element),
    DECLARE_NAPI_PROPERTY("array__remove_element", array__remove_element),
    DECLARE_NAPI_PROPERTY("array__get_element", array__get_element),
    DECLARE_NAPI_PROPERTY("array__set_element", array__set_element),
    DECLARE_NAPI_PROPERTY("array__size", array__size),
    DECLARE_NAPI_PROPERTY("array__resize", array__resize),

    DECLARE_NAPI_PROPERTY("type__wrap", type__wrap),
    DECLARE_NAPI_PROPERTY("type__name", type__name),
    DECLARE_NAPI_PROPERTY("type__seal", type__seal),
    DECLARE_NAPI_PROPERTY("type__key", type__key),
    DECLARE_NAPI_PROPERTY("type__is_open", type__is_open),
    DECLARE_NAPI_PROPERTY("type__graph", type__graph),
    DECLARE_NAPI_PROPERTY("type__declare_attribute", type__declare_attribute),
    DECLARE_NAPI_PROPERTY("type__declare_function", type__declare_function),
    DECLARE_NAPI_PROPERTY("type__declare_static_function", type__declare_static_function),
    DECLARE_NAPI_PROPERTY("type__declare_static_attribute", type__declare_static_attribute),

    DECLARE_NAPI_PROPERTY("map__get", map__get),
    // DECLARE_NAPI_PROPERTY("map__mget", map__mget),
    DECLARE_NAPI_PROPERTY("map__set", map__set),
    DECLARE_NAPI_PROPERTY("map__put", map__put),
    DECLARE_NAPI_PROPERTY("map__remove", map__remove),
    DECLARE_NAPI_PROPERTY("map__foreach", map__foreach),
    DECLARE_NAPI_PROPERTY("map__size", map__size),

    DECLARE_NAPI_PROPERTY("string__size", string__size),
    DECLARE_NAPI_PROPERTY("string__reset", string__reset),
    DECLARE_NAPI_PROPERTY("string__prepare", string__prepare),
    DECLARE_NAPI_PROPERTY("string__close", string__close),
    DECLARE_NAPI_PROPERTY("string__value", string__value),
  };

  NAPI_CALL(env, napi_define_properties(env, exports, sizeof(props) / sizeof(*props), props));

  return exports;
}

NAPI_MODULE(GreyCat, init)
