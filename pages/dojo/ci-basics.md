---
layout: post
permalink: /dojo/ci/basics
title: "CI基础 & Setup环境"
date: 2016-12-18
category: "DOJO-CI"
tags: ["Dojo", "CI"]

author: "袁慎建"
published: true
type: "original"

---

* content
{:toc}



## CI基础

>[没有CI的项目开发是在耍流氓。CI在Agile中是一项最基础的设施，它通过自动化来提供有效的反馈机制以及高效的部署，大大降低代了码集成和项目交付的风险。](http://blog.sjyuan.cc/my-first-impressive-agile-experience-in-thoughtworks/#ci)

CI (Continous Integration)，持续集成。在我的印象中，它是一个项目开始前`必须`搭建起来的基础设施。在现在的软件开发项目中，几乎没有项目是只有一个人在开发的。超过一个人就形成了团队，每个人同时并行开发不同模块的功能，这就涉及到代码的集成，所以代码集成是几乎所有开发团队都要面临的问题（一个人的开发项目不在本文范畴中）。

---

### CI是什么?

>[Martin FLower](http://www.martinfowler.com/) 这样定义持续集成：持续集成是一种软件开发实践，即团队开发成员经常集成他们的工作，通常每个成员每天至少集成一次，这就意味着每天可能会发生多次集成。

每次集成都通过自动化的构建（编译，自动化测试，部署)来验证正确性，从而尽快地发现集成错误。大多数团队发现这个过程可以大大减少集成的问题，让团队能够更快的开发内聚的软件。

`集成`这个词出现这么多次，那么到底是在集成什么呢？ 程序员写的是什么？当然是**`代码`**。所以持续集成主要是针对代码的集成，而我们后面所讨论的的范畴也集中在代码的集成。

集成，就少不了要借助一些工具，将这些工具通过合理的方式组合在一起形成一种工作流模式。且看一张图：

![Alt text]({{ "/assets/img/dojo/ci/ci-flow.png" }})

从图中可以看出，同时会存在多个`开发者`（两个以上），他们会向同一个`版本控制代码库`中提交代码，存在一个`CI Master`去监测代码库是否存在更新，一旦更新，就会在`Build Server`中触发`构建`，一次构建通常包含一下几个步骤：

```
Check out, Run build, Compile, Test (Unit, Integration, E2E), Deploy
```

构建运行完毕，`Build Server`会输出构建结果，`CI Master`会根据结果失败与否设置状态（失败：红，成功：绿），最后通知`开发人员`、`QA`以及`Team Leader`。

>实践指导：  
在Jenkins中，存在`Master`和`Slave`概念，通常由Master负责管理各个Slave，具体的构建任务由Slave来完成，Master起到一个协调的作用。在大型复杂的构建系统中，Slave和Slave之间是独立的（独立的物理主机独立的IP），通过Master将它们协调在一起去完成大型的构建任务。当然Master也是可以独立完成构建任务的，通常一些小型简单构建系统中值创建了以个Master就可以完成所有的事情。

