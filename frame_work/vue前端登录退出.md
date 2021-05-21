##### `v/src/main.js`

###### `进入其他页面前判断是否有缓存，如果有进入，没有登录进入/login页面`

```
var whittelist = ['/login']
router.beforeEach((to, from, next) => {
  let account = window.localStorage.getItem('account');
  if (account || whittelist.indexOf(to.path) > -1) {
    next()
  }
  else {
    next('/login')
  }
})

```



`v/src/components/login.vue`(登录成功加缓存)

```
<template>
    <div id="Login">
        请输入账号:<input type="text" v-model="account">
        <button @click="login">点击登录</button>
    </div>
</template>
<script>
import Qs from 'qs'
export default {
    data(){
        return{
            account:'',
        }
    },
    methods:{
        login:function(){
            this.axios.post('/api/myapp/user/login/',
                            Qs.stringify({  
                                account:this.account
                            }),
                            ).then((res)=>{
                                if(res.data.code==200){
                                    localStorage.setItem('account',this.account)
                                    alert('登录成功')
                                }else{
                                    alert('登陆失败')
                                }
                            })
        }
    }
}
</script>


```



`v/src/components/HelloWorld.vue`(退出登录：a())

```
<template>
    <div id="Img">
        商品图片：<input type="file" id="saveimage"><br>
        <button @click="addgoods()">添加</button>
        <button @click="a">退出登录</button>
        <img src="" id="img">
    </div>
</template>
<script>
import Qs from 'qs'
export default {
    data(){
        return{

        }
    },
    methods:{
        addgoods:function () {
            
            //定义data值，方便于传送数据
            var data = new FormData();
            //1.从input框里获取图片
            var img = document.getElementById('saveimage').files[0];
            //2.将图片添加到Formdata中
            data.append('file',img,img.name);
            this.axios({
                    url:'/api/myapp/user/img/',
                    method:'post',
                    data:data,
                    headers:{'Content-Type':'multipart/form-data'}
                }).then((res)=>{
                    document.getElementById('img').src=res.data.img_url
            })
        },
        a:function(){
            localStorage.removeItem("account")
            alert('退出成功')
            location.reload()
        }
    }
}
</script>


```



`v/src/router/index.js`

```
import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import login from '@/components/login'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/login',
      name: 'login',
      component: login
    }
  ]
})

```



`f/myapp/views.py`

```
class Manage_User(GenericViewSet):
    """管理用户数据"""
    @action(methods=["POST"],detail=False)
    def login(self,request):
        mes={'code':200}
        return Response(mes)
```



`f/myapp/urls.py`

```
from rest_framework.routers import DefaultRouter
from myapp import views

router = DefaultRouter()
router.register('',views.HelloWorldViewSet,basename='hello')
router.register('user',views.Manage_User,basename='user')

urlpatterns = router.urls
```

