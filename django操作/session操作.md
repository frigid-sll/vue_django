# [Django操作session](https://www.cnblogs.com/open-yang/p/11222459.html)

**session****是存放在服务端的，在****django****中使用****session****必须要先在数据库中创建****django_session****表，****session****相关信息都要依赖此表**

## 获取session

request.session[**'status'**]

**request.session.get**(**'status'**)***#\******一般用get，无此键返回None不报错\***

## 设置session

***#\******在使用\******session\******之前必须在数据库创建相关的表\******(django_session)\***

***#\******调用\******request.session\******首先会接收请求头部的\******cookie\******是否有\******sessionid\******，进行表查询对比\***

***#\******如果有重新生成一个\******sessionid\******进行覆盖更新记录，并将随机生成的sessionid添加到cookie返回前端\***

***#\*** ***没有则新建存进表中的\******session_key,\******同时将字典信息加密自动存进表中的\******session_data\******字段\***

**request.session**[**'status'**]=**True** ***#\*** ***存在自动覆盖\***

 

request.session.setdefault(**'k1'**,123) ***#\*** ***存在则不设置\***

 

## 删除session

**request.session.flush()*****#\******删除服务端的\******session\******，删除当前的会话数据并删除会话的Cookie。\***

 

**request.session.clear_expired()*****#\*** ***将所有\******Session\******失效日期小于当前日期的数据删除，将过期的删除\***

 

**del** request.session[**'k1'**]***#django-session\******表里面同步删除\***

 

request.session.delete()***#\*** ***删除当前会话的所有\******Session\******数据\***

 

 

## 更多session操作 

***#\*** ***所有 键、值、键值对\***

request.session.keys()

request.session.values()

request.session.items()

 

***#\******获取\******sessionid\******的值\***

session_key = request.session.session_key 

 

***#\******检查会话\******session\******的\******key\******在数据库中是否存在\***

request.session.exists(**"session_key"**) ***#session_key\******就是那个\******sessionid\******的值\***

 

***#\*** ***设置会话\******Session\******和\******Cookie\******的超时时间\***

request.session.set_expiry(value)

  \* 如果value是个整数，session会在些秒数后失效。

  \* 如果value是个datatime或timedelta，session就会在这个时间后失效。

  \* 如果value是0,用户关闭浏览器session就会失效。

  \* 如果value是None,session会依赖全局session失效策略。

 

## Session详细流程解析

 

 ![img](https://img2018.cnblogs.com/blog/1616056/201907/1616056-20190721195734840-655967613.png)

 

## Django中的Session配置

Django中默认支持Session，其内部提供了5种类型的Session供开发者使用。

\1. 数据库Session

SESSION_ENGINE = 'django.contrib.sessions.backends.db'  # 引擎（默认）

 

\2. 缓存Session

SESSION_ENGINE = 'django.contrib.sessions.backends.cache' # 引擎

SESSION_CACHE_ALIAS = 'default'              # 使用的缓存别名（默认内存缓存，也可以是memcache），此处别名依赖缓存的设置

 

\3. 文件Session

SESSION_ENGINE = 'django.contrib.sessions.backends.file'  # 引擎

SESSION_FILE_PATH = None                  # 缓存文件路径，如果为None，则使用tempfile模块获取一个临时地址tempfile.gettempdir()

 

\4. 缓存+数据库

SESSION_ENGINE = 'django.contrib.sessions.backends.cached_db'    # 引擎

 

\5. 加密Cookie Session

SESSION_ENGINE = 'django.contrib.sessions.backends.signed_cookies'  # 引擎

 

其他公用设置项：

SESSION_COOKIE_NAME ＝ "sessionid"            # Session的cookie保存在浏览器上时的key，即：sessionid＝随机字符串（默认）

SESSION_COOKIE_PATH ＝ "/"                # Session的cookie保存的路径（默认）

SESSION_COOKIE_DOMAIN = None               # Session的cookie保存的域名（默认）

SESSION_COOKIE_SECURE = False              # 是否Https传输cookie（默认）

SESSION_COOKIE_HTTPONLY = True              # 是否Session的cookie只支持http传输（默认）

SESSION_COOKIE_AGE = 1209600               # Session的cookie失效日期（2周）（默认）

SESSION_EXPIRE_AT_BROWSER_CLOSE = False         # 是否关闭浏览器使得Session过期（默认） 

SESSION_SAVE_EVERY_REQUEST = False            # 是否每次请求都保存Session，默认修改之后才保存（默认）