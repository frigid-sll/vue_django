## InputNumber 计数器

仅允许输入标准的数字值，可定义范围

### [¶](https://element.eleme.cn/2.0/#/zh-CN/component/input-number#ji-chu-yong-fa)基础用法

![image-20191110113221226](\配图\96.png)

要使用它，只需要在`el-input-number`元素中使用`v-model`绑定变量即可，变量的初始值即为默认值。

```html
<template>
  <el-input-number v-model="num1" @change="handleChange" :min="1" :max="10" label="描述文字"></el-input-number>
</template>
<script>
  export default {
    data() {
      return {
        num1: 1
      };
    },
    methods: {
      handleChange(value) {
        console.log(value);
      }
    }
  };
</script>
```

在线运行

### [¶](https://element.eleme.cn/2.0/#/zh-CN/component/input-number#jin-yong-zhuang-tai)禁用状态

`disabled`属性接受一个`Boolean`，设置为`true`即可禁用整个组件，如果你只需要控制数值在某一范围内，可以设置`min`属性和`max`属性，不设置`min`和`max`时，最小值为 0。

```html
<template>
  <el-input-number v-model="num2" :disabled="true"></el-input-number>
</template>
<script>
  export default {
    data() {
      return {
        num2: 1
      }
    }
  };
</script>
```

在线运行

### [¶](https://element.eleme.cn/2.0/#/zh-CN/component/input-number#bu-shu)步数

允许定义递增递减的步数控制

设置`step`属性可以控制步长，接受一个`Number`。

```html
<template>
  <el-input-number v-model="num3" :step="2"></el-input-number>
</template>
<script>
  export default {
    data() {
      return {
        num3: 5
      }
    }
  };
</script>
```

在线运行

### [¶](https://element.eleme.cn/2.0/#/zh-CN/component/input-number#chi-cun)尺寸

额外提供了 `medium`、`small`、`mini` 三种尺寸的数字输入框

```html
<template>
  <el-input-number v-model="num4"></el-input-number>
  <el-input-number size="medium" v-model="num5"></el-input-number>
  <el-input-number size="small" v-model="num6"></el-input-number>
  <el-input-number size="mini" v-model="num7"></el-input-number>
</template>
<script>
  export default {
    data() {
      return {
        num4: 1,
        num5: 1,
        num6: 1,
        num7: 1
      }
    }
  };
</script>
```

在线运行

### [¶](https://element.eleme.cn/2.0/#/zh-CN/component/input-number#an-niu-wei-zhi)按钮位置

设置 `controls-position` 属性可以控制按钮位置。

```html
<template>
  <el-input-number v-model="num8" controls-position="right" @change="handleChange" :min="1" :max="10"></el-input-number>
</template>
<script>
  export default {
    data() {
      return {
        num8: 1
      };
    },
    methods: {
      handleChange(value) {
        console.log(value);
      }
    }
  };
</script>
```

在线运行

### [¶](https://element.eleme.cn/2.0/#/zh-CN/component/input-number#attributes)Attributes

| 参数              | 说明                   | 类型    | 可选值       | 默认值   |
| :---------------- | :--------------------- | :------ | :----------- | :------- |
| value             | 绑定值                 | number  | —            | —        |
| min               | 设置计数器允许的最小值 | number  | —            | 0        |
| max               | 设置计数器允许的最大值 | number  | —            | Infinity |
| step              | 计数器步长             | number  | —            | 1        |
| size              | 计数器尺寸             | string  | large, small | —        |
| disabled          | 是否禁用计数器         | boolean | —            | false    |
| controls          | 是否使用控制按钮       | boolean | —            | true     |
| debounce          | 输入时的去抖延迟，毫秒 | number  | —            | 300      |
| controls-position | 控制按钮位置           | string  | right        | -        |
| name              | 原生属性               | string  | —            | —        |
| label             | 输入框关联的label文字  | string  | —            | —        |

### [¶](https://element.eleme.cn/2.0/#/zh-CN/component/input-number#events)Events

| 事件名称 | 说明                        | 回调参数       |
| :------- | :-------------------------- | :------------- |
| change   | 绑定值被改变时触发          | 最后变更的值   |
| blur     | 在组件 Input 失去焦点时触发 | (event: Event) |
| focus    | 在组件 Input 获得焦点时触发 | (event: Event) |

### [¶](https://element.eleme.cn/2.0/#/zh-CN/component/input-number#methods)Methods

| 方法名 | 说明              | 参数 |
| :----- | :---------------- | :--- |
| focus  | 使 input 获取焦点 | -    |