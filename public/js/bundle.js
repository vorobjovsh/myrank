"use strict";

// Полифилл matches для IE
(function (e) {
    var matches = e.matches || e.matchesSelector || e.webkitMatchesSelector || e.mozMatchesSelector || e.msMatchesSelector || e.oMatchesSelector;
    !matches ? e.matches = e.matchesSelector = function matches(selector) {
        var matches = document.querySelectorAll(selector);
        var th = this;
        return Array.prototype.some.call(matches, function (e) {
            return e === th;
        });
    } : e.matches = e.matchesSelector = matches;
})(Element.prototype);
//Скрипт, запускающий модальное окно - Создание подразделения
var maket1 = document.querySelector(".maket-1");
var maket2 = document.querySelector(".maket-2");
var createStr = document.querySelector(".button-maket-1");

var ulTopBottom = {
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
// Скрипт выбора панелей User или Admin
var maket7 = document.querySelector(".maket-7");
var maket8 = document.querySelector(".maket-8");
var addSubdivision = document.querySelector(".subdivision-str--addstructure");
var addUser = document.querySelector(".js-subdivision-str--user");
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
    $('.maket-2').removeClass("js-block");
    $('.maket-8').addClass("js-block");
    scrollNone(jsMenuUser);
}

function addToAdmin(evt) {
    evt.preventDefault();
    $("#myModal-option-2").modal("hide");
    $('.maket-2').removeClass("js-block");
    $('.maket-7').addClass("js-block");
    topPositions();
    scrollNone(jsMenu);
}

// Переходим в панель User
addUser.addEventListener("click", addToUser);
// Переходим в панель Admin
addAdmin.addEventListener("click", addToAdmin);
// Скрипт, запускающий модальное окно - Удаление в корзину
var btnTrashArr = document.querySelector(".adminvisible-str");

var footerBlockUser = document.querySelector(".js-footer-user");

var footerBlockAdmin = document.querySelector(".js-footer-admin");

function toAdminTrash(event) {
    event.preventDefault();
    var elem = event.target;

    if (elem.classList.contains("uservisible-str__item--trash")) {
        $("#myModal-trash-7").modal("show");
    }
}

function toBtnTrash(event) {
    event.preventDefault();
    var elem = event.target;

    if (elem.classList.contains("footer-str__trash--img") || elem.classList.contains("footer-str__trash")) {
        $("#myModal-trashBtn-7").modal("show");
    }
}

btnTrashArr.addEventListener("click", toAdminTrash);
footerBlockAdmin.addEventListener("click", toBtnTrash);
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

// Скрипт, запускающий модальные окна при клике по иконкам в пользовательской части
function addInfoUser(event) {
    event.preventDefault();
    var elem = event.target;
    var wicon = $(window).width();

    if (elem.classList.contains("uservisible-str__sublink--imgman") && wicon > 1023) {

        $("#myModal-infouser-8").modal("show");
    }

    if (elem.matches(".uservisible-str__sublink--imgman > use") && wicon > 1023) {

        $("#myModal-infouser-8").modal("show");
    }

    if (elem.classList.contains("uservisible-str__sublink--imgcall") && wicon > 1023) {

        $("#myModal-infouser-8").modal("show");
    }

    if (elem.matches(".uservisible-str__sublink--imgcall > use") && wicon > 1023) {

        $("#myModal-infouser-8").modal("show");
    }

    if (elem.classList.contains("uservisible-str__sublink--imggps") && wicon > 1023) {

        $("#myModal-infouser-8").modal("show");
    }

    if (elem.matches(".uservisible-str__sublink--imggps > use") && wicon > 1023) {

        $("#myModal-infouser-8").modal("show");
    }
}

userItem.addEventListener("click", addInfoUser);
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

    if (elem.matches(".uservisible-str__sublink--imgman > use") && wicon > 1023) {
        $("#myModal-employ-7").modal("show");
    }

    if (elem.classList.contains("uservisible-str__sublink--imggps") && wicon > 1023) {
        $("#myModal-addcontact-7").modal("show");
    }

    if (elem.matches(".uservisible-str__sublink--imggps > use") && wicon > 1023) {
        $("#myModal-addcontact-7").modal("show");
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
        //console.log(wicon);

        $("#myModal-addcontact-7").modal("show");
    }

    if (elem.matches(".uservisible-str__sublink--imgcall > use") && wicon > 1023) {

        $("#myModal-addcontact-7").modal("show");
    }
}

