#define IS_JS_FUNCTION 1
#define IS_CONTEXT 2

#include <greycat/slot.h>

typedef struct gslot_and_type {
    gslot_t *slot;
    int32_t type;
} gslot_and_type_t;