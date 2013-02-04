// set default value when localStorage is empty
if (localStorage.getItem('rabotlaw-language') === null)
{
	localStorage.setItem('rabotlaw-page', 'home');
	localStorage.setItem('rabotlaw-language', 'nl');
}

//get data from ls
var currentPage = localStorage.getItem('rabotlaw-page');
var currentLang = localStorage.getItem('rabotlaw-language');



$(function() {
	//set data in localstorage
	//page
	$('nav a').click(function() {
		var page = $(this).attr('rel');
		localStorage.setItem('rabotlaw-page', page);
	});

	//lang
	$('#language-chooser a').click(function() {
		var lang = $(this).attr('rel');
		localStorage.setItem('rabotlaw-language', lang);
		console.log('klik');
		window.location.reload(true);
	});
});


//controllers
//default controller
function DefaultCtrl($scope, $http) {
	$http.get('data/texts-' + currentLang + '.json').success(function(data){
		$scope.data = data;
	});
}

















































