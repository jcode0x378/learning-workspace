// find out how many odd number in this array
// - 準備一個變數存放紀錄奇數，預設值為0
// - 使用迴圈依序取出陣列中的值
// - 將取出的值取餘數
// - 取餘數的結果大於0，紀錄奇數1次

// - 準備一個變數存放紀錄奇數，預設值為0
// - 使用迴圈依序取出陣列中的值
// - 將取出的值取餘數
// - 若取餘數的結果大於0，為是紀錄奇數1次

// for loop version
const numList = [1, 2, 3, 4, 5];
let oddCount = 0;
for (let i = 0; i < numList.length; i = i + 1) {
  if (numList[i] % 2 !== 0) {
    oddCount = oddCount + 1;
  }
}
// for of version
for (const num of numList) {
  if (numList[num] % 2 !== 0) {
    oddCount += 1;
  }
}
// forEach version
let oddCount1 = 0;
numList.forEach(element => {
  if (element % 2 !== 0) {
    oddCount1 += 1;
  }
});
console.log(oddCount1);

// 9 x 9
// let foo = 0;
for (let i = 0; i <= 9; i = i + 1) {
  for (let j = 0; j <= 9; j = j + 1) {
    // foo = i * j;
    console.log(i + '*' + j + '=' + i * j);
  }
}
// array version
// 先把結果存到 array
for (let i = 1; i <= 9; i++) {
  let row = [];
  for (let j = 1; j <= 9; j++) {
    row.push(`${i}*${j}=${i * j}`);
  }
  console.log(row.join(' ')); // 回傳字串
}

// input => scores
// console.log: [name] has average score [number]

const students = [
  { name: 'peter', scores: [72, 82, 40, 98] },
  { name: 'bruce', scores: [86, 92, 74, 99, 79] },
];

// 逐一取得每一個人，把他放在一個變數 student
// 令 avg = student 的平均分數 （student.scores 加總 / .student.scores.length）
// 令 sum = 0 ，逐一取得每一項成績的分數，並加總到 sum
// 印出 student.name has average score avg

for (let index = 0; index < students.length; index = index + 1) {
  const student = students[index];
  let sum = 0;

  for (let i = 0; i < student.scores.length; i = i + 1) {
    // i = i + 1;
    // i += 1;
    sum = sum + student.scores[i];
    // sum += student.scores[i]; syntatic sugar 語法糖 簡化寫，沒有它一樣可以寫
  }

  const avg = sum / student.scores.length;
  student.avg = avg;
  // console.log(student.name + ' has average score ' + avg);
}

console.log(students);

// 逐一取得每一個人，把他放在一個變數 student
// 令 avg = student 的平均分數 （student.scores 加總 / .student.scores.length）
// 印出 student.name has average score avg

for (let index = 0; index < students.length; index = index + 1) {
  const student = students[index];
  const avg = sum(student.scores) / student.scores.length;
  console.log(student.name + ' has average score ' + avg);
}

function sum(numList) {
  let sum = 0;

  for (let i = 0; i < numList.length; i = i + 1) {
    sum = sum + numList[i];
  }

  return sum;
}

// 聖誕樹
for (let i = 0; i < 5; i += 1) {
  let line = '';
  for (let j = 0; j < 5 - i - 1; j += 1) {
    line += ' ';
  }
  for (let k = 0; k < 2 * i + 1; k += 1) {
    line += '*';
  }
  console.log(line);
}
