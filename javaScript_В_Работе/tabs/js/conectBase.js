// "use strict";

// //html файл находится в tabs

// //по сути это шаблон
// class Rectangle {
//   //начинаем конструировать класс
//   constructor(height, width) {
//     //должны их записать в свойства новго объекта
//     this.height = height;
//     this.width = width;
//   }
//   //слздаем метод
//   clcArea() {
//     return this.height * this.width;
//   }
// }
// //создаем еще один класс, на основе базового
// class ColorReactangleWithText extends Rectangle {
//   constructor(height, width, text, backgroundColor) {
//     //чтобы не копировать все свойства класса родителя, можно прописать super(), super()всегда идет первой строчкой

//     super(height, width);
//     this.text = text;
//     this.backgroundColor = backgroundColor;
//   }
//   showMyProps() {
//     console.log(`текст: ${this.text} и цвет ${this.backgroundColor}`);
//   }
// }

// // использвуем класс
// const square = new Rectangle(12, 12);
// const long = new Rectangle(12, 44);
// const div = new ColorReactangleWithText(12, 22, "hello", "red");
// div.showMyProps();
// console.log(div.clcArea());

// console.log(long.clcArea());

// __________________________________________________Принципы ООП__________________________________________________

// 1) Абстракция - отделяем концепцию от ее экземпляра
// 2) Наследование - способность объекта или калсса базироваться на основе другого объекта или класса
// 3) Полиморфизм - решение задачи разными способами
// 4) Инкапсуляция - размещение одного объекта или класса внутри другого для разграничения доступа к ним.

//теперь мы подключаемся к html tabs и будем конструировать через классы карточки

