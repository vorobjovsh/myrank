// Скрипт замены стилей у <select>
(function($){
 $.fn.extend({

 	customStyle1 : function(options) {
	  //if(!$.browser.msie || ($.browser.msie&&$.browser.version>6)){
	  return this.each(function() {

			var currentSelected = $(this).find(':selected');
			$(this).after('<span class="select1"><span class="customStyleSelectBoxInner">'+currentSelected.text()+'</span></span>').css({position:'absolute', opacity:0,fontSize:$(this).next().css('font-size')});
			var selectBoxSpan = $(this).next();
			var selectBoxWidth = parseInt($(this).width()) - parseInt(selectBoxSpan.css('padding-left')) -parseInt(selectBoxSpan.css('padding-right'));
			var selectBoxSpanInner = selectBoxSpan.find(':first-child');
			selectBoxSpan.css({display:'inline-block'});
			selectBoxSpanInner.css({width:selectBoxWidth, display:'inline-block'});
			var selectBoxHeight = parseInt(selectBoxSpan.height()) + parseInt(selectBoxSpan.css('padding-top')) + parseInt(selectBoxSpan.css('padding-bottom'));
			$(this).height(selectBoxHeight).change(function(){
				selectBoxSpanInner.text($('option:selected',this).text()).parent().addClass('changed');
			});

	  });
	  //}
	}
 });
})(jQuery);

//$('.select1').customStyle1();

// Скрипт, обрезающий количество знаков в строке (применяется на сайте для ограничения длинной строки в выпадающем списке в тэгах <option>)
var optionText, array = [], newString, maxChar = 22;
/*let wicon = $(window).width();

if(wicon > 413) {
   maxChar = 22;
} else {
  maxChar = 20;
}*/

$('select').each(function(){
    $(this).find('option').each(function(i,e) {
        $(e).attr('title',$(e).text());
        optionText = $(e).text();
        newString = '';
        if (optionText.length > maxChar) {
            array = optionText.split(' ');
            $.each(array,function(ind,ele) {
                newString += ele+' ';
                if (ind > 0 && newString.length > maxChar) {
                    $(e).text(newString);
                    return false;
                }
            });

        }
    });
});


/* ===== Logic for creating fake Select Boxes ===== */
$('.sel').each(function() {
  $(this).children('select').css('display', 'none');

  var $current = $(this);

  $(this).find('option').each(function(i) {
    if (i == 0) {
      $current.prepend($('<div>', {
        class: $current.attr('class').replace(/sel/g, 'sel__box')
      }));

      var placeholder = $(this).text();
      $current.prepend($('<span>', {
        class: $current.attr('class').replace(/sel/g, 'sel__placeholder'),
        text: placeholder,
        'data-placeholder': placeholder
      }));

      return;
    }

    $current.children('div').append($('<span>', {
      class: $current.attr('class').replace(/sel/g, 'sel__box__options'),
      text: $(this).text()
    }));
  });
});

// Toggling the `.active` state on the `.sel`.
$('.sel').click(function() {
  $(this).toggleClass('active');
});

// Toggling the `.selected` state on the options.
$('.sel__box__options').click(function() {
  var txt = $(this).text();
  var index = $(this).index();

  $(this).siblings('.sel__box__options').removeClass('selected');
  $(this).addClass('selected');

  var $currentSel = $(this).closest('.sel');
  $currentSel.children('.sel__placeholder').text(txt);
  $currentSel.children('select').prop('selectedIndex', index + 1);
});

