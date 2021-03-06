---
layout: post
permalink: /dojo/ci/basics
title: "CI基础 & Setup环境"
date: 2016-12-27
category: "DOJO-CI"
tags: ["Dojo", "CI"]

author: "袁慎建"
published: true
type: "original"

---

* content
{:toc}



## CI基础

>[没有CI的项目开发是在耍流氓。CI在Agile中是一项最基础的设施，它通过自动化来提供有效的反馈机制以及高效的部署，大大降低代了码集成和项目交付的风险。]({{ '/my-first-impressive-agile-experience-in-thoughtworks/#ci' }})

CI (Continous Integration)，持续集成。在我的印象中，它是一个项目开始前`必须`搭建起来的基础设施。在现在的软件开发项目中，几乎没有项目是只有一个人在开发的。超过一个人就形成了团队，每个人同时并行开发不同模块的功能，这就涉及到代码的集成，所以代码集成是几乎所有开发团队都要面临的问题（一个人的开发项目不在本文范畴中）。

---

### CI是什么?

>[Martin FLower](http://www.martinfowler.com/) 这样定义持续集成：持续集成是一种软件开发实践，即团队开发成员经常集成他们的工作，通常每个成员每天至少集成一次，这就意味着每天可能会发生多次集成。

每次集成都通过自动化的构建（编译，自动化测试，部署)来验证正确性，从而尽快地发现集成错误。大多数团队发现这个过程可以大大减少集成的问题，让团队能够更快的开发内聚的软件。

`集成`这个词出现这么多次，那么到底是在集成什么呢？ 程序员写的是什么？当然是**`代码`**。所以持续集成主要是针对代码的集成，而我们后面所讨论的的范畴也集中在代码的集成。

集成，就少不了要借助一些工具，将这些工具通过合理的方式组合在一起形成一种工作流模式。且看一张图：

![Alt text]({{ '/assets/img/dojo/ci/ci-flow.png' }})

从图中可以看出，同时会存在多个`开发者`（两个以上），他们会向同一个`版本控制代码库`中提交代码，存在一个`CI Master`去监测代码库是否存在更新，一旦更新，就会在`Build Server`中触发`构建`，一次构建通常包含一下几个步骤：

```
Check out, Run build, Compile, Test (Unit, Integration, E2E), Deploy
```
构建运行完毕，`Build Server`会输出构建结果，`CI Master`会根据结果失败与否设置状态（失败：红，成功：绿），最后通知`开发人员`、`QA`以及`Team Leader`。


>实践指导：  
在Jenkins中，存在`Master`和`Slave`概念，通常由Master负责管理各个Slave，具体的构建任务由
Slave来完成，Master起到一个协调的作用。在大型复杂的构建系统中，Slave和Slave之间是独立的（独立的物理主机独立的IP），通过Master将它们协调在一起去完成大型的构建任务。当然Master也是可以独立完成构建任务的，通常一些小型简单构建系统中值创建了以个Master就可以完成所有的事情。

---

### 为什么要构建CI?
如今软件开发不再是少数人的活动了，Dev光杆司令的时代已经不再，曾经流行了一段时间的`神庙逃亡`也是又一对夫妇开发的。或许你会说，微服务的天下即将到来，一个资深的架构师将系统拆分成足够多足够细粒度的微服务，每个微服务小到可以由一个人去开发完成，这还需要集成吗？需要！因为这样众多的微服务虽然都是独立的小个体，但它们的集成将是所面临的一大挑战，所以CI将能够更快地给你提供反馈，让你知道你负责的微服务是否跟其它的微服务是否还良好合作着。

不可否认，我确实经历过一个人开发的项目，如果再加上这个项目对外界的依赖很少，CI的价值可能就体现的不是那么明显，但绝大多数情况下，都是有多个开发人员去完成的一个项目：

![Alt text]({{ '/assets/img/dojo/ci/one-more.png' }})

CI是需要付出成本的，既然大家愿意付出成本去搭建CI，它就一定能带来价值，CI能够给我们带来的益处有：

```
1. 减少重复的过程
2. 降低风险
3. 可视化
4. 增强团队的信心
5. 随时随地可以生成可部署的软件（CD）
```

---

#### 减少重复过程
CI通过自动化，将一些需要重复执行的操作（代码审查、编译、测试、构建、部署）自动化管理起来，大大减少了重复的过程，节省了大量的时间。

