// Скрипт, запускающий модальное окно - Открытый раздел - другие пользователи
const userItem = document.querySelector(".js-uservisible-str");

function infoUser(event) {
    event.preventDefault();
    let elem = event.target;
    if(elem.classList.contains("uservisible-str__link") || elem.classList.contains("uservisible-str__sublink")) {
       $("#myModal-infouser-8").modal("show");
    }

}

userItem.addEventListener("click", infoUser);

// Скрипт, запускающий модальные окна при клике по иконкам в пользовательской части
function addInfoUser(event) {
    event.preventDefault();
    let elem = event.target;
    let wicon = $(window).width();

    if(elem.classList.contains("uservisible-str__sublink--imgman") && wicon > 1023) {

       $("#myModal-infouser-8").modal("show");
    }

    if(elem.matches(".uservisible-str__sublink--imgman > use") && wicon > 1023) {

       $("#myModal-infouser-8").modal("show");
    }

    if(elem.classList.contains("uservisible-str__sublink--imgcall") && wicon > 1023) {

       $("#myModal-infouser-8").modal("show");
    }

    if(elem.matches(".uservisible-str__sublink--imgcall > use") && wicon > 1023) {

       $("#myModal-infouser-8").modal("show");
    }

}

userItem.addEventListener("click", addInfoUser);

