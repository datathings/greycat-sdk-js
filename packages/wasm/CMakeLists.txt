cmake_minimum_required(VERSION 3.6)
project(greycat.binding.ts.wasm)

get_filename_component(EMCC_PATH ${FOUND_EMCC} DIRECTORY)

# When you modify this, remember to update src/ts/addon-api.ts
set(exported_functions
        main

        object__json
        object__set_long
        object__type
        object__type_key
        object__graph
        object__to_json
        object__key_type
        gobject__un_mark
        gobject__set_double
        gobject__set_int
        gobject__set_long
        gobject__set_null
        gobject__set_bool
        gobject__set_object
        gobject__get_double
        gobject__get_int
        gobject__get_uint
        gobject__get_long
        gobject__get_ulong
        gobject__get_float
        gobject__get_bool
        gobject__get_object

        gstring__add_raw_string
        gstring__prepare
        gstring__reset
        gstring__get
        gstring__close
        gstring__size
        string__set_size
        string__copy

        type__create
        type__name
        type__key
        type__is_open
        type__seal
        type__graph
        type__declare_attribute
        type__declare_function
        type__declare_static_int
        type__declare_static_bool
        type__declare_static_long
        type__declare_static_null
        type__declare_static_object
        type__declare_static_double

        graph__create
        ggraph__create_context
        ggraph__create_function
        ggraph__create_string
        ggraph__create_open_object
        ggraph__create_array
        ggraph__create_type
        ggraph__create_map
        ggraph__enable_debug
        ggraph__disable_debug
        ggraph__is_meta
        ggraph__declare_meta
        ggraph__add_plugin
        ggraph__declare_type
        ggraph__type
        ggraph__destroy
        ggraph_export_types
        ggraph__meta
        ggraph__parse
        ggraph__configure_plugin
        graph__size_heap
        graph__size_cache
        graph__log_error
        graph__log_warning
        graph__log_info
        graph__useMeta

        ctx__wrap
        ctx__get_type
        ctx__set_long
        gctx__prepare
        gctx__execute_prepared
        gctx__ordinal
        gctx__set_double
        gctx__set_int
        gctx__set_long
        gctx__set_null
        gctx__set_bool
        gctx__set_object
        gctx__get_double
        gctx__get_int
        gctx__get_uint
        gctx__get_long
        gctx__get_ulong
        gctx__get_float
        gctx__get_bool
        gctx__get_object
        gctx__json

        array__offset_type
        array__set_long
        array__add_long
        array__graph
        garray__size
        garray__resize

        garray__get_bool
        garray__get_int
        garray__get_uint
        garray__get_long
        garray__get_ulong
        garray__get_float
        garray__get_double
        garray__get_object

        garray__set_int
        garray__set_double
        garray__set_bool
        garray__set_null
        garray__set_object

        garray__add_int
        garray__add_double
        garray__add_bool
        garray__add_null
        garray__add_object

        function__name
        function__set_key
        function__parse
        function__pipe
        function__pipe_external
        function__execute
        function__create_context
        function__add_mparam
        function__add_param

        params__create
        params__add_int
        params__add_long
        params__add_double
        params__add_bool
        params__add_string
        params__add_null
        params__add_object
        params__destroy

        gobject__set_null
        gobject__set_double
        gobject__set_int
        gobject__set_long
        gobject__get_slot

        map__graph
        map__get
        map__mget
        map__set
        map__put
        map__remove
        map__size
        map__foreach

        gslot__from_int
        gslot__from_uint
        gslot__from_float
        gslot__from_long
        gslot__from_ulong
        gslot__from_double
        gslot__from_bool
        gslot__from_object
        gslot__from_reference
        gslot__get_bool
        gslot__get_int
        gslot__get_uint
        gslot__get_long
        gslot__get_ulong
        gslot__get_float
        gslot__get_double
        gslot__get_object

        slotntype__create
        slotntype__value
        slotntype__type

        ptype__to
)

# When you modify this, remember to update src/ts/addon-api.ts
set(extra_exported_functions stringToUTF8 allocateUTF8 UTF8ToString getTempRet0)

#Prepare EMCC options
FUNCTION(PREPARE var)
    SET(listVar "")
    FOREACH (f ${ARGN})
        LIST(APPEND listVar "'_${f}'")
    ENDFOREACH (f)
    SET(${var} "${listVar}" PARENT_SCOPE)
ENDFUNCTION(PREPARE)
PREPARE(exported_functions_quoted ${exported_functions})
set(exported_functions_flat "\"[${exported_functions_quoted}]\"")
string(REGEX REPLACE ";" "," exported_functions_flat ${exported_functions_flat})

FUNCTION(PREPARE_NOP var)
    SET(listVar "")
    FOREACH (f ${ARGN})
        LIST(APPEND listVar "'${f}'")
    ENDFOREACH (f)
    SET(${var} "${listVar}" PARENT_SCOPE)
