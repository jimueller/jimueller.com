#!/usr/bin/env bash
set -e # halt script on error

echo "Deploying -- variables"
echo "Commit Range: ${TRAVIS_COMMIT_RANGE}"
echo "Build: ${TRAVIS_BUILD_NUMBER}"
echo "Git Deploy Target: ${GIT_DEPLOY_TARGET}"
echo "Git Remote Branch: ${GIT_REMOTE_BRANCH}"
echo ${GIT_REMOTE_BRANCH}


cd _site
git init

git config user.name "Travis CI"
git config user.email "jimueller@users.noreply.github.com"

git add .
git commit -m "Deploy - Commit: ${TRAVIS_COMMIT_RANGE}, Build: ${TRAVIS_BUILD_NUMBER}"

# We redirect any output to
# /dev/null to hide any sensitive credential data that might otherwise be exposed.
git push --force --quiet "https://${GH_TOKEN}@${GIT_DEPLOY_TARGET}" master:gh-pages > /dev/null 2>&1
