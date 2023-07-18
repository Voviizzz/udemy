"use strict";

const boxtQuery = document.querySelectorAll(".box"); //нод лист, с forRach и разными методами
const boxGetClassName = document.getElementsByClassName("box"); //без этой дичи

//для находления селектра с классм

boxtQuery.forEach((box) => {
  if (box.matches(".this")) console.log(box);
});

//получить обертку - ближайшего родителя
console.log(boxtQuery[0].closest(".wrapper"));

// boxtQuery[0].remove();
// boxGetClassName[0].remove();

// console.log(boxtQuery);
// console.log(boxGetClassName);

// console.log(Array.from(boxGetClassName));

let nomberOfAge = new Number(12);
(nomberOfAge.fullName = "vova"), (nomberOfAge.fullAge = 23);
console.log(nomberOfAge);
