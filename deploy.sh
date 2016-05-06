#!/usr/bin/env bash
# This bash file will deploy the dist folder to the project gh-page
set -e

# Base directory for this entire project
BASEDIR=$(cd $(dirname $0) && pwd)

# install npm and run gulp
npm install

# Create a new Git repo in dist folder, set user details, and issue first commit & force push
cd "$BASEDIR/dist"
git init
git config user.name "iAyeBot"
git config user.email "iayebot@websemantics.ca"
git add .
git commit -m "Publish to gh-pages"
git push --force --quiet "https://${GH_TOKEN}@${GH_REF}" master:gh-pages > /dev/null 2>&1
