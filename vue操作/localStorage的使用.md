##### 获取指定key本地存储的值

```
localStorage.getItem(key)
```

##### 将value存储到key字段

```
localStorage.setItem(key,value)
```





##### 比如：在A页面中先存储：

```
var imgs = obj_mainform.archivesId  //声明个变量存储下数据
localStorage.setItem('key',imgs);  //将变量imgs存储到name字段
```



##### 在B页面中使用：

```
var naid = localStorage.getItem("key"); //获取指定key本地存储的值
```



##### 删除

```
localStorage.removeItem("名称")
```



##### 全部删除

```
localStorage.clear()
```



##### 更改数据

```
localStorgae.setItem('account','newdate')
```

