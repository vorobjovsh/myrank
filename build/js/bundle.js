"use strict";!function(t){var e=t.matches||t.matchesSelector||t.webkitMatchesSelector||t.mozMatchesSelector||t.msMatchesSelector||t.oMatchesSelector;t.matches=t.matchesSelector=e||function(t){var e=document.querySelectorAll(t),s=this;return Array.prototype.some.call(e,function(t){return t===s})}}(Element.prototype);var maket1=document.querySelector(".maket-1"),maket2=document.querySelector(".maket-2"),createStr=document.querySelector(".button-maket-1"),ulTopBottom={top:"",bottom:"",height:"",topUl:"",bottomUl:"",heightUl:"",difference:"",ulSelect:""};function addCompany(t){t.preventDefault(),$(".maket-1").addClass("js-none"),$(".maket-2").addClass("js-block"),subdivision()}createStr.addEventListener("click",addCompany);var maket7=document.querySelector(".maket-7"),maket8=document.querySelector(".maket-8"),addSubdivision=document.querySelector(".subdivision-str--addstructure"),addUser=document.querySelector(".js-subdivision-str--user"),addAdmin=document.querySelector(".subdivision-str--admin");function subdivision(){$("#myModal-2").modal("show")}function addSubdiv(t){t.preventDefault(),$("#myModal-2").modal("hide"),$("#myModal-option-2").modal("show")}function addToUser(t){t.preventDefault(),$("#myModal-option-2").modal("hide"),$(".maket-2").removeClass("js-block"),$(".maket-8").addClass("js-block"),scrollNone(jsMenuUser)}function addToAdmin(t){t.preventDefault(),$("#myModal-option-2").modal("hide"),$(".maket-2").removeClass("js-block"),$(".maket-7").addClass("js-block"),topPositions(),scrollNone(jsMenu)}addSubdivision.addEventListener("click",addSubdiv),addUser.addEventListener("click",addToUser),addAdmin.addEventListener("click",addToAdmin);var btnTrashArr=document.querySelector(".adminvisible-str");function toAdminTrash(t){t.preventDefault(),t.target.classList.contains("uservisible-str__item--trash")&&$("#myModal-trash-7").modal("show")}function editPens(t){t.preventDefault(),t.target.classList.contains("uservisible-str__item--pens")&&$("#myModal-pens-7").modal("show")}btnTrashArr.addEventListener("click",toAdminTrash),btnTrashArr.addEventListener("click",editPens);var userItem=document.querySelector(".js-uservisible-str");function infoUser(t){t.preventDefault();var e=t.target;(e.classList.contains("uservisible-str__link")||e.classList.contains("uservisible-str__sublink"))&&$("#myModal-infouser-8").modal("show")}function infoAdmin(t){t.preventDefault();var e=t.target;(e.classList.contains("uservisible-str__link")||e.classList.contains("uservisible-str__sublink"))&&$("#myModal-infoadmin-7").modal("show")}function addEmploy(t){t.preventDefault();var e=t.target,s=$(window).width();e.classList.contains("uservisible-str__sublink--imgman")&&1023<s&&$("#myModal-employ-7").modal("show"),e.matches(".uservisible-str__sublink--imgman > use")&&1023<s&&$("#myModal-employ-7").modal("show")}function addContact(t){t.preventDefault();var e=t.target,s=$(window).width();e.classList.contains("uservisible-str__sublink--imgcall")&&1023<s&&$("#myModal-addcontact-7").modal("show"),e.matches(".uservisible-str__sublink--imgcall > use")&&1023<s&&$("#myModal-addcontact-7").modal("show")}userItem.addEventListener("click",infoUser),btnTrashArr.addEventListener("click",infoAdmin),btnTrashArr.addEventListener("click",addEmploy),btnTrashArr.addEventListener("click",addContact);var addZoomIcons=void 0;function zoomIconsBlock(t){t.preventDefault();var e=t.target;$(window).width()<1024&&(e.classList.contains("uservisible-str--bottomflex")?(e.classList.add("js-uservisible-str--zoomicons"),(addZoomIcons=document.querySelector(".js-uservisible-str--zoomicons")).addEventListener("click",addZoomContact)):e.parentNode.parentNode.classList.contains("uservisible-str--bottomflex")?(e.parentNode.parentNode.classList.add("js-uservisible-str--zoomicons"),(addZoomIcons=document.querySelector(".js-uservisible-str--zoomicons")).addEventListener("click",addZoomContact)):e.parentNode.parentNode.parentNode.classList.contains("uservisible-str--bottomflex")&&(e.parentNode.parentNode.parentNode.classList.add("js-uservisible-str--zoomicons"),(addZoomIcons=document.querySelector(".js-uservisible-str--zoomicons")).addEventListener("click",addZoomContact)))}function addZoomContact(t){t.preventDefault();var e=t.target;btnTrashArr.removeEventListener("click",zoomIconsBlock),addZoomIcons.classList.contains("js-uservisible-str--zoomicons")?((e.classList.contains("uservisible-str__sublink--imgcall")||e.matches(".uservisible-str__sublink--imgcall > use"))&&(addZoomIcons.classList.remove("js-uservisible-str--zoomicons"),$("#myModal-addcontact-7").modal("show"),setTimeout(function(){btnTrashArr.addEventListener("click",zoomIconsBlock)},1e3)),(e.classList.contains("uservisible-str__sublink--imgman")||e.matches(".uservisible-str__sublink--imgman > use"))&&(addZoomIcons.classList.remove("js-uservisible-str--zoomicons"),$("#myModal-employ-7").modal("show"),setTimeout(function(){btnTrashArr.addEventListener("click",zoomIconsBlock)},1e3))):btnTrashArr.addEventListener("click",zoomIconsBlock)}btnTrashArr.addEventListener("click",zoomIconsBlock);var adminVisible=document.querySelector(".adminvisible-str");function addStructure(t){t.preventDefault();var e=t.target;e.classList.contains("js-addstructure")&&$("#myModal-2").modal("show"),e.classList.contains("js-adddepart")&&$("#myModal-depart-2").modal("show")}adminVisible.addEventListener("click",addStructure);var jsAddUsers=document.querySelector(".js-adduser");function addUsersBtn(t){t.preventDefault(),$("#myModal-employ-7").modal("show"),$("#myModal-infoadmin-7").modal("hide")}jsAddUsers.addEventListener("click",addUsersBtn);var jsAddContacts=document.querySelector(".js-addcontacts");function addContactsBtn(t){t.preventDefault(),$("#myModal-addcontact-7").modal("show"),$("#myModal-infoadmin-7").modal("hide")}jsAddContacts.addEventListener("click",addContactsBtn),$(function(){var t=function(t,e){this.el=t||{},this.multiple=e||!1,this.el.find(".uservisible-str__item--topblock").on("click",{el:this.el,multiple:this.multiple},this.dropdown)};t.prototype.dropdown=function(t){var e=t.data.el,s=$(this),o=s.next(),i=$(window).width();0<s.parent().find(".uservisible-str__sublist").length&&t.target.classList.contains("js-mark")&&(o.toggle(),s.find(".js-mark").hasClass("uservisible-str__item--mark-right")?(s.find(".js-mark").removeClass("uservisible-str__item--mark-right"),s.find(".js-mark").addClass("uservisible-str__item--mark")):(s.find(".js-mark").removeClass("uservisible-str__item--mark"),s.find(".js-mark").addClass("uservisible-str__item--mark-right")),topPositions(),addSubLines(),t.data.multiple||(e.find(".uservisible-str__sublist").not(o).slideUp(50).parent().find(".uservisible-str__link-block:first").parent().find(".js-mark").removeClass("uservisible-str__item--mark-right").addClass("uservisible-str__item--mark"),topPositions(),addSubLines()),767<i&&paramElem(o[0]))};new t($(".uservisible-str.adminvisible-str"),!1),new t($(".js-uservisible-str"),!1)}),$(function(){var t=function(t,e){this.el=t||{},this.multiple=e||!1,this.el.find(".uservisible-str__subitem--topblock").on("click",{el:this.el,multiple:this.multiple},this.dropdown)};t.prototype.dropdown=function(t){t.data.el;var e=$(this),s=e.next(),o=$(window).width();0<e.parent().find(".uservisible-str__sublist").length&&t.target.classList.contains("js-mark")&&(s.toggle(),e.find(".js-mark").hasClass("uservisible-str__item--mark-right")?(e.find(".js-mark").removeClass("uservisible-str__item--mark-right"),e.find(".js-mark").addClass("uservisible-str__item--mark")):(e.find(".js-mark").removeClass("uservisible-str__item--mark"),e.find(".js-mark").addClass("uservisible-str__item--mark-right")),topPositions(),addSubLines(),t.data.multiple||(e.parent().parent().find(".uservisible-str__sublist").not(s).slideUp(50).parent().find(".uservisible-str__sublink-block:first").parent().find(".js-mark").removeClass("uservisible-str__item--mark-right").addClass("uservisible-str__item--mark"),topPositions(),addSubLines()),767<o&&paramElem(s[0]))};new t($(".uservisible-str.adminvisible-str"),!1),new t($(".js-uservisible-str"),!1)});for(var jsMenu=document.querySelector(".uservisible-str.adminvisible-str"),jsMenuUser=document.querySelector(".uservisible-str.js-uservisible-str"),divisionBlock=jsMenu.parentNode,divisionBlockUser=jsMenuUser.parentNode,lastDivisionBlock=jsMenu.lastElementChild,lastDivisionBlockUser=jsMenuUser.lastElementChild,arrSublist=document.querySelectorAll(".adminvisible-str .uservisible-str__sublist"),i=0;i<arrSublist.length;i++)arrSublist[i].classList.add("js-sublist-"+i);var arrSublistUser=document.querySelectorAll(".js-uservisible-str .uservisible-str__sublist");for(i=0;i<arrSublistUser.length;i++)arrSublistUser[i].classList.add("js-sublistuser-"+i);function topPositions(){var t=void 0,e=void 0,s=document.createElement("style");maket7.classList.contains("js-block")&&(t=getCoords(divisionBlock).top,e=getCoords(lastDivisionBlock).top+24-t,s.innerHTML=".uservisible-str.adminvisible-str::before {height: "+e+"px;}",document.querySelector("head").appendChild(s)),maket8.classList.contains("js-block")&&(t=getCoords(divisionBlockUser).top,e=getCoords(lastDivisionBlockUser).top+26-t,s.innerHTML=".uservisible-str.js-uservisible-str::before {height: "+e+"px;}",document.querySelector("head").appendChild(s))}function getCoords(t){var e=t.getBoundingClientRect();return{top:e.top+pageYOffset,left:e.left+pageXOffset}}function addSubLines(){var t=$(window).width();if(maket7.classList.contains("js-block"))for(var e=0;e<arrSublist.length;e++){var s=getCoords(arrSublist[e]).top,o=s-6;767<t&&(o=s);var i=getCoords(arrSublist[e].lastElementChild).top,r=i+24;767<t&&(r=i-1);var n=r-o,a=document.createElement("style");a.innerHTML=".uservisible-str__sublist.js-sublist-"+e+"::before {height: "+n+"px;}",document.querySelector("head").appendChild(a)}if(maket8.classList.contains("js-block"))for(e=0;e<arrSublistUser.length;e++){var l=getCoords(arrSublistUser[e]).top,d=l-6;767<t&&(d=l);var c=getCoords(arrSublistUser[e].lastElementChild).top,u=c+26;767<t&&(u=c+1);var m=u-d,p=document.createElement("style");p.innerHTML=".uservisible-str__sublist.js-sublistuser-"+e+"::before {height: "+m+"px;}",document.querySelector("head").appendChild(p)}}function scrollNone(t){return ulTopBottom.heightUl=t.clientHeight,ulTopBottom.topUl=getCoords(t).top,ulTopBottom.ulSelect=t,ulTopBottom.bottomUl=ulTopBottom.topUl+ulTopBottom.heightUl}function paramElem(t){ulTopBottom.top=getCoords(t).top,ulTopBottom.height=t.clientHeight,ulTopBottom.bottom=ulTopBottom.top+ulTopBottom.height,ulTopBottom.difference=ulTopBottom.bottomUl-ulTopBottom.bottom;var e=void 0;10<ulTopBottom.difference?ulTopBottom.ulSelect.style.height=ulTopBottom.heightUl+"px":ulTopBottom.difference<10&&0<ulTopBottom.difference?(e=ulTopBottom.heightUl+10-ulTopBottom.difference,ulTopBottom.ulSelect.style.height=e+"px"):0===ulTopBottom.difference?(e=ulTopBottom.heightUl+10,ulTopBottom.ulSelect.style.height=e+"px"):ulTopBottom.difference<0&&(e=ulTopBottom.heightUl+10+Math.abs(ulTopBottom.difference),ulTopBottom.ulSelect.style.height=e+"px")}!function(r){r.fn.extend({customStyle1:function(t){return this.each(function(){var t=r(this).find(":selected");r(this).after('<span class="select1"><span class="customStyleSelectBoxInner">'+t.text()+"</span></span>").css({position:"absolute",opacity:0,fontSize:r(this).next().css("font-size")});var e=r(this).next(),s=parseInt(r(this).width())-parseInt(e.css("padding-left"))-parseInt(e.css("padding-right")),o=e.find(":first-child");e.css({display:"inline-block"}),o.css({width:s,display:"inline-block"});var i=parseInt(e.height())+parseInt(e.css("padding-top"))+parseInt(e.css("padding-bottom"));r(this).height(i).change(function(){o.text(r("option:selected",this).text()).parent().addClass("changed")})})}})}(jQuery),$(".select1").customStyle1();var optionText,newString,array=[],maxChar=22;$("select").each(function(){$(this).find("option").each(function(t,s){$(s).attr("title",$(s).text()),optionText=$(s).text(),newString="",optionText.length>maxChar&&(array=optionText.split(" "),$.each(array,function(t,e){if(newString+=e+" ",0<t&&newString.length>maxChar)return $(s).text(newString),!1}))})});var footerBlockUser=document.querySelector(".js-footer-user"),footerBlockAdmin=document.querySelector(".js-footer-admin"),btnToggle={btn:""};function addBtnFooter(t){t.preventDefault();var e=t.target;e.classList.contains("footer-str__btn")&&(e.parentNode.nextSibling.classList.toggle("js-block"),e.parentNode.parentNode.classList.toggle("footer-str__itemappl--border"),e.classList.toggle("footer-str__btn--hover"),btnToggle.btn=e),e.classList.contains("footer-str__form--addbtn")&&(e.parentNode.parentNode.classList.remove("js-block"),e.parentNode.parentNode.parentNode.classList.remove("footer-str__itemappl--border"),btnToggle.btn.classList.remove("footer-str__btn--hover"))}footerBlockUser.addEventListener("click",addBtnFooter),footerBlockAdmin.addEventListener("click",addBtnFooter);