import React from 'react';
import ReactDOM from 'react-dom';

import FormulaEdit from './components/FormulaEdit';
// import FormulaEdit from "formula-edit-react";

const defaultCode = "";
const fieldList = [
    { name: "放款金额", value: "fkje" },
    { name: "实际放款金额", value: "sjfkje" },
    { name: "借款人姓名", value: "jkrxm" },
    { name: "借款人手机号", value: "jkrsjh" },
    { name: "借款人身份证", value: "jkrsfz" }
];
const getCode = (code) => {
    console.log(code);
}

ReactDOM.render(
    <FormulaEdit
        theme="3024-night"
        height={200}
        defaultCode={defaultCode}
        fieldList={fieldList}
        readOnly={false}
        id="testId"
        lineNumber={true}
        onChange={getCode}
    />,
    document.getElementById('app')
);
