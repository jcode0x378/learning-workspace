// What
// method （方法） = function
// 有什麼差別： `this`
// method 是依附在物件（資料）的函數

// Why
// why we need function/method? 封裝邏輯（想法、流程、步驟），重複利用

// map, filter, reduce

// map
const a = [1, 2, 3, 4, 5]; // [2, 3, 4, 5, 6]: a's elements + 1 f(x): x + 1

const b = [];

for (let i = 0; i < a.length; i = i + 1) b[i] = a[i] + 1;

// []: a's elements + 2
for (let i = 0; i < a.length; i = i + 1) b[i] = a[i] + 2;

a.map(x => x + 1); // [2, 3, 4, 5, 6]
a.map(x => x + 2);
a.map(x => String(x)); // ['1', '2', '3', '4', '5']

const chars = ['d', 'e', 'w'];
chars.map(y => y.charCodeAt());

const ppl = [17, 39, 22, 31, 29];
ppl.map(z => z >= 18);
// "price is xx.yy", 1. price => xx.yy Number.toFixed, 2. xx.yy => "price is xx.yy"
const prices = [28, 40, 10, 38];
prices.map(x => 'price is ' + (x * 0.8).toFixed(2));

// we don't care about the for loop/iteration

// filter

// filter out all odd number in a
a.filter(x => x % 2 === 1); // [1, 3, 5];
a.filter(x => x % 2 === 0);

// chaining 鏈式
// 靈活使用 map filter reduce 串接起來可以減少變數命名 也較簡潔
const prices2 = [28, 40, 10, 38]; // "price is xx.yy"
prices2.filter(x => x * 0.8 <= 30).map(x => 'price is ' + (x * 0.8).toFixed(2));

prices2
  .map(x => x * 0.8)
  .filter(x => x <= 30) // get the sum
  .map(x => 'price is' + x.toFixed(2));

const totalPrice = prices2 // 等號左邊等於等號右邊
  .map(x => x * 0.8)
  .filter(x => x <= 30)
  .reduce((y, x) => {
    return y + x;
  }, 0);

totalPrice.toFixed(2); // 變數.toFixed()

// map & filter 是 array 方法 reduce 的結果是 number
prices2
  .map(x => x * 0.8)
  .filter(x => x <= 30)
  .reduce((y, x) => {
    return y + x;
  }, 0)
  .toFixed(2); // number.toFixed()

// get the sum

// prices2.map(x => ( x * 0.8).toFixed(2));

// reduce: most powerful but most complicated
// 把一群東西濃縮成一個東西，相同的概念 fold, scan

let sum = 0;
for (const value of a) sum = sum + value;

a.reduce((sum, value) => {
  return sum + value;
}, 0); // 15

// array => boolean
// 1. every, 所有的元素都必須滿足條件
prices2.every(price => price >= 20); // boolean

// 2. some, 只要有一個元素滿足條件
prices2.some(price => price >= 30); // boolean

prices2.includes(40); // boolean ===

// 如果要你用 for 來寫出 every & some 的函數，你應該要怎麼寫 function every(array, callback) { ... }
// 如果空陣列的話，會得到什麼？先思考再驗證

// transform 轉型:  array => x | x =>
// toString()
// join() array => string
// split() string => Array
['a', 'b', 'c'].join(); // 'a,b,c'
['a', 'b', 'c'].join(''); // 'abc'
['a', 'b', 'c'].join(' | '); // 'a | b | c'

// from 把不是陣列的東西（必須是可迭代的）轉成陣列
Array.from('abc'); // ['a', 'b', 'c']
Array.from({ 0: 'a', 1: 'b', 2: 'c', length: 2 }); // ['a', 'b']
Array.from({ length: 2 }); // [undefined, undefined]
const obj = {};
obj['0']; // ??? undefined

// Rest Parameters: arguments
function foo() {
  'adf';
  let sum = 0;
  true;
  false;
  arguments; // array like (index + length)
  for (let i = 0; i < arguments.length; i += 1) sum = arguments[i] + sum;
  Array.from(arguments).reduce((sum, value) => sum + value, 0);
}

