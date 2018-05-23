// Скрипт, удаляющий вертикальный скролл у меню
const ulTopBottom = {
    top: '',
    bottom: '',
    height: '',
    topUl: '',
    bottomUl: '',
    heightUl: '',
    difference: '',
    ulSelect: ''
};

function scrollNone(elem) {
    
    ulTopBottom.heightUl = elem.clientHeight;
//console.log(ulTopBottom.heightUl);
    
    ulTopBottom.topUl = getCoords(elem).top;
 //console.log(ulTopCoords);
    
    ulTopBottom.ulSelect = elem;
    
    return ulTopBottom.bottomUl = ulTopBottom.topUl + ulTopBottom.heightUl;
}


function paramElem(elem) {
    
    ulTopBottom.top = getCoords(elem).top;
    ulTopBottom.height = elem.clientHeight;
    ulTopBottom.bottom = ulTopBottom.top + ulTopBottom.height;
    ulTopBottom.difference = ulTopBottom.bottomUl - ulTopBottom.bottom;
    
    // Минимальный отступ снизу у меню
    let mb = 10;
    let heightNew;
    
    if(ulTopBottom.difference > mb) {
        
       ulTopBottom.ulSelect.style.height = `${ulTopBottom.heightUl}px`;
        
    } else if(ulTopBottom.difference < mb && ulTopBottom.difference > 0) {
        
        heightNew = ulTopBottom.heightUl + mb - ulTopBottom.difference;
        ulTopBottom.ulSelect.style.height = `${heightNew}px`;
       
    } else if(ulTopBottom.difference === 0) {
        
        heightNew = ulTopBottom.heightUl + mb; 
        ulTopBottom.ulSelect.style.height = `${heightNew}px`;
          
    } else if(ulTopBottom.difference < 0) {
        
        heightNew = ulTopBottom.heightUl + mb + Math.abs(ulTopBottom.difference); 
        ulTopBottom.ulSelect.style.height = `${heightNew}px`;
    } 
    
}
