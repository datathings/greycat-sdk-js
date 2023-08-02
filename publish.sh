#!/bin/bash
set -ex

VERSION_MAJOR_MINOR=`cat VERSION`
VERSION_SIMPLE=`git2version -s`

echo "${VERSION_MAJOR_MINOR} / ${VERSION_SIMPLE}"

sha256_hash=$(echo -n "$GET_GC_CI_PASS" | openssl dgst -sha256 | cut -d ' ' -f2)
base64url_token=$(echo -n "ci:$sha256_hash" | base64 -w 0 )
token=$(curl -s -d "[\"${base64url_token}\", false]" -X POST https://get.greycat.io/runtime::User::login | tr -d '"')

cd dist

file="dist.zip"
zip -r $file sdk

curl -s -X PUT -H "Authorization: $token" -T $file "https://get.greycat.io/files/sdk/js/${CI_COMMIT_REF_NAME}/${VERSION_MAJOR_MINOR}/${VERSION_SIMPLE}.zip"
curl -s -X PUT -H "Authorization: $token" -T $file "https://get.greycat.io/files/sdk/js/${CI_COMMIT_REF_NAME}/latest.zip"
