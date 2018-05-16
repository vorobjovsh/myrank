// Скрипт, запускающий модальное окно - Открытый раздел - админ
function infoAdmin(event) {
    event.preventDefault();
    let elem = event.target;
    if(elem.classList.contains("uservisible-str__link") || elem.classList.contains("uservisible-str__sublink")) {
       $("#myModal-infoadmin-7").modal("show");
    }

}

//btnTrashArr.addEventListener("click", infoAdmin);
