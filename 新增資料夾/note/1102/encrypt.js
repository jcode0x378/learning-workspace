/**
 * 隨機取一正整數 foo 且 1 <= foo <= 20
 *
 * 假設：
 * 1. 把 1 ~ 20 分作五個等分，每一組四個，分別對應到 1 => 1-1, 2 => 1-2, ..., 19 => 5-3, 20 => 5-4
 *
 * 任務：
 * 求 foo 對應的結果
 - 理解:隨機產生出一個整數，且小於等於 1 大於等於 20，並拆分為五等分1 = 1-1 ... 20 = 5-4
 - 方案:產生一個整數後，將整數逐一判斷屬於五等分的哪一個等分
 - pseudocode:
  - 宣告一個變數存放隨機值
  - 宣告一個變數存放分組結果
  - 使用判斷式判斷整數的群組再細分每一群組的子區塊
 */

const num = Math.floor(Math.random() * 20) + 1;
const quotient = Math.ceil(num / 4);
const rawRemainder = num % 4;
const remainder = rawRemainder === 0 ? 4 : rawRemainder;
const result = quotient + '-' + remainder;

// let foo = '';
// switch (true) {
//   case num >= 17:
//     console.log(
//       foo === 17 ? '5-1' : foo === 18 ? '5-2' : foo === 19 ? '5-3' : '5-4',
//     );
//     break;
//   case num >= 13:
//     console.log(
//       foo === 13 ? '4-1' : foo === 14 ? '4-2' : foo === 15 ? '4-3' : '4-4',
//     );
//     break;
//   case num >= 9:
//     console.log(
//       foo === 9 ? '3-1' : foo === 10 ? '3-2' : foo === 11 ? '3-3' : '3-4',
//     );
//     break;
//   case num >= 5:
//     console.log(
//       foo === 5 ? '2-1' : foo === 6 ? '2-2' : foo === 7 ? '2-3' : '2-4',
//     );
//     break;
//   case num >= 0:
//     console.log(
//       foo === 1 ? '1-1' : foo === 2 ? '1-2' : foo === 3 ? '1-3' : '1-4',
//     );
//     break;
// }
