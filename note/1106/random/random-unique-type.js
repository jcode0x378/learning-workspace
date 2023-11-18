// @ts-check

/**
 * 隨機產生 7 個 >= 0 且 <= 9 的整數，並以陣列型別回傳，且整數之間不能重複
 * @returns {number[]}
 */
function randomUnique7() {
  // code here
}

const memo = [];

console.assert(checkRandomUnique(randomUnique7()), 'Test 0 failed');
console.assert(checkRandomUnique(randomUnique7()), 'Test 1 failed');
console.assert(checkRandomUnique(randomUnique7()), 'Test 2 failed');
console.assert(checkRandomUnique(randomUnique7()), 'Test 3 failed');
console.assert(checkRandomUnique(randomUnique7()), 'Test 4 failed');
console.assert(checkRandomUnique(randomUnique7()), 'Test 5 failed');
console.assert(checkRandomUnique(randomUnique7()), 'Test 6 failed');

function checkRandomUnique(list) {
  const isArray = Array.isArray(list);
  const isNotDuplicate = isArray && memo.every(history => history !== list.toString());
  isArray && memo.push(list.toString());
  const isFitLength = isNotDuplicate && list.length === 7;
  const isInRange = isFitLength && list.every(num => num >= 0 && num < 10 && Number.isInteger(num));
  const isUnique =
    isInRange && list.every((num, index) => list.slice(index + 1).every(inner => inner !== num));
  return isUnique;
}
