// Скрипт, запускающий модальное окно - Добавление сотрудников в отдел
function addEmploy(event) {
    event.preventDefault();
    let elem = event.target;
    //console.log(elem);
    if(elem.classList.contains("uservisible-str__sublink--imgman")) {
       $("#myModal-employ-7").modal("show");
    }

}

btnTrashArr.addEventListener("click", addEmploy);
