$(window).scroll(function () {
  if ( $(this).scrollTop() > 400 && !$('header').hasClass('open') ) {
    $('header').addClass('open');
    $('header').slideDown();
   } else if ( $(this).scrollTop() <= 400 ) {
    $('header').removeClass('open');
    $('header').slideUp();
  }
});

$( document ).ready(function() {
$('.section2 nav a').click(function(event) {
  event.preventDefault();

  var target = $(this).attr('href');

  // the .not() makes it so if we are on that page, it doesn't fade in and out the same content
  $('.content:visible').not(target).fadeOut('slow', function() {
    // after we fade out old content, fade in new
    $(target).fadeIn('slow');
  });
});
});

 function initialize() {
        var mapCanvas = document.getElementById('map_canvas');
        var mapOptions = {
          center: new google.maps.LatLng(12.935368, 77.613104),
          zoom: 18,
          mapTypeId: google.maps.MapTypeId.ROADMAP
        }
        var map = new google.maps.Map(mapCanvas, mapOptions)
		var point= new google.maps.LatLng(12.935368, 77.613104)
		var marker=new google.maps.Marker({
		position: point,
		map:map
		})
      }
      google.maps.event.addDomListener(window, 'load', initialize);