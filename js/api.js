

"use strict";
(function() {
  const URL = "https://api.mindat.org/minerals_ima/?format=json";

  window.addEventListener("load", init);
  function init() {
    document.getElementById("get").addEventListener("click", function() {
      let inputVal = document.getElementById("year").value;
      if (inputVal) {
        fetchNum(inputVal);
      }
    });
  }

  function fetchNum(year) {
    const data = fetch(URL).then((response) => response.json())
    console.log(data.results);
    // data.results.forEach(mineral => {
    //     console.log(mineral);
    // });
    // for(let mineral of data.results){
        
    //     if(mineral.discovery_year==year) document.getElementById("mineral").innerHTML = mineral.name;
    //     break;
    //   }
  }

  /**
   * Отображает ответ с результатом в абзаце #output.
   * @param {string} response - строка ответа на запрос Numbers API
   */
  function showResult(response) {
    document.getElementById("mineral").textContent = response;
  }

  /* ------------------------------ Вспомогательные функции  ------------------------------ */

  /**
   *  Вспомогательная функция для возврата текста результата ответа в случае успеха, в противном случае
   * возвращает сообщение о произошедшей ошибке
   * @param {object} response - объект Response (ответ) для проверки успех/ошибка
   */
  function checkStatus(response) {
    if (!response.ok) {
      throw Error("Ошибка запроса: " + response.statusText);
    }
    return response; // объект Response
  }

})();
