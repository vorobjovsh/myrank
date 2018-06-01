// Скрипт, открывающий форму добавления сотрудников в футере
const btnToggle = {
  btn: null,
  jsblock: null,
  border: null
};

function addBtnFooter(event) {
    event.preventDefault();
    let elem = event.target;

    if(elem.classList.contains("footer-str__btn")) {

      if(btnToggle.btn !== null) {

        btnToggle.btn.classList.remove("footer-str__btn--hover");

        btnToggle.jsblock.classList.remove("js-block");

        btnToggle.border.classList.remove("footer-str__itemappl--border");

      }

      elem.parentNode.nextElementSibling.classList.add("js-block");
      btnToggle.jsblock =  elem.parentNode.nextElementSibling;

      elem.parentNode.parentNode.classList.add("footer-str__itemappl--border");
      btnToggle.border = elem.parentNode.parentNode;

      elem.classList.add("footer-str__btn--hover");

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
