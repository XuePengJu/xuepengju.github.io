rm -rf node_modules && npm install --force
timeout /T 1
npm remove hexo-baidu-url-submit
timeout /T 1
npm install hexo-gitbackup --save
npm install hexo-abbrlink --save
pause
