## 计算公式组件 - 基于codemirror开发

## props参数：
|    参数    | 类型    |  默认值   |  是否必填  | 说明         |
| :------:  | :-----: | :----:   | :------: | :----------: |
| id        | string  |  无      |   必填    | 编辑器ID      |
| code      | string  |  无      |   必填    | 编辑器赋值     |
| readOnly  | boolean |  false   |   非必填  | 设置只读       |
| fieldList | array   |  无      |   非必填  | 字段列表       |
| ctrlList  | array   |  无      |   非必填  | 函数列表       |
| tagList   | array   |  无      |   非必填  | tag列表        |
| onChange  | function|  无      |   非必填  | 返回code       |

## 用法
```
<Codemirror
    code={code}
    fieldList={fieldList}
    tagList={quickList}
    id="testCodemirror"
    onChange={(code) => this.getCode(code)}
/>
```
## fieldList 输入@符号才能调起
```
fieldList: [
			{ name: "放款金额", value: "fkje", type: "INT" },
			{ name: "实际放款金额", value: "sjfkje", type: "STRING" },
			{ name: "借款人姓名", value: "jkrxm", type: "DOUBLE" },
			{ name: "借款人手机号", value: "jkrsjh", type: "BOOLEAN" },
			{ name: "借款人身份证", value: "jkrsfz", type: "BOOLEAN" },
		],
```
## tagList
```
tagList: [
            { name: "+", content: "加号什么", value: "+" },
            { name: "-", content: "减号什么", value: "-" },
            { name: "×", content: "减号什么", value: "×" },
            { name: "／", content: "减号什么", value: "/" },
            { name: "＝", content: "减号什么", value: "=" },
            { name: "()", content: "减号什么", value: "()" },
            { name: "max", content: "减号什么", value: "max(,)" },
            { name: "min", content: "减号什么", value: "min(,)" }
		],
```
## ctrlList 按Ctrl才能调起
```
ctrlList: [
			{ name: "max", value: "max(,)" },
			{ name: "min", value: "min(,)" },
			{ name: "sin", value: "sin(,)" }
		],
```
