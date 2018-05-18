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
    var wicon = $(window).width();
    //console.log(elem);
    if (elem.classList.contains("uservisible-str__sublink--imgman") && wicon > 1023) {
        $("#myModal-employ-7").modal("show");
    }
}

btnTrashArr.addEventListener("click", addEmploy);
// Скрипт, запускающий модальное окно - Добавление контактов в отдел
function addContact(event) {
    event.preventDefault();
    var elem = event.target;
    var wicon = $(window).width();
    //console.log(elem);
    if (elem.classList.contains("uservisible-str__sublink--imgcall") && wicon > 1023) {
        console.log(wicon);
        $("#myModal-addcontact-7").modal("show");
    }
}

btnTrashArr.addEventListener("click", addContact);
// Скрипт, увеличивающий блок с иконками в мобильной версии
//const btnTrashArr = document.querySelector(".adminvisible-str");
var addZoomIcons = void 0;
//console.log(addZoomIcons);

function zoomIconsBlock(event) {
    event.preventDefault();
    var elem = event.target;
    var wicon = $(window).width();
    var iconPopup = void 0;
    //console.log(elem.parentNode.parentNode);

    if (elem.classList.contains("uservisible-str--bottomflex") && wicon < 1024) {
        iconPopup = elem;
        iconPopup.classList.add("js-uservisible-str--zoomicons");
        addZoomIcons = document.querySelector(".js-uservisible-str--zoomicons");

        addZoomIcons.addEventListener("click", addZoomContact);

        //console.log('btnTrashArr');
    } else if (elem.parentNode.parentNode.classList.contains("uservisible-str--bottomflex") && wicon < 1024) {
        iconPopup = elem.parentNode.parentNode;
        iconPopup.classList.add("js-uservisible-str--zoomicons");
        addZoomIcons = document.querySelector(".js-uservisible-str--zoomicons");
        //btnTrashArr.removeEventListener("click", zoomIconsBlock);
        addZoomIcons.addEventListener("click", addZoomContact);

        //console.log('btnTrashArrParent');
    }
}

function addZoomContact(event) {
    event.preventDefault();
    var elem = event.target;
    btnTrashArr.removeEventListener("click", zoomIconsBlock);
    if (addZoomIcons.classList.contains("js-uservisible-str--zoomicons")) {

        if (elem.classList.contains("uservisible-str__sublink--imgcall")) {

            addZoomIcons.classList.remove("js-uservisible-str--zoomicons");
            //console.log('Contact');
            $("#myModal-addcontact-7").modal("show");

            setTimeout(function () {
                btnTrashArr.addEventListener("click", zoomIconsBlock);
            }, 1000);
        }

        if (elem.classList.contains("uservisible-str__sublink--imgman")) {

            addZoomIcons.classList.remove("js-uservisible-str--zoomicons");
            //console.log('Employ');
            $("#myModal-employ-7").modal("show");

            setTimeout(function () {
                btnTrashArr.addEventListener("click", zoomIconsBlock);
            }, 1000);
        }
    } else {
        btnTrashArr.addEventListener("click", zoomIconsBlock);
    }
}

btnTrashArr.addEventListener("click", zoomIconsBlock);
// Скрипт, раскрывающий и закрывающий подменю по клику
var userSubMenu = document.querySelector(".uservisible-str");

var itemLinks = {
    blocks: '',
    item: '',
    ulAll: '',
    temp: '',
    tempMark: '',
    level: 1,
    firstUlMark: ''
};

