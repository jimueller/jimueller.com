#!/usr/bin/env bash
set -e # halt script on error


cd _site
git init

git config user.name "Travis CI"
git config user.email "jimueller@users.noreply.github.com"

git add .
git commit -m "Deploy - Commit: ${TRAVIS_COMMIT_RANGE}, Build: ${TRAVIS_BUILD_NUMBER}"

# We redirect any output to
# /dev/null to hide any sensitive credential data that might otherwise be exposed.
git push --force --quiet "https://${GH_USER}:${GH_OAUTH}@${GIT_DEPLOY_TARGET}" master:${GIT_REMOTE_BRANCH} > /dev/null 2>&1
