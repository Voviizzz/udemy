"use strict";
// *************************************************************************filter
// const names = ["ivddddan", "annddd", "voddva", "ddddd", "max"];
//фильтер возвращает новый массив

// const shortNames = names.filter((name) => name.length < 5);

//та же самая запись

// const shortNames = names.filter((name) => {
//   if (name.length < 5) return name;
// });

// console.log(shortNames);
// console.log(names);

// *********************************************************************** MAP

// const answer = ['IvAn', 'Adman', 'HellO']

// const result = answer.map(item => item.toLocaleLowerCase())
// console.log(result);

// *********************************************************************** EVERY/SOME

// const some = [4, 'qwq', 'dsd']
// console.log(some.some(item => typeof(item) === 'number'));

// const numb = [4, 3, 5, 6];
// console.log(numb.every((number) => typeof number === "number"));

// ******************************************************************************** REDUCE
// Схлопывать или собирать массив в единое целое!

// const arr = [3, 4, 1, 4, 5, 6, 4, 3, 23, 5, 23, 23, 23, 2, 4, 3];
//                             // Сложить в сумму текущее значение
// const result = arr.reduce((sum, current) => sum + current);
// console.log(result);

// const arr = ["apple", "orange", "plum"];
// // Сложить в сумму текущее значение
// // 2 - начальное значение
// const result = arr.reduce((sum, current) => `${sum},  ${current}` , 2);
// console.log(result);

// ******************************************************************************** ПРИМЕР

// const obj = {
//   ivan: "persone",
//   ann: "persone",
//   dog: "animal",
//   cat: "animal",
// };

// //перевести объект в массив с массивами
// // далее прием chaning (операции в цепочку!)
// const newArr = Object.entries(obj)
//   .filter((item) => item[1] === "persone")
//   .map((item) => item[0]);

// console.log(newArr);

// // ******************************************************************************** ЗАДАЧИ
// 1) У вас есть список фильмов с рейтингом в виде массива объектов. Напишите функцию showGoodFilms, которая будет принимать этот массив, а возвращать будет массив объектов только с теми фильмами, у которых рейтинг больше или равен 8.

// P.S. Это довольно типичная задача в программировании. Вспомните, на самых разных сайтах можно так фильтровать любые товары/фильмы/сериалы...

// const films = [
//   {
//     name: "Titanic",
//     rating: 9,
//   },
//   {
//     name: "Die hard 5",
//     rating: 5,
//   },
//   {
//     name: "Matrix",
//     rating: 8,
//   },
//   {
//     name: "Some bad film",
//     rating: 4,
//   },
// ];
// // function showGoodFilms(arr) {
//   return arr.filter((film) => film.rating >= 8);
// }
// function showGoodFilms(arr) {
//     return console.log(arr.filter(film => film.rating >= 8));
// }

// showGoodFilms(films);
// Напишите функцию showListOfFilms, которая будет принимать этот же массив, а возвращать будет строку, которая содержит названия фильмов через запятую.

// Пример:

// function showListOfFilms(films) {
//   return films.map((item) => item.name).join(', ')
// }
// console.log(showListOfFilms(films));

// showListOfFilms(films) => "Titanic, Die hard 5, Matrix, Some bad film"

// 3) Напишите функцию setFilmsIds, которая будет принимать этот же массив, а возвращать будет такой же массив с фильмами, но у каждого фильма будет новое поле id. Значение этого поля установите по нумерации фильма.

// Пример:

// setFilmsIds(films)  => [   { name: 'Titanic', rating: 9, id: 0 },   { name: 'Die hard 5', rating: 5, id: 1 },   { name: 'Matrix', rating: 8, id: 2 },   { name: 'Some bad film', rating: 4, id: 3 } ]

// function setFilmsIds(films) {
//   // return films.reduce((arr, arg)=> )
//   return films.map((film, i) => {
//     film.id = i;
//     return film;
//   });
// }
// console.log(setFilmsIds(films));

// const tranformed = setFilmsIds(films);

// // function checkFilmsArr(arr) {
// //   arr.every((film) => (film.id || film.id === 0 ? true : false));
// // }

// const checkFilms = (arr) => arr.every((film) => film.id || film.id === 0);
// console.log(checkFilms(tranformed));

// 1) У вас есть небольшой массив с данными о доходах каждой торговой точки. Напишите функцию getPositiveIncomeAmount, которая принимает этот массив данных и возвращает сумму только положительных значений из каждого объекта. (число)

// Пример:

// getPositiveIncomeAmount(funds) => 13300

const funds = [
  { amount: -1400 },
  { amount: 2400 },
  { amount: -1000 },
  { amount: 500 },
  { amount: 10400 },
  { amount: -11400 },
];

function getPositiveIncomeAmount(data) {
  // const sum = 0;
  // funds.filter((item) => {
  //   item.amount > 0 ? (sum += item.amount) : false;
  //   return sum;
  // });
  return data
    .filter((item) => item.amount > 0)
    .reduce((acc, curr) => acc + curr.amount, 0);
}
console.log(getPositiveIncomeAmount(funds));

// 2) Напишите функцию getTotalIncomeAmount, которая тоже принимает этот массив данных. Если хотя бы один из объектов содержит отрицательное значение поля amount, то функция возвращает сумму всех значений. (число) Если таких значений нет - запускается функция getPositiveIncomeAmount с тем же массивом данных.

// Пример:

// getTotalIncomeAmount(funds) => -500

// function getTotalIncomeAmount(data) {
//   return data.filter((item) => {
//     if (item.amount < 0) {
//       data.reduce((acc, curr) => acc + curr, 0);
//     } else {
//       getPositiveIncomeAmount();
//     }
//   });
// }
// console.log(getTotalIncomeAmount(funds));

function getTotalIncomeAmount(data) {
  return data.some((item) => item.amount < 0)
    ? data.reduce((acc, curr) => acc + curr.amount, 0)
    : getPositiveIncomeAmount(funds)
}
console.log(getTotalIncomeAmount(funds));
