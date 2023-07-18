/* Задания на урок:

1) Удалить все рекламные блоки со страницы (правая часть сайта)

2) Изменить жанр фильма, поменять "комедия" на "драма"

3) Изменить задний фон постера с фильмом на изображение "bg.jpg". Оно лежит в папке img.
Реализовать только при помощи JS

4) Список фильмов на странице сформировать на основании данных из этого JS файла.
Отсортировать их по алфавиту 

5) Добавить нумерацию выведенных фильмов */
// const btn = form.querySelector("button");

// "use strict";

const movieDB = {
  movies: [
    "Логан",
    "Лига справедливости",
    "Ла-ла лэнд",
    "Одержимость",
    "Скотт Пилигрим против...",
  ],
};

const moviList = document.querySelector(".promo__interactive-list");
const movis = movieDB.movies;
const adv = document.querySelectorAll(".promo__adv img");

const form = document.querySelector(".add");
const input = document.querySelector(".adding__input");
const checkBox = document.querySelector('[type = "checkbox"]');

function dropAdv() {
  adv.forEach((item) => {
    item.remove();
  });
}

//Добавление события
form.addEventListener("submit", (event) => {
  event.preventDefault();
  let newFilm = input.value;
  if (checkBox.checked) {
    console.log("Добавляем любимый фильм");
    movis.push(newFilm);
  }
  if (newFilm.length > 21) {
    newFilm = `${newFilm.substring(0, 22)}...`;
  }
  movis.push(newFilm);

  refactMovieFilms(movis, moviList);
});

//Функциия вывода фильмов на страницу
function refactMovieFilms(arr, parent) {
  parent.innerHTML = "";
  sortArr(arr);
  arr.forEach((item, i) => {
    parent.innerHTML += `<li class="promo__interactive-item">${i + 1}
        ${item}
        <div class="delete"></div>
      </li>`;
  });
  document.querySelectorAll(".delete").forEach((btn, i) => {
    btn.addEventListener("click", () => {
      btn.parentElement.remove();
      movis.splice(i, 1);
    });
  });
}
//Сортировка фильмов
function sortArr(arr) {
  arr.sort();
}
refactMovieFilms(movis, moviList);
dropAdv();
