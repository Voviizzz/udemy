// let a = 5,
//   b = a;

// b = b + 5;
// console.log(b);
// console.log(a);

// const obj = {
//   a: 5,
//   b: 7,
//   с: {
//     x: 3,
//     y: 4,
//   },
// };
// const copy = obj; // это  не копия самого объекта, это его ссылка, в копи ссылка на сущ.объект
// copy.a = 10;

// console.log(obj);
// console.log(copy);

// Object { a: 10, b: 7 }
// Object { a: 10, b: 7 }

// как же создать копию ?
// это поверхностная копия, объект в объекте не скопирует

//Первый вариант пройтись циклом по всем свойствам объекта
// use strickt;
// function copy(mainObj) {
//   let objCope = {};
//   for (const key in mainObj) {
//     objCope[key] = mainObj[key];
//   }
//   return objCope;
// }
// const obj = {
//   a: 5,
//   b: 7,
//   с: {
//     x: 3,
//     y: 4,
//   },
// };

// const objCope = copy(obj);
// newObj.a = 10; // свойство объекта поменяется!!
// console.log(newObj);
// console.log(obj);
// но, если мы обратимся в подОбъект, то ничего не получится т.к у нас поверхностное копирование

// objCope.a = 2;
// objCope.c.x = 1;
// console.log(objCope);
// console.log(obj);

//  ......               // arrow function
//  ......
//  ......               // не работает
//  ......
//  ......               // const newobject = (mainObj) => {
//  ......               //   let objCope = {};
//  ......               //   for (const key in mainObj) {
//  ......               //     objCope[key] = mainObj[key];
//  ......               //   }
//  ......               //   return objCope;
//  ......               // };
//  ......               // console.log(newobject(obj));

// const add = {
//   d: 17,
//   e: 20,
// };
// console.log(Object.assign({}, add));

//для создания копии объекта
// так же можно совместить два объекта
//1 куда хоть объеденить, 2 из какого объекта

// const twoObject = Object.assign(objCope, add)
// const clone = Object.assign({}, add)

// clone.d = 10
// console.log(clone);

// ___________________________РАБОТА С МАССИВАМИ___________________________________________

// const oldArray = ["a", "b", "c"];
// const newArray = oldArray.slice(); // для копии старого массива в новый
// newArray[1] = "g";

// console.log(oldArray);
// console.log(newArray);

//_______________________Оператор разворота________________________________________

// const video = ["youtube", "rutube", "vmio"];
// blogs = ["inst", "livegournal", "vk"];
// internet = [...video, ...blogs, "ok"];
// console.log(internet);

// function log(a, b, c) {
//   console.log(a);
//   console.log(b);
//   console.log(c);
// }

// const num = [2, 4, 5];

// console.log(...num); //выведется все нормально

// const array = ["a", "b"];
// const newAr = [...array];

// const q = {
//   one: 1,
//   two: 2,
// };
// const copyQ = {
//   ...q,
// };

// console.log(copyQ);

