$(function(){

	//menu
	$('.mainnav').hide();

	$('#nav').click(function() {
		$('header h1').toggle();
		$('.mainnav').toggle();
		$(this).toggleClass('faded');
	});

	//team page
	$('.phil').hide();
	$('.wim').hide();
	$('.sab').hide();
	$('.wil').hide();
	$('.ann').hide();
	$('.joh').hide();
	var exp = $('<div class="expander"></div>');

	var philHTML 	= $('.phil').html();
	var wimHTML 	= $('.wim').html();
	var sabHTML 	= $('.sab').html();
	var wilHTML 	= $('.wil').html();
	var annHTML 	= $('.ann').html();
	var johHTML 	= $('.joh').html();

	$('figure').click(function() {
	    if ($(this).next().hasClass('expander')) {
	        exp.slideToggle('slow');
	    } else if ($(this).data('id') == 'phil') {
	        exp.insertAfter(this).html(philHTML).slideDown();
	    } else if ($(this).data('id') == 'wim') {
	    	exp.insertAfter(this).html(wimHTML).css('display', 'block');
	    } else if ($(this).data('id') == 'sab') {
	    	exp.insertAfter(this).html(sabHTML).css('display', 'block');
	    } else if ($(this).data('id') == 'wil') {
	    	exp.insertAfter(this).html(wilHTML).css('display', 'block');
	    } else if ($(this).data('id') == 'ann') {
	    	exp.insertAfter(this).html(annHTML).css('display', 'block');
	    } else if ($(this).data('id') == 'joh') {
	    	exp.insertAfter(this).html(johHTML).css('display', 'block');
	    }
	});

	// nested ul collapse
	$('.archive-title ul').hide();
	$('.ul-click').click(function() {
		if ($(this).hasClass('contract')) {
			$(this).find('ul').slideToggle();
		} else if ($(this).hasClass('distributie')) {
			$(this).find('ul').slideToggle();
		} else if ($(this).hasClass('intellectuele')) {
			$(this).find('ul').slideToggle();
		} else if ($(this).hasClass('transport')) {
			$(this).find('ul').slideToggle();
		} else if ($(this).hasClass('verzekering')) {
			$(this).find('ul').slideToggle();
		}
		
	})

});