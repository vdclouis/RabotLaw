$(function() {
	// $('#navicon').click(function() {
	// 	$('.menublock').toggle();
	// });

	$('#navicon').toggle(
			function() {
			    $('.menublock').show('blind', { direction: 'vertical' }, 500);
			},
	    function() {
	        $('.menublock').hide('blind', { direction: 'vertical' }, 500);
	    }
	);
});