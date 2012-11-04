$(function() {
	// $('#navicon').click(function() {
	// 	$('.menublock').toggle();
	// });

/*	$('#navicon').toggle(
			function() {
			    $('.menublock').show('blind', { direction: 'vertical' }, 500);
			},
	    function() {
	        $('.menublock').hide('blind', { direction: 'vertical' }, 500);
	    }
	);*/

	$('#navicon').click( function () {
		console.profile(('meeh'));


		// if( $('.menublock').attr('class') != 'menublock open'){
		// 	window.console.log('add');
		// 	$('.menublock').addClass('open');
		// }
		// else {
		// 	window.console.log('remove');
			
		// 	$('.menublock').removeClass('open');
		// }

		
		$('.menublock').toggleClass('hidden');
		$('.menucontainer').toggleClass('height');

		console.profileEnd('meeh');
	});
});