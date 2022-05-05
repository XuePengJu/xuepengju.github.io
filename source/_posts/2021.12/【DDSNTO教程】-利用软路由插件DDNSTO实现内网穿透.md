---
title: 【DDSNTO教程】-利用软路由插件DDNSTO实现内网穿透
abbrlink: 96032b58
date: 2021-12-21 23:21:13
cover: https://gitee.com/XuePengJu/PictureDependency/raw/main/blog/cover-01/4.png
tags:
  - 博客
---

> 这个插件是由小宝大神开发的, 感谢~

> **傻 瓜 式 操 作 , 一 看 就 会 的 那 种 . . . 大 神 绕 道~** <!-- more --> 

## 一、准备条件

一台Openwrt LEDE软路由系统
微信号
要映射的主机(网站&管理后台)

## 二、开始操作

进入你的Openwrt LEDE后台Web页面, 点击酷软

 ![打开酷软中心](https://img-blog.csdnimg.cn/img_convert/c22919ee98f8f3de883ba34fd536bf22.png) 

点击未安装, 找到DDNS插件, 点击安装
等待安装完毕后, 点击这里的链接

 ![](https://img-blog.csdnimg.cn/img_convert/6287cb29e71dc08ea16143ec925f4ba1.png) 


再点击右上角的微信, 使用微信扫码登陆后, 你会发现右上角就出现了属于你的令牌, 把他输入到上图的token中即可
勾选开启ddnsto, 再点击保存, 这时候你的网络中的服务就开启了
## 三、设置映射

回到刚刚的微信登陆的网页, 点击添加域名映射

 ![添加映射](https://img-blog.csdnimg.cn/img_convert/97d4a2e51b47a9d9aa7f392e98aab1b3.png) 


成功后你, 会看到下图,这时候你可以点击这个域名, 就可以进入到你的网站啦, 如果提示还未成功, 你就等个十几秒再次刷新网页即可.

## 四、官方教程：
> https://doc.linkease.com/zh/guide/ddnsto/

 ![]( /img/ddsnto_step.png) 


## 五、声明

这种内网穿透的方法, 偏向私人访问, 因为在一个浏览器中第一次访问的话, 是要先进行微信验证才可以访问你设置的网站的. 这是为了安全考虑, 暂时没有去除的方法~

### …Over…