// 1) Напишите функцию showExperience, которая будет принимать в себя объект со всеми данными и возвращать строку с опытом.

// Пример:

// showExperience(personalPlanPeter) => '1 month'

// P.S. желательно использовать деструктуризацию, но не обязательно

// function showExperience(plan) {
//     return {exp}= personalPlanPeter.skills.exp
// }
// const showExperience = (plan) => {
//   return ({ exp } = personalPlanPeter.skills.exp);
// };

// console.log(showExperience());

// console.log(showExperience(personalPlanPeter));

// 2) Напишите функцию showProgrammingLangs, которая будет принимать в себя объект со всеми данными и возвращать строку в нужном виде.

// Пример:

// showProgrammingLangs(personalPlanPeter)  =>

// "Язык js изучен на 20% Язык php изучен на 10%"

// Причем функция должна работать вне зависимости от количества языков. Если ни один не указан, то возвращается пустая строка.

// P.S. Для переноса строки используется \n в конце строки.

//тупой вариант

// function showProgrammingLangs(object) {
//   return `Язык js изучен на ${object.skills.programmingLangs.js} язык php изучен на ${object.skills.programmingLangs.php}`;
// }
// console.log(showProgrammingLangs(personalPlanPeter)
// );
const personalPlanPeter = {
  name: "Peter",
  age: "29",
  skills: {
    languages: ["ru", "eng"],
    programmingLangs: {
        js: "20%",
        php: "10%",
    },
    exp: "1 month",
  },
};
// нормас вариант

// function showProgrammingLangs(plan) {
//   let str = "";
//   let { programmingLangs } = plan.skills;
//   // console.log(programmingLangs);
//   for (let key in programmingLangs) {
//     if (key === null) {
//       return str;
//     }
//     str += `Язык ${key} изучен на ${programmingLangs[key]}\n`;
//   }
//   return str;
// }
// console.log(showProgrammingLangs(personalPlanPeter));



// console.log(personalPlanPeter.skills);
// Создайте метод showAgeAndLangs внутри объекта personalPlanPeter. При его вызове метод будет принимать в себя объект и возвращать строку в нужном виде.

// Пример:

//     personalPlanPeter.showAgeAndLangs(personalPlanPeter)

// => 'Мне 29 и я владею языками: RU ENG'

// Заметьте, что возраст и языки подставляются автоматически из объекта, а языки всегда в верхнем регистре (большими буквами). Если данные в объекте поменяются, то и сообщение тоже изменится.

// P.S. Дальше по курсу мы научимся удобно обращаться из метода к самому объекту, в котором он расположен. Но пока делаем это менее удобным способом)