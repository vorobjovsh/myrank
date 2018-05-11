"use strict";

//Скрипт, запускающий модальное окно - Создание подразделения
var maket1 = document.querySelector(".maket-1");
var maket2 = document.querySelector(".maket-2");
var createStr = document.querySelector(".button-maket-1");

function addCompany(evt) {
    evt.preventDefault();
    maket1.classList.add("js-none");
    maket2.classList.add("js-block");
    //запускаем тестовое модальное окно (с выбором панелей User и Admin)
    subdivision();
}

createStr.addEventListener("click", addCompany);
// Скрипт выбора панелей User или Admin
var maket7 = document.querySelector(".maket-7");
var maket8 = document.querySelector(".maket-8");
var addSubdivision = document.querySelector(".subdivision-str--addbtn");
var addUser = document.querySelector(".subdivision-str--user");
var addAdmin = document.querySelector(".subdivision-str--admin");

function subdivision() {

    $("#myModal-2").modal("show");
}

function addSubdiv(evt) {
    evt.preventDefault();
    $("#myModal-2").modal("hide");
    $("#myModal-option-2").modal("show");
}

addSubdivision.addEventListener("click", addSubdiv);

function addToUser(evt) {
    evt.preventDefault();
    $("#myModal-option-2").modal("hide");
    maket2.classList.remove("js-block");
    maket8.classList.add("js-block");
}

function addToAdmin(evt) {
    evt.preventDefault();
    $("#myModal-option-2").modal("hide");
    maket2.classList.remove("js-block");
    maket7.classList.add("js-block");
}

// Переходим в панель User
addUser.addEventListener("click", addToUser);
// Переходим в панель Admin
addAdmin.addEventListener("click", addToAdmin);
// Скрипт, запускающий модальное окно - Удаление в корзину
var btnTrashArr = document.querySelector(".adminvisible-str");

function toAdminTrash(event) {
    event.preventDefault();
    var elem = event.target;

    if (elem.classList.contains("uservisible-str__item--trash")) {
        $("#myModal-trash-7").modal("show");
    }
}

btnTrashArr.addEventListener("click", toAdminTrash);
// Скрипт, запускающий модальное окно - Редактирование
function editPens(event) {
    event.preventDefault();
    var elem = event.target;

    if (elem.classList.contains("uservisible-str__item--pens")) {
        $("#myModal-pens-7").modal("show");
    }
}

btnTrashArr.addEventListener("click", editPens);
// Скрипт, запускающий модальное окно - Открытый раздел - другие пользователи
var userItem = document.querySelector(".js-uservisible-str");

function infoUser(event) {
    event.preventDefault();
    var elem = event.target;
    if (elem.classList.contains("uservisible-str__link") || elem.classList.contains("uservisible-str__sublink")) {
        $("#myModal-infouser-8").modal("show");
    }
}

userItem.addEventListener("click", infoUser);
// Скрипт, запускающий модальное окно - Открытый раздел - админ
function infoAdmin(event) {
    event.preventDefault();
    var elem = event.target;
    if (elem.classList.contains("uservisible-str__link") || elem.classList.contains("uservisible-str__sublink")) {
        $("#myModal-infoadmin-7").modal("show");
    }
}

btnTrashArr.addEventListener("click", infoAdmin);
// Скрипт, запускающий модальное окно - Добавление сотрудников в отдел
function addEmploy(event) {
    event.preventDefault();
    var elem = event.target;
    //console.log(elem);
    if (elem.classList.contains("uservisible-str__sublink--imgman")) {
        $("#myModal-employ-7").modal("show");
    }
}

btnTrashArr.addEventListener("click", addEmploy);
// Скрипт, запускающий модальное окно - Добавление контактов в отдел
function addContact(event) {
    event.preventDefault();
    var elem = event.target;
    //console.log(elem);
    if (elem.classList.contains("uservisible-str__sublink--imgcall")) {

        $("#myModal-addcontact-7").modal("show");
    }
}

btnTrashArr.addEventListener("click", addContact);