"use strict";

// console.log(Object.getOwnPropertyDescriptor(user, "name")); //для просмотра флагов объекта, туда выводятся флаги //writable// enumerable //configurable

// Object.defineProperty(user, "gender", { value: "male" });
// console.log(Object.getOwnPropertyDescriptor(user, "gender")); //когда мы создает в property - все флаги состоят в false

// Object.defineProperty(user, "name", { writable: false }); //выдаст ошибку name is read only
// user.name = 'hjon'
// console.log((user.name = "hjon"));

// Object.defineProperty();
//для доступа к свойствам метода есть несколько
//writable
//enumerable
//configurable

let user = {
  name: "Alex",
  surname: "Smith",
  birthday: "20/04/1993",
  showMyPublickData: function () {
    console.log(`${this.name} ${this.surname}`);
  },
};

// Object.defineProperty(user, "birthday", { writable: false });

//как при переборе for  in не отображать методы

// Object.defineProperty(user, "showMyPublickData", { enumerable: false }); // теперь он не будеь показываться в списке, а будут отображаться актуальные данные
// for (let key in user) {
//   console.log(key);
// }

// для редактирования нескольких свойств сразу
// Object.defineProperties(user, {
//   name: { writable: true },
//   surname: { writable: false },
// });

// console.log(Object.getOwnPropertyDescriptor(user, 'surname'));
