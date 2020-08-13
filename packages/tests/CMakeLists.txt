cmake_minimum_required(VERSION 3.6)
project(greycat.ts.tests)

configure_file("${CMAKE_CURRENT_SOURCE_DIR}/package.json.in" "${CMAKE_CURRENT_SOURCE_DIR}/package.json" NEWLINE_STYLE UNIX)
configure_file("${CMAKE_CURRENT_SOURCE_DIR}/src/greycat.ts.in" "${CMAKE_CURRENT_SOURCE_DIR}/src/greycat.ts" NEWLINE_STYLE UNIX)