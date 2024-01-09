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
empty(); // undefined
```

## Parameter

### terms

```js
// callee: parameter 參數 （中：形式參數） 定義者／作者
fucntion foo(param) {}

// caller: argument 引數 （中：實際參數）
foo(123);
```

### Default Value

```js
// what if the caller skip the argument
function foo(p1) {}

foo(); // p1 undefined

function bar(p1 = 123) {}

bar(undefined); // p1 123
bar(null); // null

function baz(p1, p2 = 123, p3 = 'abc') {}
baz();
baz(true);
// slot: 空格、槽,
baz(true, undefined, 'bbb'); // p1 true, p2 123, p3 'bbb'

Number.parseInt('123'); // 123
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/parseInt
```

### Rest Parameters 不定參數

```js
function sum(p1, p2, p3, p4, p5) {}
sum(1, 1, 1, 1, 1); // 4

function sum(...params) {
  // params => array
  let sum = 0;
  for (const i of params) sum += i;
  return sum;
}
sum(1, 1, 1, 1, 2, 3, 4);
console.log(1, 1, 1);
Math.max(1, 2, 3, 4, 5); // 5


function foo(p1, p2, ...rest) {}

// NG, rest can not place in the middle of parameters
function foo(p1, ...rest, p2) {}
```

### Control flow (Stop the function)

```js
function foo() {
  if (Math.random() > 0.5) {
    return 'big'; // life end
  }

  return 'small';
}

// what else `throw`
function bow() {
  if (Math.random() > 0.5) {
    throw 'big'; // life end, no return
  }

  return 'small';
}
bow(); // 50% no return

function bow() {
  throw 'bow'; // throw an exception 例外，發生意料之外的事情，導致無法處理，進而中斷程式的執行
  // throw can be any value
  throw true;
  throw 123;
}

bow(); // stop here because of the trow
console.log('after bow');

// I know the below code may cause an exception, so I wrap it up with a `try`
try {
  bow();
} catch (error) {
  console.log('this is the exception: ', error);
}

try {
  bow();
} catch (error) {}
console.log('after bow');

// example
// (x: number, y: number) => number;
function add(x, y) {
  // x and y exist
  if (x === undefined || y === undefined) {
    throw new Error('x or y can not be empty');
  }
  // x and y both valid number
  if (typeof x !== 'number' || typeof y !== 'number') {
    throw new Error('x and y should be type number');
  }

  return x + y;
}
```
