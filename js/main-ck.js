// set default value when localStorage is empty
if(localStorage.getItem("rabotlaw-language")===null){localStorage.setItem("rabotlaw-page","home");localStorage.setItem("rabotlaw-language","nl")}$(function(){var e="home";$("nav a").click(function(){var e=$(this).attr("rel");localStorage.setItem("rabotlaw-page",e)});var t="nl";$("#language-chooser a").click(function(){var e=$(this).attr("rel");localStorage.setItem("rabotlaw-language",e)});currentPage=localStorage.getItem("rabotlaw-page");currentLang=localStorage.getItem("rabotlaw-language");$.ajax({type:"GET",contentType:"application/json",dataType:"json",url:"data/texts-"+currentLang+".json",success:function(e){window.console.log("jsonsucces");$.ajax({url:"templates/"+currentPage+".html",type:"GET",dataType:"html",success:function(t){window.console.log("htmlsucces");theHTML=Mustache.to_html(t,e);$("#content").html(theHTML)},error:function(){console.log("htmlerror")}})},error:function(){console.log("jsonerror")}});$("#language-chooser a").click(function(){var e=$(this).attr("rel");currentLang=e;$.ajax({type:"GET",contentType:"application/json",dataType:"json",url:"data/texts-"+e+".json",success:function(e){window.console.log("jsonsucces");$.ajax({url:"templates/"+currentPage+".html",type:"GET",dataType:"html",success:function(t){window.console.log("htmlsucces");theHTML=Mustache.to_html(t,e);$("#content").html(theHTML)},error:function(){alert("error in render()");window.console.log("htmlerror")}})},error:function(){window.console.log("jsonerror")}})});$("nav a, .rightbox a").click(function(){var e=$(this).attr("rel");currentPage=e;$.ajax({type:"GET",contentType:"application/json",dataType:"json",url:"data/texts-"+currentLang+".json",success:function(t){window.console.log("jsonsucces");$.ajax({url:"templates/"+e+".html",type:"GET",dataType:"html",success:function(e){window.console.log("htmlsucces");theHTML=Mustache.to_html(e,t);$("#content").html(theHTML)},error:function(){alert("error in render()");window.console.log("htmlerror")}})},error:function(){window.console.log("jsonerror")}})})});