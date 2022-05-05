---
title: 【测试工具】浅度测评：requests、aiohttp、httpx 我应该用哪一个？
abbrlink: 2173e2a4
cover: https://gitee.com/XuePengJu/PictureDependency/raw/main/blog/cover-01/7.png
date: 2021-12-12 22:12:58
layout:
tags:
---

在武汉，房子里待着，不出去影响世界了，转载点文章。 <!-- more --> 

在 Python 众多的 HTTP 客户端中，最有名的莫过于requests、aiohttp和httpx。在不借助其他第三方库的情况下，requests只能发送同步请求；aiohttp只能发送异步请求；httpx既能发送同步请求，又能发送异步请求。

所谓的同步请求，是指在单进程单线程的代码中，发起一次请求后，在收到返回结果之前，不能发起下一次请求。所谓异步请求，是指在单进程单线程的代码中，发起一次请求后，在等待网站返回结果的时间里，可以继续发送更多请求。

今天我们来一个浅度测评，仅仅以多次发送 POST 请求这个角度来对比这三个库的性能。

测试使用的 HTTP 服务地址为http://122.51.39.219:8000/query，向它发送 POST 请求的格式如下图所示：

![img](https://pics6.baidu.com/feed/0b46f21fbe096b6301e3838247be9b42e9f8acfa.jpeg?token=70d39787cf58d67bf77a9106c04807a4&s=C096E73B1CA8440D18E1A5DB0000E0B3)

请求发送的 ts 字段日期距离今天大于10天，那么返回{"success": false}，如果小于等于10天，那么返回{"success": true}。

首先我们通过各个客户端使用相同的参数只发送一次请求，看看效果。

发送一次请求

**requests**

import requestsresp = requests.post('http://122.51.39.219:8000/query', json={'ts': '2020-01-20 13:14:15'}).json()print(resp)运行效果如下图所示：

![img](https://pics2.baidu.com/feed/63d9f2d3572c11df47d7597328aa7ed6f603c2f4.png?token=a37daa3c6812a2d7d1f92ffa76fd4e77&s=718A7D3B110E554D1674B0DA030050B0)

**httpx**

使用 httpx 发送同步请求：

import httpxresp = httpx.post('http://122.51.39.219:8000/query', json={'ts': '2020-01-20 13:14:15'}).json()print(resp)httpx 的同步模式与 requests 代码重合度99%，只需要把requests改成httpx即可正常运行。如下图所示：

![img](https://pics4.baidu.com/feed/faedab64034f78f02435131e32bc1653b2191cb0.png?token=e3e2e21a11fa3f55e0d73094d6b578cd&s=718A7D3B110E554D1674B0DA030050B0)

使用 httpx 发送异步请求：

import httpximport asyncioasyncdefmain():asyncwith httpx.AsyncClient() as client: resp = await client.post('http://122.51.39.219:8000/query', json={'ts': '2020-01-20 13:14:15'}) result = resp.json() print(result)asyncio.run(main())运行效果如下图所示：

![img](https://pics2.baidu.com/feed/0823dd54564e9258a5a27545d20fcd5ecdbf4e1e.png?token=53fcebbef383dda74aa8d3adea337a1d&s=7108753B111E55CC4AC19DDA0300D0B1)

**aiohttp**

import aiohttpimport asyncioasyncdefmain():asyncwith aiohttp.ClientSession() as client: resp = await client.post('http://122.51.39.219:8000/query', json={'ts': '2020-01-20 13:14:15'}) result = await resp.json() print(result)asyncio.run(main())运行效果如下图所示：

![img](https://pics1.baidu.com/feed/0824ab18972bd407aed406f4310482570fb3093f.png?token=38acd3253e87bd2f0628fbf3c4781a70&s=7B08752B111E55CC42C11DDA0300D0B1)

aiohttp 的代码与 httpx 异步模式的代码重合度90%，只不过把AsyncClient换成了ClientSession，另外，在使用 httpx 时，当你await client.post时就已经发送了请求。但是当使用aiohttp时，只有在awiat resp.json() 时才会真正发送请求。

发送100次请求

我们现在随机生成一个距离今天在5-15天的日期，发送到 HTTP接口中。如果日期距离今天超过10天，那么返回的数据的 False，如果小于等于10天，那么返回的数据是 True。

我们发送100次请求，计算总共耗时。

**requests**

在前几天的文章中，我们提到，使用requests.post每次都会创建新的连接，速度较慢。而如果首先初始化一个 Session，那么 requests 会保持连接，从而大大提高请求速度。所以在这次测评中，我们分别对两种情况进行测试。

不保持连接

import randomimport timeimport datetimeimport requestsdefmake_request(body): resp = requests.post('http://122.51.39.219:8000/query', json=body) result = resp.json() print(result)defmain(): start = time.time()for _ in range(100): now = datetime.datetime.now() delta = random.randint(5, 15) ts = (now - datetime.timedelta(days=delta)).strftime('%Y-%m-%d %H:%M:%S') make_request({'ts': ts}) end = time.time() print(f'发送100次请求，耗时：{end - start}')if __name__ == '__main__': main()运行效果如下图所示：

![img](https://pics2.baidu.com/feed/0ff41bd5ad6eddc4b5380c217356aafb506633a4.jpeg?token=8f345eb6f471f83547307a2770098fa4&s=E11A643B011ED5CE46D405DA0000C0B1)

**发送100次请求，requests 不保持连接时耗时2.7秒**

保持连接

对代码稍作修改，使用同一个 Session 发送请求：

import randomimport timeimport datetimeimport requestsdefmake_request(session, body): resp = session.post('http://122.51.39.219:8000/query', json=body) result = resp.json() print(result)defmain(): session = requests.Session() start = time.time()for _ in range(100): now = datetime.datetime.now() delta = random.randint(5, 15) ts = (now - datetime.timedelta(days=delta)).strftime('%Y-%m-%d %H:%M:%S') make_request(session, {'ts': ts}) end = time.time() print(f'发送100次请求，耗时：{end - start}')if __name__ == '__main__': main()运行效果如下图所示：

![img](https://pics2.baidu.com/feed/1e30e924b899a901c2b847365718167d0308f5b0.jpeg?token=389373396414cd3fd0c8e558d2fcf9ac&s=F008743B811ED5CE004500DA0000C0B1)

**发送100次请求，requests 保持连接耗时1.4秒**

**httpx**

同步模式

代码如下：

import randomimport timeimport datetimeimport httpxdefmake_request(client, body): resp = client.post('http://122.51.39.219:8000/query', json=body) result = resp.json() print(result)defmain(): session = httpx.Client() start = time.time()for _ in range(100): now = datetime.datetime.now() delta = random.randint(5, 15) ts = (now - datetime.timedelta(days=delta)).strftime('%Y-%m-%d %H:%M:%S') make_request(session, {'ts': ts}) end = time.time() print(f'发送100次请求，耗时：{end - start}')if __name__ == '__main__': main()运行效果如下图所示：

![img](https://pics1.baidu.com/feed/f636afc379310a55c4caf697fdc85faf8326107d.jpeg?token=32ab623d88054400cb2bd2ba44f6a743&s=50087C3BC11ED5CC18D508DA0000C0B1)

**发送100次请求，httpx 同步模式耗时1.5秒左右。**

异步模式

代码如下：

import httpximport randomimport datetimeimport asyncioimport timeasyncdefrequest(client, body): resp = await client.post('http://122.51.39.219:8000/query', json=body) result = resp.json() print(result)asyncdefmain():asyncwith httpx.AsyncClient() as client: start = time.time() task_list = []for _ in range(100): now = datetime.datetime.now() delta = random.randint(5, 15) ts = (now - datetime.timedelta(days=delta)).strftime('%Y-%m-%d %H:%M:%S') req = request(client, {'ts': ts}) task = asyncio.create_task(req) task_list.append(task)await asyncio.gather(*task_list) end = time.time() print(f'发送100次请求，耗时：{end - start}')asyncio.run(main())运行效果如下图所示：

![img](https://pics3.baidu.com/feed/1f178a82b9014a90bef4207ee4fa2514b11beeba.jpeg?token=01173500e927b2967d8da8b7e470f17a&s=4418743BC15EC5CC404128DA000010B0)

**发送100次请求，httpx 异步模式耗时0.6秒左右。**

**aiohttp**

测试代码如下：

import aiohttpimport randomimport datetimeimport asyncioimport timeasyncdefrequest(client, body): resp = await client.post('http://122.51.39.219:8000/query', json=body) result = await resp.json() print(result)asyncdefmain():asyncwith aiohttp.ClientSession() as client: start = time.time() task_list = []for _ in range(100): now = datetime.datetime.now() delta = random.randint(5, 15) ts = (now - datetime.timedelta(days=delta)).strftime('%Y-%m-%d %H:%M:%S') req = request(client, {'ts': ts}) task = asyncio.create_task(req) task_list.append(task)await asyncio.gather(*task_list) end = time.time() print(f'发送100次请求，耗时：{end - start}')asyncio.run(main())运行效果如下图所示：

![img](https://pics3.baidu.com/feed/2e2eb9389b504fc2313ebc72a950fb1791ef6df3.jpeg?token=a595216712e08dec3f155133f27e38a4&s=E4986C3AC95EE5CC4CC544DE0000C0B1)

**发送100次请求，使用 aiohttp 耗时0.3秒左右**

发送1000次请求

由于 request 保持连接的速度比不保持连接快，所以我们这里只用保持连接的方式来测试。并且不打印返回的结果。

**requests**

运行效果如下图所示：

![img](https://pics4.baidu.com/feed/359b033b5bb5c9ea40e4afa798b4aa063bf3b3f6.jpeg?token=514171994f18a98a6e7bb65e4ecff4ce&s=54087C3BD15FF5CC024548DA000080B1)

**发送1000次请求，requests 耗时16秒左右**

**httpx**

同步模式

运行效果如下图所示：

![img](https://pics6.baidu.com/feed/a1ec08fa513d26976689b5e21a76aefd4216d84e.jpeg?token=9306ad5ffa386a1d9a2227e36a4adbcf&s=D508743B915FD5CC045500DA0000C0B1)

**发送1000次请求，httpx 同步模式耗时18秒左右**

异步模式

运行效果如下图所示：

![img](https://pics0.baidu.com/feed/7aec54e736d12f2e0585c540034fc964843568a5.jpeg?token=1f6bd37b4fc444498a0e7cb32ff03378&s=4018543BD15FC1CC584520DA000080B1)

**发送1000次请求，httpx 异步模式耗时5秒左右**

**aiohttp**

运行效果如下图所示：

![img](https://pics7.baidu.com/feed/5366d0160924ab182be2692f7f77facb7a890b41.jpeg?token=1394197262765a9fda0b13fde6b4fbb9&s=4418643BD15FC1CC545564DA000080B2)

**发送1000次请求，aiohttp 耗时4秒左右**

总结

如果你只发几条请求。那么使用 requests 或者 httpx 的同步模式，代码最简单。

如果你要发送很多请求，但是有些地方要发送同步请求，有些地方要发送异步请求，那么使用 httpx 最省事。

如果你要发送很多请求，并且越快越好，那么使用 aiohttp 最快。

这篇测评文章只是一个非常浅度的评测，只考虑了请求速度这一个角度。如果你要在生产环境使用，那么你可以做更多实验来看是不是符合你的实际使用情况。

原文链接：https://baijiahao.baidu.com/s?id=1656736744425905392&wfr=spider&for=pc