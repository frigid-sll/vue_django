```python
DataFrame.to_excel(excel_writer, sheet_name='Sheet1', na_rep='', float_format=None, columns=None, header=True, index=True, index_label=None, startrow=0, startcol=0, engine=None, merge_cells=True, encoding=None, inf_rep='inf', verbose=True, freeze_panes=None)
```



### **参数**

- excel_writer：文件路径或现有的ExcelWriter。
- sheet_name：它是指包含DataFrame的工作表的名称。
- na_repr：缺少数据表示形式。
- float_format：这是一个可选参数, 用于格式化浮点数字符串。
- 列：指要写入的列。
- header：写出列名。如果给出了字符串列表, 则假定它是列名的别名。
- index：写入索引。
- index_label：引用索引列的列标签。如果未指定, 并且标头和索引为True, 则使用索引名称。如果DataFrame使用MultiIndex, 则应给出一个序列。
- startrow：默认值0。它指向转储DataFrame的左上单元格行。
- startcol：默认值0。它指向转储DataFrame的左上方单元格列。
- engine：这是一个可选参数, 用于写入要使用的引擎, openpyxl或xlsxwriter。
- merge_cells：返回布尔值, 其默认值为True。它将MultiIndex和Hierarchical行写为合并的单元格。
- encoding：这是一个可选参数, 可对生成的excel文件进行编码。仅对于xlwt是必需的。
- inf_rep：它也是一个可选参数, 默认值为inf。它通常表示无穷大。
- 详细：返回一个布尔值。它的默认值为True。
  它用于在错误日志中显示更多信息。
- Frozen_panes：它也是一个可选参数, 用于指定要冻结的最底部一行和最右边一列。





```
import pandas  as pd
writer=pd.ExcelWriter("test.xlsx")

df=pd.DataFrame(b,columns=list('abc'),index=list('AB'))
print(df)

df2=df
print()
df.to_excel(writer, sheet_name='wenti', header=True, index=True)
df2.to_excel(writer, sheet_name='wenti2', header=True, index=True)

writer.save()
```

