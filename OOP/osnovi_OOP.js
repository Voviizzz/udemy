// let offroadCar = {
//   privod: "big",
//   passagePllace: 6,
//   koles: 4,
// };

// let newCar = Object.create(offroadCar)

// //Для наследования
// // Object.setPrototypeOf(newCar, offroadCar);

// console.log(newCar.privod);

//_____________________________________________________ПРАКТИКА____________________________________________________________________________________

//Как переделать функциии так, чтобы они стали методами!
// просто переносим функции в объект

// function hi() {
//   console.log("hi");
// }

// let personalMoveDb = {
//   h: hello,
//   s: function () {
//     console.log(`hello`);
//   },
//   toggleVisibleMyDataBase: function () {
//     if (this.private) {
//       this.private === true;
//     } else {
//       this.private === false;
//     }
//   },
// };

// Задача:

// У вас есть небольшой кусочек данных о торговом центре, которые записаны в объекте shoppingMallData. Они содержат массив с данными о магазинах, где указана длина и ширина помещения; высоту помещения; стоимость отопления за 1 кубический метр и бюджет на оплату отопления за месяц.

// Основная задача - это написать функцию isBudgetEnough, которая буде возвращать строку. Если бюджета хватает для отопления всего объема торгового центра - выводится 'Бюджета достаточно', если нет - 'Бюджета недостаточно'. И все 🙂

// Но эта задача содержит несколько подзадач внутри:

// - вычисление общей площади всех магазинов, которая вычисляется как длина магазина, умноженная на его ширину;

// - вычисление общего объема торгового центра, так как цена отопления указана в кубических метрах;

// - определение того, хватает ли бюджета на оплату такого объема;

// - все числа идут без единиц измерения для упрощения, просто цифры и все;

// - функция должна продолжать работать, даже если изменяется количество магазинов, высота, бюджет или подставляется вообще другой объект.

//Додумался сам, но решение ебаное

// function isBudgetEnough(obj) {
//   let square;
//   let width = 0;
//   let length = 0;
//   let height = obj.height;
//   let volume = 0;
//   let fullPrice = 0;
//   let moneyPer1m3 = obj.moneyPer1m3;
//   square = width * length;
//   obj.shops.forEach((el, i) => {
//     width += el.length;
//     length += el.length;
//     square = width * length;
//     volume = square * height;
//     fullPrice = volume * moneyPer1m3;
//   });
//   if (object.budget > fullPrice) {
//     return `Бюджета  достаточно`;
//   } else {
//     return `Бюджета не достаточно`;
//   }
// }
// console.log(isBudgetEnough(object));

let object = {
  shops: [
    {
      width: 10,
      length: 5,
    },
    {
      width: 15,
      length: 7,
    },
    {
      width: 20,
      length: 5,
    },
    {
      width: 8,
      length: 10,
    },
  ],
  height: 5,
  moneyPer1m3: 30,
  budget: 50000,
};

// Решение с гита, была такая мысль, но почему-то подумал, что все надо вводить в переменные !

function isBudgetEnough(object) {
  let square = 0;
  let volume = 0;
  object.shops.forEach((element) => {
    square += element.width * element.length;
  });
  volume = square * object.height;

  if (object.budget - volume * object.moneyPer1m3 >= 0) {
    return `Бюджета хватило `;
  } else {
    return `Бюджета не хватило`;
  }
}
console.log(isBudgetEnough(object));
