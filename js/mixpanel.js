  $(document).ready(function(){
  	mixpanel.init("f0201f4e31bd69669f4412c3b03f7084");

  	// Navigation menu item
    var menuItem;
      	$('.menuItem').click(function(){
        	// menuItem = $(this).text();
          
          if (menuItem = $(this).text()) {
              menuItem;
          } else if (menuItem = $(this).attr('alt')) {
              menuItem;
          } else {
              menuItem = "Global";
          }

         	mixpanel.track("Navigation", {
        	"Menu Item": menuItem
    	});
    });

    // Play infratab video
    var playVideo;
      	$('#playVideo').click(function(){
         	mixpanel.track("Play Video", {
        	"Play Video": playVideo
    	});
    });

    // Scroll to know us section
    var ScrollToKnow;
      	$('#scrollKnowus').click(function(){
         	mixpanel.track("Scroll Know Us", {
        	"Scroll Know": ScrollToKnow
    	});
    });

    // Award images
    var awards;
      	$('.awardImg img').click(function(){
          awardsAlt = $(this).attr('alt');
          awards = $(this).attr('src').split('/');
          var image = awards[awards.length - 1];
         	mixpanel.track("Awards", {
        	"Awards img": image,
          "Awards": awardsAlt
    	});
    });

    // Featured images
    var featured;
        $('.featureImg img').click(function(){
          featuredAlt = $(this).attr('alt');
          featured = $(this).attr('src').split('/');
          var featuredImg = featured[featured.length - 1];
          mixpanel.track("Featured In", {
          "Featured img": featuredImg,
          "Featured": featuredAlt
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

    // Joinus Scroll
    var ScrollTojoinUs;
        $('#scrollJoin').click(function(){
          mixpanel.track("Join Us Scroll", {
          "Scroll To Joinus": ScrollTojoinUs
      });
    });


    // Job opening
    var joinus;
        $('.joinUsItem').click(function(){
          joinUsItem = $(this).text();
          mixpanel.track("Join Us", {
          "Job Title": joinUsItem
      });
    });

     // Career Mail to
    var careerMailTo;
        $('.careerMailTo').click(function(){
          careerMailTo = $(this).text();
          mixpanel.track("Career Mail", {
          "Career Mail": careerMailTo
      });
    });

    // Contact
    var contactDetails;
        $('.contactInfo').click(function(){
          contactDetails = $(this).text();
          mixpanel.track("Contact", {
          "Contact Item": contactDetails
      });
    });

   
   });