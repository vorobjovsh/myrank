// Скрипт, запускающий модальное окно - Открытый раздел - другие пользователи
const userItem = document.querySelector(".js-uservisible-str");

function infoUser(event) {
    event.preventDefault();
    let elem = event.target;
    if(elem.classList.contains("uservisible-str__link") || elem.classList.contains("uservisible-str__sublink")) {
       $("#myModal-infouser-8").modal("show");
    }

}

//userItem.addEventListener("click", infoUser);
