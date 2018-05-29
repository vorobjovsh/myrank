// Скрипт выбора панелей User или Admin
const maket7 = document.querySelector(".maket-7");
const maket8 = document.querySelector(".maket-8");
const addSubdivision = document.querySelector(".subdivision-str--addstructure");
const addUser = document.querySelector(".js-subdivision-str--user");
const addAdmin = document.querySelector(".subdivision-str--admin");

function subdivision() {

    $("#myModal-2").modal("show");

}

function addSubdiv(evt) {
  evt.preventDefault();
  $("#myModal-2").modal("hide");
  $("#myModal-option-2").modal("show");
}

addSubdivision.addEventListener("click", addSubdiv);

function addToUser(evt) {
  evt.preventDefault();
  $("#myModal-option-2").modal("hide");
  $('.maket-2').removeClass("js-block");
  $('.maket-8').addClass("js-block");
  scrollNone(jsMenuUser);
}

function addToAdmin(evt) {
  evt.preventDefault();
  $("#myModal-option-2").modal("hide");
  $('.maket-2').removeClass("js-block");
  $('.maket-7').addClass("js-block");
  topPositions();
  scrollNone(jsMenu);
}

// Переходим в панель User
addUser.addEventListener("click", addToUser);
// Переходим в панель Admin
addAdmin.addEventListener("click", addToAdmin);
