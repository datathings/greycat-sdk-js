cmake_minimum_required(VERSION 3.6)
project(greycat.ts.debugger)

configure_file("${CMAKE_CURRENT_SOURCE_DIR}/package.json.in" "${CMAKE_CURRENT_SOURCE_DIR}/package.json" NEWLINE_STYLE UNIX)