#include <emscripten/emscripten.h>

int main() {
    EM_ASM(Module.__pointers = {});
    emscripten_exit_with_live_runtime();
    return 0;
}