window.addEventListener("DOMContentLoaded", () => {
  const openModalBtn = document.querySelectorAll("[data-modal]");
  const modalWindow = document.querySelector(".modal");

  class menuCard {
    constructor(src, alt, title, descr, price, parentSelector, ...classes) {
      this.src = src;
      this.alt = alt;
      this.title = title;
      this.descr = descr;
      this.price = price;
      this.parent = document.querySelector(parentSelector);
      this.transfer = 100;
      this.classes = classes;
      // console.log(this.parent);
      this.changeToRub();
    }

    changeToRub() {
      this.price += this.price * this.transfer;
    }
    render() {
      const element = document.createElement("div");
      //условие на класс по умолчанию

      if (this.classes.length === 0) {
        this.element = "menu__item";
        element.classList.add(this.element);
      } else {
        this.classes.forEach((className) => element.classList.add(className));
      }
      //--------------------------------------------------------

      // console.log(this.classes);
      this.classes.forEach((className) => element.classList.add(className));
      element.innerHTML = ` 
        <img src=${this.src} alt=${this.alt} />
        <h3 class="menu__item-subtitle">${this.title}</h3>
            <div class="menu__item-descr">
              ${this.descr}      
            </div>
        <div class="menu__item-divider"></div>
        <div class="menu__item-price">
          <div class="menu__item-cost">Цена:</div>
          <div class="menu__item-total"><span>${this.price}</span> руб/день</div>
  `;
      this.parent.append(element);
    }
  }
  //новый метод для рендеринга
  new menuCard(
    "img/tabs/elite.jpg",
    "elite",
    `Меню "Фитнес"`,
    `   Меню "Фитнес" - это новый подход к приготовлению блюд: больше
    свежих овощей и фруктов. Продукт активных и здоровых людей. Это
    абсолютно новый продукт с оптимальной ценой и высоким качеством!`,
    9,
    ".menu .container",
    "menu__item",
    "big"
  ).render(); //используем объект на месте и он исчезнет
  new menuCard(
    "img/tabs/vegy.jpg",
    "vegy",
    `Меню "Премиум"`,
    `     В меню “Премиум” мы используем не только красивый дизайн упаковки,
      но и качественное исполнение блюд. Красная рыба, морепродукты,
      фрукты - ресторанное меню без похода в ресторан!`,
    10,
    ".menu .container",
    "menu__item"
  ).render(); //используем объект на месте и он исчезнет
  new menuCard(
    "img/tabs/elite.jpg",
    "vegy",
    `Меню "Фитнес"`,
    `   Меню "Фитнес" - это новый подход к приготовлению блюд: больше
    свежих овощей и фруктов. Продукт активных и здоровых людей. Это
    абсолютно новый продукт с оптимальной ценой и высоким качеством!`,
    11,
    ".menu .container",
    "menu__item"
  ).render(); //используем объект на месте и он исчезнет

  // ---------------------------------------------------------------------Foms работа с формой по технологии Ajax

  const form = document.querySelectorAll("form");
  // console.log(form);
  const timerModal = setTimeout(openModal, 10000);

  function openModal() {
    modalWindow.style.display = "block";
    //так же можно через toggle, но сначала нужно добавить класс к модальному окну
    document.body.style.overflow = "hidden"; //для отсутсвия прокрутки при скроле
    clearInterval(timerModal);
  }

  //текстовое сообщение, чтобы пользователь понимал, что у нас что-то прозошло
  openModalBtn.forEach((btn) => {
    btn.addEventListener("click", () => {
      openModal();
    });
  });

  const message = {
    //можно вставить картинку
    loading: "img/form/spinner.svg",
    success: "Спасибо! Скоро мы свяжемся",
    failture: "Ошибка",
  };

  form.forEach((item) => {
    // console.log(item);
    bindPostData(item);
  });
  // * Немножко теории, ниже представлена функци отправки данных. Но если бы мы не на писали async/await - то была бы ошибка,
  // * так ка эта функция возвращалы бь ничего. Код же синхронный. Поэтому мы асинхронность превращаем в синхронность. С помощью Async/Await.
  // * Await - дождаться результата запроса! Но он не блокирует ни какой код дальше. Это и есть смысл использования операции ASYNC/AWAIT!
  // *
  // *
  // *
  // *
  const postData = async (url, data) => {
    const res = await fetch(url, {
      method: "POST",
      //нужно hraders, чтобы отправить в формате json
      headers: {
        "Content-Type": "application/json",
      },
      body: data,
    });
    return await res.json();
  };

  function bindPostData(form) {
    form.addEventListener("submit", (e) => {
      e.preventDefault(); //отменяем стандартное поведение брапузера

      //вывод сообщения пользователю
      // const statusMessages = document.createElement("div");
      // statusMessages.classList.add("status");

      //для картинки
      const statusMessages = document.createElement("img");
      statusMessages.src = message.loading;
      statusMessages.style.cssText = `
          display:block;
          margin: 0 auto;
        `;
      statusMessages.textContent = message.loading;
      // form.append(statusMessages);
      // это нужно для того, чтобы не рушить верстку при вставки спинера
      form.insertAdjacentElement("afterend", statusMessages);

      // const request = new XMLHttpRequest();
      // request.open("POST", "js/server.php");
      // request.setRequestHeader("Content-Type", "application/json");

      //считывание данных с формы
      const formData = new FormData(form);

      //чтобы отправить в json - заголовок точно нужно
      //отправить данные в формате JSON
      const obj = {};
      formData.forEach(function (value, key) {
        obj[key] = value;
      });

      // console.log(obj);
      // const json = JSON.stringify(obj);
      // console.log(json);

      //_______________________________FETCH API ________________________________________________
      //   fetch("js/server.php", {
      //     method: "POST",
      //     //нужно hraders, чтобы отправить в формате json
      //     headers: {
      //       "Content-Type": "application/json",
      //     },
      //     body: JSON.stringify(obj),
      //   })
      postData("http://localhost:3000/requests", JSON.stringify(obj))
        .then((data) => {
          console.log(data);
          showThanksModal(message.success);
          statusMessages.remove();
        })
        .catch(() => {
          showThanksModal(message.failture);
        })
        .finally(() => {
          form.reset();
        });

      //когда связка const request = new XMLHttpRequest(); + объект + form data, тогда заголовок не нужен!
      // request.setRequestHeader("Content-type", "multipart/form-data"); //что именно приходть на сервер
      // если выскакивает ошибка 404 скорей всего неправильный путь
      // const formData = new FormData(form);
      // request.send(json);

      //обработчик отправки данных на сервер
      //   request.addEventListener("load", () => {
      //     if (request.status === 200) {
      //       console.log(request.response);
      //       showThanksModal(message.success);
      //       form.reset();
      //       statusMessages.remove();
      //     } else {
      //       showThanksModal(message.failture);
      //     }
      //   });
      // });
    });

    function closeModal() {
      modalWindow.style.display = "none";
      document.body.style.overflow = "";
    }

    function showThanksModal(message) {
      const prevModalDialog = document.querySelector(".modal__dialog");
      prevModalDialog.classList.add("hide");
      openModal();
      const thanksModal = document.createElement("div");
      thanksModal.classList.add("modal__dialog");
      thanksModal.innerHTML = ` 
      <div class="modal__content">
         <div class="modal__close" data-close>x</div>
         <div class = "modal__title">${message} </div>
      </div>`;

      document.querySelector(".modal").append(thanksModal);
      setTimeout(() => {
        thanksModal.remove();
        prevModalDialog.classList.add("show");
        prevModalDialog.classList.remove("hide");
        closeModal();
      }, 5000);
    }

    // ____________________________________________FETCH API___________________________________________________________________________
    //классический гет запрос, фетч использует промисы!
    // response - ответ
    // response.json(()) возвращает промис, и получаем обычный объект
    // fetch("https://jsonplaceholder.typicode.com/posts", {
    //   method: "POST",
    //   body: JSON.stringify({ name: "Alex" }),
    //   headers: {
    //     "Content-type": "application/json"
    //   }
    // })
    //   .then((response) => response.json())
    //   .then((json) => console.log(json));
  }
});
