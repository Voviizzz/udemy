// 1) Напишите функцию showFamily, которая будет принимать в себя массив строк и возвращать сообщение в нужном формате.

// showFamily(family)  => 'Семья состоит из: Peter Ann Alex Linda'

// Имена подставляются автоматически из массива. Если массив пустой, то выводится сообщение 'Семья пуста'
// const family = ["Peter", "Ann", "Alex", "Linda"];
// // const family = ["pete", "ann"];
// let showFamily = (arr) => {
//   if (arr.length === 0) {
//     return `Моей семьи не найдено`;
//   }
//   return `Моя семья состоит из: ${arr.join(" ")}`;
// };
// console.log(showFamily(family));

//2) напишите функцию standardizeStrings, которая будет принимать в себя массив строк и будет выводить в консоль эти строки в нижнем регистре.

// Пример:

// standardizeStrings(favoriteCities)  выведет в консоль

//     lisbon
//     rome
//     milan
//     dublin

// Это частая задача в реальности, так как от пользователя нам могут прийти ответы в самых разных форматах. В том числе и с разными буквами :) Поэтому нам нужно привести строки в один формат для правильной работы.
// const favoriteCities = ["liSBon", "ROME", "miLan", "Dublin"];

// function standardizeStrings(arr) {
//   arr.forEach((el) => {
//    return (`${el.toLowerCase()}`);
//   });
// }
// console.log(standardizeStrings(favoriteCities));
// standardizeStrings(favoriteCities)

// __________________________ВТОРОЙ БЛОК ЗАДАЧ____________________________________________________________________________________

// Продолжаем решение задач на массивы.

// 3) Задача с собеседований. Напишите функцию reverse, которая принимает в себя строку и возвращает эту строку в обратном порядке.

// Пример:

//     const someString = 'This is some strange string';

// reverse(someString) => 'gnirts egnarts emos si sihT'

// Функцию можно применить к любой строке. Если в функцию приходит не строка - вернуть сообщение "Ошибка!"

// Это очень интересная задача, которую можно решить несколькими способами. Её дают для того, чтобы оценить навыки и знания программиста, посмотреть как он думает. Как небольшая подсказка, есть метод, который может вам помочь. И часть дополнительных вариантов решения мы тоже изучим в течении курса.

// Может показать сложной с первого взгляда, но это совсем не так 🙂

// const someString = ["This is some strange string"];

// function reverse(str) {
//   if (typeof str !== "string") {
//     return console.log("это не строка");
//   }
//   return str.split("").reverse().join("");
// }
// reverse(someString);

// 4) Представьте такую реальную ситуацию. У вас есть банкомат, который выдает деньги из двух разных банков в разных валютах. Один банк основной с базовыми валютами, второй дополнительный с прочими валютами:

//     const baseCurrencies = ['USD', 'EUR'];
//     const additionalCurrencies = ['UAH', 'RUB', 'CNY'];

// Вам нужно создать главную функцию банкомата availableCurr, которая принимает два аргумента: первый - это массив со всеми доступными валютами из двух банков сразу (сейчас представим, что они не могут повторяться), второй - необязательный аргумент, который указывает ту валюту, которая сейчас закончилась в банкомате. Если массив в первом аргументе пустой - то функция возвращает строку 'Нет доступных валют'. Функция возвращает строку в нужном виде.

// Пример:

//     availableCurr(['UAH', 'RUB', 'CNY'], 'CNY')

// Вернет строку:

//     Доступные валюты:
//     UAH
//     RUB

// Заметьте:

// - CNY (юань) исчез из списка валют, значит такая валюта закончилась

// - После валюты: стоит перенос строки \n, и после каждой валюты тоже. Это важно для тестов

// - Данные для первого аргумента должны приходить сразу из двух банков, причем сначала baseCurrencies, потом additionalCurrencies по порядку

//Данная задача работает, но данные приходят с одного банка, необходимо чтобы данные выводились с двух банков по порядку!

// нужно использовать SPRED оператор !

// const baseCurrencies = ["USD", "EUR"];
// const additionalCurrencies = ["UAH", "RUB", "CNY"];
// function availableCurr(arr, missingCurr) {
//   //   let newArr = [];
//   let str = "Доступные валюты: \n";
//   arr.forEach((elem) => {
//     if (missingCurr !== elem) {
//       //   newArr.push(elem);
//       str += `${elem} \n`;
//     }
//   });
//   return str;
// }
// console.log(availableCurr([...baseCurrencies, ...additionalCurrencies], "CNY"));

// const baseCurrencies = ['USD', 'EUR'];
// const additionalCurrencies = ['UAH', 'RUB', 'CNY'];

// function availableCurr(arr, missingCurr) {
//     let str = '';
//     arr.length === 0 ? str = 'Нет доступных валют' : str = 'Доступные валюты:\n';

//     arr.forEach(function(curr, i) {
//         if (curr !== missingCurr) {
//             str += `${curr}\n`;
//         }
//     });

//     // Или
//     // for (let i = 0; i < arr.length; i++) {
//     //     if (arr[i] === missingCurr) {
//     //         continue;
//     //     }
//     //     str += `${arr[i]}\n`;
//     // }

//     return str;
// }
// console.log(availableCurr([...baseCurrencies, ...additionalCurrencies], 'CNY'));