---

#### 降低风险
开发过程中，每天进行多次集成，并且添加了**足够**相应的测试，每次集成CI都会**快速**检查代码中的缺陷并提供及时的反馈，降低了未知的风险。

---

#### 可视化
提供一个人人都能抬头即见且低头还可见的Dashboard(借助Chrom插件[BuildReactor](https://github.com/AdamNowotny/BuildReactor)，将CI Dashboard集成到Chrom浏览器中来)。

CI提供了大量真实且最新的数据，能够让我们关注当前集成的趋势（例如构建时间、构建失败比例、测试覆盖率等），有利于有效决策。

---

#### 增强团队信心
每次构建的结果都是公开透明的，所有人清楚地知道自己的每次提交改动对软件所造成的影响。

---

#### 随时随地可以生成可部署的软件（CD）

>客户最关心的是可以部署的软件产品！

CI让我们就可以在任何时间发布可以部署的软件，在外界来看，这是持续集成最明显的好处。或许我们将提升软件质量和减少项目风险说的滔滔不绝。但对于客户来说，可以部署的软件产品是最实际的资产。

```
1. 持续集成，我们可以经常对源代码进行一些小改动，并快速将这些改动和其他的代码进行集成。如有问题，相关成员马上就会被通知到，问题也会在第一时间被修复。
2. 没有持续集成，问题有可能直到交付前的集成测试（回顾测试）的时候才发现，这就有可能会导致延迟发布产品，而在紧急状态下修复这些bug的时候又有可能引入新bug，最终可能导致项目失败。
```

---

### 如何搭建CI?

CI产生这么多实际的价值，是不是说搭建一个CI是一件很复杂的事情呢？恰恰相反，搭建一个简单的CI本身并不用花费太多的时间。当然，不花费太多时间并不代表它就能够发挥出那些价值，所以在开始前，我们需要了解一些CI的原则和最佳实践，这将有助于我们打造出一个能够创造实际价值的CI:

CI需要遵守的原则：

```
1. 统一的代码库。
2. 每次提交都会在CI服务器（专门的机器）上触发一次构建。
3. 快速构建。
4. 自动化测试。CI犹如巧妇，巧妇难为无米之炊，所以一定要给她足够的米（测试）。
5. 所有人在本地机器上构建成功后再提交到代码库中。
6. 每次构建100%通过，如果失败，修复构建优先级最高（CI不过夜）。
7. 自动化部署。
```

最佳实践：

```
1. 开发人员每天至少要向代码库push一次代码。
2. 开发人员每天至少要从代码库pull一次代码。
3. CI定时去检查代码库的更新，只要有更新，就触发构建。
4. 一键部署。对于UAT和生产环境，屏蔽自动部署，引入人为手动的一键部署。
```

要搭建CI，我们还缺一个`工具`，因为我平时开发过程中对Jenkins情有独钟，这里就选用Jenkins作为CI工具，它简单易用，功能强大，并且所有的操作几乎都可以在Web GUI上完成。下面列出一些比较流行的开源工具：

- [Jenkins](https://jenkins.io/)
- [Travis CI](https://travis-ci.org/first_sync)
- [GoCD](https://www.go.cd/)
- [Buildbot](http://buildbot.net/)
- [Strider](https://www.striderbikes.com/)

---

## Setup Ubuntu虚拟环境
方便起见，我们准备在Mac主机上Setup一个Ubuntu的虚拟环境，将借助 [Vagrant](https://www.vagrantup.com/) 和 [Virtualbox](https://www.virtualbox.org/) 来完成。在Mac上安装如下版本工具：

```
1. Vagrant 1.9.1
2. Virtualbox 5.0.10
```

安装好[Vagrant](https://www.vagrantup.com/)之后，查看版本：

```sh
$ vagrant -v
Vagrant 1.9.1
```
---

### 配置Vagrant


创建一个目录`dojo-ci`，在dojo-ci目录中进行初始化：

```sh
$ mkdri dojo-ci
$ cd dojo-ci
$ vagrant init ubuntu/trusty64

A `Vagrantfile` has been placed in this directory. You are now
ready to `vagrant up` your first virtual environment! Please read
the comments in the Vagrantfile as well as documentation on
`vagrantup.com` for more information on using Vagrant.

```
首次运行，Vagrant会联网下载`ubuntu/trusty64`，需要等待一段时间。

执行完毕，会生成一个Vagrantfile文件，我们对该文件做一些配置，添加如下配置信息：

```sh

# -*- mode: ruby -*-
# vi: set ft=ruby :

# All Vagrant configuration is done below. The "2" in Vagrant.configure
# configures the configuration version (we support older styles for
# backwards compatibility). Please don't change it unless you know what
# you're doing.
Vagrant.configure("2") do |config|
  config.vm.define :jenkins_ubuntu do |config|
     config.vm.box = "ubuntu/trusty64"
     config.vm.hostname = "jenkins-ubuntu"
     config.vm.synced_folder "./vagrant_shared", "/vagrant"
     config.vm.network "private_network", ip: "10.29.2.122"
     config.vm.network "forwarded_port", guest: 80, host: 80
     config.vm.network :forwarded_port, guest: 8080, host: 8080
     config.vm.network :forwarded_port, guest: 8088, host: 8088
     config.vm.network :forwarded_port, guest: 5432, host: 5432
     config.vm.provision :shell, path: "./vagrant_shared/setup-env.sh"
     config.vm.provider "virtualbox" do |vb|
       vb.memory = "4096"
     end
   end
end
```

上面主要配置信息注释：

```
1. hostname，指定虚拟机用户名
2. synced_folder，Host主机与虚拟机所挂载的同步目录，前者是Host主机上的目录，必须存在，后者在虚拟机创建之后会自动创建。
3. network，配置网络选项，可以配置虚拟机IP，以及与Host主机的端口映射。
4. provision，指定运行的文件，可以在虚拟机创建好之后自动运行脚本安转所需要的环境，该文件必须存在于Host主机上。
```
>[Vagrant](https://www.vagrantup.com/)是一个命令行工具，用于管理虚拟机生命周期（启动，关机，注销，移除等），非常易用，官方文档的[getting-started](https://www.vagrantup.com/docs/getting-started/)是一个很好的学习文档。

配置好Vagrantfile，就可以一键启动：

```
$ vagrant up
```

等待虚拟机启动完毕，ssh登录到虚拟机，此后的一切操作跟在一台Linux机器的终端上操作别无两样：

```
$ vagrant ssh
```

方便起见，你也可以直接将 [dojo-ci](https://github.com/sjyuan-cc/dojo-ci) clone到本地：

```sh
$ git clone https://github.com/sjyuan-cc/dojo-ci.git
$ cd dojo-ci
$ vagrant up
```

---

### 安装Jenkins
Setup好Ubuntu虚拟机，我们就有了CI服务器，最后，我们来安转[Jenkins](https://jenkins.io/):

```sh
$ wget -q -O - https://pkg.jenkins.io/debian/jenkins-ci.org.key | sudo apt-key add -
$ sudo sh -c 'echo deb http://pkg.jenkins.io/debian-stable binary/ > /etc/apt/sources.list.d/jenkins.list'
$ sudo apt-get update
$ sudo apt-get install -y jenkins
```


安装完毕后，查看Jenkins服务是否正常启动：

```sh
$ sudo service jenkins status
Jenkins Continuous Integration Server is running with the pid 1112
```
如果没有启动，需要运行以下命令启动jenkins：

```sh
$ sudo service jenkins start
 * Starting Jenkins Continuous Integration Server jenkins                   [ OK ]
```

访问localhost:8080，可以看到：
![Alt text]({{ '/assets/img/dojo/ci/jenkins-verify.png' }})

快要成功了，根据页面提示，需要一个密码校验，这个密码在jenkins运行的Server上，也就是之前使用Vagrant启动的Ubuntu的虚拟机上：

```sh
$ sudo cat /var/lib/jenkins/secrets/initialAdminPassword
1ed2af4*****************5ad29e
```

输入密码之后，选择Continue，然后选择`Install suggested plugins`，等待安装完毕，创建一个用户，可以看到Jenkins Dashboard：

![Alt text]({{ '/assets/img/dojo/ci/jenkins-dashboard.png' }})


>环境搭建好之后，请进入Dojo第二次课程[手把手搭建CI]({{'/dojo/ci/step-by-step'}})