function userMenuClick(event) {
    event.preventDefault();
    var elem = event.target;
    var wicon = $(window).width();
    console.log(elem);

    if (elem.parentNode.parentNode.classList.contains("uservisible-str__link-block")) {

        itemLinks.blocks = elem.parentNode.parentNode;
        itemLinks.item = itemLinks.blocks.parentNode;
        itemLinks.ulAll = itemLinks.item.nextSibling;
    }

    if (elem.parentNode.parentNode.classList.contains("uservisible-str__sublink-block")) {

        itemLinks.blocks = elem.parentNode.parentNode;
        itemLinks.item = itemLinks.blocks.parentNode;
        itemLinks.ulAll = itemLinks.item.nextSibling;
        console.log(itemLinks.ulAll);
    }

    if (elem.classList.contains("uservisible-str--topflex")) {
        itemLinks.blocks = elem.parentNode;
        itemLinks.item = itemLinks.blocks.parentNode;
        itemLinks.ulAll = itemLinks.item.nextSibling;
        console.log(itemLinks.ulAll);
    }

    if (elem.classList.contains("uservisible-str--bottomflex")) {
        itemLinks.blocks = elem.previousSibling;
        itemLinks.item = itemLinks.blocks.parentNode.parentNode;
        itemLinks.ulAll = itemLinks.item.nextSibling;
        console.log(itemLinks.ulAll);
    }

    if (elem.classList.contains("uservisible-str__sublink-block")) {
        itemLinks.blocks = elem;
        itemLinks.item = itemLinks.blocks.parentNode;
        itemLinks.ulAll = itemLinks.item.nextSibling;
        console.log(itemLinks.ulAll);
    }

    if (elem.classList.contains("uservisible-str__item--mark") || elem.classList.contains("uservisible-str__item--mark-right")) {
        itemLinks.blocks = elem;
        itemLinks.item = itemLinks.blocks.parentNode;
        itemLinks.ulAll = itemLinks.item.nextSibling;
        console.log(itemLinks.ulAll);
    }

    if (wicon > 1023 && itemLinks.ulAll !== null && !elem.parentNode.parentNode.classList.contains("uservisible-str--bottomflex")) {
        if (itemLinks.item.parentNode.parentNode.classList.contains("uservisible-str")) {

            itemLinks.firstUlMark = $(".uservisible-str__item").find(".uservisible-str__item--mark-right");

            if (itemLinks.firstUlMark === itemLinks.blocks) {

                itemLinks.ulAll.classList.toggle("js-block");

                if (itemLinks.ulAll.classList.contains("js-block")) {
                    itemLinks.blocks.classList.remove("uservisible-str__item--mark");
                    itemLinks.blocks.classList.add("uservisible-str__item--mark-right");
                } else {

                    itemLinks.blocks.classList.remove("uservisible-str__item--mark-right");
                    itemLinks.blocks.classList.add("uservisible-str__item--mark");
                }
            } else if (itemLinks.firstUlMark.length > 0) {
                itemLinks.firstUlMark[0].parentNode.nextSibling.classList.remove("js-block");
                itemLinks.firstUlMark[0].classList.remove("uservisible-str__item--mark-right");
                itemLinks.firstUlMark[0].classList.add("uservisible-str__item--mark");
            }

            itemLinks.ulAll.classList.toggle("js-block");

            if (itemLinks.ulAll.classList.contains("js-block")) {
                itemLinks.blocks.classList.remove("uservisible-str__item--mark");
                itemLinks.blocks.classList.add("uservisible-str__item--mark-right");
            } else {

                itemLinks.blocks.classList.remove("uservisible-str__item--mark-right");
                itemLinks.blocks.classList.add("uservisible-str__item--mark");
            }
        }
    } else if (!elem.parentNode.parentNode.classList.contains("uservisible-str--bottomflex") && itemLinks.ulAll !== null) {
        if (itemLinks.blocks.classList.contains("uservisible-str__link-block") || itemLinks.blocks.classList.contains("uservisible-str__sublink-block")) {

            if (itemLinks.temp !== '' && itemLinks.temp !== itemLinks.ulAll) {
                itemLinks.temp.classList.remove("js-block");
                itemLinks.tempMark.classList.remove("uservisible-str__item--mark-right");
                itemLinks.tempMark.classList.add("uservisible-str__item--mark");
            }

            itemLinks.temp = itemLinks.ulAll;
            itemLinks.tempMark = itemLinks.blocks;

            itemLinks.ulAll.classList.toggle("js-block");

            if (itemLinks.ulAll.classList.contains("js-block")) {
                itemLinks.blocks.classList.remove("uservisible-str__item--mark");
                itemLinks.blocks.classList.add("uservisible-str__item--mark-right");
            } else {

                itemLinks.blocks.classList.remove("uservisible-str__item--mark-right");
                itemLinks.blocks.classList.add("uservisible-str__item--mark");
            }
        }
    }
}

userSubMenu.addEventListener("click", userMenuClick);

userItem.addEventListener("click", userMenuClick);