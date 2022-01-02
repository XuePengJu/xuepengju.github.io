---
title: 【测试理论】什么是Topic
tags:
  - MQ
abbrlink: 3457ed69
date: 2021-12-01 22:00:00
---
# 什么是Topic

Topic是消息发布（Pub）者和订阅（Sub）者之间的传输中介。设备可通过Topic实现消息的发送和接收，从而实现服务端与设备端的通信。为方便海量设备基于Topic进行通信，简化授权操作，物联网平台定义了产品Topic类和设备Topic。本文介绍产品和设备Topic的定义、使用和分类。

## Topic定义

产品Topic类：产品维度的Topic，是同一产品下不同设备的Topic集合。一个Topic类对一个**ProductKey**下所有设备通用。

以下是Topic类的使用说明：

- 定义Topic的功能。

  Topic类格式以正斜线（/）进行分层，区分每个类目。例如：`/${productKey}/${deviceName}/user/update`。

  其中，${productKey}和${deviceName}两个类目为既定类目；后缀和前缀类目用于区分不同功能的消息。

  - ${productKey}

    表示产品的标识符

    ProductKey

    。

    在指定产品的Topic类中，需替换为实际的**ProductKey**值。

  - ${deviceName}

    表示设备名称（

    DeviceName

    ）。

    在产品Topic类中，${deviceName}是该产品下所有设备的名称变量，不需要替换为实际设备名称。

- 定义Topic的操作权限。

  - **发布**：产品下设备可以往该Topic发布消息。
  - **订阅**：产品下设备可以订阅该Topic，从而获取消息。
  - **发布和订阅**：同时具备**发布**和**订阅**的操作权限。

在产品Topic类基础上，使用`${productKey}/${deviceName}`通配一个唯一的设备，与前缀、后缀类目组成的完整Topic，就是具体的设备Topic。

设备Topic与产品Topic类格式一致，区别在于Topic类中的变量${deviceName}，在设备Topic中是具体的设备名称（**DeviceName**）。

例如产品`a19mzPZ***`下设备`device1`和`device2`的具体Topic如下：

- `/a19mzPZ****/device1/user/update`。
- `/a19mzPZ****/device2/user/update`。

产品Topic类定义的功能和操作权限，会映射到具体的设备Topic。以下是设备Topic的使用说明：

- 具体的设备Topic可用于消息通信。

- **注意** 在进行上下行通信调试时，请确保指定的Topic具备对应的操作权限。

- 指定的设备Topic只能被指定设备用于消息通信。

  例如，Topic：`/a19mzPZ****/device1/user/update`归属于设备device1，只能被设备device1用于发布或订阅消息，而不能被设备device2用于发布或订阅消息。

- 您可管控单个设备的消息收发。

  您可在[物联网平台控制台](https://iot.console.aliyun.com/)对应实例下的**设备列表**页面，或在服务端调用[DisableThing](https://help.aliyun.com/document_detail/69602.htm#doc-api-Iot-DisableThing)接口，禁用该设备；或在业务上管控发送给设备的消息。

> 本文来源于：https://help.aliyun.com/document_detail/73731.html