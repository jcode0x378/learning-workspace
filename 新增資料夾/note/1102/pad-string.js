/**
 * 假設：
 * 1. 變數 foo 是一個你在撰寫時未知長度的字串
 * 2. 變數 placehold 是一個由字母 'x' 組成的長度無限字串
 *
 * 任務：
 * 1. 隨機取一正整數存於變數 bar，其值必須大於 foo 的長度且小於 50
 * 2. 根據 bar 的長度產生一個新的字串，新的字串是由 foo 加上 bar 減掉 foo 長度的字串 'x...'
 *
 * 若 bar - foo 的長度為 3，則新的字串是 'Lorem ipsum dolor sitxxx'
 *
 * 提示：
 * slice
 */

let foo = 'Lorem ipsum dolor sit'; //21
let placehold = 'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx';
// let bar = Math.floor(Math.random() * 50);
const bar = Math.floor((50 - foo.length) * Math.random()) + foo.length;
const delta = bar.length - foo.length;
const x = placehold.slice(0, delta);
const newFoo = foo + x;

// let newBar = 0;
// if (bar > foo.length) {
//   //bar > 16
//   newBar = bar - foo.length;
//   console.log(foo + placehold.slice(0, newBar) + '\nnewBar' + newBar);
// } else {
//   // bar < 16
//   bar = bar + foo.length;
//   newBar = bar - foo.length;
//   console.log(foo + placehold.slice(0, newBar) + '\nnewBar' + newBar);
// }
