$(function(){$(".mainnav").hide();$("#nav").click(function(){$("header h1").toggle();$(".mainnav").toggle();$(this).toggleClass("faded")});$(".phil").hide();$(".wim").hide();$(".sab").hide();$(".wil").hide();$(".ann").hide();$(".joh").hide();var e=$('<div class="expander"></div>'),t=$(".phil").html(),n=$(".wim").html(),r=$(".sab").html(),i=$(".wil").html(),s=$(".ann").html(),o=$(".joh").html();$("figure").click(function(){$(this).next().hasClass("expander")?e.slideToggle("slow"):$(this).data("id")=="phil"?e.insertAfter(this).html(t).slideDown():$(this).data("id")=="wim"?e.insertAfter(this).html(n).css("display","block"):$(this).data("id")=="sab"?e.insertAfter(this).html(r).css("display","block"):$(this).data("id")=="wil"?e.insertAfter(this).html(i).css("display","block"):$(this).data("id")=="ann"?e.insertAfter(this).html(s).css("display","block"):$(this).data("id")=="joh"&&e.insertAfter(this).html(o).css("display","block")});$(".archive-title ul").hide();$(".ul-click").click(function(){$(this).find("ul").slideToggle()})});