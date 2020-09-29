#include <stdio.h>

#include <greycat/common/gcommon.h>
#include <greycat/ggraph.h>
#include <greycat/log.h>
#include <greycat/rt/string.h>
#include <greycat/rt/type.h>

#include "common.h"

gtype_t *type__create(ggraph_t *graph, int32_t type_key, bool is_open) {
    gtype_t *type = ggraph__type(graph, type_key);
    if (type != NULL) {
        // type already exist
        gerror("Overriding types is not permitted");
        return NULL;
    }

    if (is_open) {
        type = ggraph__create_type(graph);
    } else {
        type = ggraph__create_fixed_node_type(graph);
    }
    type->create = NULL;
    type->key = type_key;
    return type;
}

gstring_t *type__name(gtype_t *type) { return ggraph__meta(type->graph, type->key); }

int32_t type__key(gtype_t *type) { return type->key; }

bool type__is_open(gtype_t *type) { return type->flags.is_open; }

void type__seal(gtype_t *type) {
    if (type->flags.is_sealed) {
        return;
    }
    ggraph__declare_type(type->graph, type);
    return;
}

ggraph_t *type__graph(gtype_t *type) { return type->graph; }

void type__declare_attribute(gtype_t *type, char *name, int32_t type_key) {
    if (!ggraph__is_meta(type->graph, type_key)) {
        gerror("Attribute '%s' specifies an unknown type", name);
        return;
    }

    // declare attribute name as meta if not already declared
    int32_t key = hash(name);
    if (!ggraph__is_meta(type->graph, key)) {
        ggraph__declare_meta(type->graph, key, name);
    }

    gtype__declare_attribute(type, key, type_key);

    return;
}

gfunction_t *type__declare_function(gtype_t *type, char *name, gfunction_t *fn, bool is_static) {
    // declare attribute name as meta if not already declared
    int32_t key = hash(name);
    if (!ggraph__is_meta(type->graph, key)) {
        ggraph__declare_meta(type->graph, key, name);
    }

    fn->is_static = is_static;
    gtype__declare_function(type, key, fn);

    return fn;
}

void type__declare_static_int(gtype_t *type, char *name, int32_t value) {
    int32_t key = hash(name);
    if (!ggraph__is_meta(type->graph, key)) {
        ggraph__declare_meta(type->graph, key, name);
    }
    gslot_t slot = {.i32 = value};
    gtype__declare_static(type, key, slot, gc_sbi_slot_type_i32);
    return;
}

void type__declare_static_double(gtype_t *type, char *name, double_t value) {
    int32_t key = hash(name);
    if (!ggraph__is_meta(type->graph, key)) {
        ggraph__declare_meta(type->graph, key, name);
    }
    gslot_t slot = {.f64 = value};
    gtype__declare_static(type, key, slot, gc_sbi_slot_type_f64);
    return;
}

void type__declare_static_bool(gtype_t *type, char *name, bool value) {
    int32_t key = hash(name);
    if (!ggraph__is_meta(type->graph, key)) {
        ggraph__declare_meta(type->graph, key, name);
    }
    gslot_t slot = {.b = value};
    gtype__declare_static(type, key, slot, gc_sbi_slot_type_bool);
    return;
}

void type__declare_static_long(gtype_t *type, char *name, int32_t high, int32_t low) {
    int32_t key = hash(name);
    if (!ggraph__is_meta(type->graph, key)) {
        ggraph__declare_meta(type->graph, key, name);
    }
    gslot_t slot = {.i64 = (int64_t) high << 32 | (int64_t)(low & 0xffffffff)};
    gtype__declare_static(type, key, slot, gc_sbi_slot_type_i64);
    return;
}

void type__declare_static_null(gtype_t *type, char *name) {
    int32_t key = hash(name);
    if (!ggraph__is_meta(type->graph, key)) {
        ggraph__declare_meta(type->graph, key, name);
    }
    gslot_t slot = {.object = NULL};
    gtype__declare_static(type, key, slot, gc_sbi_slot_type_null);
    return;
}

void type__declare_static_object(gtype_t *type, char *name, gobject_t *obj) {
    int32_t key = hash(name);
    if (!ggraph__is_meta(type->graph, key)) {
        ggraph__declare_meta(type->graph, key, name);
    }
    gslot_t slot = {.object = obj};
    gtype__declare_static(type, key, slot, gc_sbi_slot_type_object);
    gobject__un_mark(slot.object);
    return;
}