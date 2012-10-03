//get and set localStorage

var selectedLanguage = "nl";

function setLanguageFromLink(languageLink){
	var language = $(languageLink).attr('rel');
	setLanguage(language);
}

function setLanguage(language){
	setLanguageToStorage(language);
	
	$("#language-indicator").html('<h1>' + language + '</h1>');
	
	
	$('a[rel="' + selectedLanguage + '"]').parent().removeClass("selected");
	$('a[rel="' + language + '"]').parent().addClass("selected");
	
	selectedLanguage = language;
}

function getLanguageFromStorage(){
	var language = "nl";

	if (Modernizr.localstorage) {
		if(localStorage.getItem('rabotlaw-language') === null){
			setLanguageToStorage('nl');
		} else {
			language = localStorage.getItem('rabotlaw-language');
		}
	}
	return language;
}

function setLanguageToStorage(language){
	if (Modernizr.localstorage) {
		localStorage.setItem('rabotlaw-language',language);
	} else {
		setLanguage('nl');
	}
}

//MOOOOOOustache

function render(json, html){
	$.ajax({
		url: 'templates/' + html + '.html',
		type: "GET",
		dataType: "html",
		success: function(data) {
			theHTML = Mustache.to_html(data, json);
			$("#content").html(theHTML);
		},
		error: function(){
			alert('error in render()');
		}
	});
}
//select template
function getView(){
	$.getJSON('data/texts-' + selectedLanguage + '.json', function(data){
		render(data, 'home');
	});
}

$(function(){
	setLanguage(getLanguageFromStorage());
	getView();
});