project(greycat.binding.ts)

find_program(FOUND_NODE node)
if (FOUND_NODE)
    add_subdirectory(packages/types)
    add_subdirectory(packages/napi)
else ()
    message(STATUS "no Node.js binary: ts binding disabled")
endif ()