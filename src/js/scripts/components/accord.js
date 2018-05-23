// Скрипт, раскрывающий и закрывающий подменю по клику

$(function() {
	var Accordion = function(el, multiple) {
		this.el = el || {};
		this.multiple = multiple || false;

		
		var links = this.el.find('.uservisible-str__item--topblock');
        
		
		links.on('click', {el: this.el, multiple: this.multiple}, this.dropdown);
	}

	Accordion.prototype.dropdown = function(e) {
		var $el = e.data.el,
			$this = $(this),
			$next = $this.next();
        
        let wicon = $(window).width();
          
        if($this.parent().find('.uservisible-str__sublist').length > 0 && e.target.classList.contains('js-mark')) {
            
           //console.log($this[0].children[1]);
            
            $next.toggle();
            
           if($this.find('.js-mark').hasClass('uservisible-str__item--mark-right')) {
               
                $this.find('.js-mark').removeClass('uservisible-str__item--mark-right');
                $this.find('.js-mark').addClass('uservisible-str__item--mark');
                
            } else {
                
                $this.find('.js-mark').removeClass('uservisible-str__item--mark');
                $this.find('.js-mark').addClass('uservisible-str__item--mark-right');
                
            }
            
            setTimeout(() => {
                topPositions();
                addSubLines();
            }, 500);
            
            
            if (!e.data.multiple) {
                
                $el.find('.uservisible-str__sublist').not($next).slideUp(50).parent().find('.uservisible-str__link-block:first').parent().find('.js-mark').removeClass('uservisible-str__item--mark-right').addClass('uservisible-str__item--mark');

                setTimeout(() => {
                    topPositions();
                    addSubLines();
                }, 500);

            }
            
            if(wicon > 767) {
                //console.log($next);
               paramElem($next[0]);
            }
            
        } 
   
		
        
	}	

	var accordion = new Accordion($('.uservisible-str.adminvisible-str'), false);
    
    var accordionUser = new Accordion($('.js-uservisible-str'), false);
    
});


$(function() {
	var Subaccordion = function(el, multiple) {
		this.el = el || {};
		this.multiple = multiple || false;

		// Variables privadas
		var links = this.el.find('.uservisible-str__subitem--topblock');
        
		// Evento
		links.on('click', {el: this.el, multiple: this.multiple}, this.dropdown);
	}

	Subaccordion.prototype.dropdown = function(e) {
		var $el = e.data.el,
			$this = $(this),
			$next = $this.next();
        
        let wicon = $(window).width();

		if($this.parent().find('.uservisible-str__sublist').length > 0  && e.target.classList.contains('js-mark')) {
           
            $next.toggle();
            
            if($this.find('.js-mark').hasClass('uservisible-str__item--mark-right')) {
               
                $this.find('.js-mark').removeClass('uservisible-str__item--mark-right');
                $this.find('.js-mark').addClass('uservisible-str__item--mark');
                
            } else {
                
                $this.find('.js-mark').removeClass('uservisible-str__item--mark');
                $this.find('.js-mark').addClass('uservisible-str__item--mark-right');
                
            }
            
            setTimeout(() => {
                topPositions();
                //addSubLines($next[0], numSub);
                addSubLines();
            }, 500);
            
            
            if (!e.data.multiple) {
            
               $this.parent().parent().find('.uservisible-str__sublist').not($next).slideUp(50).parent().find('.uservisible-str__sublink-block:first').parent().find('.js-mark').removeClass('uservisible-str__item--mark-right').addClass('uservisible-str__item--mark');

               setTimeout(() => {
                    /*let str = $next[0].className;
                    let arr = str.split("-");
                    let numSub = arr[arr.length - 1];*/
                    topPositions();
                    addSubLines();
                }, 500);

            }
            
            if(wicon > 767) {
               paramElem($next[0]);
            }
            
        } 
        

		
	}	

    var subAccordion = new Subaccordion($('.uservisible-str.adminvisible-str'), false);
    
    var subAccordionUser = new Subaccordion($('.js-uservisible-str'), false);
    
});
