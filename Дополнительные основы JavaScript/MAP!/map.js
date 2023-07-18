"use strict";
// let user = {
//   name: "Alex",
//   surname: "Smith",
//   birthday: "20/04/1993",
//   showMyPublickData: function () {
//     console.log(`${this.name} ${this.surname}`);
//   },
// };

//ключ это всегда строка!

// console.log(typeof(Object.keys(user)[0])); // даже есть вместо ключа вставить цифру, число - то все равно строка, но очень часто бывает, когда нам нужна не строка, а например объект!

const shops = [{ rice: 500 }, { oil: 200 }, { bread: 50 }];

const budget = [40000, 15000, 250000];

// как добавить начальное значение в map
const map = new Map([[{ paper: 3000 }, 8000]]);
// const map = new Map();

shops.forEach((shop, i) => {
  map.set(shop, budget[i]);
});

// map.set(shops[0], 5000).set(shops[1], 2000);

// console.log(map.get(shops[1])); // получаем данные

//наличие чего-то

// console.log(map.has(shops[0]))

//!!!!СМОТРИ НА ENTRIES!!!  КАРТА ЭТО МАССИВ С МАССИВАМИ

// console.log(map);

//ПЕРЕБОР MAP

// _________________________________________________________________________________// 1 СПОСОБ
// // map.keys() возвращает объект по ключам
// const goodse = [];
// for (let shop of map.keys()) {
//   goodse.push(Object.keys(shop)[0])
//   //Array(4) [ "paper", "rice", "oil", "bread" ]

//   // console.log(shop);
//   //Object { paper: 3000 }
// }

// console.log(goodse);

// _________________________________________________________________________________// 2 СПОСОБ
// for (let price of map.values()) {

//     //  console.log(price);
//   //40000
//   // 15000
//   // 250000
// }

// for (let price of map.entries()) {
//   console.log(price);

//   //получаем массивы, где первый элемент объект, втоорой массив
// }

//деструктуризация  MAPA

// for (let [shop, price] of map.entries()) {
//   console.log(price, shop);
// }
//--------------------------------------------------------------------------------//3 Способ

// map.forEach((value, key, map) => {
//     console.log(key, value, map);
// });

//________________________________________________________________________________________// КАРТУ ИЗ ОбЪЕКТА

let user = {
  name: "Alex",
  surname: "Smith",
  birthday: "20/04/1993",
  showMyPublickData: function () {
    console.log(`${this.name} ${this.surname}`);
  },
};

const userMap = new Map(Object.entries(user))
console.log(userMap);

//________________________________________________________________________________________// НАоборот

const newUserObj = Object.fromEntries(userMap)
console.log(newUserObj);



////________________________________________________________________________________________// ИТОГИ

// 1) У карт ключи могут быть чем угодно, а у объектов только строки 
// 2) У карт четкий порядок, строго такой, который мы создавали и добавляли 
// 3) При созданиии пустой крты, в ней ничего не будет, даже не будет наследоваться, а в пустом могут содержаться
// 4) Размер карты можно легко получить через size и карты легко перебирать!!!!
