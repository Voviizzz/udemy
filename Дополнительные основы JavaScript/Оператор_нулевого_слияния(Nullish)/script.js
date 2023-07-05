"use strict";

const box = document.querySelector(".box");

const newHeight = 10;
const newWidth = 200;

function changeParams(elem, h, w) {
  elem.style.height = `${h ?? 200}px`;
  elem.style.width = `${w ?? 200}px`;
}
changeParams(box, newHeight, newWidth);

let userName;
let userKey;
console.log(userName ?? userKey ?? "User"); //если не userName null или undefine, придет userKey и так далее
