# Loop 迴圈 （iterate 迭代）

- 有條件地重複執行某個邏輯
- 針對一群東西去做迭代
- 條件式是什麼？該怎麼去遞增使得條件式最終成為 false

## For Loop Statement

```js
// initialization => declaration statement
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

```js
// for in
// what: 一種 for 迴圈
// why: 主要是針對物件（家族）的「屬性」去做迭代（ iterate ），主要只是適用於物件的 map 用法，不適合在陣列上

// how:

// map
const students = {
  9523: { name: '唐伯虎', score: 98 },
  9524: { name: '祝芝山', score: 59 },
};

for (const sid in students) {
  const student = students[sid];
  console.log(student.name + ' 的成績是 ' + student.score);
}

for (const key in a) {
  console.log(key); // b c d
  b[key] = a[key];
```

```js
// for of
// what: 一種 for 迴圈，針對可迭代（ iterable ）物件的「值」（ value ）做迭代
// iterable: 陣列、字串、iterator
// why: 語法比較簡單、比較好讀、適用於多種資料格式。缺點：拿不到 index 、執行效率比較慢
// 不需要知道 index 的時候也可以用 forEach

const scores = [32, 54, 12, 55, 93];

let sum0;

for (let i = 0; i < scores.length; i += 1) sum0 = scores[i] + sum;

let sum1 = 0;

for (const score of scores) sum1 = sum1 + score;
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
