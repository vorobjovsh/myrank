// Скрипт, запускающий модальное окно - Удаление в корзину
const btnTrashArr = document.querySelector(".adminvisible-str");

const footerBlockUser = document.querySelector(".js-footer-user");

const footerBlockAdmin = document.querySelector(".js-footer-admin");

function toAdminTrash(event) {
    event.preventDefault();
    let elem = event.target;

    if(elem.classList.contains("uservisible-str__item--trash")) {
       $("#myModal-trash-7").modal("show");
    }

}

function toBtnTrash(event) {
    event.preventDefault();
    let elem = event.target;

    if(elem.classList.contains("footer-str__trash--img") || elem.classList.contains("footer-str__trash")) {
       $("#myModal-trashBtn-7").modal("show");
    }

}

btnTrashArr.addEventListener("click", toAdminTrash);
footerBlockAdmin.addEventListener("click", toBtnTrash);
