### 引入js函数

`t.vue`

```
<template>
  <div>
      <input ref='test' id="test">
      <button @click='diyfun'>Click</button>
  </div>
</template>
<script>
import {myfun} from '../../static/a.js' //注意路径
export default {
  data () {
    return {
      testvalue: ''
    }
  },
  methods:{
      diyfun:function(){
          myfun();
      }
  }
}
</script>
```

`a.js`

```
function myfun() {
    alert('Success')
    }
    export { //很关键
      myfun
    }
```

### 引入css

##### 局部引入：

```
<style scoped>
    @import "../../static/navigation.css"; 
</style>
```



##### 全局引入：

```
<script>
import "@/../static/navigation.css"
```

