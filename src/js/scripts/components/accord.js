// Скрипт, раскрывающий и закрывающий подменю по клику
const userSubMenu = document.querySelector(".uservisible-str");

const itemLinks = {
      blocks: '',
      item: '',
      ulAll: '',
      temp: '',
      tempMark: ''
    };

function userMenuClick(event) {
    event.preventDefault();
    let elem = event.target;
    let wicon = $(window).width();
    console.log(elem);

   if(elem.parentNode.parentNode.classList.contains("uservisible-str__link-block")) {

      itemLinks.blocks = elem.parentNode.parentNode;
      itemLinks.item = itemLinks.blocks.parentNode;
      itemLinks.ulAll = itemLinks.item.nextSibling;

    }

    if(elem.parentNode.parentNode.classList.contains("uservisible-str__sublink-block")) {

      itemLinks.blocks = elem.parentNode.parentNode;
      itemLinks.item = itemLinks.blocks.parentNode;
      itemLinks.ulAll = itemLinks.item.nextSibling;
      console.log(itemLinks.ulAll);

    }

    if(elem.classList.contains("uservisible-str--topflex")) {
       itemLinks.blocks = elem.parentNode;
       itemLinks.item = itemLinks.blocks.parentNode;
       itemLinks.ulAll = itemLinks.item.nextSibling;
       console.log(itemLinks.ulAll);
    }

    if(elem.classList.contains("uservisible-str--bottomflex")) {
       itemLinks.blocks = elem.previousSibling;
       itemLinks.item = itemLinks.blocks.parentNode.parentNode;
       itemLinks.ulAll = itemLinks.item.nextSibling;
       console.log(itemLinks.ulAll);
    }

    if(elem.classList.contains("uservisible-str__sublink-block")) {
       itemLinks.blocks = elem;
       itemLinks.item = itemLinks.blocks.parentNode;
       itemLinks.ulAll = itemLinks.item.nextSibling;
       console.log(itemLinks.ulAll);
    }

    if(elem.classList.contains("uservisible-str__item--mark") || elem.classList.contains("uservisible-str__item--mark-right")) {
       itemLinks.blocks = elem;
       itemLinks.item = itemLinks.blocks.parentNode;
       itemLinks.ulAll = itemLinks.item.nextSibling;
       console.log(itemLinks.ulAll);
    }

    if(wicon > 1023 && itemLinks.ulAll !== null && !elem.parentNode.parentNode.classList.contains("uservisible-str--bottomflex")) {
console.log(itemLinks);
      if(itemLinks.temp !== '' && itemLinks.temp !== itemLinks.ulAll) {
          itemLinks.temp.classList.remove("js-block");
        itemLinks.tempMark.classList.remove("uservisible-str__item--mark-right");
         itemLinks.tempMark.classList.add("uservisible-str__item--mark");
        }

      itemLinks.temp = itemLinks.ulAll;
      itemLinks.tempMark = itemLinks.blocks;

      itemLinks.ulAll.classList.toggle("js-block");

      if(itemLinks.ulAll.classList.contains("js-block")) {
         itemLinks.blocks.classList.remove("uservisible-str__item--mark");
         itemLinks.blocks.classList.add("uservisible-str__item--mark-right");

      } else {

        itemLinks.blocks.classList.remove("uservisible-str__item--mark-right");
         itemLinks.blocks.classList.add("uservisible-str__item--mark");

      }

    } else if( !elem.parentNode.parentNode.classList.contains("uservisible-str--bottomflex") && itemLinks.ulAll !== null) {
console.log(itemLinks.blocks);
      if(itemLinks.blocks.classList.contains("uservisible-str__link-block") || itemLinks.blocks.classList.contains("uservisible-str__sublink-block")) {

        if(itemLinks.temp !== '') {
          itemLinks.temp.classList.remove("js-block");
        }

        itemLinks.temp = itemLinks.ulAll;

        itemLinks.ulAll.classList.toggle("js-block");

      if(itemLinks.ulAll.classList.contains("js-block")) {
         itemLinks.blocks.classList.remove("uservisible-str__item--mark");
         itemLinks.blocks.classList.add("uservisible-str__item--mark-right");

      } else {

        itemLinks.blocks.classList.remove("uservisible-str__item--mark-right");
         itemLinks.blocks.classList.add("uservisible-str__item--mark");

      }

      }


    }

}



userSubMenu.addEventListener("click", userMenuClick);

userItem.addEventListener("click", userMenuClick);
