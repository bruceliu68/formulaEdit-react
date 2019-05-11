## 计算公式组件 - 基于codemirror开发

## props参数：
|    参数    | 类型    |  默认值   |  是否必填  | 说明         |
| :------:  | :-----: | :----:   | :------: | :----------: |
| id        | string  |  无      |   必填    | 编辑器ID      |
| defaultCode | string  |  无      |   必填    | 编辑器赋值     |
| height    | number  |  300     |   非必填  | 高度设置       |
| theme    | string  |  3024-day     |   非必填  | 主题       |
| readOnly  | boolean |  false   |   非必填  | 设置只读       |
| fieldList | array   |  无      |   非必填  | 字段列表       |
| onChange  | function|  无      |   必填    | 返回code       |

## 用法
```
<FormulaEdit
    theme="3024-night"
    height={200}
    defaultCode={defaultCode}
    fieldList={fieldList}
    readOnly={false}
    id="testId"
    onChange={(code) => this.getCode(code)}
/>
```
## fieldList 输入@符号才能调起
```
fieldList: [
    { name: "放款金额", value: "fkje"},
    { name: "实际放款金额", value: "sjfkje"},
    { name: "借款人姓名", value: "jkrxm"},
    { name: "借款人手机号", value: "jkrsjh"},
    { name: "借款人身份证", value: "jkrsfz"},
],
```
