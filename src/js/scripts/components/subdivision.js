const maket7 = document.querySelector(".maket-7");
const maket8 = document.querySelector(".maket-8");
const addSubdivision = document.querySelector(".subdivision-str--addbtn");
const addUser = document.querySelector(".subdivision-str--user");
const addAdmin = document.querySelector(".subdivision-str--admin");

function subdivision() {

    $("#myModal-2").modal("show");

}

function addSubdiv(evt) {
  evt.preventDefault();
  $("#myModal-2").modal("hide");
  $("#myModal-option-2").modal("show");
  //maket2.classList.remove("js-block");
  //maket8.classList.add("js-block");
}

addSubdivision.addEventListener("click", addSubdiv);

function addToUser(evt) {
  evt.preventDefault();
  $("#myModal-option-2").modal("hide");
  maket2.classList.remove("js-block");
  maket8.classList.add("js-block");
}

function addToAdmin(evt) {
  evt.preventDefault();
  $("#myModal-option-2").modal("hide");
  maket2.classList.remove("js-block");
  maket7.classList.add("js-block");
}

addUser.addEventListener("click", addToUser);
addAdmin.addEventListener("click", addToAdmin);