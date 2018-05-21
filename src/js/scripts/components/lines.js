const divisionBlock = document.querySelector(".subdivision-str__content");

const jsMenu = document.querySelector(".uservisible-str");

let lastDivisionBlock = jsMenu.lastElementChild;



let $lineTop = $(divisionBlock).offset().top;

let $lineBottom = $(lastDivisionBlock).offset().top;

console.log($lineTop);
