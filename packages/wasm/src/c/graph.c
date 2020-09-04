#include <stdio.h>

#include <emscripten.h>
#include <emscripten/em_asm.h>

#include <greycat/ggraph.h>
#include <greycat/language/gcl_parser.h>
#include <greycat/log.h>
#include <greycat/memory/gmemory.h>
#include <greycat/runtime/gstring.h>

#include "common.h"

static void greycat_ext_body(void *external, void *env, uint64_t id, gctx_t *ctx) {
    EM_ASM_(Module.__pointers[$0](Module.__pointers[$1]), external, ctx);
    return;
}

static void greycat_ext_cleaner(void *companion, void *env, uint64_t id) {
    EM_ASM_(delete Module.__pointers[$0], companion);
    return;
}

static void greycat_ext_console_print(void *env, const char *format, ...) {
    va_list args;
    int len;
    char *msg;
    /* Compute length of original message */
    va_start(args, format);
    len = vsnprintf(NULL, 0, format, args);
    va_end(args);
    /* Allocate space for original message */
    uint32_t msg_len = (uint32_t) len + 1;
    msg = (char *) g_malloc((size_t) msg_len);
    /* Write original message to string */
    va_start(args, format);
    vsnprintf(msg, (size_t) msg_len, format, args);
    va_end(args);

    EM_ASM_(Module.Console.print(Module.UTF8ToString($0, $1)), msg, msg_len);
}

static void greycat_ext_console_println(void *env, const char *format, ...) {
    va_list args;
    int len;
    char *msg;
    /* Compute length of original message */
    va_start(args, format);
    len = vsnprintf(NULL, 0, format, args);
    va_end(args);
    /* Allocate space for original message */
    uint32_t msg_len = (uint32_t) len + 1;
    msg = (char *) g_malloc((size_t) msg_len);
    /* Write original message to string */
    va_start(args, format);
    vsnprintf(msg, (size_t) msg_len, format, args);
    va_end(args);

    EM_ASM_(Module.Console.println(Module.UTF8ToString($0, $1)), msg, msg_len);
}

ggraph_t *graph__create(long cacheSize, long bufferSize) {
    ggraph_t *graph = ggraph__create((uint64_t) cacheSize, (uint64_t) bufferSize, true, NULL);
    graph->ext_body = (ggraph_ext_body_t *) greycat_ext_body;
    graph->ext_cleaner = (ggraph_ext_cleaner_t *) greycat_ext_cleaner;
    graph->ext_console.print = (ggraph_ext_console_fn_t *) greycat_ext_console_print;
    graph->ext_console.println = (ggraph_ext_console_fn_t *) greycat_ext_console_println;
    return graph;
}

bool graph__useMeta(ggraph_t *graph) { return graph->useMeta; }

size_t graph__size_heap(ggraph_t *graph) { return (size_t) graph->memory->map.size; }

size_t graph__size_cache(ggraph_t *graph) { return graph->memory->lru.size; }

void graph__log_error(ggraph_t *graph, char *message, size_t len) { gerror("%.*s", len, message); }

void graph__log_warning(ggraph_t *graph, char *message, size_t len) { gwarn("%.*s", len, message); }

void graph__log_info(ggraph_t *graph, char *message, size_t len) { ginfo("%.*s", len, message); }
