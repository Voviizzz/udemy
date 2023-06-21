// В этой задаче мы уже усложним работу с объектами и массивами. Она необязательна и тут можно попробовать свои силы.

// Учтите, что проверка кода в таких заданиях осуществляется автоматически, через программу. Поэтому нужно четко следовать инструкции.

// Вы можете сначала решить у себя в редакторе кода, а потом вставить сюда.

// Задача:

// У вас есть список учеников, которые хотят поиграть в игру:

//

// Но команд может быть только 3 по 3 человека. Напишите функцию sortStudentsByGroups, которая принимает в себя массив строк.

// Внутри она сначала сортирует имена по алфавиту. Затем распределяет учеников по 3 человека в 3 группы по алфавитному порядку. Эти группы должны быть массивами. Как итог, функция возвращает новый массив с тремя командами и строкой как 4й элемент.

// Пример:

// sortStudentsByGroups(students)  =>

//     [
//       [ 'Andrew', 'Ann', 'Bernard' ],
//       [ 'Cris', 'Josh', 'Mark' ],
//       [ 'Peter', 'Sam', 'Sandra' ],
//       'Оставшиеся студенты: Takesi'
//     ]

// Если убрать одно студента из списка, то результат будет:

//     [
//       [ 'Andrew', 'Ann', 'Bernard' ],
//       [ 'Cris', 'Josh', 'Mark' ],
//       [ 'Peter', 'Sam', 'Sandra' ],
//       'Оставшиеся студенты: -'
//     ]

// А если добавить одного, то:

//     [
//       [ 'Andrew', 'Ann', 'Bernard' ],
//       [ 'Cris', 'Josh', 'Mark' ],
//       [ 'Peter', 'Sam', 'Sandra' ],
//       'Оставшиеся студенты: Takesi, Somebody'
//     ]

// То есть, меняется содержимое строки. Все оставшиеся ученики попадают туда.

// Задача интересная, немного заковыристая, но все необходимое для неё мы уже проходили. Просто распишите логику действий строка за строкой.

const students = [
  "Peter",
  "Andrew",
  "Ann",
  "Mark",
  "Josh",
  "Sandra",
  "Cris",
  "Bernard",
  "Takesi",
  "Sam",
];

function sortByGrops(arr) {
  arr.sort();
  const a = [],
    b = [],
    c = [],
    rest = [];

  for (let i = 0; i < arr.length; i++) {
    if (i < 3) {
      a.push(arr[i]);
    } else if (i < 6) {
      b.push(arr[i]);
    } else if (i < 9) {
      c.push[arr[i]];
    } else {
      rest.push[arr[i]];
    }
  }
  return [
    a,
    b,
    c,
    `Оставшиеся студенты: ${rest.length === 0 ? "-" : rest.join(", ")} `,
  ];
}
console.log(sortByGrops(students));
// let sorted = students.sort((a, b) => {

//   if (a.toLowerCase() < b.toLowerCase()) {
//     return -1;
//   }
//   if (a.toLowerCase() > b.toLowerCase()) {
//     return 1;
//   }
//   return 0;

// });
// console.log(sorted);
// function sortStudentsByGroups(arr) {
//   let sortArr = students.sort();
//   let newArr = [];
//   for (let value of arr) {
//   }
// }
// console.log(sortStudentsByGroups(students));
