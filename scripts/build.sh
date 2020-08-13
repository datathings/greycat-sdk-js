#!/bin/bash

yarn workspace @greycat/types build && \
    yarn workspace @greycat/common build && \
    yarn workspace @greycat/napi build