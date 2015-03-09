// http://www.adequatelygood.com/2010/3/JavaScript-Module-Pattern-In-Depth
// http://drupal.org/node/205296

var FACETS = (function(parent, $, util, drupal) {
    var me = parent.search = parent.search || {};
	me.name = "FACETS.search";

	function set_up_dynamic(){
		$(".dynamic_nav").each(function(){
			$(this).children('.dynamic_nav_list').each(function(){
				$(this).children('li').slice(5).addClass('hidden');
				$(this).children('li').slice(5).hide();
			});
		});
    }
	
    function bind_dynamic_expand(){
      $('.dynamic_nav .expand').bind('click', function () {
        $(this).siblings('.dynamic_nav_list').children('.hidden').slice(0, 5).show('fast');
		$(this).siblings('.dynamic_nav_list').children('.hidden').slice(0, 5).addClass('visible');
        $(this).siblings('.dynamic_nav_list').children('.hidden').slice(0, 5).removeClass('hidden');
		
		if($(this).siblings('.compress').hasClass('hidden')){
			$(this).siblings('.compress').addClass('visible');
			$(this).siblings('.compress').removeClass('hidden');
			$(this).siblings('.compress').show();
		}
		
		return false;
      })
	  
    }
	
	function bind_dynamic_compress(){
		console.log ('compress intialized');
      $('.dynamic_nav .compress').bind('click', function () {
		console.log ('compress triggered');
		console.log ($(this).siblings('.dynamic_nav_list').children('.visible').slice(-5));
        $(this).siblings('.dynamic_nav_list').children('.visible').slice(-5).hide('fast');
		$(this).siblings('.dynamic_nav_list').children('.visible').slice(-5).addClass('hidden');
        $(this).siblings('.dynamic_nav_list').children('.visible').slice(-5).removeClass('visible');
		
		
		if($(this).siblings('.dynamic_nav_list').children('.visible').size() <= 0){
			$(this).addClass('hidden');
			$(this).removeClass('visible');
			$(this).hide();
		}
		
		return false;
      })
	  
    }
	
	function set_date_range_slider(){
		if($( "#edit-start-year" ).length){
			var cur_year = new Date().getFullYear();
			var start = 1400;
			var end = Math.ceil(cur_year / 10) * 10;
			
			if($( "#edit-start-year" ).val().length >1 && $( "#edit-start-year" ).val().length >1 ){
				start = $( "#edit-start-year" ).val()
				end = $( "#edit-end-year" ).val()
			}
			
			$( "#slider-range" ).slider({
				range: true,
				min: 1400,
				step:10,
				max: Math.ceil(cur_year / 10) * 10,
				values: [ start, end ],
				slide: function( event, ui ) {
					$( "#edit-start-year" ).val( ui.values[ 0 ]);
					$( "#edit-end-year" ).val( ui.values[ 1 ]);
					$( "#gsearch-date-ranges .from" ).html( ui.values[ 0 ]);
					$( "#gsearch-date-ranges .to" ).html( ui.values[ 1 ]);
				}
			});
		}
	}
    
    
	me.data = [];
	
	(function ($){
	    Drupal.behaviors.facets_search = {attach:function (context, settings){
		console.log(me.name + ".init()");
		
		set_up_dynamic();
        
        bind_dynamic_expand();
		
		bind_dynamic_compress();
		
		set_date_range_slider();
	
	    }
	}})(jQuery);
	


	return parent;
}({}, jQuery, {}, Drupal));