btnTrashArr.addEventListener("click", addContact);
// Скрипт, увеличивающий блок с иконками в мобильной версии в панели Админ
//const btnTrashArr = document.querySelector(".adminvisible-str");
var addZoomIcons = void 0;
//console.log(addZoomIcons);

function zoomIconsBlock(event) {
    event.preventDefault();
    var elem = event.target;
    var wicon = $(window).width();
    var iconPopup = void 0;
    //console.log(elem.parentNode.parentNode);

    if (wicon < 1024) {

        if (elem.classList.contains("uservisible-str--bottomflex")) {

            iconPopup = elem;
            iconPopup.classList.add("js-uservisible-str--zoomicons");
            addZoomIcons = document.querySelector(".js-uservisible-str--zoomicons");

            addZoomIcons.addEventListener("click", addZoomContact);
        } else if (elem.parentNode.parentNode.classList.contains("uservisible-str--bottomflex")) {

            iconPopup = elem.parentNode.parentNode;
            iconPopup.classList.add("js-uservisible-str--zoomicons");
            addZoomIcons = document.querySelector(".js-uservisible-str--zoomicons");
            addZoomIcons.addEventListener("click", addZoomContact);
        } else if (elem.parentNode.parentNode.parentNode.classList.contains("uservisible-str--bottomflex")) {

            iconPopup = elem.parentNode.parentNode.parentNode;
            iconPopup.classList.add("js-uservisible-str--zoomicons");
            addZoomIcons = document.querySelector(".js-uservisible-str--zoomicons");
            addZoomIcons.addEventListener("click", addZoomContact);
        }
    }
}

function addZoomContact(event) {
    event.preventDefault();
    var elem = event.target;
    btnTrashArr.removeEventListener("click", zoomIconsBlock);
    if (addZoomIcons.classList.contains("js-uservisible-str--zoomicons")) {

        if (elem.classList.contains("uservisible-str__sublink--imgcall") || elem.matches(".uservisible-str__sublink--imgcall > use")) {

            addZoomIcons.classList.remove("js-uservisible-str--zoomicons");
            //console.log('Contact');
            $("#myModal-addcontact-7").modal("show");

            setTimeout(function () {
                btnTrashArr.addEventListener("click", zoomIconsBlock);
            }, 1000);
        }

        if (elem.classList.contains("uservisible-str__sublink--imgman") || elem.matches(".uservisible-str__sublink--imgman > use")) {

            addZoomIcons.classList.remove("js-uservisible-str--zoomicons");
            //console.log('Employ');
            $("#myModal-employ-7").modal("show");

            setTimeout(function () {
                btnTrashArr.addEventListener("click", zoomIconsBlock);
            }, 1000);
        }

        if (elem.classList.contains("uservisible-str__sublink--imggps") || elem.matches(".uservisible-str__sublink--imggps > use")) {

            addZoomIcons.classList.remove("js-uservisible-str--zoomicons");
            //console.log('Employ');
            $("#myModal-addcontact-7").modal("show");

            setTimeout(function () {
                btnTrashArr.addEventListener("click", zoomIconsBlock);
            }, 1000);
        }
    } else {
        btnTrashArr.addEventListener("click", zoomIconsBlock);
    }
}

btnTrashArr.addEventListener("click", zoomIconsBlock);

