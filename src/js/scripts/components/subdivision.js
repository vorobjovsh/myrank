const maket8 = document.querySelector(".maket-8");
const addSubdivision = document.querySelector(".subdivision-str--addbtn");

function subdivision() {

    $("#myModal-2").modal("show");

}

function addSubdiv(evt) {
  evt.preventDefault();
  $("#myModal-2").modal("hide");
  maket2.classList.remove("js-block");
  maket8.classList.add("js-block");
}

addSubdivision.addEventListener("click", addSubdiv);
