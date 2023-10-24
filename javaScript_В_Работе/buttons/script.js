// const btns = document.querySelectorAll("button");
// // console.log(btns[0].classList.length);

// //методы

// // console.log(btns[0].classList.item(1));
// console.log(btns[1].classList.add("red"));
// // console.log(btns[0].classList.remove("blue"));
// // console.log(btns[0].classList.toggle("blue"));

// // if (btns[1].classList.contains("red")) {
// //   console.log('red');
// // }

// btns[0].addEventListener("click", () => {
//   //   if (!btns[1].classList.contains("red")) {
//   //     btns[1].classList.add("red");
//   //   } else {
//   //     btns[1].classList.remove("red");
//   //   }
//   btns[1].classList.toggle("red");
// });

//______________________________________________________ДЕЛЕГИРОВАНИЕ-------------------------------------------

const btns = document.querySelectorAll("button");
const wrapper = document.querySelector(".btn-block");
// console.log(btns[0].classList.length);

//методы

// console.log(btns[0].classList.item(1));
console.log(btns[1].classList.add("red"));
// console.log(btns[0].classList.remove("blue"));
// console.log(btns[0].classList.toggle("blue"));

// if (btns[1].classList.contains("red")) {
//   console.log('red');
// }

// btns[0].addEventListener("click", () => {
//   //   if (!btns[1].classList.contains("red")) {
//   //     btns[1].classList.add("red");
//   //   } else {
//   //     btns[1].classList.remove("red");
//   //   }
//   btns[1].classList.toggle("red");
// });

// _________________________________________________________________//для добавления класса по нажатию

// btns.forEach((item) => {
//   item.addEventListener("click", () => {
//     item.classList.toggle("red");
//   });
// });
// -------------------------------------------------------------------Делегирование
//добавляем обработчик не на кнопку а на враппер
wrapper.addEventListener("click", (event) => {
  //если эл-т именнт таргет нейм, то что-то делаем
  if (event.target && event.target.tagName == "BUTTON") {
    console.log("Привет, ты нажал на кнопку");
  }
});

// __________________________________________________________________//добавление динамически кнопки
//и лог выводится

const btn = document.createElement("button");
btn.classList.add("red");
wrapper.append(btn);
wrapper.append(btn);