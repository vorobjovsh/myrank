// Скрипт, запускающий модальное окно - Удаление в корзину
const btnTrashArr = document.querySelector(".adminvisible-str");

function toAdminTrash(event) {
    event.preventDefault();
    let elem = event.target;

    if(elem.classList.contains("uservisible-str__item--trash")) {
       $("#myModal-trash-7").modal("show");
    }

}

btnTrashArr.addEventListener("click", toAdminTrash);