ENDFUNCTION(PREPARE_NOP)
PREPARE_NOP(extra_exported_functions_quoted ${extra_exported_functions})
set(extra_exported_functions_flat "\"[${extra_exported_functions_quoted}]\"")
string(REGEX REPLACE ";" "," extra_exported_functions_flat ${extra_exported_functions_flat})

#Prepare EMCC sources
set(TS_SOURCES
        src/c/common.c
        src/c/slot.c
        src/c/ctx.c
        src/c/glog.c
        src/c/graph.c
        src/c/main.c
        src/c/array.c
        src/c/map.c
        src/c/function.c
        src/c/object.c
        src/c/params.c
        src/c/string.c
        src/c/type.c)
#For IDE purpose

#include_directories(${EMCC_PATH}/system/include)
#add_library(greycat.wasm ${TS_SOURCES})
#target_link_libraries(greycat.wasm greycat)

set(FQN_SRC_FILES "")
FOREACH (f ${CORE_SOURCES})
    set(FILE_TEMP ${GC_CORE_SRC_PATH}/../${f})
    get_filename_component(FILE_EXT "${FILE_TEMP}" EXT)
    if (FILE_EXT STREQUAL ".c")
        if (f STREQUAL "src/greycat/glog.c")
        else ()
            get_filename_component(FQN_SRC_FILE "${FILE_TEMP}" REALPATH)
            LIST(APPEND FQN_SRC_FILES ${FQN_SRC_FILE})
        endif ()
    endif ()
ENDFOREACH (f)

FOREACH (f ${CORE_SOURCES_EXTRA})
    set(FILE_TEMP ${f})
    get_filename_component(FILE_EXT "${FILE_TEMP}" EXT)
    if (FILE_EXT STREQUAL ".c")
        get_filename_component(FQN_SRC_FILE "${FILE_TEMP}" REALPATH)
        LIST(APPEND FQN_SRC_FILES ${FQN_SRC_FILE})
    endif ()
    if (FILE_EXT STREQUAL ".cpp")
        get_filename_component(FQN_SRC_FILE "${FILE_TEMP}" REALPATH)
        LIST(APPEND FQN_SRC_FILES ${FQN_SRC_FILE})
    endif ()
ENDFOREACH (f)

FOREACH (f ${TS_SOURCES})
    get_filename_component(FQN_SRC_FILE ${f} REALPATH)
    LIST(APPEND FQN_SRC_FILES ${FQN_SRC_FILE})
ENDFOREACH (f)

file(MAKE_DIRECTORY ${CMAKE_CURRENT_SOURCE_DIR}/lib)

get_filename_component(GC_CORE_INCLUDE_PATH ${GC_CORE_SRC_PATH}/../include REALPATH)
get_filename_component(GC_SBI_INCLUDE_PATH ${GC_CORE_SRC_PATH}/../superblockindex/include REALPATH)

# compile Wasm Web
add_custom_target(greycat.wasm ALL COMMAND
    ${FOUND_EMCC}
    -Werror # warnings are errors
    -O0 # -O0 is for DEBUG, -O2 is the minimum for release
    -g4 # this is the highest debug level => turned off by default when -O1 is set or higher
    --source-map-base /
    -s ASSERTIONS=2 # emits code to show useful error messages for not exported methods
    -s SAFE_HEAP=1 # memory access checks, clear errors for problems like dereferencing 0 and memory alignment issues
    -s FILESYSTEM=0 # do not include FS code in JS (besides the least necessary for printf and such)
    -s ENVIRONMENT=\"worker,web\"
    -s USE_ES6_IMPORT_META=0
    -s EXPORT_ES6=1
    -s NO_EXIT_RUNTIME=1
    -s WASM=1
    -s ALLOW_MEMORY_GROWTH=1
    -s MODULARIZE=1
    -s EXPORTED_FUNCTIONS=${exported_functions_flat}
    -s EXTRA_EXPORTED_RUNTIME_METHODS=${extra_exported_functions_flat}
    -DMDB_USE_ROBUST=0
    -I${GC_CORE_SRC_PATH}
    -I${GC_CORE_INCLUDE_PATH}
    -I${GC_SBI_INCLUDE_PATH}
    -I${GC_DEPS}/${GREYCAT_TARGET}/include
    -o greycat.js
    ${FQN_SRC_FILES})

add_custom_command(TARGET greycat.wasm COMMAND cp ${CMAKE_CURRENT_BINARY_DIR}/greycat.js ${CMAKE_CURRENT_SOURCE_DIR}/lib/greycat.js)
add_custom_command(TARGET greycat.wasm COMMAND cp ${CMAKE_CURRENT_BINARY_DIR}/greycat.wasm ${CMAKE_CURRENT_SOURCE_DIR}/lib/greycat.wasm)