const jsMenu = document.querySelector(".uservisible-str.adminvisible-str");
const jsMenuUser = document.querySelector(".uservisible-str.js-uservisible-str");

const divisionBlock = jsMenu.parentNode;
const divisionBlockUser = jsMenuUser.parentNode;

let lastDivisionBlock = jsMenu.lastElementChild;
let lastDivisionBlockUser = jsMenuUser.lastElementChild;

const arrSublist = document.querySelectorAll(".adminvisible-str .uservisible-str__sublist");

/*arrSublist.forEach(function(item, i) {
  item.classList.add(`js-sublist-${i}`);
});*/

for (var i = 0; i < arrSublist.length; i++) {
   arrSublist[i].classList.add(`js-sublist-${i}`);
}

const arrSublistUser = document.querySelectorAll(".js-uservisible-str .uservisible-str__sublist");

/*arrSublistUser.forEach(function(item, i) {
  item.classList.add(`js-sublistuser-${i}`);
});*/

for (var i = 0; i < arrSublistUser.length; i++) {
   arrSublistUser[i].classList.add(`js-sublistuser-${i}`);
}

function topPositions() {
    let lineTop;
    let lineBottom;
    let lineBottomCorrect;
    let heightLine;
    let style = document.createElement('style');

    if(maket7.classList.contains("js-block")) {

        lineTop = getCoords(divisionBlock).top;

        lineBottom = getCoords(lastDivisionBlock).top;

        lineBottomCorrect = lineBottom + 24;

        heightLine = lineBottomCorrect - lineTop;

        style.innerHTML = '.uservisible-str.adminvisible-str::before {height: ' + heightLine + 'px;}';

        document.querySelector('head').appendChild(style);

    }

    if(maket8.classList.contains("js-block")) {

        lineTop = getCoords(divisionBlockUser).top;

        lineBottom = getCoords(lastDivisionBlockUser).top;

        lineBottomCorrect = lineBottom + 26;

        heightLine = lineBottomCorrect - lineTop;

        style.innerHTML = '.uservisible-str.js-uservisible-str::before {height: ' + heightLine + 'px;}';

        document.querySelector('head').appendChild(style);

    }

}


    function getCoords(elem) { // кроме IE8-

      var box = elem.getBoundingClientRect();

      return {
        top: box.top + pageYOffset,
        left: box.left + pageXOffset
      };

    }

function addSubLines() {

    let wicon = $(window).width();

    if(maket7.classList.contains("js-block")) {

    // Так как в IE forEach не работает, то делаем через for

    /*arrSublist.forEach(function(item, i) {

    let lineTopSub = getCoords(item).top;
    let lineTopSubCorrect = lineTopSub - 6;
    if(wicon > 767) {
       lineTopSubCorrect = lineTopSub;
    }
    let lineBottomEl = item.lastElementChild;

    let lineBottomSub = getCoords(lineBottomEl).top;
    let lineBottomSubCorrect = lineBottomSub + 24;
    if(wicon > 767) {
       lineBottomSubCorrect = lineBottomSub - 1;
    }

    let heightLineSub = lineBottomSubCorrect - lineTopSubCorrect;

    let style = document.createElement('style');

    style.innerHTML = '.uservisible-str__sublist.js-sublist-' + i + '::before {height: ' + heightLineSub + 'px;}';


    document.querySelector('head').appendChild(style);

    });*/

    for (var i = 0; i < arrSublist.length; i++) {

      let lineTopSub = getCoords(arrSublist[i]).top;
      let lineTopSubCorrect = lineTopSub - 6;
      if(wicon > 767) {
         lineTopSubCorrect = lineTopSub;
      }
      let lineBottomEl = arrSublist[i].lastElementChild;

      let lineBottomSub = getCoords(lineBottomEl).top;
      let lineBottomSubCorrect = lineBottomSub + 24;
      if(wicon > 767) {
         lineBottomSubCorrect = lineBottomSub - 1;
      }

      let heightLineSub = lineBottomSubCorrect - lineTopSubCorrect;

      let style = document.createElement('style');

      style.innerHTML = '.uservisible-str__sublist.js-sublist-' + i + '::before {height: ' + heightLineSub + 'px;}';


      document.querySelector('head').appendChild(style);

    }

    }


    if(maket8.classList.contains("js-block")) {

    // Так как в IE forEach не работает, то делаем через for

    /*arrSublistUser.forEach(function(item, i) {

    let lineTopSub = getCoords(item).top;
    let lineTopSubCorrect = lineTopSub - 6;
    if(wicon > 767) {
       lineTopSubCorrect = lineTopSub;
    }
    let lineBottomEl = item.lastElementChild;

    let lineBottomSub = getCoords(lineBottomEl).top;
    let lineBottomSubCorrect = lineBottomSub + 26;
    if(wicon > 767) {
       lineBottomSubCorrect = lineBottomSub + 1;
    }

    let heightLineSub = lineBottomSubCorrect - lineTopSubCorrect;

    let style = document.createElement('style');

    style.innerHTML = '.uservisible-str__sublist.js-sublistuser-' + i + '::before {height: ' + heightLineSub + 'px;}';


    document.querySelector('head').appendChild(style);

    });*/

    for (var i = 0; i < arrSublistUser.length; i++) {

      let lineTopSub = getCoords(arrSublistUser[i]).top;
      let lineTopSubCorrect = lineTopSub - 6;
      if(wicon > 767) {
         lineTopSubCorrect = lineTopSub;
      }
      let lineBottomEl = arrSublistUser[i].lastElementChild;

      let lineBottomSub = getCoords(lineBottomEl).top;
      let lineBottomSubCorrect = lineBottomSub + 26;
      if(wicon > 767) {
         lineBottomSubCorrect = lineBottomSub + 1;
      }

      let heightLineSub = lineBottomSubCorrect - lineTopSubCorrect;

      let style = document.createElement('style');

      style.innerHTML = '.uservisible-str__sublist.js-sublistuser-' + i + '::before {height: ' + heightLineSub + 'px;}';


      document.querySelector('head').appendChild(style);

    }

    }

}