// .of create an array
Array.of(1, 2, 3); // [1, 2, 3];
function aslkfhj(arr) {
  const newArray = Array.of(...arr, 1, 2);
  const newArray1 = [...arr, 1, 2];
  const newArray2 = arr.concat(1, 2);
}
// WHY we need .of method
[1, 2, 3];
Array(1, 2, 3); // [1, 2, 3]; OK
Array(3); // [3] (X)  [<slot>, <slot>, <slot>]

// subarray
// slice 切片
[1, 2, 3, 4, 5].slice(1, 3); // [2, 3] new array
[1, 2, 3, 4, 5].slice(1); // [2, 3, 4, 5] new array
// splice, change the original array
[1, 2, 3, 4, 5].splice(1, 2, 3, 4); // [1, 3, 4, 4, 5]

// find (something)
const findArray = [1, 2, 3, 4];
const objs = [{ id: 1 }, { id: 2 }, { id: 3 }];
findArray.find(v => v === 3); // 3 (undefined if not found)
findArray.findIndex(v => v === 3); // 2 (index) (-1 if not found)
findArray.indexOf(3); // 2
objs.indexOf({ id: 1 }); // 0 OK??? NG
// findLast/findLastIndex, includes

// others
// reverse
[1, 2, 3].reverse(); // [3, 2, 1] change the original array
// sort, callback return 1/-1, change the original array
[1, 2, 3].sort((a, z) => a - z);
objs.sort((a, z) => a.id - z.id);
Array.isArray();

// 1. MDN array methods
// 2. for loop => array method
// 3. how to use reduce to do map and filter

// toString()
// pop() 移除最後一個
// push() 新增至最後一個.
// concat() 兩個 Array 接起來
// forEach() 依序將 Array 中值按 index 印出

// pratices

// string <=> array

const someStr = 'd-b-a-c'; // 'a-b-c-d';

//
// string => array
//
let result = [];
for (let i = 0; i < someStr.length; i += 1) {
  const card = someStr[i];
  if (card === '-') {
    continue;
  } else {
    let index = 0;
    // [1, 2] 3
    for (let j = 0; j < result.length; j += 1) {
      if (card < result[j]) {
        index = j;
        break;
      }
      index = j;
    }
    console.log(card, index, result[index]);
    result.splice(index, 0, card);
  }
}

let sorted = '';

for (let i = 0; i < result.length; i += 1) {
  if (i >= result.length - 1) {
    sorted += result[i];
  } else {
    sorted += result[i] + '-';
  }
}

console.log(sorted);

// use array method (split, join, filter, forEach, reduce, -sort- XX)
// result should be a string
debugger;
const someStr1 = 'd-b-a-c';
// string mothod: split() array mothod: filter()
// 過濾 '-' 以外的字串存到 chars
const chars1 = someStr.split('').filter(char => char !== '-');
let result1 = [];
for (let i = 0; i < chars.length; i += 1) {
  // 4
  const card = chars[i]; // d
  if (result.length === 0) {
    result.push(card); // [d]
  } else {
    for (let j = 0; j < result.length; j += 1) {
      if (card < result[j]) {
        result.splice(j, 0, card); // 比較小就在 index 0 插入
        break;
      }
    }
  }
}
const sortedStr = result.join('-');
console.log(sortedStr);

const allChar = someStr.split('-');
const sortedChars = allChar.reduce((result, char) => {
  // char
  if (result.length === 0) result.push(char);
  else {
    for (let j = 0; j < result.length; j += 1) {
      if (char < result[j]) {
        result.splice(j, 0, char); // 比較小就在 index 0 插入
        break;
      }
    }
  }
  return result;
}, []);
// const sortedString = sortedChars.join('-');
// chaining style
const sortedString = someStr
  .split('-')
  // .sort((a, z) => a < z ? -1 : 1)
  .reduce((result, char) => {
    // char
    if (result.length === 0) result.push(char);
    else {
      for (let j = 0; j < result.length; j += 1) {
        if (char < result[j]) {
          result.splice(j, 0, char); // 比較小就在 index 0 插入
          break;
        }
      }
    }
    return result;
  }, [])
  .join('-');

// question: write another version with result data type as a string instead of array
