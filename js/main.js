$(document).ready(function($) {
	function checkScroll(){
	    var startY = $('.scroll').height() - 50  ; //The point where the navbar changes in px
	    if($(window).scrollTop() > startY){
	        $('.navbar').addClass("scrolled");
	    }else{
	        $('.navbar').removeClass("scrolled");
	    }
	}
	if($('.navbar').length > 0){
	    $(window).on("scroll load resize", function(){
	        checkScroll();
	    });
	}

    //join us scroll
   $("#jsJoinScroll").on("click", function(e) {
       e.preventDefault();
       $("body, html").animate({
           scrollTop: $("#jsJoinUs").offset().top - 100
       }, 600);
   });
   //arrow scroll
   $(".js-arrow-scroll").on("click", function(e) {
       e.preventDefault();
       $("body, html").animate({
           scrollTop: $("#jsKnowUs").offset().top - 100
       }, 600);
   });


    var totalFoodWastage = 1300000000 ;
    var totalSec = 31536000;
    var averageFoodWastage = totalFoodWastage/totalSec;
    console.log(averageFoodWastage);
    var seconds = 0;
    setInterval(function(){
        seconds++;
        $('.js-food-seconds').text(seconds);
        var foodWastage = Number(parseInt(seconds * averageFoodWastage)).toLocaleString();
        $('.js-average-food').text(foodWastage);
      
    },1000);

    $('#modal1').modal('open');
    $('.modal').modal();
});