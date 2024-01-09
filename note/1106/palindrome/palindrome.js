/**
 * 實作一個函數，輸入一個字串，回傳該字串的回文
 * palindrome: (str: string) => string
 * 範例： 'fast food' => 'doof tsaf'
 * 限制：不能使用 reverse 方法
 */
/** 
- pseudocode:
  - 建立一個函數(palindrome)並建立一個變數(expected)用來存(input)進來的字串
  - 逐一將字串依最後一個index往回存，先找到字串總長度當初使值，依序往回找每一個字回存
  - 回傳(expected)
- note:
*/

/* for loop */
// function palindrome(input) {
//   let expected = '';
//   for (let i = input.length - 1; i >= 0; i--) {
//     expected = expected + input[i];
//   }
//   return expected;
// }

/* array method */
function palindrome(input) {
  // 將輸入字符串轉換為陣列，以便使用 .reduce() 方法。
  // 'taiwan' => [t,a,i,w,a,n]
  let chars = input.split('');

  // 使用 .reduce() 方法來累加每個字符 創建一個反轉後的字串。
  // accumulator 累加 currentChar當前字串
  let expected = chars.reduce((accumulator, currentChar) => {
    return currentChar + accumulator;
    // t return => t
    // a + t return => at
    // i + at return => iat...
  }, ''); // 預設給一個空字串

  return expected; // 返回反轉後的字符串。
}

/**
 * 以下為測試用程式碼，練習時請忽略：
 * 取消註解下列的程式碼並用 node 執行這個檔案可以進行基本的驗證
 */

[
  ['taiwan', 'nawiat'],
  ['hello world', 'dlrow olleh'],
  ['你好嗎', '嗎好你'],
  ['', ''],
  [' ', ' '],
].forEach(([input, expected], i) => {
  console.assert(
    palindrome(input) === expected,
    `第 ${i} 輪測試，輸入 ${input} 期待得到 ${expected} 卻得到 ${palindrome(
      input,
    )}`,
  );
});

console.log('如果上面沒有出現任何測試不通過的訊息就表示測試都通過');
