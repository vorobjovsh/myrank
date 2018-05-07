function editPens(event) {
    event.preventDefault();
    let elem = event.target;

    if(elem.classList.contains("uservisible-str__item--pens")) {
       $("#myModal-pens-7").modal("show");
    }

}

btnTrashArr.addEventListener("click", editPens);
