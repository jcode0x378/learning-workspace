# Loop 迴圈 （iterate 迭代）

- 有條件地重複執行某個邏輯
- 針對一群東西去做迭代
- 條件式是什麼？該怎麼去遞增使得條件式最終成為 false

## For Loop Statement

```js
// intitialization => declaration statement
// condition/incremental => expression
for ([initialization]; [condition]; [incremental]) expression;
for ([initialization]; [condition]; [incremental]) {
  expression / statement;
}

for (;;) 1; // minimal valid for statement

for (let i = 0; i < 100; i = i + 1) {
  // some thing to do
  console.log(i);
}
```

## While Loop Statement

```js
while (condition) expresion;
while (condition) {
  expresion / statement;
}

let i = 0;
while (i < 100) {
  console.log(i);
  i = i + 1;
  // ++i // 語法糖
}
```
