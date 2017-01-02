---
layout: default
menu_label: 
title: Postgresql 锦囊
permalink: /troubleshoots/postgresql
icon: glyphicon-saved
    
---

* content
{:toc}



## Remotely Access Postgresql Database

##### 更新时间：2016-12-12   

#### 问题描述
  
`在机器A上安装好Postgresql 9.3，服务正常启动，在另一台机器B上远程访问Postgresql Database 时，会出现如下信息`:

```sh
$ psql -h hostname -U dojo_ci -d dojo_ci_web
psql: server closed the connection unexpectedly
	This probably means the server terminated abnormally
	before or while processing the request.
```

#### 解决方案  
访问失败是因为Postgresql监听的host是本机，所以修改监听地址，给所有host添加md5密码认证，最后不要忘记重启Postgresql Server。

>
1. 编辑文件`/etc/postgresql/9.3/main/postgresql.conf`，修改内容
	* `listen_addresses='localhost'` 修改为 `listen_addresses='*'`
2. 编辑文件`/etc/postgresql/9.3/main/pg_hba.conf`，追加内容
	* 在文件末尾添加一行 `host all all * md5`
3. 重启Postgres服务  
	* `$ sudo /etc/init.d/postgresql restart`