// Скрипт, увеличивающий блок с иконками в мобильной версии в панели User
function zoomIconsBlockUser(event) {
    event.preventDefault();
    var elem = event.target;
    var wicon = $(window).width();
    var iconPopup = void 0;
    //console.log(elem.parentNode.parentNode);

    if (wicon < 1024) {

        if (elem.classList.contains("uservisible-str--bottomflex")) {

            iconPopup = elem;
            iconPopup.classList.add("js-uservisible-str--zoomicons");
            addZoomIcons = document.querySelector(".js-uservisible-str--zoomicons");

            addZoomIcons.addEventListener("click", addZoomContactUser);
        } else if (elem.parentNode.parentNode.classList.contains("uservisible-str--bottomflex")) {

            iconPopup = elem.parentNode.parentNode;
            iconPopup.classList.add("js-uservisible-str--zoomicons");
            addZoomIcons = document.querySelector(".js-uservisible-str--zoomicons");
            addZoomIcons.addEventListener("click", addZoomContactUser);
        } else if (elem.parentNode.parentNode.parentNode.classList.contains("uservisible-str--bottomflex")) {

            iconPopup = elem.parentNode.parentNode.parentNode;
            iconPopup.classList.add("js-uservisible-str--zoomicons");
            addZoomIcons = document.querySelector(".js-uservisible-str--zoomicons");
            addZoomIcons.addEventListener("click", addZoomContactUser);
        }
    }
}

function addZoomContactUser(event) {
    event.preventDefault();
    var elem = event.target;
    userItem.removeEventListener("click", zoomIconsBlockUser);
    if (addZoomIcons.classList.contains("js-uservisible-str--zoomicons")) {

        if (elem.classList.contains("uservisible-str__sublink--imgcall") || elem.matches(".uservisible-str__sublink--imgcall > use")) {

            addZoomIcons.classList.remove("js-uservisible-str--zoomicons");

            $("#myModal-infouser-8").modal("show");

            setTimeout(function () {
                userItem.addEventListener("click", zoomIconsBlockUser);
            }, 1000);
        }

        if (elem.classList.contains("uservisible-str__sublink--imgman") || elem.matches(".uservisible-str__sublink--imgman > use")) {

            addZoomIcons.classList.remove("js-uservisible-str--zoomicons");

            $("#myModal-infouser-8").modal("show");

            setTimeout(function () {
                userItem.addEventListener("click", zoomIconsBlockUser);
            }, 1000);
        }

        if (elem.classList.contains("uservisible-str__sublink--imggps") || elem.matches(".uservisible-str__sublink--imggps> use")) {

            addZoomIcons.classList.remove("js-uservisible-str--zoomicons");

            $("#myModal-infouser-8").modal("show");

            setTimeout(function () {
                userItem.addEventListener("click", zoomIconsBlockUser);
            }, 1000);
        }
    } else {
        userItem.addEventListener("click", zoomIconsBlockUser);
    }
}

userItem.addEventListener("click", zoomIconsBlockUser);
// Скрипт, запускающий модальные окна - Создание подразделения и Создание отдела
var adminVisible = document.querySelector(".adminvisible-str");

function addStructure(event) {
    event.preventDefault();
    var elem = event.target;

    if (elem.classList.contains("js-addstructure")) {
        $("#myModal-2").modal("show");
    }

    if (elem.classList.contains("js-adddepart")) {
        $("#myModal-depart-2").modal("show");
    }
}

adminVisible.addEventListener("click", addStructure);
// Скрипт, запускающий модальное окно - Добавление сотрудников в отдел - По кнопке "Добавить сотрудника"
var jsAddUsers = document.querySelector(".js-adduser");

function addUsersBtn(event) {
    event.preventDefault();

    $("#myModal-infoadmin-7").modal("hide");

    $("#myModal-employ-7").modal("show");
}

jsAddUsers.addEventListener("click", addUsersBtn);

// Скрипт, запускающий модальное окно - Добавление контактов в отдел - По кнопке "Добавить контакты"
var jsAddContacts = document.querySelector(".js-addcontacts");

function addContactsBtn(event) {
    event.preventDefault();

    $("#myModal-infoadmin-7").modal("hide");

    $("#myModal-addcontact-7").modal("show");
}

jsAddContacts.addEventListener("click", addContactsBtn);
// Скрипт, раскрывающий и закрывающий подменю по клику

