rm -rf node_modules && cnpm install --force
timeout /T 1
cnpm remove hexo-baidu-url-submit
timeout /T 1
cnpm install hexo-gitbackup --save
cnpm install hexo-abbrlink --save
pause
