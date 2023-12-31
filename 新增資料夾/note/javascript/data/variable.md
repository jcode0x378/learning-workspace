# Variable

WHAT: container
WHY: store value

HOW:

## Syntax

```js
// you need to "declare" 宣告 （聲明） variable before use

// let const (var legacy): keyword
let name; // declare (through the keyword)
name; // read the variable's value
name = 1 + 1; // write
name = 2;

let name2 = 1 + 1; // declare + write => initialization/default value

const name3 = 'jeffrey'; // can't skip the initialization
name3 = '123'; // error, can't reassign
```

## Identifier

- valid variable name
  - initial with [a-zA-Z] + $ \_

## Assignment

```js
// LHS: left hand side, variable (like)
// RHS: right hand side, must be an expression
LHS = RHS;
```

## Hoisting 提升

What: 宣告的機制，這種機制會使得某些變數或函數在宣告之前就可以存取（只有宣告的部分）。

Who: `var` & `function` （statement） 來宣告的都有 hoisting

```js
// 0: var foo; function scope's line 0
// 0: var bar;
foo; // okay? okay, value = undefined, why? hoisting
bar + 123; // undefined + 123 = NaN
if (Math.random() > 0.5) console.log(true);

var foo; // declare
var bar = 123; // declare + assignment
foo; // okay
bar; // 123
```

```js
console.log(fn1()); // okay? ok 123
console.log(fn2()); // okay? error
console.log(fn3()); // okay? error

// function statement
function fn1() {
  return 123;
}

// RHS function expression
const fn2 = function fn3() {};
```

## Scope

What:

```js
var x = 1;

{
  var x = 2;
}

x; // 2

const y = 1; // 客廳的衛生紙

{
  console.log(y); // Error: no hoisting TDZ time dead zone
  const y = 2; // 房間的衛生紙，你在這個小房間裡面，你想要有自己的 y ，然而你卻在還沒完成宣告前就使用它
  console.log(y); // 就近取得
}

{
  y; // okay
}
```

```js
for (let i = 0; i < 3; i = i + 1) {
  setTimeout(() => console.log(i), 100); // 0, 1, 2 | 3 3 3
}
```

## Todo

- scope
- hoisting
-
