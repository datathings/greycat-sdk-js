#!/bin/bash
set -ex

VERSION=${VERSION:-"0.0.0"}

rm -rf dist

sed -i -e "s/\"version\":\\s*\"0.0.0\"/\"version\": \"${VERSION}\"/g" package.json

pnpm install
pnpm test
pnpm build
pnpm pack

mkdir -p dist/sdk/js

mv greycat-sdk*.tgz dist/sdk/js/package.tgz
mv dist/greycat.sdk.js dist/greycat.sdk.min.js dist/sdk/js/

rm -rf dist/types