#!/bin/bash
rm -rf node_modules && npm install --force

npm remove hexo-baidu-url-submit

npm install hexo-gitbackup --save
npm install hexo-abbrlink --save
pause
