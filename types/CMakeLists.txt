cmake_minimum_required(VERSION 3.6)
project(greycat.ts.types)

configure_file("${CMAKE_CURRENT_SOURCE_DIR}/package.json.in" "${CMAKE_CURRENT_SOURCE_DIR}/package.json" NEWLINE_STYLE UNIX)

# Generate lib/keys.js
execute_process(COMMAND cc ${CMAKE_CURRENT_SOURCE_DIR}/src/c/generate_keys.c -std=c11 -o ${CMAKE_BINARY_DIR}/greycat_keys_generator_ts)
get_filename_component(GC_CORE_KEYS_PATH "${GC_CORE_SRC_PATH}/greycat/common/gkeys.txt" REALPATH)
execute_process(COMMAND
        ${CMAKE_BINARY_DIR}/greycat_keys_generator_ts
        ${GC_CORE_KEYS_PATH}
        ${CMAKE_CURRENT_SOURCE_DIR}/src/ts/keys.ts
        ${CMAKE_CURRENT_SOURCE_DIR}/src/ts/metakeys.ts)