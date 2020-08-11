project(greycat.binding.ts)

find_program(FOUND_NODE node)
if (FOUND_NODE)
    get_filename_component(FOUND_NODE_ABS "${FOUND_NODE}" REALPATH)
    get_filename_component(FOUND_NODE_DIR "${FOUND_NODE_ABS}" DIRECTORY)
    get_filename_component(NODE_INCLUDE "${FOUND_NODE_DIR}/../include/node" REALPATH)
    set(NAPI_SOURCES
            napi/src/c/logger.c
            napi/src/c/common.c
            napi/src/c/graph.c
            napi/src/c/context.c
            napi/src/c/object.c
            napi/src/c/array.c
            napi/src/c/function.c
            napi/src/c/type.c
            napi/src/c/map.c
            napi/src/c/string.c
            napi/src/c/main.c)

    add_library(greycat-napi SHARED ${NAPI_SOURCES})
    target_include_directories(greycat-napi PRIVATE ${GC_CORE_INCLUDES} PUBLIC ${NODE_INCLUDE})
    target_link_libraries(greycat-napi greycat)
    set_target_properties(greycat-napi PROPERTIES NO_SONAME ON PREFIX "" SUFFIX ".node" POSITION_INDEPENDENT_CODE ON)
    install(TARGETS greycat-napi DESTINATION ${CMAKE_INSTALL_PREFIX}/lib)

else ()
    message(STATUS "no nodejs binary: ts binding disabled")
endif ()

#
#cmake_minimum_required(VERSION 3.6)
#project(greycat.ts)
#
#get_filename_component(GC_CORE_SRC_PATH "${CMAKE_CURRENT_SOURCE_DIR}/../../src" REALPATH)
#if (GREYCAT_DISTRIBUTION STREQUAL "core")
#  set(TS_SCOPE_PREFIX "")
#else ()
#  set(TS_SCOPE_PREFIX "-${GREYCAT_DISTRIBUTION}")
#endif ()
#
#configure_file("${CMAKE_CURRENT_SOURCE_DIR}/tsconfig.json.in" "${CMAKE_CURRENT_SOURCE_DIR}/tsconfig.json" NEWLINE_STYLE UNIX)
#
#add_subdirectory(types)
#
#find_program(FOUND_NODE node)
#if (FOUND_NODE)
#  get_filename_component(FOUND_NODE_ABS "${FOUND_NODE}" REALPATH)
#  get_filename_component(FOUND_NODE_DIR "${FOUND_NODE_ABS}" DIRECTORY)
#  get_filename_component(NODE_INCLUDE "${FOUND_NODE_DIR}/../include/node" REALPATH)
#
#  find_program(FOUND_YARN yarn)
#  if (FOUND_YARN)
#    add_subdirectory(common)
#    add_subdirectory(napi)
#    add_subdirectory(debugger)
#    add_subdirectory(cli)
#    add_subdirectory(tests)
#
#    set(SKIP_WASM false CACHE STRING "build without wasm")
#    if (NOT SKIP_WASM)
#      find_program(FOUND_EMCC emcc)
#      if (FOUND_EMCC)
#        add_subdirectory(wasm)
#      else ()
#        message(STATUS "EMCC not found: WASM target disabled")
#      endif ()
#    endif()
#
#  else ()
#    message(STATUS "Yarn not found: TS targets disabled")
#  endif ()
#else ()
#  message(STATUS "Node.js not found: TS targets disabled")
#endif ()