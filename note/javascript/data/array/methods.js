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

// 1. MDN array methods
// 2. for loop => array method
// 3. how to use reduce to do map and filter