$(function () {
    var Accordion = function Accordion(el, multiple) {
        this.el = el || {};
        this.multiple = multiple || false;

        var links = this.el.find('.uservisible-str__item--topblock');

        links.on('click', { el: this.el, multiple: this.multiple }, this.dropdown);
    };

    Accordion.prototype.dropdown = function (e) {
        var $el = e.data.el,
            $this = $(this),
            $next = $this.next();

        var wicon = $(window).width();

        if ($this.parent().find('.uservisible-str__sublist').length > 0 && e.target.classList.contains('js-mark')) {

            //console.log($this[0].children[1]);

            $next.toggle();

            if ($this.find('.js-mark').hasClass('uservisible-str__item--mark-right')) {

                $this.find('.js-mark').removeClass('uservisible-str__item--mark-right');
                $this.find('.js-mark').addClass('uservisible-str__item--mark');
            } else {

                $this.find('.js-mark').removeClass('uservisible-str__item--mark');
                $this.find('.js-mark').addClass('uservisible-str__item--mark-right');
            }

            /*setTimeout(() => {
                topPositions();
                addSubLines();
            }, 500);*/

            topPositions();
            addSubLines();

            if (!e.data.multiple) {

                $el.find('.uservisible-str__sublist').not($next).slideUp(50).parent().find('.uservisible-str__link-block:first').parent().find('.js-mark').removeClass('uservisible-str__item--mark-right').addClass('uservisible-str__item--mark');

                /*setTimeout(() => {
                    topPositions();
                    addSubLines();
                }, 500);*/

                topPositions();
                addSubLines();
            }

            if (wicon > 767) {
                //console.log($next);
                paramElem($next[0]);
            }
        }
    };

    var accordion = new Accordion($('.uservisible-str.adminvisible-str'), false);

    var accordionUser = new Accordion($('.js-uservisible-str'), false);
});

$(function () {
    var Subaccordion = function Subaccordion(el, multiple) {
        this.el = el || {};
        this.multiple = multiple || false;

        // Variables privadas
        var links = this.el.find('.uservisible-str__subitem--topblock');

        // Evento
        links.on('click', { el: this.el, multiple: this.multiple }, this.dropdown);
    };

    Subaccordion.prototype.dropdown = function (e) {
        var $el = e.data.el,
            $this = $(this),
            $next = $this.next();

        var wicon = $(window).width();

        if ($this.parent().find('.uservisible-str__sublist').length > 0 && e.target.classList.contains('js-mark')) {

            $next.toggle();

            if ($this.find('.js-mark').hasClass('uservisible-str__item--mark-right')) {

                $this.find('.js-mark').removeClass('uservisible-str__item--mark-right');
                $this.find('.js-mark').addClass('uservisible-str__item--mark');
            } else {

                $this.find('.js-mark').removeClass('uservisible-str__item--mark');
                $this.find('.js-mark').addClass('uservisible-str__item--mark-right');
            }

            /*setTimeout(() => {
                topPositions();
                addSubLines();
            }, 500);*/

            topPositions();
            addSubLines();

            if (!e.data.multiple) {

                $this.parent().parent().find('.uservisible-str__sublist').not($next).slideUp(50).parent().find('.uservisible-str__sublink-block:first').parent().find('.js-mark').removeClass('uservisible-str__item--mark-right').addClass('uservisible-str__item--mark');

                /*setTimeout(() => {
                     topPositions();
                     addSubLines();
                 }, 500);*/

                topPositions();
                addSubLines();
            }

            if (wicon > 767) {
                paramElem($next[0]);
            }
        }
    };

    var subAccordion = new Subaccordion($('.uservisible-str.adminvisible-str'), false);

    var subAccordionUser = new Subaccordion($('.js-uservisible-str'), false);
});
var jsMenu = document.querySelector(".uservisible-str.adminvisible-str");
var jsMenuUser = document.querySelector(".uservisible-str.js-uservisible-str");

var divisionBlock = jsMenu.parentNode;
var divisionBlockUser = jsMenuUser.parentNode;

var lastDivisionBlock = jsMenu.lastElementChild;
var lastDivisionBlockUser = jsMenuUser.lastElementChild;

var arrSublist = document.querySelectorAll(".adminvisible-str .uservisible-str__sublist");

