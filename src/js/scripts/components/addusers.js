// Скрипт, запускающий модальное окно - Добавление сотрудников в отдел - По кнопке "Добавить сотрудника"
const jsAddUsers = document.querySelector(".js-adduser");

function addUsersBtn(event) {
    event.preventDefault();

       $("#myModal-infoadmin-7").modal("hide");

       $("#myModal-employ-7").modal("show");

}

jsAddUsers.addEventListener("click", addUsersBtn);

// Скрипт, запускающий модальное окно - Добавление контактов в отдел - По кнопке "Добавить контакты"
const jsAddContacts = document.querySelector(".js-addcontacts");

function addContactsBtn(event) {
    event.preventDefault();

       $("#myModal-infoadmin-7").modal("hide");

         $("#myModal-addcontact-7").modal("show");

}

jsAddContacts.addEventListener("click", addContactsBtn);
