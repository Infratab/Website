// navbar scroll color
function checkScroll(){
    var startY = $('.scroll').height() - 200  ; //The point where the navbar changes in px
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

//modal box
$(document).ready(function(){
  // the "href" attribute of .modal-trigger must specify the modal ID that wants to be triggered
  $('.modal').modal();
});
$('#modal1').modal('open');

$(document).ready(function($) {
    //join us scroll
   $("#jsJoinScroll").on("click", function(e) {
       e.preventDefault();
       $("body, html").animate({
           scrollTop: $("#jsJoinUs").offset().top - 100
       }, 600);
   });
   //arrow scroll
   $("#jsArrowScroll").on("click", function(e) {
       e.preventDefault();
       $("body, html").animate({
           scrollTop: $("#jsKnowUs").offset().top - 100
       }, 600);
   });
});

