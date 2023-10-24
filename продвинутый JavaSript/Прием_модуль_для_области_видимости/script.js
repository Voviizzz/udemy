"use strict";

const app = "123";

const number = 1;

// 1) первый способ

(function () {
  //создаем собственную область видимости
  let number = 2;
  console.log(number);
  console.log(number + 3);
})();
console.log(number);

// 2) Использование объектного интерфейса

const user = (function () {
    //анонимная самовызывющая функция ! 
  const privat = function () {
    console.log("private function");
  };

  return {
    sayHello: privat,
  };
})();

user.sayHello();
