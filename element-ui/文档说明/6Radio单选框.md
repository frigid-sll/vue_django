## Radio 单选框

在一组备选项中进行单选

### [¶](https://element.eleme.cn/2.0/#/zh-CN/component/radio#ji-chu-yong-fa)基础用法

由于选项默认可见，不宜过多，若选项过多，建议使用 Select 选择器。

备选项备选项

要使用 Radio 组件，只需要设置`v-model`绑定变量，选中意味着变量的值为相应 Radio `label`属性的值，`label`可以是`String`、`Number`或`Boolean`。

![image-20191104222931440](./配图/18.png)



```html
<template>
  <el-radio v-model="radio" label="1">备选项</el-radio>
  <el-radio v-model="radio" label="2">备选项</el-radio>
</template>

<script>
  export default {
    data () {
      return {
        radio: '1'
      };
    }
  }
</script>
```

### [¶](https://element.eleme.cn/2.0/#/zh-CN/component/radio#jin-yong-zhuang-tai)禁用状态

单选框不可用的状态。

备选项备选项

只要在`el-radio`元素中设置`disabled`属性即可，它接受一个`Boolean`，`true`为禁用。

![image-20191104222954225](./配图/19.png)



```html
<template>
  <el-radio disabled v-model="radio1" label="禁用">备选项</el-radio>
  <el-radio disabled v-model="radio1" label="选中且禁用">备选项</el-radio>
</template>

<script>
  export default {
    data () {
      return {
        radio1: '选中且禁用'
      };
    }
  }
</script>
```

### [¶](https://element.eleme.cn/2.0/#/zh-CN/component/radio#dan-xuan-kuang-zu)单选框组

适用于在多个互斥的选项中选择的场景

备选项备选项备选项

结合`el-radio-group`元素和子元素`el-radio`可以实现单选组，在`el-radio-group`中绑定`v-model`，在`el-radio`中设置好`label`即可，无需再给每一个`el-radio`绑定变量，另外，还提供了`change`事件来响应变化，它会传入一个参数`value`。

![image-20191104223019464](./配图/20.png)



```html
<template>
  <el-radio-group v-model="radio2">
    <el-radio :label="3">备选项</el-radio>
    <el-radio :label="6">备选项</el-radio>
    <el-radio :label="9">备选项</el-radio>
  </el-radio-group>
</template>

<script>
  export default {
    data () {
      return {
        radio2: 3
      };
    }
  }
</script>
```

### [¶](https://element.eleme.cn/2.0/#/zh-CN/component/radio#an-niu-yang-shi)按钮样式

按钮样式的单选组合。

只需要把`el-radio`元素换成`el-radio-button`元素即可，此外，Element 还提供了`size`属性。

![image-20191104223048921](./配图/21.png)



```html
<template>
  <div>
    <el-radio-group v-model="radio3">
      <el-radio-button label="上海"></el-radio-button>
      <el-radio-button label="北京"></el-radio-button>
      <el-radio-button label="广州"></el-radio-button>
      <el-radio-button label="深圳"></el-radio-button>
    </el-radio-group>
  </div>
  <div style="margin-top: 20px">
    <el-radio-group v-model="radio4" size="medium">
      <el-radio-button label="上海" ></el-radio-button>
      <el-radio-button label="北京"></el-radio-button>
      <el-radio-button label="广州"></el-radio-button>
      <el-radio-button label="深圳"></el-radio-button>
    </el-radio-group>
  </div>
  <div style="margin-top: 20px">
    <el-radio-group v-model="radio5" size="small">
      <el-radio-button label="上海"></el-radio-button>
      <el-radio-button label="北京" disabled ></el-radio-button>
      <el-radio-button label="广州"></el-radio-button>
      <el-radio-button label="深圳"></el-radio-button>
    </el-radio-group>
  </div>
  <div style="margin-top: 20px">
    <el-radio-group v-model="radio6" disabled size="mini">
      <el-radio-button label="上海"></el-radio-button>
      <el-radio-button label="北京"></el-radio-button>
      <el-radio-button label="广州"></el-radio-button>
      <el-radio-button label="深圳"></el-radio-button>
    </el-radio-group>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        radio3: '上海',
        radio4: '上海',
        radio5: '上海',
        radio6: '上海'
      };
    }
  }
</script>
```

