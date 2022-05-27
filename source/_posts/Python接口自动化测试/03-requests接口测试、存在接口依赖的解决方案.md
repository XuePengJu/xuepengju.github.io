---
layout: post
title: 03 requests接口测试、存在接口依赖的解决方案
tags:
  - Python接口自动化测试
categories:
  - Python接口自动化测试
abbrlink: 6eec70c5
date: 2022-05-10 20:03:52
---

## 工作过程中，遇到接口参数依赖其他接口的情况该怎么处理呢？
下面我这边记录下我的一些方案：
- 把依赖的接口返回写到python环境变量里面或者写到系统环境变量，方便后续接口调用
- 也可以写到目录下的一个文件内，都是可以的<!-- more -->
## 目前以写到python环境变量举例

```python
#!/usr/bin/env python
# -*- coding: utf-8 -*-
# @Time : 2022/5/25 22:50
# @Author : 夏见。
# @File : 接口返回写入环境变量应用.py
import os
import requests

host = "http://api.mypeng.site:8080"


class Demo:
    # 登录后获取token和member_id
    def login(self, user, password):
        login_path = "/futureloan/member/login"

        url = host + login_path
        res = requests.post(url=url,
                            headers={
                                "X-Lemonban-Media-Type": "lemonban.v2"
                            },
                            json={
                                "mobile_phone": user,
                                "pwd": password
                            })
        jsondata = res.json()
        if jsondata["code"] == 0:
            # print(jsondata.get("data").get("token_info").get("token"))
            __token = jsondata["data"]["token_info"]["token_type"] + " " + jsondata["data"]["token_info"]["token"]
            # 设置环境变量
            os.environ['token'] = __token
            # todo 优化数据类型只能是str的问题
            os.environ['member_id'] = str(jsondata["data"]["id"])

    def recharge(self, __token, __member_id):
        recharge_path = "/futureloan/member/recharge"
        url = host + recharge_path
        res = requests.post(url=url,
                            headers={
                                "X-Lemonban-Media-Type": "lemonban.v2",
                                "Authorization": __token  # 如果没有token，就无法充值,必须要去调用登录获取到token
                            },
                            json={
                                "member_id": __member_id,  # 用户的ID也需要登录才能获取到。
                                "amount": "100"
                            }
                            )

        if res.json()["code"] == 0:
            print("充值成功")
        else:
            print("充值失败")


if __name__ == '__main__':
    demo = Demo()
    demo.login("13166077171", "1234567@")  # 登录并且把token和member_id写到环境变量
    # 写到环境变量后就可以跨包去使用变量
    member_id = os.environ.get("member_id")  # 从环境变量获取member_id
    token = os.environ.get("token")  # 从环境变量获取token
    demo.recharge(token, member_id)

```
接口是自己搭建的，不要批量请求呀。