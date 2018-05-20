"use strict";var maket1=document.querySelector(".maket-1"),maket2=document.querySelector(".maket-2"),createStr=document.querySelector(".button-maket-1");function addCompany(s){s.preventDefault(),maket1.classList.add("js-none"),maket2.classList.add("js-block"),subdivision()}createStr.addEventListener("click",addCompany);var maket7=document.querySelector(".maket-7"),maket8=document.querySelector(".maket-8"),addSubdivision=document.querySelector(".subdivision-str--addstructure"),addUser=document.querySelector(".subdivision-str--user"),addAdmin=document.querySelector(".subdivision-str--admin");function subdivision(){$("#myModal-2").modal("show")}function addSubdiv(s){s.preventDefault(),$("#myModal-2").modal("hide"),$("#myModal-option-2").modal("show")}function addToUser(s){s.preventDefault(),$("#myModal-option-2").modal("hide"),maket2.classList.remove("js-block"),maket8.classList.add("js-block")}function addToAdmin(s){s.preventDefault(),$("#myModal-option-2").modal("hide"),maket2.classList.remove("js-block"),maket7.classList.add("js-block")}addSubdivision.addEventListener("click",addSubdiv),addUser.addEventListener("click",addToUser),addAdmin.addEventListener("click",addToAdmin);var btnTrashArr=document.querySelector(".adminvisible-str");function toAdminTrash(s){s.preventDefault(),s.target.classList.contains("uservisible-str__item--trash")&&$("#myModal-trash-7").modal("show")}function editPens(s){s.preventDefault(),s.target.classList.contains("uservisible-str__item--pens")&&$("#myModal-pens-7").modal("show")}btnTrashArr.addEventListener("click",toAdminTrash),btnTrashArr.addEventListener("click",editPens);var userItem=document.querySelector(".js-uservisible-str");function infoUser(s){s.preventDefault();var e=s.target;(e.classList.contains("uservisible-str__link")||e.classList.contains("uservisible-str__sublink"))&&$("#myModal-infouser-8").modal("show")}function infoAdmin(s){s.preventDefault();var e=s.target;(e.classList.contains("uservisible-str__link")||e.classList.contains("uservisible-str__sublink"))&&$("#myModal-infoadmin-7").modal("show")}function addEmploy(s){s.preventDefault();var e=s.target,i=$(window).width();e.classList.contains("uservisible-str__sublink--imgman")&&1023<i&&$("#myModal-employ-7").modal("show")}function addContact(s){s.preventDefault();var e=s.target,i=$(window).width();e.classList.contains("uservisible-str__sublink--imgcall")&&1023<i&&(console.log(i),$("#myModal-addcontact-7").modal("show"))}userItem.addEventListener("click",infoUser),btnTrashArr.addEventListener("click",infoAdmin),btnTrashArr.addEventListener("click",addEmploy),btnTrashArr.addEventListener("click",addContact);var addZoomIcons=void 0;function zoomIconsBlock(s){s.preventDefault();var e=s.target,i=$(window).width();e.classList.contains("uservisible-str--bottomflex")&&i<1024?(e.classList.add("js-uservisible-str--zoomicons"),(addZoomIcons=document.querySelector(".js-uservisible-str--zoomicons")).addEventListener("click",addZoomContact)):e.parentNode.parentNode.classList.contains("uservisible-str--bottomflex")&&i<1024&&(e.parentNode.parentNode.classList.add("js-uservisible-str--zoomicons"),(addZoomIcons=document.querySelector(".js-uservisible-str--zoomicons")).addEventListener("click",addZoomContact))}function addZoomContact(s){s.preventDefault();var e=s.target;btnTrashArr.removeEventListener("click",zoomIconsBlock),addZoomIcons.classList.contains("js-uservisible-str--zoomicons")?(e.classList.contains("uservisible-str__sublink--imgcall")&&(addZoomIcons.classList.remove("js-uservisible-str--zoomicons"),$("#myModal-addcontact-7").modal("show"),setTimeout(function(){btnTrashArr.addEventListener("click",zoomIconsBlock)},1e3)),e.classList.contains("uservisible-str__sublink--imgman")&&(addZoomIcons.classList.remove("js-uservisible-str--zoomicons"),$("#myModal-employ-7").modal("show"),setTimeout(function(){btnTrashArr.addEventListener("click",zoomIconsBlock)},1e3))):btnTrashArr.addEventListener("click",zoomIconsBlock)}btnTrashArr.addEventListener("click",zoomIconsBlock);var adminVisible=document.querySelector(".adminvisible-str");function addStructure(s){s.preventDefault();var e=s.target;e.classList.contains("js-addstructure")&&$("#myModal-2").modal("show"),e.classList.contains("js-adddepart")&&$("#myModal-depart-2").modal("show")}adminVisible.addEventListener("click",addStructure);var userSubMenu=document.querySelector(".uservisible-str"),itemLinks={blocks:"",item:"",ulAll:"",temp:"",tempMark:"",level:1,firstUlMark:""};function userMenuClick(s){s.preventDefault();var e=s.target,i=$(window).width();console.log(e),e.parentNode.parentNode.classList.contains("uservisible-str__link-block")&&(itemLinks.blocks=e.parentNode.parentNode,itemLinks.item=itemLinks.blocks.parentNode,itemLinks.ulAll=itemLinks.item.nextSibling),e.parentNode.parentNode.classList.contains("uservisible-str__sublink-block")&&(itemLinks.blocks=e.parentNode.parentNode,itemLinks.item=itemLinks.blocks.parentNode,itemLinks.ulAll=itemLinks.item.nextSibling,console.log(itemLinks.ulAll)),e.classList.contains("uservisible-str--topflex")&&(itemLinks.blocks=e.parentNode,itemLinks.item=itemLinks.blocks.parentNode,itemLinks.ulAll=itemLinks.item.nextSibling,console.log(itemLinks.ulAll)),e.classList.contains("uservisible-str--bottomflex")&&(itemLinks.blocks=e.previousSibling,itemLinks.item=itemLinks.blocks.parentNode.parentNode,itemLinks.ulAll=itemLinks.item.nextSibling,console.log(itemLinks.ulAll)),e.classList.contains("uservisible-str__sublink-block")&&(itemLinks.blocks=e,itemLinks.item=itemLinks.blocks.parentNode,itemLinks.ulAll=itemLinks.item.nextSibling,console.log(itemLinks.ulAll)),(e.classList.contains("uservisible-str__item--mark")||e.classList.contains("uservisible-str__item--mark-right"))&&(itemLinks.blocks=e,itemLinks.item=itemLinks.blocks.parentNode,itemLinks.ulAll=itemLinks.item.nextSibling,console.log(itemLinks.ulAll)),1023<i&&null!==itemLinks.ulAll&&!e.parentNode.parentNode.classList.contains("uservisible-str--bottomflex")?itemLinks.item.parentNode.parentNode.classList.contains("uservisible-str")&&(itemLinks.firstUlMark=$(".uservisible-str__item").find(".uservisible-str__item--mark-right"),itemLinks.firstUlMark===itemLinks.blocks?(itemLinks.ulAll.classList.toggle("js-block"),itemLinks.ulAll.classList.contains("js-block")?(itemLinks.blocks.classList.remove("uservisible-str__item--mark"),itemLinks.blocks.classList.add("uservisible-str__item--mark-right")):(itemLinks.blocks.classList.remove("uservisible-str__item--mark-right"),itemLinks.blocks.classList.add("uservisible-str__item--mark"))):0<itemLinks.firstUlMark.length&&(itemLinks.firstUlMark[0].parentNode.nextSibling.classList.remove("js-block"),itemLinks.firstUlMark[0].classList.remove("uservisible-str__item--mark-right"),itemLinks.firstUlMark[0].classList.add("uservisible-str__item--mark")),itemLinks.ulAll.classList.toggle("js-block"),itemLinks.ulAll.classList.contains("js-block")?(itemLinks.blocks.classList.remove("uservisible-str__item--mark"),itemLinks.blocks.classList.add("uservisible-str__item--mark-right")):(itemLinks.blocks.classList.remove("uservisible-str__item--mark-right"),itemLinks.blocks.classList.add("uservisible-str__item--mark"))):e.parentNode.parentNode.classList.contains("uservisible-str--bottomflex")||null===itemLinks.ulAll||(itemLinks.blocks.classList.contains("uservisible-str__link-block")||itemLinks.blocks.classList.contains("uservisible-str__sublink-block"))&&(""!==itemLinks.temp&&itemLinks.temp!==itemLinks.ulAll&&(itemLinks.temp.classList.remove("js-block"),itemLinks.tempMark.classList.remove("uservisible-str__item--mark-right"),itemLinks.tempMark.classList.add("uservisible-str__item--mark")),itemLinks.temp=itemLinks.ulAll,itemLinks.tempMark=itemLinks.blocks,itemLinks.ulAll.classList.toggle("js-block"),itemLinks.ulAll.classList.contains("js-block")?(itemLinks.blocks.classList.remove("uservisible-str__item--mark"),itemLinks.blocks.classList.add("uservisible-str__item--mark-right")):(itemLinks.blocks.classList.remove("uservisible-str__item--mark-right"),itemLinks.blocks.classList.add("uservisible-str__item--mark")))}userSubMenu.addEventListener("click",userMenuClick),userItem.addEventListener("click",userMenuClick);