#include <stdarg.h>
#include <stdint.h>
#include <stdio.h>
#include <time.h>

#include <emscripten/em_asm.h>

#include <greycat/galloc.h>
#include <greycat/glog.h>

static struct {
    void *udata;
    FILE *fp;
    int level;
    int quiet;
} L;

void log_set_udata(void *udata) { L.udata = udata; }

void log_set_lock(log_LockFn fn) {}

void log_set_fp(FILE *fp) { L.fp = fp; }

void log_set_level(int level) { L.level = level; }

void log_set_quiet(int enable) { L.quiet = enable ? 1 : 0; }

void log_log(int level, const char *file, int line, const char *fmt, ...) {
    va_list arg;
    int len;
    char *final_msg;
    /* Compute length of original message */
    va_start(arg, fmt);
    len = vsnprintf(NULL, 0, fmt, arg);
    va_end(arg);
    /* Allocate space for original message */
    uint32_t msg_len = (uint32_t) len + 1;
    final_msg = (char *) g_malloc((size_t) len + 1);
    /* Write original message to string */
    va_start(arg, fmt);
    vsnprintf(final_msg, (size_t)(len + 1), fmt, arg);
    va_end(arg);
    switch (level) {
    case GC_DEBUG:
        EM_ASM_(Module.Logger.debug(Module.UTF8ToString($0, $1)), final_msg, msg_len);
        break;
    case GC_INFO:
        EM_ASM_(Module.Logger.info(Module.UTF8ToString($0, $1)), final_msg, msg_len);
        break;
    case GC_ERROR:
        EM_ASM_(Module.Logger.error(Module.UTF8ToString($0, $1)), final_msg, msg_len);
        break;
    case GC_WARN:
        EM_ASM_(Module.Logger.warn(Module.UTF8ToString($0, $1)), final_msg, msg_len);
        break;
    }
    g_free(final_msg);
}
