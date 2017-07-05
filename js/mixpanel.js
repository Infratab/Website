  $(document).ready(function(){
  	mixpanel.init("afb672ef8b057d8aae64ad1a7d4be2d5");

  	// Navigation menu item
    var menuItem;
      	$('.menuItem').click(function(){
        	menuItem = $(this).text();
         	mixpanel.track("Navigation", {
        	"Menu Item": menuItem
    	});
    });

    // Play infratab video
    var playVideo;
      	$('#playVideo').click(function(){
         	mixpanel.track("Play-Video", {
        	"Play Video": playVideo
    	});
    });

    // Scroll to know us section
    var ScrollToKnow;
      	$('#scrollKnowus').click(function(){
         	mixpanel.track("Scroll-Know", {
        	"Scroll Know": ScrollToKnow
    	});
    });

    // Award images
    var awards;
      	$('.awardImg').click(function(){
         	mixpanel.track("Awards", {
        	"Awards": awards
    	});
    });

    // Featured images
    var featured;
        $('.featureImg').click(function(){
          mixpanel.track("Featured In", {
          "Featured In": featured
      });
    });

     // Footer item
    var footer;
        $('.footerItem').click(function(){
          footerItem = $(this).text();
          mixpanel.track("Footer", {
          "Footer Item": footerItem
      });
    });

   
   });