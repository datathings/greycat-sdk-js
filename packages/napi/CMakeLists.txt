project(greycat.binding.ts.napi)

if (CMAKE_C_COMPILER MATCHES ".*darwin.*")
    set(CMAKE_SHARED_LIBRARY_CREATE_C_FLAGS "${CMAKE_SHARED_LIBRARY_CREATE_C_FLAGS} -undefined dynamic_lookup")
    set(CMAKE_SHARED_LIBRARY_CREATE_CXX_FLAGS "${CMAKE_SHARED_LIBRARY_CREATE_CXX_FLAGS} -undefined dynamic_lookup")
endif ()

get_filename_component(FOUND_NODE_ABS "${FOUND_NODE}" REALPATH)
get_filename_component(FOUND_NODE_DIR "${FOUND_NODE_ABS}" DIRECTORY)
get_filename_component(NODE_INCLUDE "${FOUND_NODE_DIR}/../include/node" REALPATH)
set(NAPI_SOURCES
        src/c/logger.c
        src/c/common.c
        src/c/graph.c
        src/c/context.c
        src/c/object.c
        src/c/array.c
        src/c/function.c
        src/c/type.c
        src/c/map.c
        src/c/string.c
        src/c/main.c)

add_library(greycat-napi SHARED ${NAPI_SOURCES})
target_include_directories(greycat-napi PRIVATE ${GC_CORE_INCLUDES} PUBLIC ${NODE_INCLUDE})
target_link_libraries(greycat-napi greycat)
set_target_properties(greycat-napi PROPERTIES NO_SONAME ON PREFIX "" SUFFIX "" POSITION_INDEPENDENT_CODE ON)
set_target_properties(greycat-napi PROPERTIES OUTPUT_NAME greycat.node)
install(TARGETS greycat-napi DESTINATION ${CMAKE_INSTALL_PREFIX}/lib)

# if ("${CMAKE_C_COMPILER_ID}" STREQUAL "AppleClang")
#     set(CMAKE_SHARED_LIBRARY_CREATE_C_FLAGS "${CMAKE_SHARED_LIBRARY_CREATE_C_FLAGS} -undefined dynamic_lookup")
#     set(CMAKE_SHARED_LIBRARY_CREATE_CXX_FLAGS "${CMAKE_SHARED_LIBRARY_CREATE_CXX_FLAGS} -undefined dynamic_lookup")
# elseif (GREYCAT_TARGET MATCHES "^(windows-.*)$")
#     set(CMAKE_SHARED_LIBRARY_CREATE_C_FLAGS "${CMAKE_SHARED_LIBRARY_CREATE_C_FLAGS} -Wl,-unresolved-symbols=ignore-in-shared-libs")
# endif ()


# cmake_minimum_required(VERSION 3.6)
# project(greycat.napi)
# message(STATUS "NODE include ${NODE_INCLUDE}")

# configure_file("${CMAKE_CURRENT_SOURCE_DIR}/package.json.in" "${CMAKE_CURRENT_SOURCE_DIR}/package.json" NEWLINE_STYLE UNIX)
# configure_file("${CMAKE_CURRENT_SOURCE_DIR}/src/ts/common.ts.in" "${CMAKE_CURRENT_SOURCE_DIR}/src/ts/common.ts" NEWLINE_STYLE UNIX)

# # Build a shared library named after the project from the files in `src/`
# set(NAPI_SOURCES
#         src/c/logger.c
#         src/c/common.c
#         src/c/graph.c
#         src/c/context.c
#         src/c/object.c
#         src/c/array.c
#         src/c/function.c
#         src/c/type.c
#         src/c/map.c
#         src/c/string.c
#         src/c/main.c)

# add_library(greycat.napi SHARED ${NAPI_SOURCES} ${GREYCAT_EXTRA_OBJS})
# target_include_directories(greycat.napi PUBLIC ${NODE_INCLUDE})
# target_include_directories(greycat.napi PUBLIC PRIVATE ${PROJECT_SOURCE_DIR}/../../../include ${PROJECT_SOURCE_DIR}/../../../superblockindex/include)

# target_link_libraries(greycat.napi PRIVATE ${GREYCAT_EXTRA_LIBS_NO_STATIC})
# # Gives our library file a .node extension without any "lib" prefix
# set_target_properties(greycat.napi PROPERTIES NO_SONAME ON PREFIX "" SUFFIX ".node" POSITION_INDEPENDENT_CODE ON)

# if ("${CMAKE_C_COMPILER_ID}" STREQUAL "AppleClang")
#     set(CMAKE_SHARED_LIBRARY_CREATE_C_FLAGS "${CMAKE_SHARED_LIBRARY_CREATE_C_FLAGS} -undefined dynamic_lookup")
#     set(CMAKE_SHARED_LIBRARY_CREATE_CXX_FLAGS "${CMAKE_SHARED_LIBRARY_CREATE_CXX_FLAGS} -undefined dynamic_lookup")
# elseif (GREYCAT_TARGET MATCHES "^(windows-.*)$")
#     set(CMAKE_SHARED_LIBRARY_CREATE_C_FLAGS "${CMAKE_SHARED_LIBRARY_CREATE_C_FLAGS} -Wl,-unresolved-symbols=ignore-in-shared-libs")
# endif ()


# file(MAKE_DIRECTORY ${CMAKE_CURRENT_SOURCE_DIR}/lib)
# add_custom_command(TARGET greycat.napi COMMAND cp ${PROJECT_BINARY_DIR}/greycat.napi.node ${CMAKE_CURRENT_SOURCE_DIR}/lib/greycat.${GREYCAT_TARGET}.node)

# install(TARGETS greycat.napi DESTINATION ${GC_DIST_SUB}/lib)


