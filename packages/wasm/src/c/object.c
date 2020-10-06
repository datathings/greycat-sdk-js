#include <greycat/common/gcommon.h>
#include <greycat/graph.h>
#include <greycat/rt/string.h>
#include <greycat/rt/type.h>

ggraph_t *object__graph(gobject_t *self) { return self->type->graph; }

int32_t object__type_key(gobject_t *self) { return self->type->key; }

int32_t object__key_type(gobject_t *t, int32_t key) {
    gptype_t type;
    gslot_t value = gobject__get_slot(t, key, &type);
    if (type == gc_sbi_slot_type_object) {
        return value.object->type->key;
    }
    return gptype__to(type);
}

gtype_t *object__type(gobject_t *self) { return self->type; }

void object__json(gobject_t *self, gstring_t *buffer) {
    if (self->type->to_json != NULL) {
        self->type->to_json(self, (gobject_t*)buffer, false);
    }
    gstring__close(buffer);
}

gstring_t *object__to_json(gobject_t *obj) {
    gstring_t *str = ggraph__create_string(obj->type->graph);
    obj->type->to_json(obj, (gobject_t*)str, false);
    gstring__close(str);
    return str;
}

/*
void object__time(gobject_t *self, gstring_t *buffer) {
    gstring__add_long(buffer, gobject__time_sync(self));
}
 */

void object__set_long(gobject_t *obj, int32_t key, int high, int low) { gobject__set_long(obj, key, (int64_t) high << 32 | (int64_t)(low & 0xffffffff)); }
