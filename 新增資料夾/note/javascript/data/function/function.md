# Function

- Function is IPO (input, process, output)
- encapsulation 封裝邏輯／步驟／演算法
- 重複利用
- callee 跟 caller 之間靠什麼維繫 => 契約（函數特徵 function signature 函數簽名）規範 input & output 的型別（資料的型別）

## Syntax

```js
// how to create/define a function (function's author/callee)
function fnName(input1, input2, input3, ...) { // input/parameter 參數, I, optional
  // function body => process P

  return expression; // output, O, optional 回傳 （中國：返回）
}

function fnName(LHS, LHS, LHS, LHS)

// how to call/involve （呼叫） 中國：調用 (function' user/caller)
// function call is an expression (RHS, evaluate a value from function's return)
fnName(input1, input2, input3, ...); // input1, input2, ... argument 引數 （其實你也可以把它稱為參數）
fnName(expression1/RHS, expression2/RHS, expression3/RHS)

const foo = fnName(input1, input2, ...);

// callee 函數的作者
// 契約：
// input: num1: number, num2: number
// output: number
function add(num1, num2) { // 期待我可以得到兩個 number 的 input ，所以我用兩個盒子去承接 input 的值
  // process, statement/expression
  const result = num1 + num2;
  return result; // 我承諾我會給回傳給你 number 的值
  // return num1 + num2;
}

add(1, 1); // 2
1 + 1; // 2

function empty() {} // empty function is a valid function
```
