#include <node_api.h>

#include <greycat/ggraph.h>
#include <greycat/rt/map.h>

#include "common.h"

napi_value map__get(napi_env env, napi_callback_info info) {
    size_t argc = 2;
    napi_value argv[2];

    NAPI_CALL(env, napi_get_cb_info(env, info, &argc, argv, NULL, NULL));

    gc_rt_map_t *map;
    NAPI_CALL(env, napi_unwrap(env, argv[0], (void **) &map));

    if (map == NULL) {
        napi_throw_error(env, NULL, "Unwrapped map is null (map__get)");
        return NULL;
    }

    gc_rt_slot_t key;
    gptype_t key_type;
    from_js_object(env, argv[1], (ggraph_t *) map->header.type->graph, &key, &key_type);

    gptype_t value_type;
    gc_rt_slot_t value = gc_rt_map__get(map, key, key_type, &value_type);

    return to_js_object(env, (ggraph_t *) map->header.type->graph, value, value_type);
}

// napi_value map__mget(napi_env env, napi_callback_info info) {
//   size_t argc = 3;
//   napi_value argv[3];

//   NAPI_CALL(env, napi_get_cb_info(env, info, &argc, argv, NULL, NULL));

//   gmap_t *map;
//   NAPI_CALL(env, napi_unwrap(env, argv[0], (void **) &map));

//   if (map == NULL) {
//     napi_throw_error(env, NULL, "Unwrapped map is null (map__mget)");
//     return NULL;
//   }

//   gslot_t key;
//   gptype_t key_type;
//   from_js_object(env, argv[1], map->header.type->graph, &key, &key_type);

//   // gc_rt_map__mget()

//   return NULL;
// }

napi_value map__set(napi_env env, napi_callback_info info) {
    size_t argc = 3;
    napi_value argv[3];

    NAPI_CALL(env, napi_get_cb_info(env, info, &argc, argv, NULL, NULL));

    gc_rt_map_t *map;
    NAPI_CALL(env, napi_unwrap(env, argv[0], (void **) &map));

    if (map == NULL) {
        napi_throw_error(env, NULL, "Unwrapped map is null (map__set)");
        return NULL;
    }

    gc_rt_slot_t key;
    gptype_t key_type;
    from_js_object(env, argv[1], (ggraph_t *) map->header.type->graph, &key, &key_type);

    gc_rt_slot_t value;
    gptype_t value_type;
    from_js_object(env, argv[2], (ggraph_t *) map->header.type->graph, &value, &value_type);

    gc_rt_map__set(map, key, key_type, value, value_type);

    return NULL;
}

napi_value map__put(napi_env env, napi_callback_info info) {
    size_t argc = 3;
    napi_value argv[3];

    NAPI_CALL(env, napi_get_cb_info(env, info, &argc, argv, NULL, NULL));

    gc_rt_map_t *map;
    NAPI_CALL(env, napi_unwrap(env, argv[0], (void **) &map));

    if (map == NULL) {
        napi_throw_error(env, NULL, "Unwrapped map is null (map__set)");
        return NULL;
    }

    gc_rt_slot_t key;
    gptype_t key_type;
    from_js_object(env, argv[1], (ggraph_t *) map->header.type->graph, &key, &key_type);

    gc_rt_slot_t value;
    gptype_t value_type;
    from_js_object(env, argv[2], (ggraph_t *) map->header.type->graph, &value, &value_type);

    gc_rt_map__put(map, key, key_type, value, value_type);

    return NULL;
}

napi_value map__remove(napi_env env, napi_callback_info info) {
    size_t argc = 2;
    napi_value argv[2];

    NAPI_CALL(env, napi_get_cb_info(env, info, &argc, argv, NULL, NULL));

    gc_rt_map_t *map;
    NAPI_CALL(env, napi_unwrap(env, argv[0], (void **) &map));

    if (map == NULL) {
        napi_throw_error(env, NULL, "Unwrapped map is null (map__remove)");
        return NULL;
    }

    gc_rt_slot_t key;
    gptype_t key_type;
    from_js_object(env, argv[1], (ggraph_t *) map->header.type->graph, &key, &key_type);

    napi_value result;
    NAPI_CALL(env, napi_get_boolean(env, gc_rt_map__remove(map, key, key_type), &result));

    return result;
}

void map__iterator_function(gc_rt_slot_t *key, gptype_t *key_type, gc_rt_slot_t *value, gptype_t *value_type) {}

napi_value map__foreach(napi_env env, napi_callback_info info) {
    size_t argc = 2;
    napi_value argv[2];
    napi_value recv;

    NAPI_CALL(env, napi_get_cb_info(env, info, &argc, argv, &recv, NULL));

    gc_rt_map_t *map;
    NAPI_CALL(env, napi_unwrap(env, argv[0], (void **) &map));

    if (map == NULL) {
        napi_throw_error(env, NULL, "Unwrapped map is null (map__foreach)");
        return NULL;
    }

    ggraph_t *graph = (ggraph_t *) map->header.type->graph;

    // dont even bother looping if there is no entry
    if (map->size > 0) {
        gc_rt_slot_t key, value;
        gptype_t key_type, value_type;
        uint32_t found = 0;
        for (uint32_t i = 0; i < map->capacity; i++) {
            bool has_value = gc_rt_map__get_at(map, i, &key, &key_type, &value, &value_type);
            if (has_value) {
                napi_value params[2] = {
                  to_js_object(env, graph, key, key_type),
                  to_js_object(env, graph, value, value_type),
                };
                NAPI_CALL(env, napi_call_function(env, recv, argv[1], 2, params, NULL));
                found++;
                if (found == map->size) {
                    // no need to keep looping if we already have all the values
                    break;
                }
            }
        }
    }

    return NULL;
}

napi_value map__size(napi_env env, napi_callback_info info) {
    size_t argc = 1;
    napi_value argv[1];

    NAPI_CALL(env, napi_get_cb_info(env, info, &argc, argv, NULL, NULL));

    gc_rt_map_t *map;
    NAPI_CALL(env, napi_unwrap(env, argv[0], (void **) &map));

    if (map == NULL) {
        napi_throw_error(env, NULL, "Unwrapped map is null (map__size)");
        return NULL;
    }

    napi_value size;
    NAPI_CALL(env, napi_create_uint32(env, map->size, &size));

    return size;
}