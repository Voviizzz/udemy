// __________________________________________________Тут будут находиться задачи с codeWars__________________________________________________

// Take an array and remove every second element from the array. Always keep the first element and start removing with the next element.
// Example:

// ["Keep", "Remove", "Keep", "Remove", "Keep", ...] --> ["Keep", "Keep", "Keep", ...]

// None of the arrays will be empty, so you don't have to worry about that!

// Возьмите массив и удалите каждый второй элемент из массива. Всегда сохраняйте первый элемент и начинайте удаление со следующего элемента.
// Пример:

// ["Сохранить", "Удалить", "Сохранить", "Удалить", "Сохранить", ...] --> ["Сохранить", "Сохранить", "Сохранить", ...]

// Ни один из массивов не будет пустым, так что вам не о чем беспокоиться!

// function removeEveryOther(arr) {
//   const newArr = [];
//   for (let i = 0; i < arr.length; i++) {
//     if (i % 2 == 0) {
//       newArr.push(arr[i]);
//     }
//   }
//   return newArr;
// }
// console.log(removeEveryOther(["Keep", "Remove", "Keep", "Remove", "Keep"]));

// function removeEveryOther(arr) {
//   return arr.filter(function (item, index) {
//     return index % 2 === 0;
//   });
// }

// function removeEveryOther(arr) {
//   for (let i = 1; i < arr.length; i++) {
//     console.log(i);
//     console.log(arr.splice(i, 1));
//   }
//   return arr;
// }
// console.log(removeEveryOther(["Keep", "Remove", "Keep", "Remove", "Keep"]));

//_________________________________________________________________________Вторая задача__________________________________________________
// Your function takes two arguments:

//     current father's age (years)
//     current age of his son (years)

// Сalculate how many years ago the father was twice as old as his son (or in how many years he will be twice as old). The answer is always greater or equal to 0, no matter if it was in the past or it

// Ваша функция принимает два аргумента:

//     текущий возраст отца (лет)
//     текущий возраст его сына (лет)

// Подсчитайте, сколько лет назад отец был вдвое старше сына (или через сколько лет он будет вдвое старше). Ответ всегда больше или равен 0, независимо от того, был он в прошлом или в будущем.

// function twiceAsOld(dadYearsOld, sonYearsOld) {
//   return Math.abs(dadYearsOld - sonYearsOld * 2);
// }
// console.log(twiceAsOld(40, 10));

//_________________________________________________________________________Третья задача__________________________________________________
// Примечание: эта ката вдохновлена ​​​​преобразованием числа в строку! Попробуйте и это.
// Описание

// Нам нужна функция, которая может преобразовать строку в число. Какие способы достижения этого вы знаете?

// Примечание. Не беспокойтесь, все входные данные будут строками, а каждая строка является абсолютно допустимым представлением целого числа.
// Примеры

// "1234" --> 1234
// "605" --> 605
// "1405" --> 1405
// "-7" --> -7

// const stringToNumber = function (str) {
//   return +str;
// //   либо parseInt(str), return Number(str)
// };
// console.log(stringToNumber("1234"));

//_________________________________________________________________________Четвертая задача__________________________________________________
console.log("2" + `3` - `1`);
