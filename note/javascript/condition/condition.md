# Condition

- serveral condition statements
- statement = a block of code
  - 相對複雜
  - 通常有副作用（side effect）
- condition, expect boolean

```js
if (expression) {
  // expression / statement
} else {
  //  expression / statement
}

if (expression) expression
else expression

if (condition/expression) {

} else if () {

} else {}

switch (expression) {
  case expression:
    // expression / statement
    break;
    return;
  default:
}

let grade; // 'A', 'B', 'C', ... (enumerable)

switch (grade) {
  case 'A':
    // do something for case 'A'
    console.log('perfect');
    break; // fall through if no break
  case 'B':
    // do something...
    console.log('nice');
    break;
  case 'C':
  case 'D':
    console.log('please work hard');
    break;
  default:
    console.log('');
}

let foo = if (true) {123} else {321};
```

## ternary operator 三元式

```js
expression ? expression(true) : expression(false); // the whole ternary is an expression too

let foo = true ? 'good' : 'not good';

// if statement
let foo;

if (true) foo = 'good';
else foo = 'not good';

let bar = c1 ? 1 : c2 ? 2 : c3 ? 3 : 4;

let bar;

if (c1) bar = 1;
else if (c2) bar = 2;
else if (c3) bar = 3;
else bar = 4;
```
