$(function() {
	$('#navicon').click(function() {
		$('nav').toggle();
	});

	$(window).resize(function() {
		$('nav').hide();
	});
});