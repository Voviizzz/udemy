//Для клика
// btn.addEventListener("click", (e) => {
//   alert("click");
// });
// "use strict"
let google = document.querySelector(".google");
// google.addEventListener("click", (e) => {
//   e.preventDefault();
//   console.log(e.type);
//   console.log(e.target);
//   console.log(e.preventDefault);
//   google.style.textDecoration = "none";
// });

//Можно обращащаться к функции
google.addEventListener("click", nonDecoration, { once: true }); //once делает обработку функции один раз !

function nonDecoration(e) {
  e.preventDefault();
  google.style.textDecoration = "none";
}
 