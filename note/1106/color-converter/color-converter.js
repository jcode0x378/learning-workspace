/**
 * 把 rgb 的顏色轉成 16 進位的顏色
 * toHex: (hex: { r: number; g: number; b: number }) => string
 * 範例：{ r: 255, g: 255, b: 255 } => '#FF FF FF' 必須是大寫
 */

// 在這裡撰寫程式碼
function toHex(input) {
  function convert(num) {
    // const hex = Math.floor(num / 16).toString(16) + (num % 16).toString(16);
    // const hex = num.toString(16);
    return num.toString(16).toUpperCase();
  }
  return '#' + convert(input.r) + convert(input.g) + convert(input.b);
}
/**
 * 把 16 進位的顏色轉成 RGB 的顏色
 * toRGB: (rgb: string) => { r: number; g: number; b: number }
 * 範例：'#FFFFFF' => { r: 255, g: 255, b: 255 }
 */

/**
- 理解: input 預期會傳入16進位的顏色碼，需轉成RGB回傳
- 方案: 宣告一個物件(output)，將傳入的值切分成三塊，轉換完成回存到物件中
- pseudocode:
  - 預期接收進來的值會是string，宣告一個物件(output)存放轉換後的結果(r,g,b)
  - 將16進位的每一塊轉成整數處理，分別存回物件中，
  - #FFFFFF (length 1-7,index 0-6) r 1-3 g 3-5 b 5-7
 */

// 在這裡撰寫程式碼
function toRGB(input) {
  const output = { r: 0, g: 0, b: 0 };
  output.r = parseInt(input.slice(1, 3), 16);
  output.g = parseInt(input.slice(3, 5), 16);
  output.b = parseInt(input.slice(5, 7), 16);
  return output;
}
/**
 * 以下為測試用程式碼，練習時請忽略：
 * 取消註解下列的程式碼並用 node 執行這個檔案可以進行基本的驗證
 */

[
  [{ r: 255, g: 255, b: 255 }, '#FFFFFF', toHex],
  [{ r: 255, g: 79, b: 149 }, '#FF4F95', toHex],
  [{ r: 66, g: 204, b: 168 }, '#42CCA8', toHex],
  ['#42CCA8', { r: 66, g: 204, b: 168 }, toRGB, checkRGB],
  ['#42CCA8', { r: 66, g: 204, b: 168 }, toRGB, checkRGB],
  ['#42CCA8', { r: 66, g: 204, b: 168 }, toRGB, checkRGB],
].forEach(([input, expected, func, checker], i) => {
  console.assert(
    checker ? checker(expected, func(input)) : func(input) === expected,
    `第 ${i} 輪測試，輸入 ${JSON.stringify(input)} 期待得到 ${JSON.stringify(
      expected,
    )} 卻得到 ${JSON.stringify(func(input))} `,
  );
});

console.log('如果上面沒有出現任何測試不通過的訊息就表示測試都通過');

function checkRGB(rgb, rgb2) {
  return Object.entries(rgb).every(([key, value]) => value === rgb2[key]);
}
