// @ts-check

/**
 * @typedef {object} Change
 * @property {number} fifty
 * @property {number} ten
 * @property {number} five
 * @property {number} one
 */

/**
 * 找零計算機，給予價格及付款，會告知需要找領的硬幣數量
 * 回傳的格式必須符合上述 Change 物件的定義，有四個屬性
 * 且每個屬性的型別必須是 number
 * @param {number} price 價格
 * @param {number} paid 付款
 * @returns {Change} 找零
 */

function getChange(price, paid) {
  const change = {
    fifty: 0,
    ten: 0,
    five: 0,
    one: 0,
  };

  if (paid < price) {
    console.log('付款金額不足');
    return change;
  }

  let balance = paid - price;

  while (balance > 0) {
    if (balance >= 50) {
      change.fifty = Math.floor(balance / 50);
      balance = balance - 50 * change.fifty;
    } else if (balance >= 10) {
      change.ten = Math.floor(balance / 10);
      balance = balance - 10 * change.ten;
    } else if (balance >= 5) {
      change.five = Math.floor(balance / 5);
      balance = balance - 5 * change.five;
    } else {
      change.one = balance;
      balance = 0;
  }

  return change;
}

const varify = (change, expect) =>
  Object.keys(expect).every(k => change[k] === expect[k]);

const genChange = (fifty, ten, five, one) => ({ fifty, ten, five, one });

console.assert(
  varify(getChange(217, 300), genChange(1, 3, 0, 3)),
  '測試 1 找零錯誤',
);
console.assert(
  varify(getChange(62, 100), genChange(0, 3, 1, 3)),
  '測試 2 找零錯誤',
);
console.assert(
  varify(getChange(147, 100), genChange(0, 0, 0, 0)),
  '測試 3 找零錯誤',
);
