// const person = {
//   name: "Alex",
//   tel: "+9231232312321",
// };

//нужно подготовить данные в нужном формате
// console.log(JSON.stringify(person));
//{"name":"Alex","tel":"+9231232312321"}
//когда с сервера приходит Json нужно использовать parse
// console.log(JSON.parse(JSON.stringify(person)));
//Object { name: "Alex", tel: "+9231232312321" }

// ______________________________________Глубокие копии_________________________________ !!!Нужно запомнить!
const person = {
  name: "Alex",
  tel: "+9231232312321",
  parents: {
    mom: "olga",
    dad: "mike",
  },
};

const clone = JSON.parse(JSON.stringify(person));
clone.parents.mom = "ann";
console.log(clone, person);
