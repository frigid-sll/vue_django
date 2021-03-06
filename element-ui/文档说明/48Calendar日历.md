## Calendar calendar

显示日期

### [¶](https://element.eleme.cn/#/zh-CN/component/calendar#ji-ben)基本

![image-20191110142718446](\配图\201.png)

设置 `value` 来指定当前显示的月份。如果 `value` 未指定，则显示当月。`value` 支持 `v-model` 双向绑定。

```
<el-calendar v-model="value">
</el-calendar>

<script>
  export default {
    data() {
      return {
        value: new Date()
      }
    }
  }
</script>
```

### [¶](https://element.eleme.cn/#/zh-CN/component/calendar#zi-ding-yi-nei-rong)自定义内容

![image-20191110142742045](\配图\193.png)

通过设置名为 `dateCell` 的 `scoped-slot` 来自定义日历单元格中显示的内容。在 `scoped-slot` 可以获取到 date（当前单元格的日期）, data（包括 type，isSelected，day 属性）。详情解释参考下方的 API 文档。

```
<el-calendar>
  <!-- 这里使用的是 2.5 slot 语法，对于新项目请使用 2.6 slot 语法-->
  <template
    slot="dateCell"
    slot-scope="{date, data}">
    <p :class="data.isSelected ? 'is-selected' : ''">
      {{ data.day.split('-').slice(1).join('-') }} {{ data.isSelected ? '✔️' : ''}}
    </p>
  </template>
</el-calendar>
<style>
  .is-selected {
    color: #1989FA;
  }
</style>
```

### [¶](https://element.eleme.cn/#/zh-CN/component/calendar#zi-ding-yi-fan-wei)自定义范围

![image-20191110142810821](\配图\202.png)

设置 `range` 属性指定日历的显示范围。开始时间必须是周起始日，结束时间必须是周结束日，且时间跨度不能超过两个月。

```
<el-calendar :range="['2019-03-04', '2019-03-24']">
</el-calendar>
```

### [¶](https://element.eleme.cn/#/zh-CN/component/calendar#attributes)Attributes

| 参数              | 说明                                                         | 类型               | 可选值 | 默认值 |
| :---------------- | :----------------------------------------------------------- | :----------------- | :----- | :----- |
| value / v-model   | 绑定值                                                       | Date/string/number | —      | —      |
| range             | 时间范围，包括开始时间与结束时间。开始时间必须是周一，结束时间必须是周日，且时间跨度不能超过两个月。 | Array              | —      | —      |
| first-day-of-week | 周起始日                                                     | Number             | 1 到 7 | 1      |

### [¶](https://element.eleme.cn/#/zh-CN/component/calendar#datecell-scoped-slot-can-shu)dateCell scoped slot 参数

| 参数 | 说明                                                         | 类型   | 可选值 | 默认值 |
| :--- | :----------------------------------------------------------- | :----- | :----- | :----- |
| date | 单元格代表的日期                                             | Date   | —      | —      |
| data | { type, isSelected, day}，`type` 表示该日期的所属月份，可选值有 prev-month，current-month，next-month；`isSelected` 标明该日期是否被选中；`day` 是格式化的日期，格式为 yyyy-MM-dd | Object | —      | —      |