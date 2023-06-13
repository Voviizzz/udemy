//Функции и методы внутри объекта

// let options = {
//   name: "test",
//   with: 1024,
//   height: 1024,
//   colors: {
//     border: "black",
//     bg: "red",
//   },
//   log: function(){
//     console.log(`привет, я ${this.name}`);
//   }
// };


//для деструктуризации
// const {border, bg} = options.colors
// console.log(border);

// options.log();// наш метод заработал выведет то что в функции

// console.log(Object.keys(options).length); //5

//Для вывода информации о вложенных значениях объекта

// for (let key in options) {
//   // console.log(options[key]);
//   if (typeof options[key] === "object") {
//     for (let i in options[key]) {
//       console.log(options[key][i]);
//     }
//   }
// }
