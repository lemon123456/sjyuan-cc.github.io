---
layout: post

title: "Ruby Get Started"
date: 2016-04-01
category: "RUBY"
tag: ["Ruby", "Get-Started"]

author: "袁慎建"
published: true
type: "original"

---

* content
{:toc}


>我虽说有近3年的软件开发经验，但对与[Ruby](https://www.ruby-lang.org/en/)，我也是一个新手，近期项目中用到了[Ruby on Rails](http://guides.rubyonrails.org/index.html)。本文是我在学习ruby是经历的一些过程，主要是开发前的一些环境的准备，分享出来，供初学者参考。

---

## 安装Ruby
**使用[rvm](https://rvm.io)安装ruby**

```
$ brew install ruby  
$ rvm install 2.2.3
```
```
$ rvm list
$ rvm use 2.1.3
$ rvm --help
```

>可以使用rvm来管理ruby的版本，更多关于`RVM`内容，[请点我](https://rvm.io/)

---

## Gem包管理器

>**Gem** 是Ruby包的形式，同时可以用gem install来安装一个gem包。安装时可以配置源，默认的源是[rubygems.org](https://rubygems.org/)，在国内可以添加淘宝源[ruby.taobao.org](https://ruby.taobao.org/).

```
$ gem sources -a https://ruby.taobao.org/
$ gem sources -l 
$ gem install bundler
$ gem uninstall bundler   
```
>Bundler是一个gem，可以用bundle install来批量安装gems，只需把要安装的gem包写入`Gemfile`中。

```ruby
# source 'https://rubygems.org'
source 'https://ruby.taobao.org/'

# Bundle edge Rails instead: gem 'rails', github: 'rails/rails'
gem 'rails', '4.2.5'
# Use sqlite3 as the database for Active Record
gem 'sqlite3'
# Use SCSS for stylesheets
gem 'sass-rails', '~> 5.0'
# Use Uglifier as compressor for JavaScript assets
gem 'uglifier', '>= 1.3.0'
...

```

>`$ bundle install`可以一键安装所需要的包，当然要确保`Gemfile`文件在当前目录下

---

## 使用Ruby的REPL(Interactive Ruby)

```
$ ruby -v
ruby 2.2.3p173

$ irb
2.2.3 :001 >
```

---

## 查看Ruby本地化文档
>Ruby提供了本地化的web文档，开发人员在开发的过程中可以随时查阅。不过要多做一点点工作。


**启动Ruby Index服务**  

```
$ ri --server
[2016-04-12 20:39:16] INFO  WEBrick 1.3.1
[2016-04-12 20:39:16] INFO  ruby 2.2.3 (2015-08-18) [x86_64-darwin14]
[2016-04-12 20:39:16] INFO  WEBrick::HTTPServer#start: pid=67854 port=8214
```

**获取学习工具**

>在浏览器中输入[`http://localhost:8214`](http://localhost:8214)，可以查看Ruby的API文档，这会是一个很有用的工具。如果你是一个擅长学习的的程序员，你会喜欢上它的。
