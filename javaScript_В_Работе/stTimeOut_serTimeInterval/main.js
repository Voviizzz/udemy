// const timer = setTimeout(logger () {
//   console.log("hello");
// }, 2000);

// const btn = document.querySelector(".btn");
// let logTimer;
// let i = 0; //счетчик
// btn.addEventListener("click", () => {
//   //   const logTimer = setTimeout(logger, 2000); // отличие между settimeOut и SetIntertval
//   logTimer = setInterval(logger, 2000);
// });

// clearInterval(logTimer); // поток синхронного кода
// //поэтому чтобы функцию отработала, нужно ввести какое-то условие, например счетчик i==3

// function logger() {
//   if (i == 3) {
//     clearInterval(logTimer);
//   } else {
//     console.log("text");
//     i++;
//   }
// }
//Рекурсивный нкжен для того, чтоюбы дать время большим и трудозатратным функциям на выполнение

// --------------------------------------------------------------Рекурсивный setTimeout-_________________________________

// let id = setTimeout(function log() {
//   console.log("hello");// может быть большая функция, следующий интервал ждет пока она всфя выполнется
//   id = setTimeout(log, 500);
// }, 100);

// clearInterval(logTimer); // чтобы остановиьт сразуже интервал

// ________________________________________________Выполнение анимации на квадрате_________________________________________

// const btn = document.querySelector(".btn");

// function myAnimation() {
//   const elem = document.querySelector(".box");
//   let pos = 0;

//   const id = setInterval(frame, 10);
//   function frame() {
//     if (pos == 300) {
//       clearInterval(id);
//     } else {
//       pos++;
//       elem.style.top = pos + "px";
//       elem.style.left = pos + "px";
//     }
//   }
// }

// btn.addEventListener("click", myAnimation);



const btn = document.querySelector(".btn");
function animationBox() {
  let pos = 300;
  const box = document.querySelector(".box");
  const id = setInterval(myAnim, 10);
  function myAnim() {
    if (pos == 0) {
      clearInterval(id);
    } else {
      pos--;
      box.style.top = pos + "px";
      box.style.left = pos + "px";
    }
  }
}
btn.addEventListener("click", animationBox);
console.log('sss');
