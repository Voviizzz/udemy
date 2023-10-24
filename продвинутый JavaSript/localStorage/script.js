"use strict";

//Работа в LocalStorage!
const checkbox = document.querySelector("#checkbox"),
  form = document.querySelector("form"),
  change = document.querySelector("#color");

if (localStorage.getItem("isActive")) {
  checkbox.checked = true;
}

if (localStorage.getItem("bg") === "changed") {
  form.style.backgroundColor = "red";
}

checkbox.addEventListener("change", () => {
  localStorage.setItem("isActive", true);
});

change.addEventListener("click", () => {
  if (localStorage.getItem("bg", "changed")) {
    localStorage.removeItem("bg");
    form.style.backgroundColor = "#FFFF";
  } else {
    localStorage.setItem("bg", "changed");
    form.style.backgroundColor = "red";
  }
});

//Работа с объектами
const person = {
  name: "Vladimir",
  age: 23,
};

const vladimir = JSON.stringify(person);
localStorage.setItem("vova", vladimir);

console.log(localStorage.getItem('vova'));