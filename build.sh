#!/bin/bash
set -ex

VERSION=${VERSION:-"0.0.0"}

rm -rf dist

sed -i -e "s/\"version\":\\s*\"0.0.0\"/\"version\": \"${VERSION}\"/g" package.json

pnpm install
pnpm test
pnpm build

mkdir -p dist/sdk/js

# sdk/js/greycat-sdk.tgz
pnpm pack
mv greycat-sdk*.tgz dist/sdk/js/package.tgz

# sdk/js/greycat.sdk.min.js
mv dist/bundle/greycat.sdk.min.js dist/sdk/js/

rm -rf dist/esm dist/bundle