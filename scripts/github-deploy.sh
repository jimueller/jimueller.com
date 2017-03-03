#!/usr/bin/env bash
set -e # halt script on error

#Hugo output directory
cd public

# Add Github Pages CNAME file
echo ${BASE_URL} > CNAME

# Commit and push built site to gh-pages branch
git init

git config user.name "Travis CI"
git config user.email "jimueller@users.noreply.github.com"

git add .
git commit -m "CIDeploy- Build:${TRAVIS_BUILD_NUMBER}, Commits:${TRAVIS_COMMIT_RANGE}"

# We redirect any output to
# /dev/null to hide any sensitive credential data that might otherwise be exposed.
git push --force --quiet "https://${GH_TOKEN}@${GIT_DEPLOY_TARGET}" master:gh-pages > /dev/null 2>&1