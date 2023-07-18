//Структура данных SET - массив , где каждое значение встречается однажды

// const arr =[1,3,3,3,34,45,6,7]
// const set = new Set(arr)
//Set(6) [ 1, 3, 34, 45, 6, 7 ]
// console.log(set);
"use strict";
const arr = ["alex", "oleg", "alex", "anna"];

const set = new Set(arr);
// console.log(set);
// console.log(set.keys());
// console.log(set.values());
// console.log(set.entries());

// set
//   .add("jora") //по сути как и arr.push
//   .add("evgeni");

// /Set(5) [ "alex", "oleg", "anna", "jora", "evgeni" ]
// console.log(set);

// // ___________________________________________________________________________///Базовые функции

// set.delete(value);
// set.has(value);
// set.clear(value);
// set.size(value);

// //вывод элементов
// for (let value of set) {
//     // alex oleg anna jora evgeni
//     console.log(value);
// }

// set.forEach((value, i, set) => {
//     // alex
//     // alex
//     // Set(5) [ "alex", "oleg", "anna", "jora", "evgeni" ]

//   console.log(value);
//   console.log(i);
//   console.log(set);
// });

// Так же можно воспользоваться функцией вспомогателем, которая вернет массив уникальных значений !

function uniqArr(arr) {
  return Array.from(new Set(arr));
}
console.log(uniqArr(arr));
