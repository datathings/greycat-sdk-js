#!/bin/bash
set -ex

pnpm install
pnpm build

mkdir -p dist2/sdk/js

# sdk/js/greycat-sdk.tgz
pnpm pack
mv greycat-sdk*.tgz dist2/sdk/js/

# sdk/js/greycat.sdk.min.js
mv dist/bundle/greycat.sdk.min.js dist2/sdk/js/

rm -rf dist
mv dist2 dist