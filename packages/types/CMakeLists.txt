# project(greycat.bindings.ts.types)

add_executable(greycat_ts_keys ${CMAKE_CURRENT_SOURCE_DIR}/generator/ts_keys.c)
install(TARGETS greycat_ts_keys DESTINATION ${CMAKE_INSTALL_PREFIX}/tools)