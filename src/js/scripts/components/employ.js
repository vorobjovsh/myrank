//const btnTrashArr = document.querySelector(".adminvisible-str");

function addEmploy(event) {
    event.preventDefault();
    let elem = event.target;
    console.log(elem);
    if(elem.classList.contains("uservisible-str__sublink--man")) {
       $("#myModal-employ-7").modal("show");
    }

}

btnTrashArr.addEventListener("click", addEmploy);
