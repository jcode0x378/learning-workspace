/**
 * 找零計算機
 * 輸入：價格及付款
 * 輸出：找零的物件，找零共需要有幾個五十、十、五、一元的硬幣
 * getChange: (price: number, paid: number) => { fifty: number; ten: number; five: number; one: number }
 */
/** 1.5hr
- 理解:輸入消費價格及付款金額，返回一個物件內容是要找零的50、10、5、1元硬幣需個幾個
- 方案:先判斷付款金額是否正確大於消費金額，付款金額減掉消費價格轉換出找零的數量
- pseudocode:
  - 新增一個物件名為(change)，內容為(fifty、ten、five、one)
  - 判斷付款金額是否小於消費金額，true 回傳提示訊息和空的物件
  - 付款金額扣除消費金額，新增一個變數(allChange)存放找零總額
  - 使用迴圈將allChange帶入判斷式依序以(50、10、5)做計算1元直接存進change
  - 判斷式內計算過程為allChange除以各硬幣的值後存到change物件內
  - 再將allChange - (硬幣值 * 硬幣數量)
 */

/* while loop */
// function getChange(price, paid) {
//   const change = {
//     fifty: 0,
//     ten: 0,
//     five: 0,
//     one: 0,
//   };

//   if (paid < price) {
//     console.log('付款金額不足');
//     return change;
//   }

//   let balance = paid - price;

//   while (balance > 0) {
//     if (balance >= 50) {
//       change.fifty = Math.floor(balance / 50);
//       balance -= 50 * change.fifty;
//     } else if (balance >= 10) {
//       change.ten = Math.floor(balance / 10);
//       balance -= 10 * change.ten;
//     } else if (balance >= 5) {
//       change.five = Math.floor(balance / 5);
//       balance -= 5 * change.five;
//     } else {
//       change.one = balance;
//       balance = 0;
//     }
//   }
//   return change;
// }
/* forEach */

function getChange(price, paid) {
  if (paid < price) {
    console.log('付款金額不足');
    return null;
  }

  let balance = paid - price;
  const change = {
    // 存要找的零錢個數
    fifty: 0,
    ten: 0,
    five: 0,
    one: 0,
  };
  const denominations = [50, 10, 5, 1]; // 強制Object.keys 依照 Array 順序
  const denominationNames = {
    // Object.keys 要遍歷的 key 50 => 1
    50: 'fifty',
    10: 'ten',
    5: 'five',
    1: 'one',
  };
  // 問題 Object.keys 會從 1 開始跑沒辦法達到要求
  // Object.keys(denominations).forEach(value => {
  //   const key = denominations[value]; // 拿到 50
  //   change[key] = Math.floor(balance / value);
  //   // 算出應找個數存到 change
  //   balance -= change[key] * value;
  // });
  denominations.forEach(value => {
    const key = denominationNames[value]; // 拿到 50
    change[key] = Math.floor(balance / value);
    // 算出應找個數存到 change
    balance -= change[key] * value;
  });
  return change;
}

/**
 * 以下為測試用程式碼，練習時請忽略：
 * 取消註解下列的程式碼並用 node 執行這個檔案可以進行基本的驗證
 */

[
  [[217, 300], genChange(1, 3, 0, 3)],
  [[62, 100], genChange(0, 3, 1, 3)],
  [[100, 147], genChange(0, 4, 1, 2)],
].forEach(([input, expected], i) => {
  console.assert(
    varify(getChange(...input), expected),
    `第 ${i} 輪測試，輸入 ${input} 期待得到 ${JSON.stringify(
      expected,
    )} 卻得到 ${JSON.stringify(getChange(...input))}`,
  );
});

console.log('如果上面沒有出現任何測試不通過的訊息就表示測試都通過');

function varify(change, expect) {
  return Object.keys(expect).every(key => change[key] === expect[key]);
}

function genChange(fifty, ten, five, one) {
  return { fifty, ten, five, one };
}
