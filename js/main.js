// set default value when localStorage is empty
if(localStorage.getItem('rabotlaw-language') === null){
	localStorage.setItem('rabotlaw-page', 'home');
	localStorage.setItem('rabotlaw-language', 'nl');
}


function supports_html5_storage() {
	try {
		return 'localStorage' in window && window['localStorage'] !== null;
	} catch (e) {
		console.log(e);
		return false;
	}
}


$(function(){

	$('#menuicon').click( function () {
		$('.menu').toggle();
	});

	//set data in localstorage
	//page
	var page = "home";
	$('nav a').click(function() {
		var page = $(this).attr('rel');
		localStorage.setItem('rabotlaw-page', page);
	});

	//lang
	var lang = "nl";
	$('#language-chooser a').click(function() {
		var lang = $(this).attr('rel');
		localStorage.setItem('rabotlaw-language', lang);
	});

	//get data from ls
	currentPage = localStorage.getItem('rabotlaw-page');
	currentLang = localStorage.getItem('rabotlaw-language');
	
}); //eo doc ready

function HomeCtrl($scope) {

}
























































