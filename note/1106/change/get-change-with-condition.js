// @ts-check

/**
 * @typedef {object} Change
 * @property {number} fifty 50元
 * @property {number} ten 10元
 * @property {number} five 5元
 * @property {number} one 1元
 */

/**
 * 找零計算機，給予價格、付款、找領條件，回傳找零的結果。
 * 若無法滿足所有條件，滿足盡可能多的條件（譬如要求兩個5元給兩個5元才算有滿足）。
 * 回傳的格式必須符合上述 Change 物件的定義，有四個屬性且每個屬性的型別必須是 number
 * @param {number} price 價格
 * @param {number} paid 付款
 * @param {Change} cond 必須符合的找領條件
 * @returns {Change} 找零
 * 
 * 
 * 理解:假設cond內有值就必須至少滿足cond內的值再繼續找零 
 *      500元 - 429 (找零 71 需先滿足 { fifty: 0, ten: 0, five: 2, one: 5 } 2個5元 5個1元)
 *      100元 - 33 (找零 71 需先滿足 { fifty: 0, ten: 2, five: 1, one: 5 } )
 * 方法:第一優先-盡可能滿足cond，
 */
function getChangeWithCond(price, paid, cond) {
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
  let condnum;


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
  varify(
    getChangeWithCond(429, 500, { fifty: 0, ten: 0, five: 2, one: 5 }),
    genChange(1, 0, 3, 6),
  ),
  '測試 1 找零錯誤',
);
console.assert(
  varify(
    getChangeWithCond(33, 100, { fifty: 0, ten: 2, five: 1, one: 5 }),
    genChange(0, 5, 2, 7),
  ),
  '測試 2 找零錯誤',
);
console.assert(
  varify(
    getChangeWithCond(889, 1000, { fifty: 3, ten: 4, five: 2, one: 5 }),
    genChange(1, 4, 3, 6),
  ),
  '測試 3 找零錯誤',
);
