const obj = { a: 1, b: 2 };

// Object.keys(obj) ; // ['a', 'b'];

// property (prop) === key
// let prop = 123;
Object.keys(obj).reduce((array, key) => {
  array.push(obj[key]);
  return array;
}, []); // ['a', 'b'] => [1, 2];
Object.keys(obj).map(key => obj[key]);
Object.values(obj); // [1, 2]

// Object.entries entry => ['a', 1] (key-value pair call entry)
Object.entries(obj); // [['a', 1], ['b', 2]];

const students = {
  唐伯虎: 98,
  祝枝山: 59,
  文徵明: 89,
  徐禎卿: 76,
};

// please use Object.entries to console.log each students's item as '唐伯虎的成績是 98'
// 1. map each entry to a string, for each string console.log the string to the console
// 2. for each student console.log their score as a specfic formatted string
Object.entries(students).forEach(([name, score]) => {
  // const [key, value] = entry
  // console.log(entry[0], entry[1]);
  console.log(name + '的成績是' + score);
}); // [['唐伯虎', 98],['祝枝山',59], ...]

Object.entries(students)
  .map(entry => entry)
  .forEach(([name, score]) => {
    console.log(name + '的成績是' + score);
  });
