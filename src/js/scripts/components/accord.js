// Скрипт, раскрывающий и закрывающий подменю по клику

$(function() {
	var Accordion = function(el, multiple) {
		this.el = el || {};
		this.multiple = multiple || false;

		// Variables privadas
		var links = this.el.find('.uservisible-str__item--topblock');
        
		// Evento
		links.on('click', {el: this.el, multiple: this.multiple}, this.dropdown);
	}

	Accordion.prototype.dropdown = function(e) {
		var $el = e.data.el,
			$this = $(this),
			$next = $this.next();
          
        if($this.parent().find('.uservisible-str__sublist').length > 0) {
           
            $next.toggle();
            
            if($this.children('.uservisible-str__link-block').hasClass('uservisible-str__item--mark-right')) {
               
                $this.children('.uservisible-str__link-block').removeClass('uservisible-str__item--mark-right');
                $this.children('.uservisible-str__link-block').addClass('uservisible-str__item--mark');
                
            } else {
                
                $this.children('.uservisible-str__link-block').removeClass('uservisible-str__item--mark');
                $this.children('.uservisible-str__link-block').addClass('uservisible-str__item--mark-right');
                
            }
            
        } 
   
		if (!e.data.multiple) {
            
			$el.find('.uservisible-str__sublist').not($next).slideUp(50).parent().find('.uservisible-str__link-block:first').removeClass('uservisible-str__item--mark-right').addClass('uservisible-str__item--mark');
            
            
            
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

		if($this.parent().find('.uservisible-str__sublist').length > 0) {
           
            $next.toggle();
            
            if($this.children('.uservisible-str__sublink-block').hasClass('uservisible-str__item--mark-right')) {
               
                $this.children('.uservisible-str__sublink-block').removeClass('uservisible-str__item--mark-right');
                $this.children('.uservisible-str__sublink-block').addClass('uservisible-str__item--mark');
                
            } else {
                
                $this.children('.uservisible-str__sublink-block').removeClass('uservisible-str__item--mark');
                $this.children('.uservisible-str__sublink-block').addClass('uservisible-str__item--mark-right');
                
            }
            
        } 
        

		if (!e.data.multiple) {
            
           $this.parent().parent().find('.uservisible-str__sublist').not($next).slideUp(50).parent().find('.uservisible-str__sublink-block:first').removeClass('uservisible-str__item--mark-right').addClass('uservisible-str__item--mark');
                
		}
	}	

    var subAccordion = new Subaccordion($('.uservisible-str.adminvisible-str'), false);
    
    var subAccordionUser = new Subaccordion($('.js-uservisible-str'), false);
    
});
