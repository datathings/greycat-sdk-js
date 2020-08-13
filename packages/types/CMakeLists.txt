# project(greycat.bindings.ts.types)

add_executable(greycat_ts_keys ${CMAKE_CURRENT_SOURCE_DIR}/generator/ts_keys.c)
install(TARGETS greycat_ts_keys DESTINATION ${CMAKE_INSTALL_PREFIX}/tools)
# execute_process(COMMAND cc ${CMAKE_CURRENT_SOURCE_DIR}/generator/ts_keys.c -std=c11 -o ${CMAKE_BINARY_DIR}/greycat_ts_keys)
# execute_process(COMMAND mkdir -p ${CMAKE_BINARY_DIR}/bindings/ts/packages/types/gen/src)
# execute_process(COMMAND
#     ${CMAKE_BINARY_DIR}/greycat_ts_keys
#     ${CMAKE_CURRENT_SOURCE_DIR}/../../../../src/greycat/common/gkeys.txt
#     ${CMAKE_BINARY_DIR}/bindings/ts/packages/types/gen/src/keys.ts
#     ${CMAKE_BINARY_DIR}/bindings/ts/packages/types/gen/src/metakeys.ts
# )