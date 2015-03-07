$(document).ready(function(){
	setPosterAtCenter();
	$(document).scroll = null;
	stopScroll();
});

$(window).resize(function(){
	setPosterAtCenter();
});

setPosterAtCenter = function(){
	var margin = $("#poster_img").width()/2 ;
	$("#poster_img").css("margin-left", "-" + margin + "px"); 
	$("#close_button").css("margin-left", margin - 30 + "px");
};

closePoster = function(){
	$("#poster_div").hide();
	$("#navbar_div").show();
	enableScroll();
};

var disableScroll = false;
var scrollPos = 0;
function stopScroll() {
    disableScroll = true;
    scrollPos = $(window).scrollTop();
}
function enableScroll() {
    disableScroll = false;
}
$(function(){
    $(window).bind('scroll', function(){
         if(disableScroll) $(window).scrollTop(scrollPos);
    });
    $(window).bind('touchmove', function(){
         $(window).trigger('scroll');
    });
});