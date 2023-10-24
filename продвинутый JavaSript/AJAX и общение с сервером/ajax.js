//Пример использования ajax - фильтры и подсказки для набора текста
// 1) не перегружаем страницу и экономим трафик
// 2) Подгружается лишь часть контента, а не целая страница

// AJAX, Ajax (ˈeɪdʒ, от англ. Asynchronous Javascript and XML — «асинхронный JavaScript и XML») — подход к построению интерактивных пользовательских интерфейсов веб-приложений, заключающийся в «фоновом» обмене данными браузера с веб-сервером. В результате при обновлении данных веб-страница не перезагружается полностью, и веб-приложения становятся быстрее и удобнее. По-русски иногда произносится транслитом как «аякс». У аббревиатуры AJAX нет устоявшегося аналога на кириллице.

const inputRub = document.querySelector("#rub");
const inputUsd = document.querySelector("#usd");

inputRub.addEventListener("input", () => {
  //екземпляр событий
  const request = new XMLHttpRequest();
  //   request.open(method, url, async, login, pass); //собирает настройки, которые помогут сделать запрос
  //get запрос - получить какие-то данные с сервера, он нужен для получения курса валют в данном примере
  //   url - куда мы посылаем запросы, формирумем путь относительно index.html
  request.open("GET", "current.json"); //собирает настройки, которые помогут сделать запрос
  //заголовок для передачи json файла
  request.setRequestHeader("Content-type", "application/json; charset=utf-8");
  request.send("body");
  //после 3-ех этих методов мы отправили уже запрос на сервер, но данная операция асинхронная
  //это все методоы объекта httpRequest

  request.addEventListener("load", () => {
    //чаще всего используем событие load а не readystatechange
    // if (request.readyState === 4 && request.status === 200)
    if (request.status === 200) {
      console.log(request.response);
      const data = JSON.parse(request.response);
      inputUsd.value = (+inputRub.value / data.current.usd).toFixed(2);
    } else {
      inputUsd.value = "Что-то пошло не так";
    }
  }); //отслеживает статус в данный момент времени, Load срабатывает когда запрос полностью загрузился

  //status 404, 0, 200?
  //statusText
  //response - ответ от сервера
  //readyState - текущие состояние нажего запроса 4 - done
});
