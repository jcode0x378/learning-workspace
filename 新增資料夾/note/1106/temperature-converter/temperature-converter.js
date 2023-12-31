/**
 * 一個攝氏及華氏溫度的轉換函數
 * temperatureConverter: (temperature: number, type: 'C'|'F') => number
 * 參數 type 表示轉換的目標， 'C' 是攝氏、 'F' 是華氏
 * 回傳值：必須保留小數點一位且根據小數點的第二位做四捨五入
 * 公式： F = C * 1.8 + 32
 */

/** 2hr
 - 理解:從測試程式碼發現，調用函數時輸入num及一個type來決定要轉換°C或°F
 - 方案:判斷type為'C'或'F'，將傳入值透過公式轉為輸出結果，使用math方法將結果取到小數點第二位四捨五入
 - pseudocode:
  - 建立一個函數(temperatureConverter)，接收傳入參數值為(temperature: num,type: str)
  - 判斷 type 決定是 °C轉°F 或 °F轉°C
  - 將 temperature 帶入轉換公式得出結果，再使用方法 Math.round(fahrenheit,-2) 四捨五入到小數點第二位
  - 回傳 temperature
 - note:
  - 確實瞭解測試程式碼要的是什麼參數，若期待的回傳值有所不同，需針對傳入的 type 在函數內做判斷分類
  - Math.round 只能取到整數位，要得到小數點第二位需先將結果*100 再回除
  - 
 */

// 在這裡撰寫程式碼
function temperatureConverter(temperature, type) {
  if (type === 'F') {
    // F -> C
    return Math.round((temperature * (9 / 5) + 32) * 100) / 100;
  } else {
    // C -> F
    return Math.round((temperature - 32) * (5 / 9) * 100) / 100;
  }
}

/**
 * 以下為測試用程式碼，練習時請忽略：
 * 取消註解下列的程式碼並用 node 執行這個檔案可以進行基本的驗證
 */

[
  [0, 32],
  [4, 39.2],
  [37.5, 99.5],
  [40, 104],
  [100, 212],
].forEach(([C, F], i) => {
  console.assert(
    temperatureConverter(C, 'F') === F,
    `第 ${i} -1輪測試，輸入 ${C} 期待得到 ${F} 卻得到 ${temperatureConverter(
      C,
    )}`,
  );
  console.assert(
    temperatureConverter(F, 'C') === C,
    `第 ${i} -2輪測試，輸入 ${F} 期待得到 ${C} 卻得到 ${temperatureConverter(
      F,
    )}`,
  );
});

console.log('如果上面沒有出現任何測試不通過的訊息就表示測試都通過');
