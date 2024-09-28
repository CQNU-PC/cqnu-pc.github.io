#!/usr/bin/env sh
# 确保脚本抛出遇到的错误
set -e

msg=$(git log -1 --pretty=format:'%s' --abbrev-commit | awk -F ':' '{print " " $0}')
if [ "${msg:1:12}" = "auto update" ]
then
  exit 0
fi

# deploy to github
if [ -z "$GITHUB_TOKEN" ]; then
  msg='deploy'
  githubUrl=git@github.com:cqnu-pc/cqnu-pc.github.io.git
else
  msg='来自github action的自动部署'
  githubUrl=https://cqnu-pc:${GITHUB_TOKEN}@github.com/cqnu-pc/cqnu-pc.github.io.git
  git config --global user.name "cqnu-pc"
  git config --global user.email "2020051615308@stu.cqnu.edu.com"
fi

git pull $githubUrl main

git checkout main

npm audit fix
npm run build # 生成静态文件

git add -A
git commit -m "auto update"
git push $githubUrl main

cd docs/.vuepress/dist # 进入生成的文件夹

git init
git add -A
git commit -m "${msg}"
git fetch
git branch -m gh-pages
git push -f $githubUrl gh-pages # 推送到github


cd -
rm -rf docs/.vuepress/dist
