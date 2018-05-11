//Скрипт, запускающий модальное окно - Создание подразделения
const maket1 = document.querySelector(".maket-1");
const maket2 = document.querySelector(".maket-2");
const createStr = document.querySelector(".button-maket-1");

function addCompany(evt) {
  evt.preventDefault();
  maket1.classList.add("js-none");
  maket2.classList.add("js-block");
  //запускаем тестовое модальное окно (с выбором панелей User и Admin)
  subdivision();
}

createStr.addEventListener("click", addCompany);
