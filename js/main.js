// set default value when localStorage is empty
if(localStorage.getItem('rabotlaw-language') === null){
	localStorage.setItem('rabotlaw-page', 'home');
	localStorage.setItem('rabotlaw-language', 'nl');
}

$(function(){
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
			window.console.log('jsonsucces');
			$.ajax({
				url: 'templates/'+ currentPage +'.html',
				type: "GET",
				dataType: "html",
				success: function(template) {
					window.console.log('htmlsucces');
					theHTML = Mustache.to_html(template, jsonData);
					$("#content").html(theHTML);
				},
				error: function(){
					//alert('error in render()');
					console.log('htmlerror');
				}
			});
		},
		error: function() {
			console.log('jsonerror');
		}
	});

	//change language -> JSON files on click
	$('#language-chooser a').click( function() {
		var lang = $(this).attr('rel');
		currentLang = lang;

		$.ajax({
			type: 'GET',
			contentType: 'application/json',
			dataType: 'json',
			url: 'data/texts-'+ lang +'.json',
			success: function(jsonData) {
				window.console.log('jsonsucces');
				$.ajax({
					url: 'templates/'+ currentPage +'.html',
					type: "GET",
					dataType: "html",
					success: function(template) {
						window.console.log('htmlsucces');
						theHTML = Mustache.to_html(template, jsonData);
						$("#content").html(theHTML);
					},
					error: function(){
						alert('error in render()');
						window.console.log('htmlerror');
					}
				});
			},
			error: function() {
				window.console.log('jsonerror');
			}
		}); //eo ajax
	}); //eo click

	//change page -> template on click
	$('nav a').click(function(){
		var page = $(this).attr('rel');
		currentPage = page;

		$.ajax({
			type: 'GET',
			contentType: 'application/json',
			dataType: 'json',
			url: 'data/texts-'+ currentLang +'.json',
			success: function(jsonData) {
				window.console.log('jsonsucces');
				$.ajax({
					url: 'templates/'+ page +'.html',
					type: "GET",
					dataType: "html",
					success: function(template) {
						window.console.log('htmlsucces');
						theHTML = Mustache.to_html(template, jsonData);
						$("#content").html(theHTML);
					},
					error: function(){
						alert('error in render()');
						window.console.log('htmlerror');
					}
				});
			},
			error: function() {
				window.console.log('jsonerror');
			}
		}); //eo ajax
	}); //eo click
}); //eo doc ready