#!/bin/bash
set -e

VERSION_MAJOR_MINOR=`cat VERSION`
VERSION=${VERSION:-"0.0.0"}
BRANCH=${CI_COMMIT_REF_NAME:-"dev"}

echo "${VERSION_MAJOR_MINOR} / ${VERSION}"

sha256_hash=$(echo -n "$GET_GC_CI_PASS" | openssl dgst -sha256 | cut -d ' ' -f2)
base64url_token=$(echo -n "ci:$sha256_hash" | base64 -w 0)
token=$(curl -s -d "[\"${base64url_token}\", false]" -X POST https://get.greycat.io/runtime::User::login | tr -d '"')
file="dist.zip"

mkdir npm
cp dist/sdk/js/package.tgz npm/package.tgz

cd dist/sdk/js
tar --strip-components=1 -xvvf package.tgz
rm package.tgz
cd ../../
zip -r $file sdk

ROOT_URL="https://get.greycat.io/files/sdk/js"
curl -s -X PUT -H "Authorization: $token" -T $file                               "${ROOT_URL}/${BRANCH}/${VERSION_MAJOR_MINOR}/${VERSION}.zip"
curl -s -X PUT -H "Authorization: $token" -T $file                               "${ROOT_URL}/${BRANCH}/latest.zip"
curl -s -X PUT -H "Authorization: $token" -T npm/package.tgz                     "${ROOT_URL}/${BRANCH}/${VERSION_MAJOR_MINOR}/${VERSION}.tgz"
curl -s -X PUT -H "Authorization: $token" -d "${VERSION_MAJOR_MINOR}/${VERSION}" "${ROOT_URL}/${BRANCH}/latest"
