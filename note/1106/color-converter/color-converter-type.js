// @ts-check

/**
 * 把 rgb 的顏色轉成 16 進位的顏色
 * { r: 255, g: 255, b: 255 } => '#FFFFFF' 必須是大寫
 * @param {{r: number, g: number, b: number}} rgb
 * @returns {string}
 */
function toHex(rgb) {
  // code here
}

console.assert(toHex({ r: 255, g: 255, b: 255 }) === '#FFFFFF', 'toHex test 1 failed');
console.assert(toHex({ r: 255, g: 79, b: 149 }) === '#FF4F95', 'toHex test 2 failed');
console.assert(toHex({ r: 66, g: 204, b: 168 }) === '#42CCA8', 'toHex test 3 failed');

/**
 * 把 16 進位的顏色轉成 RGB 的顏色
 * '#FFFFFF' => { r: 255, g: 255, b: 255 }
 * @param {string} hex
 * @returns {{r: number; g: number; b: number}}
 */
function toRGB(hex) {
  // code here
}

console.assert(checkRGB(toRGB('#FFFFFF'), { r: 255, g: 255, b: 255 }), 'toRGB test 1 failed');
console.assert(checkRGB(toRGB('#BD6CCC'), { r: 189, g: 108, b: 204 }), 'toRGB test 2 failed');
console.assert(checkRGB(toRGB('#CCC372'), { r: 204, g: 195, b: 114 }), 'toRGB test 3 failed');

function checkRGB(rgb, rgb2) {
  return Object.entries(rgb).every(([key, value]) => value === rgb2[key]);
}
