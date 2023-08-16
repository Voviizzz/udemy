"use strict";
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
