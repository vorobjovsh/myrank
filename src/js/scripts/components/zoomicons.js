// Скрипт, увеличивающий блок с иконками в мобильной версии в панели Админ
//const btnTrashArr = document.querySelector(".adminvisible-str");
let addZoomIcons;
//console.log(addZoomIcons);

function zoomIconsBlock(event) {
    event.preventDefault();
    let elem = event.target;
    let wicon = $(window).width();
    let iconPopup;
    //console.log(elem.parentNode.parentNode);

    if(wicon < 1024) {

        if(elem.classList.contains("uservisible-str--bottomflex")) {

           iconPopup = elem;
           iconPopup.classList.add("js-uservisible-str--zoomicons");
           addZoomIcons = document.querySelector(".js-uservisible-str--zoomicons");

           addZoomIcons.addEventListener("click", addZoomContact);

        } else if(elem.parentNode.parentNode.classList.contains("uservisible-str--bottomflex")) {

           iconPopup = elem.parentNode.parentNode;
           iconPopup.classList.add("js-uservisible-str--zoomicons");
           addZoomIcons = document.querySelector(".js-uservisible-str--zoomicons");
           addZoomIcons.addEventListener("click", addZoomContact);

        } else if(elem.parentNode.parentNode.parentNode.classList.contains("uservisible-str--bottomflex")) {

           iconPopup = elem.parentNode.parentNode.parentNode;
           iconPopup.classList.add("js-uservisible-str--zoomicons");
           addZoomIcons = document.querySelector(".js-uservisible-str--zoomicons");
           addZoomIcons.addEventListener("click", addZoomContact);

        }

    }

}

function addZoomContact(event) {
    event.preventDefault();
    let elem = event.target;
    btnTrashArr.removeEventListener("click", zoomIconsBlock);
      if(addZoomIcons.classList.contains("js-uservisible-str--zoomicons")) {

          if(elem.classList.contains("uservisible-str__sublink--imgcall") || elem.matches(".uservisible-str__sublink--imgcall > use")) {

           addZoomIcons.classList.remove("js-uservisible-str--zoomicons");
           //console.log('Contact');
           $("#myModal-addcontact-7").modal("show");

           setTimeout(() => {
            btnTrashArr.addEventListener("click", zoomIconsBlock);
          }, 1000);


          }

          if(elem.classList.contains("uservisible-str__sublink--imgman") || elem.matches(".uservisible-str__sublink--imgman > use")) {

           addZoomIcons.classList.remove("js-uservisible-str--zoomicons");
           //console.log('Employ');
           $("#myModal-employ-7").modal("show");

           setTimeout(() => {
            btnTrashArr.addEventListener("click", zoomIconsBlock);
          }, 1000);


          }

      } else {
        btnTrashArr.addEventListener("click", zoomIconsBlock);
      }

}

btnTrashArr.addEventListener("click", zoomIconsBlock);


// Скрипт, увеличивающий блок с иконками в мобильной версии в панели User
function zoomIconsBlockUser(event) {
    event.preventDefault();
    let elem = event.target;
    let wicon = $(window).width();
    let iconPopup;
    //console.log(elem.parentNode.parentNode);

    if(wicon < 1024) {

        if(elem.classList.contains("uservisible-str--bottomflex")) {

           iconPopup = elem;
           iconPopup.classList.add("js-uservisible-str--zoomicons");
           addZoomIcons = document.querySelector(".js-uservisible-str--zoomicons");

           addZoomIcons.addEventListener("click", addZoomContactUser);

        } else if(elem.parentNode.parentNode.classList.contains("uservisible-str--bottomflex")) {

           iconPopup = elem.parentNode.parentNode;
           iconPopup.classList.add("js-uservisible-str--zoomicons");
           addZoomIcons = document.querySelector(".js-uservisible-str--zoomicons");
           addZoomIcons.addEventListener("click", addZoomContactUser);

        } else if(elem.parentNode.parentNode.parentNode.classList.contains("uservisible-str--bottomflex")) {

           iconPopup = elem.parentNode.parentNode.parentNode;
           iconPopup.classList.add("js-uservisible-str--zoomicons");
           addZoomIcons = document.querySelector(".js-uservisible-str--zoomicons");
           addZoomIcons.addEventListener("click", addZoomContactUser);

        }

    }

}

function addZoomContactUser(event) {
    event.preventDefault();
    let elem = event.target;
    userItem.removeEventListener("click", zoomIconsBlockUser);
      if(addZoomIcons.classList.contains("js-uservisible-str--zoomicons")) {

          if(elem.classList.contains("uservisible-str__sublink--imgcall") || elem.matches(".uservisible-str__sublink--imgcall > use")) {

           addZoomIcons.classList.remove("js-uservisible-str--zoomicons");

           $("#myModal-infouser-8").modal("show");

           setTimeout(() => {
            userItem.addEventListener("click", zoomIconsBlockUser);
          }, 1000);


          }

          if(elem.classList.contains("uservisible-str__sublink--imgman") || elem.matches(".uservisible-str__sublink--imgman > use")) {

           addZoomIcons.classList.remove("js-uservisible-str--zoomicons");

           $("#myModal-infouser-8").modal("show");

           setTimeout(() => {
            userItem.addEventListener("click", zoomIconsBlockUser);
          }, 1000);


          }

      } else {
        userItem.addEventListener("click", zoomIconsBlockUser);
      }

}


userItem.addEventListener("click", zoomIconsBlockUser);
