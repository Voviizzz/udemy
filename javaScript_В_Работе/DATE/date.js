//для объекта даты необходимо создать конструктор

const now = new Date("2020-05-01");
// new Date.parse('2020-05-01')
//Измерение времени

let start = new Date();

for (let i = 0; i < 10000000; i++) {
  let some = i ** 3;
}
let end = new Date();

alert(`цикл отработал за ${end - start} секунд`);

//методы даты
//получение компонентов даты
// console.log(now.getFullYear());//2020

// console.log(now.getMonth());5;

console.log(now.getDate());
