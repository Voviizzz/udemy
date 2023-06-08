// function sayHello(name) {
//   return console.log(`hello, ${name}`);
// }
// sayHello("Олег");

// function numToArr(num) {
//   return [num - 1, num, num + 1];
// }
// console.log(numToArr(10));

// 3) Создайте функцию, которая будет принимать в себя 2 аргумента, оба числа. Первое число - это база, второе число - это сколько раз нужно будет повторить это число в прогрессии. (Смотри пример ниже). Функция должна возвращать строку (или число в особых случаях, о которых ниже), где эти числа идут по порядку, разделенные тремя дефисами "---". После последнего числа их не должно быть.

// Если второй аргумент не является числом, равен или меньше нуля - то возвращать просто первый аргумент. (Проверяем через оператор typeof)

// Примеры:

// Вызов функции getMathResult(5, 3) даст ответ 5---10---15

// Вызов функции getMathResult(3, 10) даст ответ 3---6---9---12---15---18---21---24---27---30

// Вызов функции getMathResult(10, 5) даст ответ 10---20---30---40---50

// Вызов функции getMathResult(10, '5') даст ответ 10

// Вызов функции getMathResult(10, 0) даст ответ 10

// Вызов функции getMathResult(20, -5) даст ответ 20

// Эта задача уже ближе к реальности, когда вам нужно учитывать и тип данных у аргументов, проверять их и продумывать логику работы внутри. Обратите внимание на прогрессию, она рассчитывается по простой формуле умножения. Если первый аргумент 5, а второй 3, то число повторяется 3 раза, каждый раз увеличиваясь на само себя. Это базовая математика, которая и нужна для работы в 95% случае на фронтенде.

// Да, задача сложнее, но она просто объединяет все то, что мы уже учили.

// function basis(basa, repeat) {
//   if (typeof !repeat === "number" || repeat <= 0) {
//     return basa;
//   }
//   let str = "";
//   for (let i = 1; i <= repeat; i++) {
//     if (i === repeat) {
//       str += `${basa * i}`;
//     } else {
//         str += `${basa * i}----`;
//     }
//   }
//   console.log(str);
// }
// basis(5, 3);
