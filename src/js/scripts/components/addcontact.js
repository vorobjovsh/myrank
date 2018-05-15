// Скрипт, запускающий модальное окно - Добавление контактов в отдел
function addContact(event) {
    event.preventDefault();
    let elem = event.target;
    let wicon = $(window).width();
    //console.log(elem);
    if(elem.classList.contains("uservisible-str__sublink--imgcall") && wicon > 1023) {
    console.log(wicon);
       $("#myModal-addcontact-7").modal("show");
    }

}

btnTrashArr.addEventListener("click", addContact);
