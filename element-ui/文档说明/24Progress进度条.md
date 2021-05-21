## Progress 进度条

用于展示操作进度，告知用户当前状态和预期。

### [¶](https://element.eleme.cn/#/zh-CN/component/progress#xian-xing-jin-du-tiao)线形进度条

![image-20191110113338924](\配图\97.png)

Progress 组件设置`percentage`属性即可，表示进度条对应的百分比，**必填**，必须在 0-100。通过 `format` 属性来指定进度条文字内容。

```
<el-progress :percentage="50"></el-progress>
<el-progress :percentage="100" :format="format"></el-progress>
<el-progress :percentage="100" status="success"></el-progress>
<el-progress :percentage="100" status="warning"></el-progress>
<el-progress :percentage="50" status="exception"></el-progress>

<script>
  export default {
    methods: {
      format(percentage) {
        return percentage === 100 ? '满' : `${percentage}%`;
      }
    }
  };
</script>
```

### [¶](https://element.eleme.cn/#/zh-CN/component/progress#bai-fen-bi-nei-xian)百分比内显

百分比不占用额外控件，适用于文件上传等场景。

![image-20191110113400028](\配图\98.png)

Progress 组件可通过 `stroke-width` 属性更改进度条的高度，并可通过 `text-inside` 属性来将进度条描述置于进度条内部。

```
<el-progress :text-inside="true" :stroke-width="26" :percentage="70"></el-progress>
<el-progress :text-inside="true" :stroke-width="24" :percentage="100" status="success"></el-progress>
<el-progress :text-inside="true" :stroke-width="22" :percentage="80" status="warning"></el-progress>
<el-progress :text-inside="true" :stroke-width="20" :percentage="50" status="exception"></el-progress>
```

### [¶](https://element.eleme.cn/#/zh-CN/component/progress#zi-ding-yi-yan-se)自定义颜色

可以通过 `color` 设置进度条的颜色，`color` 可以接受颜色字符串，函数和数组。

![image-20191110113420186](\配图\99.png)

```
<el-progress :percentage="percentage" :color="customColor"></el-progress>

<el-progress :percentage="percentage" :color="customColorMethod"></el-progress>

<el-progress :percentage="percentage" :color="customColors"></el-progress>
<div>
  <el-button-group>
    <el-button icon="el-icon-minus" @click="decrease"></el-button>
    <el-button icon="el-icon-plus" @click="increase"></el-button>
  </el-button-group>
</div>

<script>
  export default {
    data() {
      return {
        percentage: 20,
        customColor: '#409eff',
        customColors: [
          {color: '#f56c6c', percentage: 20},
          {color: '#e6a23c', percentage: 40},
          {color: '#5cb87a', percentage: 60},
          {color: '#1989fa', percentage: 80},
          {color: '#6f7ad3', percentage: 100}
        ]
      };
    },
    methods: {
      customColorMethod(percentage) {
        if (percentage < 30) {
          return '#909399';
        } else if (percentage < 70) {
          return '#e6a23c';
        } else {
          return '#67c23a';
        }
      },
      increase() {
        this.percentage += 10;
        if (this.percentage > 100) {
          this.percentage = 100;
        }
      },
      decrease() {
        this.percentage -= 10;
        if (this.percentage < 0) {
          this.percentage = 0;
        }
      }
    }
  }
</script>
```

### [¶](https://element.eleme.cn/#/zh-CN/component/progress#huan-xing-jin-du-tiao)环形进度条

Progress 组件可通过 `type` 属性来指定使用环形进度条，在环形进度条中，还可以通过 `width` 属性来设置其大小。

![image-20191110113442937](\配图\100.png)

```
<el-progress type="circle" :percentage="0"></el-progress>
<el-progress type="circle" :percentage="25"></el-progress>
<el-progress type="circle" :percentage="100" status="success"></el-progress>
<el-progress type="circle" :percentage="70" status="warning"></el-progress>
<el-progress type="circle" :percentage="50" status="exception"></el-progress>
```

### [¶](https://element.eleme.cn/#/zh-CN/component/progress#yi-biao-pan-xing-jin-du-tiao)仪表盘形进度条



![image-20191110113510719](\配图\101.png)

通过 `type` 属性来指定使用仪表盘形进度条。

```
<el-progress type="dashboard" :percentage="percentage" :color="colors"></el-progress>
<div>
  <el-button-group>
    <el-button icon="el-icon-minus" @click="decrease"></el-button>
    <el-button icon="el-icon-plus" @click="increase"></el-button>
  </el-button-group>
</div>

<script>
  export default {
    data() {
      return {
        percentage: 10,
        colors: [
          {color: '#f56c6c', percentage: 20},
          {color: '#e6a23c', percentage: 40},
          {color: '#5cb87a', percentage: 60},
          {color: '#1989fa', percentage: 80},
          {color: '#6f7ad3', percentage: 100}
        ]
      };
    },
    methods: {
      increase() {
        this.percentage += 10;
        if (this.percentage > 100) {
          this.percentage = 100;
        }
      },
      decrease() {
        this.percentage -= 10;
        if (this.percentage < 0) {
          this.percentage = 0;
        }
      }
    }
  }
</script>
```

### [¶](https://element.eleme.cn/#/zh-CN/component/progress#attributes)Attributes

| 参数           | 说明                                                         | 类型                  | 可选值                    | 默认值 |
| :------------- | :----------------------------------------------------------- | :-------------------- | :------------------------ | :----- |
| **percentage** | **百分比（必填）**                                           | number                | 0-100                     | 0      |
| type           | 进度条类型                                                   | string                | line/circle/dashboard     | line   |
| stroke-width   | 进度条的宽度，单位 px                                        | number                | —                         | 6      |
| text-inside    | 进度条显示文字内置在进度条内（只在 type=line 时可用）        | boolean               | —                         | false  |
| status         | 进度条当前状态                                               | string                | success/exception/warning | —      |
| color          | 进度条背景色（会覆盖 status 状态颜色）                       | string/function/array | —                         | ''     |
| width          | 环形进度条画布宽度（只在 type 为 circle 或 dashboard 时可用） | number                |                           | 126    |
| show-text      | 是否显示进度条文字内容                                       | boolean               | —                         | true   |