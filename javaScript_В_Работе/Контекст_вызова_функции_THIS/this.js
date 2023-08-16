// 1) Просто вызов
"use strict";
// function showThis(a, b) {
//   //   console.log(this);
//   function sum() {
//     return a + b;
//   }
//   console.log(sum());
// }
// showThis(1, 2);

// 1) Обыяная функция - this = window, но если use strict,то undefined
// 2) методы объектов тоже функции
// контекст у методов объекта это будет сам объект
// const obj = {
//   a: 20,
//   b: 14,
//   sum: function () {
//     // console.log(this);
//     function shout() {
//       console.log(this);
//     }
//     shout();
//   },
// };
// obj.sum();

// // 3) Через оператор new this в конструкторах и классах это новый экземпляр объекта !
// function User(name, id) {
//   this.name = name;
//   this.id = id;
//   this.human = true;
// }
// let ivan = new User("vany", 1);

// 4) ручное присвоение this функции, нужно сделать apply или call
// function sayName(surname) {
//   console.log(this);
//   console.log(this.name + surname);
// }
// const user = {
//   name: "jjhon",
// };

// sayName.call(user, "smith");
// sayName.apply(user, ["smith"]);

// // создает новую функцию связаннуюю с определенным контекстом
// function count(num) {
//   return this * num;
// }

// const double = count.bind(2);
// // bind заносится в this
// console.log(double(3));
// console.log(double(4));
// console.log(double(10));

// пример с кнопкой
const btn = document.querySelector(".btn");
btn.addEventListener("click", function () {
  console.log(this);
});
//выведет кнопку
// у стрелочной функции нет своего контекста, поэтому она обратится к внешней функции ( объекту)
const obj = {
  num: 5,
  sayNumn: function () {
    const say = () => {
      console.log(this.num);
    };
    say();
  },
};
obj.sayNumn();
