// set default value when localStorage is empty
if(localStorage.getItem('rabotlaw-language') === null){
	localStorage.setItem('rabotlaw-page', 'home');
	localStorage.setItem('rabotlaw-language', 'nl');
}

function getHtml(currentPage, jsonData, callback) {
	$.ajax({
		url: 'templates/'+ currentPage +'.html',
		type: "GET",
		dataType: "html",
		success: function(template) {
			var theMerged = Mustache.to_html(template, jsonData);
			callback(theMerged);
		},
		error: function(){
			console.log('htmlerror');
		}
	});
}

function supports_html5_storage() {
	try {
		return 'localStorage' in window && window['localStorage'] !== null;
	} catch (e) {
		window.console.log(e);
		return false;
	}
}

var pageEvents = {
	home: function () {
		$('.law a').click( function () {
			window.console.log("yoyo");
		});
	}
}

$(function(){

	$('#icon').click( function () {
		$('.menu').toggle();
	});

	//supports_html5_storage();

	if (Modernizr.localstorage) {
		// window.localStorage is available!
	} else {
		// no native support for HTML5 storage :(
		// maybe try dojox.storage or a third-party solution
	}

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

	//load localStorage lang & page on first pageload
	$.ajax({
		type: 'GET',
		contentType: 'application/json',
		dataType: 'json',
		url: 'data/texts-'+ currentLang +'.json',
		success: function(jsonData) {
			getHtml(
				currentPage,
				jsonData,
				function (html) {
					//EMPTY THE CONTENT AND APPEND THE HTML
					$('#content').empty().append(html);
					//LOAD THE PAGE FUNCTIONS
					var currentPageEvents = pageEvents[currentPage];
					currentPageEvents();
				}
			);
		},
		error: function() {
			console.log('jsonerror');
		}
	});

	//change language -> JSON files on click
	$('#language-chooser a').click( function() {
		var lang = $(this).attr('rel');
		currentLang = lang;
		currentPage = localStorage.getItem('rabotlaw-page');
		window.console.log(currentPage);
		$.ajax({
			type: 'GET',
			contentType: 'application/json',
			dataType: 'json',
			url: 'data/texts-'+ lang +'.json',
			success: function(jsonData) {
				getHtml(
					currentPage,
					jsonData,
					function (html) {
						$('#content').empty().append(html);
					}
				);
			},
			error: function() {
				window.console.log('jsonerror');
			}
		});
	});

	//change page -> template on click
	$('nav a').click(function(){
		var currentPage = $(this).attr('rel');
		$.ajax({
			type: 'GET',
			contentType: 'application/json',
			dataType: 'json',
			url: 'data/texts-'+ currentLang +'.json',
			success: function (jsonData) {
				getHtml(
					currentPage,
					jsonData,
					function (html) {
						$('#content').empty().append(html);
					}
				);
			},
			error: function() {
				window.console.log('json get error');
			}
		});
	}); //eo click

}); //eo doc ready