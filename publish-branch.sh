#!/bin/bash

PUBLISH_DIR='.publish_dir'
PUBLISH_ORIGIN=$(git remote get-url origin)
PUBLISH_BRANCH='latest'

cp -r build/package $PUBLISH_DIR
cd $PUBLISH_DIR

git init
git remote add origin $PUBLISH_ORIGIN

git add --all
git commit -m 'Published package'
git push origin master:$PUBLISH_BRANCH --force

cd ..
rm -rf $PUBLISH_DIR
