/* Задания на урок:

1) Удалить все рекламные блоки со страницы (правая часть сайта)

2) Изменить жанр фильма, поменять "комедия" на "драма"

3) Изменить задний фон постера с фильмом на изображение "bg.jpg". Оно лежит в папке img.
Реализовать только при помощи JS

4) Список фильмов на странице сформировать на основании данных из этого JS файла.
Отсортировать их по алфавиту 

5) Добавить нумерацию выведенных фильмов */

"use strict";

const movieDB = {
  movies: [
    "Логан",
    "Лига справедливости",
    "Ла-ла лэнд",
    "Одержимость",
    "Скотт Пилигрим против...",
  ],
};

//Удаление промо!

// 1)

// const promo = document.querySelectorAll(".promo__adv img");
// console.log(promo);
// promo.forEach(item => {
//     item.remove()
// });

// 2)

// const promoBg = document.querySelector(".promo__bg");
// const comedy = promoBg.querySelector(".promo__genre");
// console.log(comedy);
// comedy.textContent = "Драмма";

// // 3)
// promoBg.style.backgroundImage = 'url("img/bg.jpg")';

// 4)
// const films = document.querySelectorAll(".promo__interactive-item");
// films.forEach((item) => {
//   item.remove();
// });

//5)
const list = document.querySelector(".promo__interactive-list");
console.log(list);
list.innerHTML = "";
movieDB.movies.sort();

movieDB.movies.forEach((item, i) => {
  list.innerHTML += `<li class="promo__interactive-item"> ${i + 1} ${item}
    <div class="delete"></div>
</li>`;
});
console.log(movieDB);

// movieDB.movies.sort();

// movieDB.movies.forEach((item, i) => {
//     movi
// });

/* Задания на урок:

1) Реализовать функционал, что после заполнения формы и нажатия кнопки "Подтвердить" - 
новый фильм добавляется в список. Страница не должна перезагружаться.
Новый фильм должен добавляться в movieDB.movies.
Для получения доступа к значению input - обращаемся к нему как input.value;
P.S. Здесь есть несколько вариантов решения задачи, принимается любой, но рабочий.

2) Если название фильма больше, чем 21 символ - обрезать его и добавить три точки

3) При клике на мусорную корзину - элемент будет удаляться из списка (сложно)

4) Если в форме стоит галочка "Сделать любимым" - в консоль вывести сообщение: 
"Добавляем любимый фильм"

5) Фильмы должны быть отсортированы по алфавиту */

'use strict';

// Возьмите свой код из предыдущей практики