/*arrSublist.forEach(function(item, i) {
  item.classList.add(`js-sublist-${i}`);
});*/

for (var i = 0; i < arrSublist.length; i++) {
    arrSublist[i].classList.add("js-sublist-" + i);
}

var arrSublistUser = document.querySelectorAll(".js-uservisible-str .uservisible-str__sublist");

/*arrSublistUser.forEach(function(item, i) {
  item.classList.add(`js-sublistuser-${i}`);
});*/

for (var i = 0; i < arrSublistUser.length; i++) {
    arrSublistUser[i].classList.add("js-sublistuser-" + i);
}

function topPositions() {
    var lineTop = void 0;
    var lineBottom = void 0;
    var lineBottomCorrect = void 0;
    var heightLine = void 0;
    var style = document.createElement('style');

    if (maket7.classList.contains("js-block")) {

        lineTop = getCoords(divisionBlock).top;

        lineBottom = getCoords(lastDivisionBlock).top;

        lineBottomCorrect = lineBottom + 24;

        heightLine = lineBottomCorrect - lineTop;

        style.innerHTML = '.uservisible-str.adminvisible-str::before {height: ' + heightLine + 'px;}';

        document.querySelector('head').appendChild(style);
    }

    if (maket8.classList.contains("js-block")) {

        lineTop = getCoords(divisionBlockUser).top;

        lineBottom = getCoords(lastDivisionBlockUser).top;

        lineBottomCorrect = lineBottom + 26;

        heightLine = lineBottomCorrect - lineTop;

        style.innerHTML = '.uservisible-str.js-uservisible-str::before {height: ' + heightLine + 'px;}';

        document.querySelector('head').appendChild(style);
    }
}

function getCoords(elem) {
    // кроме IE8-

    var box = elem.getBoundingClientRect();

    return {
        top: box.top + pageYOffset,
        left: box.left + pageXOffset
    };
}

function addSubLines() {

    var wicon = $(window).width();

    if (maket7.classList.contains("js-block")) {

        // Так как в IE forEach не работает, то делаем через for

        /*arrSublist.forEach(function(item, i) {
          let lineTopSub = getCoords(item).top;
        let lineTopSubCorrect = lineTopSub - 6;
        if(wicon > 767) {
           lineTopSubCorrect = lineTopSub;
        }
        let lineBottomEl = item.lastElementChild;
          let lineBottomSub = getCoords(lineBottomEl).top;
        let lineBottomSubCorrect = lineBottomSub + 24;
        if(wicon > 767) {
           lineBottomSubCorrect = lineBottomSub - 1;
        }
          let heightLineSub = lineBottomSubCorrect - lineTopSubCorrect;
          let style = document.createElement('style');
          style.innerHTML = '.uservisible-str__sublist.js-sublist-' + i + '::before {height: ' + heightLineSub + 'px;}';
            document.querySelector('head').appendChild(style);
          });*/

        for (var i = 0; i < arrSublist.length; i++) {

            var lineTopSub = getCoords(arrSublist[i]).top;
            var lineTopSubCorrect = lineTopSub - 6;
            if (wicon > 767) {
                lineTopSubCorrect = lineTopSub;
            }
            var lineBottomEl = arrSublist[i].lastElementChild;

            var lineBottomSub = getCoords(lineBottomEl).top;
            var lineBottomSubCorrect = lineBottomSub + 24;
            if (wicon > 767) {
                lineBottomSubCorrect = lineBottomSub - 1;
            }

            var heightLineSub = lineBottomSubCorrect - lineTopSubCorrect;

            var style = document.createElement('style');

            style.innerHTML = '.uservisible-str__sublist.js-sublist-' + i + '::before {height: ' + heightLineSub + 'px;}';

            document.querySelector('head').appendChild(style);
        }
    }

    if (maket8.classList.contains("js-block")) {

        // Так как в IE forEach не работает, то делаем через for

        /*arrSublistUser.forEach(function(item, i) {
          let lineTopSub = getCoords(item).top;
        let lineTopSubCorrect = lineTopSub - 6;
        if(wicon > 767) {
           lineTopSubCorrect = lineTopSub;
        }
        let lineBottomEl = item.lastElementChild;
          let lineBottomSub = getCoords(lineBottomEl).top;
        let lineBottomSubCorrect = lineBottomSub + 26;
        if(wicon > 767) {
           lineBottomSubCorrect = lineBottomSub + 1;
        }
          let heightLineSub = lineBottomSubCorrect - lineTopSubCorrect;
          let style = document.createElement('style');
          style.innerHTML = '.uservisible-str__sublist.js-sublistuser-' + i + '::before {height: ' + heightLineSub + 'px;}';
            document.querySelector('head').appendChild(style);
          });*/

        for (var i = 0; i < arrSublistUser.length; i++) {

            var _lineTopSub = getCoords(arrSublistUser[i]).top;
            var _lineTopSubCorrect = _lineTopSub - 6;
            if (wicon > 767) {
                _lineTopSubCorrect = _lineTopSub;
            }
            var _lineBottomEl = arrSublistUser[i].lastElementChild;

            var _lineBottomSub = getCoords(_lineBottomEl).top;
            var _lineBottomSubCorrect = _lineBottomSub + 26;
            if (wicon > 767) {
                _lineBottomSubCorrect = _lineBottomSub + 1;
            }

            var _heightLineSub = _lineBottomSubCorrect - _lineTopSubCorrect;

            var _style = document.createElement('style');

            _style.innerHTML = '.uservisible-str__sublist.js-sublistuser-' + i + '::before {height: ' + _heightLineSub + 'px;}';

            document.querySelector('head').appendChild(_style);
        }
    }
}
// Скрипт, удаляющий вертикальный скролл у меню
function scrollNone(elem) {

    ulTopBottom.heightUl = elem.clientHeight;
    //console.log(ulTopBottom.heightUl);

    ulTopBottom.topUl = getCoords(elem).top;
    //console.log(ulTopCoords);

    ulTopBottom.ulSelect = elem;

    return ulTopBottom.bottomUl = ulTopBottom.topUl + ulTopBottom.heightUl;
}

