#include <stdint.h>

#include <emscripten.h>
#include <emscripten/em_asm.h>

#include <greycat/function/gctx.h>
#include <greycat/ggraph.h>

#include "common.h"

void greycat_ctx_error_handler(gctx_t *ctx) {
    ggraph_t *graph = ctx->header.type->graph;

    size_t stack_len = 0;
    gctx__stackframes(ctx, NULL, &stack_len, 0);
    gstackframe_t frames[stack_len];
    gctx__stackframes(ctx, frames, &stack_len, stack_len);

    gstring_t *g_stack = ggraph__create_string(graph);
    gctx__stacktrace(frames, stack_len, g_stack);

    EM_ASM_(Module.__pointers[$0]['_errorHandlerAdapter']($1, $2), ctx, ctx->error, g_stack);

    // release gstring_t stacktrace
    gobject__un_mark((gobject_t *) g_stack);
    // release gctx error
    gobject__un_mark((gobject_t *) ctx->error);

    // At this point we can forget about ext.companion
    ctx->error = NULL;
}

int32_t ctx__get_type(gctx_t *ctx, int32_t key) {
    gptype_t type;
    gslot_t value = gctx__get(ctx, key, &type);
    if (type == gc_sbi_slot_type_object) {
        return value.object->type->key;
    }
    return gptype__to(type);
}

void ctx__wrap(gctx_t *ctx) {
    ctx->ext.id = IS_CONTEXT;
    ctx->ext.companion = ctx;
    ctx->error_handler = greycat_ctx_error_handler;
}

void ctx__set_long(gctx_t *ctx, int32_t key, int high, int low) { gctx__set_long(ctx, key, (int64_t) high << 32 | (int64_t)(low & 0xffffffff)); }
