//Скрипт, запускающий модальное окно - Создание подразделения
let maket1 = document.querySelector(".maket-1");
let maket2 = document.querySelector(".maket-2");
const createStr = document.querySelector(".button-maket-1");

const ulTopBottom = {
    top: '',
    bottom: '',
    height: '',
    topUl: '',
    bottomUl: '',
    heightUl: '',
    difference: '',
    ulSelect: ''
};

function addCompany(evt) {
  evt.preventDefault();
  $(".maket-1").addClass("js-none");
  $(".maket-2").addClass("js-block");
  //запускаем тестовое модальное окно (с выбором панелей User и Admin)
  subdivision();
}

createStr.addEventListener("click", addCompany);
