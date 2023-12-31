/**
 * 隨機產生兩個介於 0 到 100 （不須包含）的整數 ran1, ran2
 * 產生一個隨機整數 ran3，其值必須介於 ran1 ~ ran2
 *
 *
 * 理解:先產生兩個隨機 1-100 整數，再從當前的區間產生一個整數
 * 方案:先將兩個隨機整數(ran1、ran2)產出，讓範圍確定，並確定 ran1 < ran2，
 *     再將 ran3 * (ran2-ran1) + ran1
 * pseudocode:宣告兩個變數(ran1、ran2)及一個互換整數用的變數(num)將隨機產出整數存入，
 *     判斷 ran1 > ran2 是的話將兩整數對調，將 (ran2-ran1) + ran1後的整數存入變數(ran3)
 *
 */

let ran1 = Math.floor(Math.random() * 100); //小
let ran2 = Math.floor(Math.random() * 100); //大
let num = 0;

console.log(ran1, ran2);

if (ran1 > ran2) {
  // 大小轉換
  num = ran1;
  ran1 = ran2;
  ran2 = num;
}
console.log(ran1, ran2);
const ran3 = Math.floor(Math.random() * (ran2 - ran1)) + ran1;
console.log(ran1, ran2, ran3);

const r1 = Math.floor(Math.random() * 100);
const r2 = Math.floor(Math.random() * 100);
const r3 = Math.floor(Math.random() * Math.abs(r1 - r2)) + Math.min(r1, r2);
// sign 正負號
// const 有高確定性