function paramElem(elem) {

    ulTopBottom.top = getCoords(elem).top;
    ulTopBottom.height = elem.clientHeight;
    ulTopBottom.bottom = ulTopBottom.top + ulTopBottom.height;
    ulTopBottom.difference = ulTopBottom.bottomUl - ulTopBottom.bottom;

    // Минимальный отступ снизу у меню
    var mb = 10;
    var heightNew = void 0;

    if (ulTopBottom.difference > mb) {

        ulTopBottom.ulSelect.style.height = ulTopBottom.heightUl + "px";
    } else if (ulTopBottom.difference < mb && ulTopBottom.difference > 0) {

        heightNew = ulTopBottom.heightUl + mb - ulTopBottom.difference;
        ulTopBottom.ulSelect.style.height = heightNew + "px";
    } else if (ulTopBottom.difference === 0) {

        heightNew = ulTopBottom.heightUl + mb;
        ulTopBottom.ulSelect.style.height = heightNew + "px";
    } else if (ulTopBottom.difference < 0) {

        heightNew = ulTopBottom.heightUl + mb + Math.abs(ulTopBottom.difference);
        ulTopBottom.ulSelect.style.height = heightNew + "px";
    }
}
// Скрипт замены стилей у <select>
(function ($) {
    $.fn.extend({

        customStyle1: function customStyle1(options) {
            //if(!$.browser.msie || ($.browser.msie&&$.browser.version>6)){
            return this.each(function () {

                var currentSelected = $(this).find(':selected');
                $(this).after('<span class="select1"><span class="customStyleSelectBoxInner">' + currentSelected.text() + '</span></span>').css({ position: 'absolute', opacity: 0, fontSize: $(this).next().css('font-size') });
                var selectBoxSpan = $(this).next();
                var selectBoxWidth = parseInt($(this).width()) - parseInt(selectBoxSpan.css('padding-left')) - parseInt(selectBoxSpan.css('padding-right'));
                var selectBoxSpanInner = selectBoxSpan.find(':first-child');
                selectBoxSpan.css({ display: 'inline-block' });
                selectBoxSpanInner.css({ width: selectBoxWidth, display: 'inline-block' });
                var selectBoxHeight = parseInt(selectBoxSpan.height()) + parseInt(selectBoxSpan.css('padding-top')) + parseInt(selectBoxSpan.css('padding-bottom'));
                $(this).height(selectBoxHeight).change(function () {
                    selectBoxSpanInner.text($('option:selected', this).text()).parent().addClass('changed');
                });
            });
            //}
        }
    });
})(jQuery);

