# formulaEdit-react

react公式编辑器

## Usage

### formulaEdit-react

安装

```sh
npm install --save-dev formulaEdit-react
```
然后将下面的内容添加到您的.eslintrc文件
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

## License
MIT