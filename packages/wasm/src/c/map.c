#include <greycat/graph.h>
#include <greycat/log.h>
#include <greycat/memory/gmemory.h>
#include <greycat/rt/map.h>

#include "common.h"

ggraph_t *map__graph(gmap_t *map) { return map->header.type->graph; }

void map__get(gmap_t *map, gslot_t *key, int32_t key_type, gslot_and_type_t *slot_n_type) {
    gptype_t value_type;
    gslot_t value = gmap__get(map, *key, gptype__from(key_type), &value_type);
    switch (value_type) {
    case gc_sbi_slot_type_null:
        slot_n_type->slot->object = NULL;
        break;
    case gc_sbi_slot_type_i32:
        slot_n_type->slot->i32 = value.i32;
        break;
    case gc_sbi_slot_type_u32:
        slot_n_type->slot->u32 = value.u32;
        break;
    case gc_sbi_slot_type_i64:
        slot_n_type->slot->i64 = value.i64;
        break;
    case gc_sbi_slot_type_u64:
        slot_n_type->slot->u64 = value.u64;
        break;
    case gc_sbi_slot_type_bool:
        slot_n_type->slot->b = value.b;
        break;
    case gc_sbi_slot_type_f64:
        slot_n_type->slot->f64 = value.f64;
        break;
    case gc_sbi_slot_type_object:
        slot_n_type->slot->object = value.object;
        break;
    case gc_sbi_slot_type_ref:
        slot_n_type->slot->u64 = value.u64;
        break;
    case gc_sbi_slot_type_f32:
        slot_n_type->slot->f32 = value.f32;
        break;
    case gc_sbi_slot_type_i8:
        slot_n_type->slot->i8 = value.i8;
        break;
    case gc_sbi_slot_type_enum:
        slot_n_type->slot->ti32 = value.ti32;
        break;
    default:
        gerror("inconsistency error");
        break;
    }
    slot_n_type->type = gptype__to(value_type);
}

void map__mget() { /*not implemented yet*/
}

void map__set(gmap_t *map, gslot_t *key, int32_t key_type, gslot_t *value, int32_t value_type) {
    gmap__set(map, *key, gptype__from(key_type), *value, gptype__from(value_type));
}

void map__put(gmap_t *map, gslot_t *key, int32_t key_type, gslot_t *value, int32_t value_type) {
    gmap__put(map, *key, gptype__from(key_type), *value, gptype__from(value_type));
}

bool map__remove(gmap_t *map, gslot_t *key, int32_t key_type, gslot_t *value, int32_t value_type) { return gmap__remove(map, *key, gptype__from(key_type)); }

uint32_t map__size(gmap_t *map) { return map->size; }

void map__foreach(gmap_t *map, void *iterator) {}