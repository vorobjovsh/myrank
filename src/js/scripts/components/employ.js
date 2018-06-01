// Скрипт, запускающий модальное окно - Добавление сотрудников в отдел
function addEmploy(event) {
    event.preventDefault();
    let elem = event.target;
    let wicon = $(window).width();
    //console.log(elem);
    if(elem.classList.contains("uservisible-str__sublink--imgman") && wicon > 1023) {
       $("#myModal-employ-7").modal("show");
    }

    if(elem.matches(".uservisible-str__sublink--imgman > use") && wicon > 1023) {
       $("#myModal-employ-7").modal("show");
    }

    if(elem.classList.contains("uservisible-str__sublink--imggps") && wicon > 1023) {
       $("#myModal-addcontact-7").modal("show");
    }

    if(elem.matches(".uservisible-str__sublink--imggps > use") && wicon > 1023) {
       $("#myModal-addcontact-7").modal("show");
    }

}

btnTrashArr.addEventListener("click", addEmploy);