### [¶](https://element.eleme.cn/2.0/#/zh-CN/component/radio#dai-you-bian-kuang)带有边框

设置`border`属性可以渲染为带有边框的单选框。

![image-20191104223117776](./配图/22.png)

```html
<template>
  <div>
    <el-radio v-model="radio7" label="1" border>备选项1</el-radio>
    <el-radio v-model="radio7" label="2" border>备选项2</el-radio>
  </div>
  <div style="margin-top: 20px">
    <el-radio v-model="radio8" label="1" border size="medium">备选项1</el-radio>
    <el-radio v-model="radio8" label="2" border size="medium">备选项2</el-radio>
  </div>
  <div style="margin-top: 20px">
    <el-radio-group v-model="radio9" size="small">
      <el-radio label="1" border>备选项1</el-radio>
      <el-radio label="2" border disabled>备选项2</el-radio>
    </el-radio-group>
  </div>
  <div style="margin-top: 20px">
    <el-radio-group v-model="radio10" size="mini" disabled>
      <el-radio label="1" border>备选项1</el-radio>
      <el-radio label="2" border>备选项2</el-radio>
    </el-radio-group>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        radio7: '1',
        radio8: '1',
        radio9: '1',
        radio10: '1'
      };
    }
  }
</script>
```

### [¶](https://element.eleme.cn/2.0/#/zh-CN/component/radio#radio-attributes)Radio Attributes

| 参数     | 说明                                 | 类型                      | 可选值                | 默认值 |
| :------- | :----------------------------------- | :------------------------ | :-------------------- | :----- |
| label    | Radio 的 value                       | string / number / boolean | —                     | —      |
| disabled | 是否禁用                             | boolean                   | —                     | false  |
| border   | 是否显示边框                         | boolean                   | —                     | false  |
| size     | Radio 的尺寸，仅在 border 为真时有效 | string                    | medium / small / mini | —      |
| name     | 原生 name 属性                       | string                    | —                     | —      |

### [¶](https://element.eleme.cn/2.0/#/zh-CN/component/radio#radio-events)Radio Events

| 事件名称 | 说明                   | 回调参数              |
| :------- | :--------------------- | :-------------------- |
| change   | 绑定值变化时触发的事件 | 选中的 Radio label 值 |

### [¶](https://element.eleme.cn/2.0/#/zh-CN/component/radio#radio-group-attributes)Radio-group Attributes

| 参数       | 说明                                                       | 类型    | 可选值                | 默认值  |
| :--------- | :--------------------------------------------------------- | :------ | :-------------------- | :------ |
| size       | 单选框组尺寸，仅对按钮形式的 Radio 或带有边框的 Radio 有效 | string  | medium / small / mini | —       |
| disabled   | 是否禁用                                                   | boolean | —                     | false   |
| text-color | 按钮形式的 Radio 激活时的文本颜色                          | string  | —                     | #ffffff |
| fill       | 按钮形式的 Radio 激活时的填充色和边框色                    | string  | —                     | #409EFF |

### [¶](https://element.eleme.cn/2.0/#/zh-CN/component/radio#radio-group-events)Radio-group Events

| 事件名称 | 说明                   | 回调参数              |
| :------- | :--------------------- | :-------------------- |
| change   | 绑定值变化时触发的事件 | 选中的 Radio label 值 |

### [¶](https://element.eleme.cn/2.0/#/zh-CN/component/radio#radio-button-attributes)Radio-button Attributes

| 参数     | 说明           | 类型            | 可选值 | 默认值 |
| :------- | :------------- | :-------------- | :----- | :----- |
| label    | Radio 的 value | string / number | —      | —      |
| disabled | 是否禁用       | boolean         | —      | false  |
| name     | 原生 name 属性 | string          | —      | —      |

