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

  // 淺拷貝客戶端要求的找零數量
  const newCond = { ...cond };

  // 定義每種硬幣的面額做計算
  const coinValues = {
    fifty: 50,
    ten: 10,
    five: 5,
    one: 1,
  };

  // 存放客戶端要求總額
  let totalValue = 0;

  const coinTypes = Object.keys(newCond);
  // 遍歷 cond 物件，計算每種硬幣的總值
  for (let i = 0; i < coinTypes.length; i++) {
    const coinType = coinTypes[i]; // 取得當前硬幣類型 fifty > ten...
    const count = newCond[coinType]; // 取得硬幣數量
    const valuePerCoin = coinValues[coinType]; // 取coinValues內的幣值 50 > 10 ...
    // 數量 * 幣值 存到客戶端要求總額
    totalValue += count * valuePerCoin;
  }
  balance -= totalValue; // 扣除 Cond 應找的總額

  while (balance > 0) {
    // 算出扣除 Cond
    if (balance >= 50) {
      change.fifty = Math.floor(balance / 50);
      balance -= 50 * change.fifty;
    } else if (balance >= 10) {
      change.ten = Math.floor(balance / 10);
      balance -= 10 * change.ten;
    } else if (balance >= 5) {
      change.five = Math.floor(balance / 5);
      balance -= 5 * change.five;
    } else {
      change.one = balance;
      balance = 0;
    }
  }
  for (let key in newCond) {
    if (newCond.hasOwnProperty(key)) {
      // 確認newCond中有沒有 50 > 10 屬性
      if (change.hasOwnProperty(key)) {
        // 確認change中有沒有 50 > 10 屬性
        change[key] += newCond[key]; // 有就相加
      } else {
        change[key] = newCond[key]; // 沒有就給 newCond 的值
      }
    }
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
