//touchstart
//touchmove
//touchend
//touchenter
//touchleave
//touchcancel

//по сути, тоже самое что клик, только на мобилках

window.addEventListener("DOMContentLoaded", () => {
  document.querySelector(".google").addEventListener("touchstart", (event) => {
    event.preventDefault();
    console.log('start');
  });
});
