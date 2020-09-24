#include <string.h>

#include <greycat/ggraph.h>
#include <greycat/log.h>
#include <greycat/rt/array.h>
#include <greycat/rt/string.h>

ggraph_t *array__graph(garray_t *arr) { return arr->header.type->graph; }

int32_t array__offset_type(garray_t *arr, uint32_t offset) {
    gptype_t type;
    gslot_t value = garray__get_slot(arr, offset, &type);
    if (type == gc_sbi_slot_type_object) {
        return value.object->type->key;
    }
    return gptype__to(type);
}

void array__set_long(garray_t *arr, uint32_t offset, int high, int low) { garray__set_long(arr, offset, (int64_t) high << 32 | (int64_t)(low & 0xffffffff)); }

void array__add_long(garray_t *arr, int high, int low) { garray__add_long(arr, (int64_t) high << 32 | (int64_t)(low & 0xffffffff)); }
