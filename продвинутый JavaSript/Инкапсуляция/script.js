"use strict";

// Всегда без последствий можно улучшать программу, когда внутренности скрыты!

//------------------------------------------------------------Это функция!

// function User(name, age) {
//   this.name = name;
//   // this.age = age
//   let userAge = age; // получим undefined, при обращении

//   this.say = function () {
//     console.log(`Имя пользователя ${this.name} его возраст ${this.age}`);
//   };

//   this.getAge = function () {
//     return userAge;
//   };
//   this.setAge = function (age) {
//     if (typeof age === "number" && age > 0 && age < 110) {
//       userAge = age;
//     } else {
//         console.log('Enter correct values!');
//     }
//   };
// }

//--------------------------------------------Теперь делаем конструктор

// _age - если записано с нижним подчеркиваем, то значит нельзя чтобы к этому свойству имело чтоото доступ!

class User {
  constructor(name, age) {
    this.name = name;
    this._age = age; // нижнее подчеркивание это lodash
  }
  #surname = "Владимир"; //свойство становится приватным
  say = () => {
    console.log(
      `Имя пользователя ${this.name} его возраст ${userAge} и фамилия ${
        this.#surname
      }`
    );
  };

  get age() {
    return this._age;
  }
  set age(age) {
    if (typeof age === "number" && age > 0 && age < 110) {
      this._age = age;
    } else {
      console.log("Enter correct values!");
    }
  }

  //геттер и сеттер для приватных свойств!
  get surname() {
    return this.#surname;
  }
  set surname(surname) {
    this.#surname = surname;
  }
}

const ivan = new User("Vladimir", 23);
console.log(ivan.age);
ivan.age = 33;
console.log(ivan.age);
//для доступа к приватным свойствам!
console.log(ivan.surname);
console.log(ivan.surname = 'zaycevVU');

// console.log(ivan.#surname); // не будет доступно, т.к это приватное свойсто

// _age - не вмешиваемся в работу этого свойства!
// самое главное, что б не написать ivan._age = 33
