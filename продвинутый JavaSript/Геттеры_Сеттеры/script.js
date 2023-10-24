"use strict";

// свойства - данные , то что описывают объект

// свойства акцессоры - 1)Геттры и  2)Сеттеры
const persone = {
  name: "Alex",
  age: 18,

  get userAge() {
    return this.age;
  },
  // в сеттере обязательно нужно уствновить
  set userAge(num) {
    this.age = num;
  },
};
console.log(persone.userAge = 30); //set - установили возраст 
console.log(persone.userAge); //get - получили возраст  