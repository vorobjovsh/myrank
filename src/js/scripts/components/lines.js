const divisionBlock = document.querySelector(".subdivision-str__content");

const jsMenu = document.querySelector(".uservisible-str.adminvisible-str");

let lastDivisionBlock = jsMenu.lastElementChild;

//let lineTop = divisionBlock.getBoundingClientRect().top;
    

//let $lineBottom = $(lastDivisionBlock).offset().top;

//let $lineBottomCorrect = $lineBottom - 23;


/*$(document).ready(function(){
	  
    

    
    
});*/

    
function topPositions() {
        
    let $lineTop = $(divisionBlock).offset().top;
    
    let $lineBottom = $(lastDivisionBlock).offset().top;
    
    let $lineBottomCorrect = $lineBottom + 23;
    
    let $heightLine = $lineBottomCorrect - $lineTop;
    
    
    
    /*$('.uservisible-str.adminvisible-str::before').css({
        height: '300px'
    });*/
    
    
    //console.log(document.body.scrollTop);
    
    let style = document.createElement('style');
    style.innerHTML = '.uservisible-str.adminvisible-str::before {height: ' + $heightLine + 'px;}';
    document.querySelector('head').appendChild(style);
    
    console.log(getComputedStyle(jsMenu, ":before").height);    
}
    
    
   
    /*let lineTop = divisionBlock.getBoundingClientRect().top;
    
    let lineBottom = lastDivisionBlock.getBoundingClientRect().top;
    
    console.log(lineTop);*/
    
    
    



