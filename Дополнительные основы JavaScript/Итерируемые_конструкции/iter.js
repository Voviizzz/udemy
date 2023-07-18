"use strict";
let user = {
  name: "Alex",
  surname: "Smith",
  birthday: "20/04/1993",
  showMyPublickData: function () {
    console.log(`${this.name} ${this.surname}`);
  },
};

//для вывода информации for of не работает, for in
for (let i in user) {
  console.log(i);
}

const salaries = {
  jhon: 500,
  ivan: 1000,
  ann: 2000,
  sayhello: function () {
    console.log("hello");
  },
};

// !Итератор возвразает объект с методом next()!, next по сути это следующие значение объекта    

//Символ итератор возвращает объект с методом next
salaries[Symbol.iterator] = function () {
  return {
    current: this.jhon,
    last: this.ann,
    next() {
      if (this.current < this.last) {
        this.current += 500;
        return {
          done: false,
          value: this.current,
        };
      } else {
        return { done: true };
      }

      // {done: true, value: 123}
    },
  };
};
// for(let res of salaries){
//     console.log(res);
// }

const iterator = salaries[Symbol.iterator]();

console.log(iterator.next());