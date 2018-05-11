// Скрипт, запускающий модальное окно - Добавление контактов в отдел
function addContact(event) {
    event.preventDefault();
    let elem = event.target;
    //console.log(elem);
    if(elem.classList.contains("uservisible-str__sublink--imgcall")) {

       $("#myModal-addcontact-7").modal("show");
    }

}

btnTrashArr.addEventListener("click", addContact);
