# Data （資料）數據

- string 字串
- number 數字
- boolean 布林

- 所有程式語言都有這三種資料
- 透過這三種資料就可以建立整個（數位）世界

# Syntax

```js
// boolean
true;
false;

// number
// always float
123;
123.0;
0.123211;

1e10;
123;
0x1ff;
0o17;

// string
('kjfiw');
'12312'`fatsda2313`;

("'\t");
```

ASI

## Data (value) Types (= Set)

- Primitive Types/Value （基礎型別） immutable
  - boolean
  - number
  - string
  - null
  - undefined
  - (ES2015+): symbol, bigint
- Object Types （物件型別）
  - object 物件（對象）
  - array 陣列（數組）
  - function 函式／函數

### Empty Value

`null` & `undefined` // 有意／無意

```js
Number(null);
Number(undefined);
```

## Manipulation (Data)

- operator 運算子 （運算子作用的值 => 運算元 operand ） x + y, +: operator, x, y: operand
- method 方法

```js
// boolean
!!true; // false

// number + - * /

// string method

// concat
'123' + '321'; // '123321'
'123' + 321; // '123321' pro string
123 + true; // 124
'123'.concat('321'); // '123' + '321'

// slice (substring)
'abc'.slice(0, 1); // 'a' index （索引值） 0 based

''.length; // 0
```

## Conversion

- explicit 顯式
- implicit 隱式

### Explicit

```js
Boolean(value); // falsy
Number(value);
String(value);
```

- to boolean
  - null & undefined => false
  - number: 0 & NaN => false
  - string: <EMPTY_STIRNG> => false '' "" ``
  - falsy value: above
- to number
  - null => 0
  - undefined => NaN
  - boolean => true 1 false 0
  - string => '123' => 123 '123.1' => 123.1 '0xA' => 10, for all invalid => NaN 'abc' => NaN
- to string
  - null & string & boolean => as it 'null' 'undefined' 'true' 'false'
  - number: as it unless big number

### Implicit (coercion)

- operator
  - - - - /
    * `+'123'`
    * `123 + ''` => '123'
    * `'123' - 0` => 123
- function
  - `''.concat(123)` => '123'
  - `'' + 'abc'`
- statement
  - `if ('123')`

## Comparison

compare between value

`===`

- if the type same? no false
- else compare value => result

`> < >= <=`

- main for number
- `'a' > 'b'`

## Object Family

- 物件是一種複合型的資料
- 陣列是一群（相似）的資料，陣列只是一種特殊（特例）的物件

```js
// key 鍵 aka property 屬性 can be string, number, and symbol
// if key isn't a valid identifier (a valid variable name), it should wrap by quote
{ key: value, }
{ property: value }
({ 'this is a string': value })

// access 存 + 取

const foo = {
  a: 123,
  b: 321,
  'this is a string': 456,
};

// read 讀取
foo.a; // 123 you can use . if the property is a valid identifier
foo['a']
// foo[expression expect to string]
({ [true]: 123 })[true]
foo['this is a string'];

// write 寫入
foo.a = value
foo['name'] = 'jeffrey'

const person = {
  name: 'jeffrey',
  age: 28,
  height: 180,
  hairColor: 'black',
  single: false,
  son: {
    name: '',
    age: 0,
    height: 0,
  }
  children: []
}
```

- 一群相似／一樣型別的值（可以不一樣，但是不鼓勵、不建議）
- item/element/value 項目／元素／值
- index 索引， 0 based
- length 長度, length 跟 index 關係就是 last index = length - 1
- 豐富的方法 method

```js
[54, 60, 80, 100];
// { 0: 54, 1: 60, 2: 80, 3: 100 } // 陣列其實就是一種統一規格的 key 的物件，但陣列不等於物件
// ({ 0: 54, 1: 60, 2: 80, 3: 100 }).length // 陣列其實就是一種統一規格的 key 的物件，但陣列不等於物件

[[123], [321], { name: 'peter' }];

// read
[0, 1, 2][index];
[0, 1, 2][0];

// write
[0, 1, 2][0] = 1;

const scoreList = [54, 60, 80, 100]; // length;
scoreList.length; // 4
scoreList[scoreList.length - 1]; // 100

scoreList.map(score =>
  score >= 80
    ? 'A'
    : score >= 60
    ? 'B'
    : score >= 40
    ? 'C'
    : score >= 20
    ? 'D'
    : 'E',
); // ['C', 'B', 'A', 'A']

// 準備一個盒子（變數 avg）來儲存平均的結果，預設是 0
// 準備一個盒子（變數 sum）來暫存加總的結果，預設是 0
// 逐一讀取每一個陣列的值，並把每個值累加到 sum
// 把 sum 除以總個數，並把結果存到 avg

const scoreList = [54, 60, 80, 100];

let avg;
let sum;

for (let i = 0; i < scoreList.length; i = i + 1) {
  sum = scoreList[i] + sum;
}

avg = sum / scoreList.length;

let foo = scoreList.length;
let avg = 0;
for (let i = 0; i < scoreList.length - 1; i = i + 1) {
  avg = avg + scoreList[i] / foo;
}
console.log(avg);
```
