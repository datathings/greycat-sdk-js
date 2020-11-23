project(greycat.binding.ts.native)

if (CMAKE_C_COMPILER MATCHES ".*darwin.*")
    set(CMAKE_SHARED_LIBRARY_CREATE_C_FLAGS "${CMAKE_SHARED_LIBRARY_CREATE_C_FLAGS} -undefined dynamic_lookup")
    set(CMAKE_SHARED_LIBRARY_CREATE_CXX_FLAGS "${CMAKE_SHARED_LIBRARY_CREATE_CXX_FLAGS} -undefined dynamic_lookup")
endif ()

get_filename_component(FOUND_NODE_ABS "${FOUND_NODE}" REALPATH)
get_filename_component(FOUND_NODE_DIR "${FOUND_NODE_ABS}" DIRECTORY)
get_filename_component(NODE_INCLUDE "${FOUND_NODE_DIR}/../include/node" REALPATH)
set(NAPI_SOURCES
        src/logger.c
        src/common.c
        src/graph.c
        src/context.c
        src/object.c
        src/array.c
        src/function.c
        src/type.c
        src/map.c
        src/string.c
        src/addon.c)

add_library(greycat-native SHARED ${NAPI_SOURCES})
target_include_directories(greycat-native PRIVATE ${GC_CORE_INCLUDES} PUBLIC ${NODE_INCLUDE})
target_link_libraries(greycat-native greycat)
set_target_properties(greycat-native PROPERTIES NO_SONAME ON PREFIX "" SUFFIX "" POSITION_INDEPENDENT_CODE ON)
set_target_properties(greycat-native PROPERTIES OUTPUT_NAME greycat.node)
install(TARGETS greycat-native DESTINATION ${CMAKE_INSTALL_PREFIX}/lib)