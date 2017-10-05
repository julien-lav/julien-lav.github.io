/*
Responsive Mobile Toggle Menu v1.0
Description: JS enhances CSS response time and menu caching but not required
Author: Danielle Vautier
*/
$(document).ready(function() {

	/* responsive menu */
	function responsiveMenu() {	
		$('.menuTitle').click(function () {
		$('.menu').slideToggle("slow");
		$('.menu').css({"max-height":"810px"});
		});
	};

	$(function() {
		$(".menu").css({"display":"none","transition":"none","max-height":"inherit"});
		$("#toggleMenu").remove();
		responsiveMenu();
	});

	/* scroll */
	$('.js-scrollTo').on('click', function() { // Au clic sur un élément
		var page = $(this).attr('href'); // Page cible
		var speed = 1000; // Durée de l'animation (en ms)
		$('html, body').animate( { scrollTop: $(page).offset().top }, speed ); // Go
		return false;
		});
		
	/* portfolio */

	$(function() {
			var selectedClass = "";
			$(".menuPortofolio").click(function(){
			selectedClass = $(this).attr("data-rel");
		$("#portfolio").fadeTo(100, 0.1);
			$("#portfolio figure").not("."+selectedClass).fadeOut();
		setTimeout(function() {
		  $("."+selectedClass).fadeIn();
		  $("#portfolio").fadeTo(500, 1);
		}, 500);
			
		});
	});	


switch (new Date().getDay()) {
    case 0:
        day = "Sunday";
        break;
    case 1:
        day = "Monday";
        break;
    case 2:
        day = "Tuesday";
        break;
    case 3:
        day = "Wednesday";
        break;
    case 4:
        day = "Thursday";
        break;
    case 5:
        day = "Friday";
        break;
    case 6:
        day = "Saturday";
}
document.getElementById("demo").innerHTML = "Today is " + day;

/*------*/
});/*fin*/
/*------*/
