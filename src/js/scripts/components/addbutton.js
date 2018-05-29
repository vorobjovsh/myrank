// Скрипт, открывающий форму добавления сотрудников в футере
const footerBlockUser = document.querySelector(".js-footer-user");

const footerBlockAdmin = document.querySelector(".js-footer-admin");

const btnToggle = {
  btn: ''
};

function addBtnFooter(event) {
    event.preventDefault();
    let elem = event.target;

    if(elem.classList.contains("footer-str__btn")) {

       elem.parentNode.nextSibling.classList.toggle("js-block");

      elem.parentNode.parentNode.classList.toggle("footer-str__itemappl--border");

      elem.classList.toggle("footer-str__btn--hover");

      btnToggle.btn = elem;

    }


    if(elem.classList.contains("footer-str__form--addbtn")) {

       elem.parentNode.parentNode.classList.remove("js-block");

       elem.parentNode.parentNode.parentNode.classList.remove("footer-str__itemappl--border");

       btnToggle.btn.classList.remove("footer-str__btn--hover");

    }

}

footerBlockUser.addEventListener("click", addBtnFooter);
footerBlockAdmin.addEventListener("click", addBtnFooter);
