$(function(){

	$('.mainnav').hide();

	$('#nav').click(function() {
		$('header h1').toggle();
		$('.mainnav').toggle();
		$(this).toggleClass('faded');
	});

});