//$('.select1').customStyle1();

// Скрипт, обрезающий количество знаков в строке (применяется на сайте для ограничения длинной строки в выпадающем списке в тэгах <option>)
var optionText,
    array = [],
    newString,
    maxChar = 22;
/*let wicon = $(window).width();

if(wicon > 413) {
   maxChar = 22;
} else {
  maxChar = 20;
}*/

$('select').each(function () {
    $(this).find('option').each(function (i, e) {
        $(e).attr('title', $(e).text());
        optionText = $(e).text();
        newString = '';
        if (optionText.length > maxChar) {
            array = optionText.split(' ');
            $.each(array, function (ind, ele) {
                newString += ele + ' ';
                if (ind > 0 && newString.length > maxChar) {
                    $(e).text(newString);
                    return false;
                }
            });
        }
    });
});

/* ===== Logic for creating fake Select Boxes ===== */
$('.sel').each(function () {
    $(this).children('select').css('display', 'none');

    var $current = $(this);

    $(this).find('option').each(function (i) {
        if (i == 0) {
            $current.prepend($('<div>', {
                class: $current.attr('class').replace(/sel/g, 'sel__box')
            }));

            var placeholder = $(this).text();
            $current.prepend($('<span>', {
                class: $current.attr('class').replace(/sel/g, 'sel__placeholder'),
                text: placeholder,
                'data-placeholder': placeholder
            }));

            return;
        }

        $current.children('div').append($('<span>', {
            class: $current.attr('class').replace(/sel/g, 'sel__box__options'),
            text: $(this).text()
        }));
    });
});

var selectCount = {
    count: 5
};

// Toggling the `.active` state on the `.sel`.
$('.sel').click(function () {
    selectCount.count = selectCount.count + 1;
    $(this).toggleClass('active');
    $(this).find('.sel__box').css('z-index', selectCount.count);
});

// Toggling the `.selected` state on the options.
$('.sel__box__options').click(function () {
    var txt = $(this).text();
    var index = $(this).index();

    $(this).siblings('.sel__box__options').removeClass('selected');
    $(this).addClass('selected');

    var $currentSel = $(this).closest('.sel');
    $currentSel.children('.sel__placeholder').text(txt);
    $currentSel.children('select').prop('selectedIndex', index + 1);
});
// Скрипт, открывающий форму добавления сотрудников в футере
var btnToggle = {
    btn: null,
    jsblock: null,
    border: null
};

function addBtnFooter(event) {
    event.preventDefault();
    var elem = event.target;

    if (elem.classList.contains("footer-str__btn")) {

        if (btnToggle.btn !== null) {

            btnToggle.btn.classList.remove("footer-str__btn--hover");

            btnToggle.jsblock.classList.remove("js-block");

            btnToggle.border.classList.remove("footer-str__itemappl--border");
        }

        elem.parentNode.nextElementSibling.classList.add("js-block");
        btnToggle.jsblock = elem.parentNode.nextElementSibling;

        elem.parentNode.parentNode.classList.add("footer-str__itemappl--border");
        btnToggle.border = elem.parentNode.parentNode;

        elem.classList.add("footer-str__btn--hover");

        btnToggle.btn = elem;
    }

    if (elem.classList.contains("footer-str__form--addbtn")) {

        elem.parentNode.parentNode.classList.remove("js-block");

        elem.parentNode.parentNode.parentNode.classList.remove("footer-str__itemappl--border");

        btnToggle.btn.classList.remove("footer-str__btn--hover");
    }
}

footerBlockUser.addEventListener("click", addBtnFooter);
footerBlockAdmin.addEventListener("click", addBtnFooter);