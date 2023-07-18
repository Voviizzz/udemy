// function pow(x, n) {
//   if (n === 1) {
//     return x;
//   } else {
//     return x * pow(x, n - 1);
//   }
// }
// console.log(pow(2, 3));

// console.log('ss');

//База рекурсии n===1, тогда когда завершается рекурсии
// шаг рекурсии, n -1
// Глубина рекурсии это число равно n

//итеративный подход эффективнее

// let students = {
//   js: [
//     {
//       name: "Jhon",
//       progress: 100,
//     },
//     {
//       name: "Ivan",
//       progress: 60,
//     },
//   ],
//   html: {
//     basic: [
//       {
//         name: "Peter",
//         progress: 20,
//       },
//       {
//         name: "Ann",
//         progress: 18,
//       },
//     ],
//     pro: [
//       {
//         name: "Sam",
//         progress: 10,
//       },
//     ],
//   },
// };
// // let ar = ["sam", 20];

// //Поч=считать средний прогресс всех студентов

// function getTotalProgresByRecursion(data) {
//   //база рекурсии
//   if (Array.isArray(data)) {
//     let total = 0;
//     for (let i = 0; i < data.length; i++) {
//       total += data[i].progress;
//     }
//     return [total, data.length];
//   } else {
//     let total = [0, 0];
//     // console.log(total);
//     for (let subData of Object.values(data)) {
//       const subDataArray = getTotalProgresByRecursion(subData);
//     //   console.log(subDataArray);
//       total[0] += subDataArray[0];
//       total[1] += subDataArray[1];
//       console.log(total[1]);
//     }
//     return total;
//   }
// }

// const result = getTotalProgresByRecursion(students);

// console.log(result[0] / result[1]);

//____________________________________ЗАДАЧИ НА РЕКУРСИЮ___________________________

// Надо найти факториал

// function factorial(n) {
//   if (n === 1) {
//     return n;
//   } else {                                  //ВЕРНО!
//     return n * factorial(n - 1);
//   }
// }
// console.log(factorial(5));

