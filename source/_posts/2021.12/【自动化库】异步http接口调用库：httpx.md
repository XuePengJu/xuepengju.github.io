---
title: 【自动化库】异步http接口调用库：httpx
abbrlink: b4b3bf4e
cover: https://gitee.com/XuePengJu/PictureDependency/raw/main/blog/cover-01/8.png
date: 2021-12-10 23:02:26
tags:
---

谈到http接口调用，Requests大家并不陌生，例如，robotframework-requests、HttpRunner等HTTP接口测试库/框架都是基于它开发。这里将介绍另一款http接口测试框架:httpx。

它的API和Requests高度一致。

github: https://github.com/encode/httpx

安装：

```shell
> pip install httpx
```

## httpx 简单使用

当然，它是不支持python2.x的。

- 简单的get调用

```py
import httpx

r = httpx.get("http://httpbin.org/get")
print(r.status_code)
print(r.json())
```

执行结果：

```json
200
{'args': {}, 'headers': {'Accept': '*/*', 'Accept-Encoding': 'gzip, deflate', 'Host': 'httpbin.org', 'User-Agent': 'python-httpx/0.12.1', 'X-Amzn-Trace-Id': 'Root=1-5ea5b58c-e446c44392ea090809e8a4bc'}, 'origin': '113.97.33.224', 'url': 'http://httpbin.org/get'}
```

- 带参数的post调用

```python
import httpx

payload = {'key1': 'value1', 'key2': 'value2'}
r = httpx.post("http://httpbin.org/post", data=payload)
print(r.json())
```

执行结果：

```shell
{'args': {}, 'data': '', 'files': {}, 'form': {'key1': 'value1', 'key2': 'value2'}, 'headers': {'Accept': '*/*', 'Accept-Encoding': 'gzip, deflate', 'Content-Length': '23', 'Content-Type': 'application/x-www-form-urlencoded', 'Host': 'httpbin.org', 'User-Agent': 'python-httpx/0.12.1', 'X-Amzn-Trace-Id': 'Root=1-5ea5b61d-1871d10e80b8324e48ea475e'}, 'json': None, 'origin': '113.97.33.224', 'url': 'http://httpbin.org/post'}
```

你会发现这几乎和requests一模一样，只不过把requests 换成了httpx。

## httpx 异步调用

接下来认识httpx的异步调用：

```python
import httpx
import asyncio


async def main():
    async with httpx.AsyncClient() as client:
        resp = await client.get('http://httpbin.org/get')
        result = resp.json()
        print(result)


asyncio.run(main())
```

这里用到了async 、await， asyncio等，等参考我关于python异步I/O的基础介绍：https://www.cnblogs.com/fnng/p/12757395.html

## 异步的调用的优势

我们发现，采用异步会让接口的调用更加复杂，那为什么还要使用异步呢？当你要调用1000次接口时，那么异步调用可以让你的调用更快。接下来我们通过简单让例子进行对比。

以我flask开发的简单接口为例子：

https://github.com/defnngj/learning-API-test

> 为了测试的更加准确性，我将flask服务部署在了另一台电脑，测试机与被测服务分离。

- httpx 同步调用

```py
# 同步调用
import time
import httpx


def make_request(client):
    resp = client.get('http://192.168.0.7:5000')
    result = resp.json()
    # print(result)
    assert result["code"] == 10200

def main():
    session = httpx.Client()

    # 1000 次调用
    for _ in range(1000):
        make_request(session)


if __name__ == '__main__':
    # 开始
    start = time.time()
    main()
    # 结束
    end = time.time()
    print(f'同步：发送1000次请求，耗时：{end - start}')
```

结果：

```
...
同步：发送1000次请求，耗时：52.948561906814575
```

- httpx 异步调用

```py
# 异步调用
import httpx
import asyncio
import time

async def request(client):
    resp = await client.get('http://192.168.0.7:5000')
    result = resp.json()
    # print(result)
    assert result["code"] == 10200


async def main():
    async with httpx.AsyncClient() as client:
        # # 开始
        # start = time.time()

        # 1000 次调用
        task_list = []
        for _ in range(1000):
            req = request(client)
            task = asyncio.create_task(req)
            task_list.append(task)
        await asyncio.gather(*task_list)


if __name__ == "__main__":
    #开始
    start = time.time()
    asyncio.run(main())
    # 结束
    end = time.time()
    print(f'异步：发送1000次请求，耗时：{end - start}')
```

结果:

```
...
异步：发送1000次请求，耗时：3.903275728225708
```

将httpx用于请求端，同步与异步请求差距非常明显。

以上的例子已经放到 learning-API-test github项目

## 总结

*　这里只是拿 flask 非异步框架做为接口服务端进行对比，如果如果将接口服务同样换作前面介绍的 snaic 异步框架，上面的两组测试对比并不明显（snaic的异步接口服务处理同步请求更快），在安装 snaic的时候会发现，他同样也集成了 httpx 库。

*　为什么要学习异步，因为我们公司有很多接口是异步调用的，所以，我想真正搞懂这个概念，就这么简单！保持在工作中对技术的好奇心。

- 异步与多线程的区别？这是我在学习 异步时候的一个疑问，我找到了一个比较形象的例子。

> 以火车站购票场景为例：一个火车站为一个进程，一个窗口和售票员的组合为一个线程：

> - 多线程：火车站开了N个窗口售票员，我们去买票，会有工作人员（CPU）指定我们去某个窗口买票，你被安排到某个窗口后，告诉售票员你的请求（咨询或买票），售票员执行操作，如果这个过程中发送的阻塞，也是窗口售票员的阻塞（比如查票的过程），但是因为你开了很多个窗口，其他买票的人可以被安排去另外的空闲窗口，如果所有窗口都满了，工作人员就不会给你安排了，直到有空的窗口出来；
> - 多进程（并行）：建多个火车站售票，火车站与火车站间互不影响，看买票的自己想去哪里（这里不讨论负载均衡）；
> - 异步：火车站只有一个窗口售票员，但是窗口前有一个登记台（事件循环），你把你想买的票告诉给登记台，并留下你的手机（回调函数），然后你就可以走了，由于登记台只是登记了你的请求，并没有做任何其他操作，所以这个耗时基本忽略不计的。之后售票员处理完了上一个任务了，就会自己去登记台取剩下的未完成的任务，直到取到你的任务，操作完后，有票没票都会通过手机通知你，如果有票还会往你的手机发车票的二维码；