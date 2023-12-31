/**
 * 隨機產生 7 個 >= 0 且 <= 9 的整數，並以陣列型別回傳，且整數之間不能重複
 * randomUnique7: () => number[]
 */

/** 1.5hr
- 理解:呼叫函數時隨機產生 7 個整數，將 7 個整數存進陣列中回傳，整數不得重複
- 方案:使用 random 方法隨機產生數字，並使用 floor 方法取得整數，逐一比較後沒重複存到陣列中，滿足 7 個整數後回傳陣列
- pseudocode:
  - 建立一個函數傳入值為空
  - 宣告一個陣列(numArray)，並用while迴圈逐一存入整數，直到小於長度7時跳出
  - 宣告一個變數(num)使用 Math.random 產生整數，並使用 Math.floor 取得整數，存回 num
  - 使用 for 迴圈逐一用 if 判斷(numArray)是否等於(num)，宣告一個變數 j 用於檢查目前陣列內所有整數，如果都不相同跑到目前長度即停止
  - 如果有相同的整數就跳出再跑一次 while 迴圈
  - for 跑完指定次數後如果整數都不相同，就將新的(num)加入索引
- note:
  - 使用 while 直到條件到達才跳出迴圈
  - 宣告一個 equal 作為檢查的依據
 */

// 在這裡撰寫程式碼
function randomUnique7() {
  const numArray = [];
  while (numArray.length < 7) {
    const num = Math.floor(Math.random(num) * 10);
    let equal = false;
    for (let j = 0; j < numArray.length; j += 1) {
      if (numArray[j] === num) {
        equal = true; // reasign, let okay
        break;
      }
    }
    if (equal === false) {
      numArray[numArray.length] = num;
    }
  }
  return numArray;
}
/**
 * 以下為測試用程式碼，練習時請忽略：
 * 取消註解下列的程式碼並用 node 執行這個檔案可以進行基本的驗證
 */

runTest(10);
console.log('如果上面沒有出現任何測試不通過的訊息就表示測試都通過');

function runTest(run) {
  const memo = [];
  for (let i = 0; i < run; i++) {
    const randoms = randomUnique7();
    console.assert(
      checkRandomUnique(randoms, memo),
      `第 ${i} 輪測試不通過 ${randoms}`,
    );
  }
}

function checkRandomUnique(list, history) {
  const isArray = Array.isArray(list);
  const sortedList = list.sort((a, b) => a - b);
  const hasLength = isArray && sortedList.length === 7;
  const innerUnique =
    hasLength && sortedList.every((num, idx) => list.lastIndexOf(num) === idx);
  const outterUnique =
    innerUnique &&
    history.every(numbers => numbers.toString() !== sortedList.toString());
  outterUnique && history.push(sortedList);
  return outterUnique;
}
