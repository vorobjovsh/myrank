"use strict";var maket1=document.querySelector(".maket-1"),maket2=document.querySelector(".maket-2"),createStr=document.querySelector(".button-maket-1");function addCompany(s){s.preventDefault(),maket1.classList.add("js-none"),maket2.classList.add("js-block"),subdivision()}createStr.addEventListener("click",addCompany);var maket7=document.querySelector(".maket-7"),maket8=document.querySelector(".maket-8"),addSubdivision=document.querySelector(".subdivision-str--addstructure"),addUser=document.querySelector(".js-subdivision-str--user"),addAdmin=document.querySelector(".subdivision-str--admin");function subdivision(){$("#myModal-2").modal("show")}function addSubdiv(s){s.preventDefault(),$("#myModal-2").modal("hide"),$("#myModal-option-2").modal("show")}function addToUser(s){s.preventDefault(),$("#myModal-option-2").modal("hide"),maket2.classList.remove("js-block"),maket8.classList.add("js-block")}function addToAdmin(s){s.preventDefault(),$("#myModal-option-2").modal("hide"),maket2.classList.remove("js-block"),maket7.classList.add("js-block"),topPositions()}addSubdivision.addEventListener("click",addSubdiv),addUser.addEventListener("click",addToUser),addAdmin.addEventListener("click",addToAdmin);var btnTrashArr=document.querySelector(".adminvisible-str");function toAdminTrash(s){s.preventDefault(),s.target.classList.contains("uservisible-str__item--trash")&&$("#myModal-trash-7").modal("show")}function editPens(s){s.preventDefault(),s.target.classList.contains("uservisible-str__item--pens")&&$("#myModal-pens-7").modal("show")}btnTrashArr.addEventListener("click",toAdminTrash),btnTrashArr.addEventListener("click",editPens);var userItem=document.querySelector(".js-uservisible-str");function infoUser(s){s.preventDefault();var e=s.target;(e.classList.contains("uservisible-str__link")||e.classList.contains("uservisible-str__sublink"))&&$("#myModal-infouser-8").modal("show")}function infoAdmin(s){s.preventDefault();var e=s.target;(e.classList.contains("uservisible-str__link")||e.classList.contains("uservisible-str__sublink"))&&$("#myModal-infoadmin-7").modal("show")}function addEmploy(s){s.preventDefault();var e=s.target,t=$(window).width();e.classList.contains("uservisible-str__sublink--imgman")&&1023<t&&$("#myModal-employ-7").modal("show")}function addContact(s){s.preventDefault();var e=s.target,t=$(window).width();e.classList.contains("uservisible-str__sublink--imgcall")&&1023<t&&(console.log(t),$("#myModal-addcontact-7").modal("show"))}userItem.addEventListener("click",infoUser),btnTrashArr.addEventListener("click",infoAdmin),btnTrashArr.addEventListener("click",addEmploy),btnTrashArr.addEventListener("click",addContact);var addZoomIcons=void 0;function zoomIconsBlock(s){s.preventDefault();var e=s.target,t=$(window).width();e.classList.contains("uservisible-str--bottomflex")&&t<1024?(e.classList.add("js-uservisible-str--zoomicons"),(addZoomIcons=document.querySelector(".js-uservisible-str--zoomicons")).addEventListener("click",addZoomContact)):e.parentNode.parentNode.classList.contains("uservisible-str--bottomflex")&&t<1024&&(e.parentNode.parentNode.classList.add("js-uservisible-str--zoomicons"),(addZoomIcons=document.querySelector(".js-uservisible-str--zoomicons")).addEventListener("click",addZoomContact))}function addZoomContact(s){s.preventDefault();var e=s.target;btnTrashArr.removeEventListener("click",zoomIconsBlock),addZoomIcons.classList.contains("js-uservisible-str--zoomicons")?(e.classList.contains("uservisible-str__sublink--imgcall")&&(addZoomIcons.classList.remove("js-uservisible-str--zoomicons"),$("#myModal-addcontact-7").modal("show"),setTimeout(function(){btnTrashArr.addEventListener("click",zoomIconsBlock)},1e3)),e.classList.contains("uservisible-str__sublink--imgman")&&(addZoomIcons.classList.remove("js-uservisible-str--zoomicons"),$("#myModal-employ-7").modal("show"),setTimeout(function(){btnTrashArr.addEventListener("click",zoomIconsBlock)},1e3))):btnTrashArr.addEventListener("click",zoomIconsBlock)}btnTrashArr.addEventListener("click",zoomIconsBlock);var adminVisible=document.querySelector(".adminvisible-str");function addStructure(s){s.preventDefault();var e=s.target;e.classList.contains("js-addstructure")&&$("#myModal-2").modal("show"),e.classList.contains("js-adddepart")&&$("#myModal-depart-2").modal("show")}adminVisible.addEventListener("click",addStructure);var jsAddUsers=document.querySelector(".js-adduser");function addUsersBtn(s){s.preventDefault(),$("#myModal-employ-7").modal("show"),$("#myModal-infoadmin-7").modal("hide")}jsAddUsers.addEventListener("click",addUsersBtn);var jsAddContacts=document.querySelector(".js-addcontacts");function addContactsBtn(s){s.preventDefault(),$("#myModal-addcontact-7").modal("show"),$("#myModal-infoadmin-7").modal("hide")}jsAddContacts.addEventListener("click",addContactsBtn),$(function(){var s=function(s,e){this.el=s||{},this.multiple=e||!1,this.el.find(".uservisible-str__item--topblock").on("click",{el:this.el,multiple:this.multiple},this.dropdown)};s.prototype.dropdown=function(s){var e=s.data.el,t=$(this),i=t.next();0<t.parent().find(".uservisible-str__sublist").length&&(i.toggle(),t.children(".uservisible-str__link-block").hasClass("uservisible-str__item--mark-right")?(t.children(".uservisible-str__link-block").removeClass("uservisible-str__item--mark-right"),t.children(".uservisible-str__link-block").addClass("uservisible-str__item--mark")):(t.children(".uservisible-str__link-block").removeClass("uservisible-str__item--mark"),t.children(".uservisible-str__link-block").addClass("uservisible-str__item--mark-right")),setTimeout(function(){var s=i[0].className.split("-"),e=s[s.length-1];topPositions(),addSubLines(i[0],e)},500)),s.data.multiple||(e.find(".uservisible-str__sublist").not(i).slideUp(50).parent().find(".uservisible-str__link-block:first").removeClass("uservisible-str__item--mark-right").addClass("uservisible-str__item--mark"),setTimeout(function(){var s=i[0].className.split("-"),e=s[s.length-1];topPositions(),addSubLines(i[0],e)},500))};new s($(".uservisible-str.adminvisible-str"),!1),new s($(".js-uservisible-str"),!1)}),$(function(){var s=function(s,e){this.el=s||{},this.multiple=e||!1,this.el.find(".uservisible-str__subitem--topblock").on("click",{el:this.el,multiple:this.multiple},this.dropdown)};s.prototype.dropdown=function(s){s.data.el;var e=$(this),t=e.next();0<e.parent().find(".uservisible-str__sublist").length&&(t.toggle(),e.children(".uservisible-str__sublink-block").hasClass("uservisible-str__item--mark-right")?(e.children(".uservisible-str__sublink-block").removeClass("uservisible-str__item--mark-right"),e.children(".uservisible-str__sublink-block").addClass("uservisible-str__item--mark")):(e.children(".uservisible-str__sublink-block").removeClass("uservisible-str__item--mark"),e.children(".uservisible-str__sublink-block").addClass("uservisible-str__item--mark-right")),setTimeout(function(){var s=t[0].className.split("-"),e=s[s.length-1];topPositions(),addSubLines(t[0],e)},500)),s.data.multiple||(e.parent().parent().find(".uservisible-str__sublist").not(t).slideUp(50).parent().find(".uservisible-str__sublink-block:first").removeClass("uservisible-str__item--mark-right").addClass("uservisible-str__item--mark"),setTimeout(function(){topPositions(),addSubLines()},500))};new s($(".uservisible-str.adminvisible-str"),!1),new s($(".js-uservisible-str"),!1)});var jsMenu=document.querySelector(".uservisible-str.adminvisible-str"),jsMenuUser=document.querySelector(".uservisible-str.js-uservisible-str"),divisionBlock=jsMenu.parentNode,divisionBlockUser=jsMenuUser.parentNode,lastDivisionBlock=jsMenu.lastElementChild,lastDivisionBlockUser=jsMenuUser.lastElementChild,arrSublist=document.querySelectorAll(".adminvisible-str .uservisible-str__sublist");arrSublist.forEach(function(s,e){s.classList.add("js-sublist-"+e)}),console.log(arrSublist);var arrSublistUser=document.querySelectorAll(".js-uservisible-str .uservisible-str__sublist");function topPositions(){var s=void 0,e=void 0,t=document.createElement("style");maket7.classList.contains("js-block")&&(s=getCoords(divisionBlock).top,e=getCoords(lastDivisionBlock).top+24-s,t.innerHTML=".uservisible-str.adminvisible-str::before {height: "+e+"px;}",document.querySelector("head").appendChild(t)),maket8.classList.contains("js-block")&&(s=getCoords(divisionBlockUser).top,e=getCoords(lastDivisionBlockUser).top+26-s,t.innerHTML=".uservisible-str.js-uservisible-str::before {height: "+e+"px;}",document.querySelector("head").appendChild(t))}function getCoords(s){var e=s.getBoundingClientRect();return{top:e.top+pageYOffset,left:e.left+pageXOffset}}function addSubLines(){var a=$(window).width();arrSublist.forEach(function(s,e){var t=getCoords(s).top,i=t-6;767<a&&(i=t);var r=getCoords(s.lastElementChild).top,o=r+24;767<a&&(o=r-1);var n=o-i,l=document.createElement("style");l.innerHTML=".uservisible-str__sublist.js-sublist-"+e+"::before {height: "+n+"px;}",console.log(l),document.querySelector("head").appendChild(l)})}