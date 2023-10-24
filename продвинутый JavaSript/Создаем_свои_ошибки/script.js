const data = [
  {
    id: "box",
    tag: "div",
  },
  {
    id: "",
    tag: "nav",
  },
  {
    id: "circle",
    tag: "span",
  },
];

//Блок обработки ошиболк
try {
  data.forEach((blockObj, i) => {
    const block = document.createElement(blockObj.tag);
    if (!blockObj.id) {
      throw new Error(`В данном элементе под номером ${i + 1} нет id`);
    }
    block.setAttribute("id", blockObj.id);
    document.body.append(block);
  });
} catch (e) {
  if (e.name === "SyntaxError") {
    console.log(e.message);
    //оператор throw выбрасывает ошибку!
  } else throw e;
}

// const err = new SyntaxError("new error");
// console.log(err.name, err.message, err.stack);
