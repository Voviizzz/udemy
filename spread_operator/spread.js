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

function copy(mainObj) {
  let objCope = {};
  for (const key in mainObj) {
    objCope[key] = mainObj[key];
  }
  return objCope;
}
const obj = {
  a: 5,
  b: 7,
  с:{
    x: 3,
    y: 4,
  }
};

const newObj = copy(obj);
// newObj.a = 10; // свойство объекта поменяется!!
// console.log(newObj);
// console.log(obj);
// но, если мы обратимся в подОбъект, то ничего не получится т.к у нас поверхностное копирование

obj.c.x = 2;
console.log(obj);

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
