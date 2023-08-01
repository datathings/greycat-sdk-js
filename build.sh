#!/bin/bash
set -ex

rm -rf dist

pnpm install
pnpm build

mkdir -p dist/sdk/js

# sdk/js/greycat-sdk.tgz
pnpm pack
mv greycat-sdk*.tgz dist/sdk/js/package.tgz

# sdk/js/greycat.sdk.min.js
mv dist/bundle/greycat.sdk.min.js dist/sdk/js/

rm -rf dist/esm dist/bundle