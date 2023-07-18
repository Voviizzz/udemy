// Задание:

// Панграмма — это предложение, в котором каждая буква алфавита встречается хотя бы по одному разу по возможности без повторений. Например, предложение «The quick brown fox jumps over the lazy dog» является панграммой, поскольку в нем хотя бы один раз используются буквы от A до Z (регистр значения не имеет).

// Напишите функцию isPangram, которая принимает в себя строку и возвращает логическое значение. Если строка является панграммой - вернется true, если нет - false.

// Пример:

// isPangram(«The quick brown fox jumps over the lazy dog») => true

// isPangram(«Hello world») => false

// // P.S. Эта задача имеет много вариантов решения, часть из которых использует возможности, которые мы будем проходить дальше по курсу. Но и без них можно это сделать.

// // В ответах я приложу несколько вариантов для ознакомления.

// Ответ с кодом этой задачи можно найти тут: ссылка

//___________________________________________________________________________ДЛЯ ТЕСТА__________________________________________________________________

// function leterSecr(str) {
//   "abcv".split("").every((x) => {
//    return console.log(str.includes(x));
//   });
// }
// leterSecr("нннн");

function leterExamination(string) {
  return "abcdefghijklmnopqrstuvwxyz".split("").every((x) => {
    return string.toLowerCase().includes(x);
  });
}
console.log(leterExamination("The quick brown fox jumps over the lazy dog"));
