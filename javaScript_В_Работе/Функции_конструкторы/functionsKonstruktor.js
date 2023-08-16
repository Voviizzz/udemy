// const num = new Function()

function User(name, id) {
  this.name = name;
  this.id = id;
  this.human = true;
  this.hello = function () {
    console.log(`${this.name} hello !`);
  };
}
//прототип будет для всех потомков функции User
User.prototype.exit = function (name) {
  console.log(`Пользователь ${this.name} ушел`);
};

const ivan = new User("ivan", 29);
const alex = new User("alex", 20);

console.log(ivan);
console.log(alex);
ivan.exit();

//конструкторы везде где есть шаблонизация 
// например слайдеры, параметры сладйера можно задавать как параметры (шаблонизац)
// в js классов не было, они появлись позже
