---
layout: post

title: "Ruby on Rails 初次冲浪体验"
date: 2016-04-06
time: "09:46"
category: "RAILS"

author: "袁慎建"
publish: false
type: "original"
---

* content
{:toc}



>Rails是一个用Ruby编写的Web应用开发框架。它的设计目标是通过给定每个开发人员开始时所需要的东西来，从而让Web应用开发更加容易。它可以让你写更少的代码来完成其他语言和框架所不能完成的工作。有过Rail开发经验的人都说它让web应用开发变得更有趣。

>Rails is a web application development framework written in the Ruby language. It is designed to make programming web applications easier by making assumptions about what every developer needs to get started. It allows you to write less code while accomplishing more than many other languages and frameworks. Experienced Rails developers also report that it makes web application development more fun.

### 环境准备

1. Ruby，版本 >= 1.9.3。[Ruby安装](https://www.ruby-lang.org/en/documentation/installation/)
2. RubyGems包管理系统, 跟Ruby@1.9以上版本一起安装。
3. SQLite3数据库.

```
 $ ruby -v
 ruby 2.2.3p173

 $ gem -v
 2.4.8

 $ sqlite3 --version
 3.8.10.2
```

---

### 创建Rails项目

#### 安装Rails
>$ gem install rails  

```
$ rails -v  
Rails 4.2.5
```

---

#### 创建一个blog应用
>$ rails new blog  
>$ cd blog

* 生成工程的目录结构，建议读一读，心里有个数。

	File/Folder |	Purpose
	|:----------|:-----------:|
	app/        | Contains the controllers, models, views, helpers, mailers and assets for your application. You'll focus on this folder for the remainder of this guide.
	bin/        | Contains the rails script that starts your app and can contain other scripts you use to setup, deploy or run your application.
	config/     | Configure your application's routes, database, and more. This is covered in more detail in Configuring Rails Applications.
	config.ru	  | Rack configuration for Rack based servers used to start the application.
	db/         |	Contains your current database schema, as well as the database migrations.
	Gemfile Gemfile.lock | These files allow you to specify what gem dependencies are needed for your Rails application. These files are used by the Bundler gem. For more information about Bundler, see the Bundler website.
	lib/        | Extended modules for your application.
	log/        | Application log files.
	public/ 	  | The only folder seen by the world as-is. Contains static files and compiled assets.
	Rakefile	  | This file locates and loads tasks that can be run from the command line. The task definitions are defined throughout the components of Rails. Rather than changing Rakefile, you should add your own tasks by adding files to the lib/tasks directory of your application.
	README.rdoc | This is a brief instruction manual for your application. You should edit this file to tell others what your application does, how to set it up, and so on.
	test/	     | Unit tests, fixtures, and other test apparatus. These are covered in Testing Rails Applications.
	tmp/	     | Temporary files (like cache, pid, and session files).
	vendor/	  | A place for all third-party code. In a typical Rails application this includes vendored gems.


---

### Hello, Rails！

#### 启动Rails服务
>$ rails server

```
=> Booting WEBrick
=> Rails 4.2.5 application starting in development on http://localhost:3000
=> Run `rails server -h` for more startup options
=> Ctrl-C to shutdown server
[2016-04-06 11:32:26] INFO  WEBrick 1.3.1
[2016-04-06 11:32:26] INFO  ruby 2.2.3 (2015-08-18) [x86_64-darwin14]
[2016-04-06 11:32:26] INFO  WEBrick::HTTPServer#start: pid=18756 port=3000
```

#### 访问Rail服务
>打开你的浏览器，输入[http://localhost:3000](http://localhost:3000)

![Alt text]({{ "/assets/img/rails/rails-get-started-1.png" }})






