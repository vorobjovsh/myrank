// Скрипт, запускающий модальные окна - Создание подразделения и Создание отдела
const adminVisible = document.querySelector(".adminvisible-str");

function addStructure(event) {
    event.preventDefault();
    let elem = event.target;
    
    if(elem.classList.contains("js-addstructure")) {
       $("#myModal-2").modal("show");
    }
    
    if(elem.classList.contains("js-adddepart")) {
       $("#myModal-depart-2").modal("show");
    }

}

adminVisible.addEventListener("click", addStructure);
