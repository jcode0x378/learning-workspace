/**
 * 題目：
 * 隨機產生兩對隨機組合，每組必須符合條件 0 <= X <= 100 、 X <= Y <= 100
 * 既第一對 (x1, x2) ，第二對 (y1, y2)，作為同一條軸上的兩條線
 * 1. console.log 兩對數字是否有重疊
 * 2. 若有重疊，console.log 重疊的長度，例，若(1, 5) (3, 8) => 則重疊長度等於 5 - 3 => 2
 *
 * 理解:這兩條線的關係 0 <= X <= Y <= 100，且x2 > x1 、y2 > y1，假設兩條線重疊到就把重疊長度算出來
 * 方法:讓x2 > x1 、y2 > y1確保兩條線都在預設範圍，判斷是否 y1 <= x2 && x1 <= y2 ，
 *     如果是就將x1、y1較靠右的值取出，將x2、y2較靠左的值取出來算出長度。
 * pseudocode:宣告四個變數(x1、x2、y1、y2)將隨機整數存入，並使(x1 < x2 y1 < y2)，
 *     判斷(y1<=x2 && x1 <= y2)進入判斷式內將(x1, y1)較大值取出 (x2, y2)內較小值取出
 *     兩值互減後有可能有負數用Math.abs()轉為正整數。
 */

const x1 = Math.floor(Math.random() * 101);
const x2 = Math.floor(Math.random() * (101 - x1) + x1);
const y1 = Math.floor(Math.random() * 101);
const y2 = Math.floor(Math.random() * (101 - y1) + y1);

console.log('x1=' + x1 + ',x2=' + x2);
console.log('y1=' + y1 + ',y2=' + y2);

if (y1 <= x2 && x1 <= y2) {
  let overlapStart = Math.max(x1, y1);
  let overlapEnd = Math.min(x2, y2);
  console.log('X Y 有重疊，重疊長度1=' + Math.abs(overlapStart - overlapEnd));
} else {
  console.log('X Y 沒有重疊');
}

// 消除不確定性（排除不要的情境） early return
