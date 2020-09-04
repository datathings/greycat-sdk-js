#include <stddef.h>

#include <greycat/function/gctx.h>
#include <greycat/function/gfunction.h>
#include <greycat/galloc.h>
#include <greycat/ggraph.h>
#include <greycat/log.h>
#include <greycat/runtime/gstring.h>

gparam_t *params__create(uint32_t capacity) { return g_malloc(capacity * sizeof(gparam_t) + (sizeof(uint64_t) * capacity)); }

void params__add_int(void *ptr, uint32_t offset, uint32_t capacity, int32_t key, int32_t value) {
    gparam_t *params = ptr;
    uint64_t *data = (uint64_t *) &params[capacity];
    params[offset].key = key;
    params[offset].type = g_i32;
    *((int32_t *) &data[offset]) = value;
    params[offset].val = &data[offset];
}

/*
void params__add_binding(void *ptr, uint32_t offset, uint32_t capacity, int32_t key, int32_t value) {
    gparam_t *params = ptr;
    uint64_t *data = (uint64_t *) &params[capacity];
    params[offset].key = key;
    params[offset].type = g_var_key;
    *((int32_t *) &data[offset]) = value;
    params[offset].val = &data[offset];
}*/

void params__add_long(void *ptr, uint32_t offset, uint32_t capacity, int32_t key, int64_t value) {
    gparam_t *params = ptr;
    uint64_t *data = (uint64_t *) &params[capacity];
    params[offset].key = key;
    params[offset].type = g_i64;
    *((int64_t *) &data[offset]) = value;
    params[offset].val = &data[offset];
}

void params__add_double(void *ptr, uint32_t offset, uint32_t capacity, int32_t key, double_t value) {
    gparam_t *params = ptr;
    uint64_t *data = (uint64_t *) &params[capacity];
    params[offset].key = key;
    params[offset].type = g_f64;
    *((double_t *) &data[offset]) = value;
    params[offset].val = &data[offset];
}

void params__add_bool(void *ptr, uint32_t offset, uint32_t capacity, int32_t key, bool value) {
    gparam_t *params = ptr;
    uint64_t *data = (uint64_t *) &params[capacity];
    params[offset].key = key;
    params[offset].type = g_bool;
    *((bool *) &data[offset]) = value;
    params[offset].val = &data[offset];
}

void params__add_string(void *ptr, uint32_t offset, int32_t key, char *str, ggraph_t *graph) {
    gparam_t *params = ptr;
    params[offset].key = key;
    params[offset].type = g_String;
    gstring_t *new_str = ggraph__create_string(graph);
    gstring__add_raw_string(new_str, str);
    gstring__close(new_str);
    params[offset].val = (void *) new_str;
}

void params__add_null(void *ptr, uint32_t offset, int32_t key) {
    gparam_t *params = ptr;
    params[offset].key = key;
    params[offset].type = g_null;
    params[offset].val = NULL;
}

void params__add_object(void *ptr, uint32_t offset, int32_t key, gobject_t *obj_ptr) {
    gparam_t *params = ptr;
    params[offset].key = key;
    params[offset].type = g_null;
    params[offset].val = obj_ptr;
    gobject__mark(obj_ptr);
}

void params__destroy(void *ptr, uint32_t capacity) {
    gparam_t *params = ptr;
    for (int32_t i = 0; i < capacity; i++) {
        switch (params[i].type) {
        case g_null:
        case g_i32:
        case g_u32:
        case g_i64:
        case g_u64:
        case g_f64:
        case g_bool:
            break;
        default:
            gobject__un_mark((gobject_t *) params[i].val);
        }
    }
    g_free(ptr);
}