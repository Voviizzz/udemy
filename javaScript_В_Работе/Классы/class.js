"use strict";
//html файл находится в tabs

//по сути это шаблон
class Rectangle {
  //начинаем конструировать класс
  constructor(height, width) {
    //должны их записать в свойства новго объекта
    this.height = height;
    this.width = width;
  }
  //слздаем метод
  clcArea() {
    return this.height * this.width;
  }
}
//создаем еще один класс, на основе базового
class ColorReactangleWithText extends Rectangle {
  constructor(height, width, text, backgroundColor) {
    //чтобы не копировать все свойства класса родителя, можно прописать super(), super()всегда идет первой строчкой

    super(height, width);
    this.text = text;
    this.backgroundColor = backgroundColor;
  }
  showMyProps() {
    console.log(`текст: ${this.text} и цвет ${this.backgroundColor}`);
  }
}

// использвуем класс
const square = new Rectangle(12, 12);
const long = new Rectangle(12, 44);
const div = new ColorReactangleWithText(12, 22, "hello", "red");
div.showMyProps();
console.log(div.clcArea());

// console.log(long.clcArea());

// __________________________________________________Принципы ООП__________________________________________________

// 1) Абстракция - отделяем концепцию от ее экземпляра
// 2) Наследование - способность объекта или калсса базироваться на основе другого объекта или класса
// 3) Полиморфизм - решение задачи разными способами
// 4) Инкапсуляция - размещение одного объекта или класса внутри другого для разграничения доступа к ним.

//теперь мы подключаемся к html tabs и будем конструировать через классы карточки

window.addEventListener("DOMContentLoaded", () => {
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
      console.log(this.parent);
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

      console.log(this.classes);
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
  //можно дальше посмотреть работу с формой в другой рабочей областии (localhost)
});
