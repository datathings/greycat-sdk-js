#include <greycat/memory/gmemory.h>
#include <greycat/slot.h>
#include <greycat/galloc.h>

#include "common.h"

gslot_and_type_t *slotntype__create() {
    gslot_and_type_t *slotntype = g_malloc(sizeof(gslot_and_type_t));
    slotntype->slot = g_malloc(sizeof(gslot_t));
    slotntype->slot->object = NULL;
    slotntype->type = gc_sbi_slot_type_null;
    return slotntype;
}

gslot_t *slotntype__value(gslot_and_type_t *slotntype) { return slotntype->slot; }

int32_t slotntype__type(gslot_and_type_t *slotntype) { return slotntype->type; }

gslot_t *gslot__from_int(int32_t value) {
    gslot_t *slot = g_malloc(sizeof(gslot_t));
    slot->i32 = value;
    return slot;
}

gslot_t *gslot__from_uint(uint32_t value) {
    gslot_t *slot = g_malloc(sizeof(gslot_t));
    slot->u32 = value;
    return slot;
}

gslot_t *gslot__from_float(float_t value) {
    gslot_t *slot = g_malloc(sizeof(gslot_t));
    slot->f32 = value;
    return slot;
}

gslot_t *gslot__from_long(int32_t high, int32_t low) {
    gslot_t *slot = g_malloc(sizeof(gslot_t));
    slot->i64 = (int64_t) high << 32 | (int64_t)(low & 0xffffffff);
    return slot;
}

gslot_t *gslot__from_ulong(int32_t high, int32_t low) {
    gslot_t *slot = g_malloc(sizeof(gslot_t));
    slot->u64 = (int64_t) high << 32 | (int64_t)(low & 0xffffffff);
    return slot;
}

gslot_t *gslot__from_double(double_t value) {
    gslot_t *slot = g_malloc(sizeof(gslot_t));
    slot->f64 = value;
    return slot;
}

gslot_t *gslot__from_bool(bool value) {
    gslot_t *slot = g_malloc(sizeof(gslot_t));
    slot->b = value;
    return slot;
}

gslot_t *gslot__from_object(gobject_t *value) {
    gslot_t *slot = g_malloc(sizeof(gslot_t));
    slot->object = value;
    return slot;
}

gslot_t *gslot__from_reference(gref_t *value) {
    gslot_t *slot = g_malloc(sizeof(gslot_t));
    slot->u64 = value->raw;
    return slot;
}

gslot_t *gslot__from_null() {
    gslot_t *slot = g_malloc(sizeof(gslot_t));
    slot->object = NULL;
    return slot;
}

int32_t gslot__get_int(gslot_t *slot) { return slot->i32; }

uint32_t gslot__get_uint(gslot_t *slot) { return slot->u32; }

float_t gslot__get_float(gslot_t *slot) { return slot->f32; }

int64_t gslot__get_long(gslot_t *slot) { return slot->i64; }

uint64_t gslot__get_ulong(gslot_t *slot) { return slot->u64; }

double_t gslot__get_double(gslot_t *slot) { return slot->f64; }

bool gslot__get_bool(gslot_t *slot) { return slot->b; }

gobject_t *gslot__get_object(gslot_t *slot) { return slot->object; }

gref_t gslot__get_reference(gslot_t *slot) { return (gref_t){.raw=slot->u64}; }