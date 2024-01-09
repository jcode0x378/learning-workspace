# Object

## Reference

> What's the differences between Primitive and Object

### scalar vs space (in heap)

Primitive is scalar (nature)

```js
let yourWallet = 100;
let myWallet = 200;

myWallet = yourWallet;
yourWallet = 50;
myWallet; // 100
```

Object is a value live in heap 堆積 （中：棧） vs stack 堆疊

### Immutable

Primitive is immutable

```js
// you can not mutate （改變） the primitive
100 = 101
'abc'.length; // 3
'abc'.length = 2; // you can't
```

Object is mutable

```js
const a = { b: 1 };
a.b = 2;
const b = [1, 2, 3];
b.length; // 3
b.length = 2;
```

### Primitive has not property (Object Wrapper)

> Object has property

```js
const human = { name: 'peter', age: 31 };
const array = [1, 2, 3]; // array.length
```

> why you can write `.length` of a string??? if primitive has no property

> Object Wrapper: 他是 primitive 家族在 object 家族裡面的代表，在需要的時候可以借助他們
> 空值（undefined & null）沒有代表，其他都有
> String, Number, Boolean

```js
'abc'.toUpperCase(); // 'ABC'
String; // 從他身上借用來的
```

Object Wrapper Main functions

- 借用屬性給他們的 primitive
- 用來做值得轉型 `Number('123') // 123`
- 創造一個 primitive 的物件，沒事別用、有事也不要用

### Copy and Passing

https://blog.huli.tw/2018/06/23/javascript-call-by-value-or-reference/

- Copy by value/reference
- Pass by value/reference

```js
// copy by value/reference
let yw = 100;
let mw = yw; // 100 value assign mw
yw = yw = 50;

// copy by reference
let yo = {};
let mo = yo; // the address store in yo assign to mo
yo.a = 1;
mo.a; // 1
```

```js
// pass by value/reference

function foo(p1) {
  p1 = 321;
}

const num = 123;

foo(num); // num???

function bar(p1) {
  p1.a = 2;
}

const obj = { a: 1 };
bar(obj); // obj??? { a: 2 }
```

## How to Create a new Reference

Object: object, array, function (X)

### Object

- 物件可以用來表示一種複合型的資料
- 另一種資料的概念是 map/record/dictionary

```js
// map
const students = {
  9523: { name: '唐伯虎', score: 98 },
  9524: { name: '祝芝山', score: 59 },
};

for (const sid in students) {
  const student = students[sid];
  console.log(student.name + ' 的成績是 ' + student.score);
}
```

```js
// loop
const a = { b: 2, c: 3, d: 4, length: 3 };
const b = {};
// b.b = a.b;
// b.c = a.c;
// b.d = a.d;

for (const key in a) {
  console.log(key); // b c d
  b[key] = a[key];
}

// `Object.assign`
const c = Object.assign({}, a, { e: 5 });

// `spread operator`
const d = { b: 1, ...a, e: 5, b: 4 };

const obj1 = { a: 0, b: { c: 0 } };
const obj2 = Object.assign({}, obj1);
console.log(obj2); // { a: 0, b: { c: 0 } }
obj1 === obj2; // false
obj1.b === obj2.b; // true
obj2.b.c = 1;
obj1.b.c; // 0 => 1

const obj2 = {};
obj2.a = obj1.a;
obj2.b = obj1.b;
```

### Array

```js
const arr = ['a', 'b', 'c'];
arr.length;

for (const key in arr) {
  console.log(key);
}
```

```js
// loop (copy), we don't use `for in`, why we can only use `for in` in object
const a = [0, 1, 2, 3, 4];
const b [];
for (let i = 0; i < a.length, i = i + 1) b[i] = a[i];

// Object.assign, same
const c = Object.assign([], a);

// spread
const d = [...a];

// methods
const e = a.slice(); // 0, a.length, you got a same array but with new ref, just like Object.assgin
const f = [].concat(a); //

// methods that return a new ref: map, filter, slice, concat, ... any new added methods
// old methods that change the original array: push, pop, shift, unshift, splice, sort, reverse, ...
```
