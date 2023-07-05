"use strict";

const box = document.querySelector(".box");
const block = document.querySelector(".block");

console.log(block);

// if (block) {
//   console.log(block.textContent);
// }

// console.log(block?.textContent); // ?. проверяет слева от себя, то он останавливает операцию и возвращает undefined

// console.log(1 + 2);

const userData = {
  name: " Ivan",
  age: 20,
  hay: function () {
    alert("hello");
  },
};

if (userData && userData.skills && userData.skills.js) {
  console.log(userData.skils.js);
}
//тоже самое, проверяет слева на существование
console.log(userData?.skils?.js);

// так же, если существует метод объекта, мы можем его вызвать, если он существует

userData.s?.() //проверил функцию, она не существует и не выполняется"!