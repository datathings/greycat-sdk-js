#include <stddef.h>

#include <emscripten/em_asm.h>

#include <greycat/function/gfunction.h>
#include <greycat/function/gfunction_ops.h>
#include <greycat/ggraph.h>
#include <greycat/glog.h>
#include <greycat/language/gcl_parser.h>

#include "common.h"

void function__set_key(gfunction_t *self, int32_t key) { self->key = key; }

gstring_t *function__name(gfunction_t *function) { return ggraph__meta(function->header.type->graph, function->key); }

static gstring_t *greycat_wasm_resolver(ggraph_t *graph, gstring_t *target, gstring_t *current) {
    int hasResolver = EM_ASM_INT({ return (Module.Resolver !== undefined || Module.Resolver !== null) ? 1 : 0; });

    if (hasResolver == 0) {
        return NULL;
    }

    char *raw_content = (char *) EM_ASM_INT(
      {
          const str = Module.Resolver(Module.__pointers[$0], Module.UTF8ToString($1, $2), Module.UTF8ToString($3, $4));
          return str ? Module.allocateUTF8(str) : null;
      },
      graph, target->buffer, target->size, current->buffer, current->size);

    if (raw_content == NULL) {
        return NULL;
    }

    gstring_t *content = ggraph__create_string(graph);
    gstring__add_raw_string(content, raw_content);
    gstring__close(content);

    g_free(raw_content);

    return content;
}

bool function__parse(gfunction_t *function, char *content, char *uri) {
    return gcl_parse(content, uri, function->header.type->graph, &function, greycat_wasm_resolver, false);
}

void function__pipe(gfunction_t *prev, gfunction_t *next) {
    gfunction__add_call_function_direct(prev, next, (gfunction_op_src_t){.line = 0, .offset = 0});
    return;
}

void function__pipe_external(gfunction_t *prev, void *next) {
    gfunction__add_external(prev, next, IS_JS_FUNCTION, (gfunction_op_src_t){.line = 0, .offset = 0});
    return;
}

void function__add_param(gfunction_t *func, int32_t key, int32_t type, bool is_optional) {
    gfunction__add_check_param(func, key, type, (gfunction_op_src_t){.line = 0, .offset = 0}, is_optional);
}

void function__add_mparam(gfunction_t *func, int32_t key, garray_t *types, bool is_optional) {
    gfunction__add_check_mparam(func, key, types, (gfunction_op_src_t){.line = 0, .offset = 0}, is_optional);
}

void function__execute(gctx_t *ctx, gfunction_t *func, void *callback) {
    gfunction_t *wrapped_fn = ggraph__create_function(func->header.type->graph);
    gfunction__add_call_function_direct(wrapped_fn, func, (gfunction_op_src_t){.line = 0, .offset = 0});

    gfunction__add_external(wrapped_fn, callback, IS_JS_FUNCTION, (gfunction_op_src_t){.line = 0, .offset = 0});
    gfunction__execute(wrapped_fn, ctx);
    gobject__un_mark((gobject_t *) wrapped_fn);
    return;
}

gctx_t *function__create_context(gfunction_t *func) { return ggraph__create_context(func->header.type->graph); }
