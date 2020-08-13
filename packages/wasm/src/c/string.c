#include <string.h>

#include <greycat/runtime/gstring.h>

void string__set_size(gstring_t *gstring, uint32_t new_size) { gstring->size = new_size; }

void string__copy(gstring_t *g_str, char *str) { strcpy(g_str->buffer, str); }