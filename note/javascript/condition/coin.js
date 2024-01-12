let a = 0.5;
if (a < Math.random()) {
  console.log('front');
} else {
  console.log('back');
}

// 把上述的結果存在一個變數 result 而不是 console.log 出來

let result;
if (0.5 < Math.random()) {
  result = 'front';
} else {
  result = 'back';
}

// flip
// input:
// output: string
function flip() {
  return 0.5 < Math.random() ? 'front' : 'back';
}

flip();

// 把上述的程式碼改成用 ternary 撰寫
result = 0.5 < Math.random() ? 'front' : 'back';

// 假設有某變數 foo & bar 個別可能是 'front' 或是 'back'
// 先用 switch 再用 if 來判斷 bar 是否獲勝
// bar 必須跟 foo 一樣才算獲勝

let foo = 0.5 < Math.random() ? 'front' : 'back';
let bar = 0.5 < Math.random() ? 'front' : 'back';

switch (foo) {
  case 'front':
    // if (bar === 'front') {
    //   console.log('win');
    // } else {
    //   console.log('lose');

    // bar === 'front' ? console.log('win') : console.log('lose');

    console.log(bar === 'front' ? 'win' : 'lose');
    break;
  case 'back':
    // if (bar === 'front') {
    //   console.log('lose');
    // } else {
    //   console.log('win');
    // }
    switch (bar) {
      case 'front':
        console.log('lose');
        break;
      case 'back':
        console.log('win');
        break;
    }
    break;
}

// format 排版

// let score be a random number between 0 to 1
// console log A to E, if A: above .8, B: above .6, C: above .4, D: above .2, E: otherwise

// if version

let score = Math.random();

if (score >= 0.8) {
  console.log('A');
} else if (score >= 0.6) {
  console.log('B');
} else if (score >= 0.4) {
  console.log('C');
} else if (score >= 0.2) {
  console.log('D');
} else {
  console.log('E');
}

// ternary version

console.log(
  score >= 0.8
    ? 'A'
    : score >= 0.6
    ? 'B'
    : score >= 0.4
    ? 'C'
    : score >= 0.2
    ? 'D'
    : 'E',
);

// input: score: number
// output: string
function grade(score) {
  return score >= 0.8
    ? 'A'
    : score >= 0.6
    ? 'B'
    : score >= 0.4
    ? 'C'
    : score >= 0.2
    ? 'D'
    : 'E';
}

// switch version

switch (true) {
  case score >= 0.8:
    console.log('A');
    break;
  case score >= 0.9:
    console.log('B');
    break;
  case score >= 0.6:
    console.log('C');
    break;
  case score >= 0.2:
    console.log('D');
    break;
  default:
    console.log('E');
}
