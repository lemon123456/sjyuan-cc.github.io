---
layout: post

title: "Jenkins搭建CI实践分析"
date: 2016-05-20
time: "15:46"
category: "DOCKER"

author: "袁慎建"
published: false
type: "original"

---

* content
{:toc}


## 背景介绍
我们团队(**DiNPO**)刚刚成功交付一个基于[Django](https://www.djangoproject.com/)&[PostgresSQL](http://www.postgresql.org/)&[AngularJS](https://angularjs.org/)的项目，项目的部署和交付使用了[Docker](https://www.docker.com/)容器技术，着实为后期的部署带来了莫大的便利，整个团队在接近Release期间处于轻松的状态(不可否认，国内大部分项目到要Release的时候总是加班加点，甚至熬夜通宵).当然，成功的交付离不开团队中的良好的敏捷开发实践，以及每个人的敬业态度和专业能力。关于上一个项目的精彩内容，欢饮阅读 [敏捷开发实践总结•EUMs]()



## 定制Jenkins主题
[Jenkins主题](http://jenkins-contrib-themes.github.io/jenkins-material-theme/)

## 插件安装
* Simple Theme Plugin
	* [Materia主题](http://jenkins-contrib-themes.github.io/jenkins-material-theme/)
	* [Neo主题](http://aarjithn.github.io/jenkins-neo-theme/)
* Git plugin
	*  	使用Git作为版本管理工具
* Dependency Graph Viewer Plugin
	* 用于可视化Builds之间的依赖关系
	* Jenkins Server需要安装[graphviz](http://www.graphviz.org/)
* Join plugin
	* 用于管理并行build都完成后才触发下游的build
* Environment Injector Plugin
	* 给build设置环境变量的 
* Promoted Builds plugin
	* 用于设置对下一个build触发条件
* Copy Artifact Plugin
	* 用于在build中复制其他build生成的artifact
* Build flow test aggregator
	* 用于将build flow的所有build的结果聚合展示出来
* Build Pipeline plugin
	* This plugin renders upstream and downstream connected jobs that typically form a build pipeline. In addition, it offers the ability to define manual triggers for jobs that require intervention prior to execution, e.g. an approval process outside of Jenkins 


---

## 参考
* [Docker的Jenkins使用指南](https://hub.docker.com/_/jenkins/)