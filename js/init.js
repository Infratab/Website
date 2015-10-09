// Testing auto deploy
//navigation javascript
(function($) {
    $(function() {
        $('#navbar').affix({
            offset: {
                top: function() {
                    return (this.top = $('.section.welcome').height() - 70)
                }
            }
        });
        $(function() {
            $('.gallery').mixitup({
                easing: 'snap',
                  resizeContainer: true
            });
        });
        $(document).off('click.tab.data-api');
        $('a.tab').hover(function() {
            $(this).tab('show');
        });
        $("li a").tooltip({
            animation: false
        });
        $("li a").tooltip({
            animation: false
        });
        $(window).scroll(function() {
            var top = $(window).scrollTop();
            var width = $(window).width();
            var bottom = top + $(window).height();
            if (width > 768) {
                $("img.background").css({
                    top: -1 * Math.abs(top / 2)
                });
            } else {
                if (top > $(".section.welcome").height()) {
                    $(".section.welcome").css("visibility", "hidden");
                } else {
                    $(".section.welcome").css("visibility", "visible");
                }
            }
            $(".parallax").each(function() {
                if ((bottom > $(this).offset().top) && (width > 768)) {
                    if ($(this).offset().top > top) {
                        var parallax = (Math.abs(top - $(this).offset().top) / 2);
                    } else {
                        var parallax = ($(this).offset().top - top) / 2;
                    }
                    $(this).css("backgroundPosition", ("0px " + (parseInt(parallax)).toString() + "px"));
                } else {
                    $(this).css("backgroundPosition", "0px 0px");
                }
            });
        });

        $("a.navbar-brand[href^='#'], ul.nav li a[href^='#'], a.scroll-down").click(function(e) {
            e.preventDefault();
            $('html, body').animate({
                scrollTop: $(this.hash).offset().top
            }, 400);
        });
        $("ul.nav li a[href^='#']").click(function() {
            $(".navbar-collapse.in").collapse('hide');
        });
    });
})(jQuery);



//map javascript
function initialize() {
        var mapCanvas = document.getElementById('map_canvas');
        var mapOptions = {
          center: new google.maps.LatLng(12.9610223,77.5944856),
          zoom: 18,
          mapTypeId: google.maps.MapTypeId.ROADMAP
        }
        var map = new google.maps.Map(mapCanvas, mapOptions)
		
		  var contentString = '<div id="content">'+
                '<div id="siteNotice">'+
                '</div>'+
                '<h5 id="firstHeading" class="firstHeading">Infratab Banglore Pvt Ltd.</h5>'+
                '<div id="bodyContent">'+
                '<p><br>#206, Money Chambers,<br> K.H. Road,<br> Bangalore - 560027.<br> Phone: <a href="tel:918064543666">(+91) 80 6454 3666.</a><br> Website: <a href="http://infratab.in" target="_blank">http://infratab.in</a></p>'+
                '</div>'+
                '</div>';
            var infowindow = new google.maps.InfoWindow({
                content: contentString
            });
			
		
		var point= new google.maps.LatLng(12.9610223,77.5944856)
		var marker=new google.maps.Marker({
		position: point,
		map:map
		});
		
		 google.maps.event.addListener(marker, 'click', function() {
    infowindow.open(map,marker);
  });
		
		   
      }
      google.maps.event.addDomListener(window, 'load', initialize);	  
	  
	  
// team page highlight js
$(document).ready(function(){
	//image hover event
	$(".empImage").hover(function(event){
		//mouse over event
		var dataDesignation = $(event.target).closest(".empImage").attr("data-designation");		
		if(dataDesignation!== ""){
			var designations = dataDesignation.split(" ");
			$.each(designations, function( index, designation ) {
				var designationClass = "." + designation + " ";			
				$(designationClass + ".designation-circle").addClass("designation-span-background");
				$(designationClass + ".popover.top .arrow").addClass("designation-arrow-color");
				//$(designationClass + ".popover.top .arrow: after").addClass("designation-arrow-size");
				$(designationClass + ".popover-title").addClass("designation-background");
				$(designationClass + ".popover").addClass("designation-border");
			});
		}
	}, function(event){
		//mouse out event
		var dataDesignation = $(event.target).closest(".empImage").attr("data-designation");		
		if(dataDesignation!== ""){
			var designations = dataDesignation.split(" ");
			$.each(designations, function( index, designation ) {
				var designationClass = "." + designation + " ";
				$(designationClass + ".designation-circle").removeClass("designation-span-background");
				$(designationClass + ".popover.top .arrow").removeClass("designation-arrow-color");
				//$(designationClass + ".popover.top .arrow:after").removeClass("designation-arrow-size");
				$(designationClass + ".popover-title").removeClass("designation-background");
				$(designationClass + ".popover").removeClass("designation-border");
			});
		}
	});
	
	//Icon's hover events
	var successCallback=function(event){
		//mouse over event
		var dataDesignation = $(event.target).closest(".icon").attr("class");		
		if(dataDesignation!== ""){
			var designations = dataDesignation.split(" "),
				designations=designations.slice(1);
			$.each(designations, function( index, designation ) {
				//applying classes to the div
				var designationClass = "." + designation + " ";			
				$(designationClass + ".designation-circle").addClass("designation-span-background");
				$(designationClass + ".popover.top .arrow").addClass("designation-arrow-color");
				//$(designationClass + ".popover.top .arrow: after").addClass("designation-arrow-size");
				$(designationClass + ".popover-title").addClass("designation-background");
				$(designationClass + ".popover").addClass("designation-border");
				//applying classes to the image
				$(".empImage").each(function(innerIndex,myEle){
					var splitingList=myEle.getAttribute("data-designation").split(" "),
						indexValue=splitingList.indexOf(designations[0]);
					if (indexValue!==-1) {
						$(myEle.children[0]).addClass("image-border");
						$(myEle).tooltip("show");
					};
				});
			});
		}
	};
	var errorCallback=function(event){
		//mouse out event
		var dataDesignation = $(event.target).closest(".icon").attr("class");
		if(dataDesignation!== ""){
			var designations = dataDesignation.split(" "),
				designations=designations.slice(1);
			$.each(designations, function( index, designation ) {
				//removing classes to the div
				var designationClass = "." + designation + " ";
				$(designationClass + ".designation-circle").removeClass("designation-span-background");
				$(designationClass + ".popover.top .arrow").removeClass("designation-arrow-color");
				//$(designationClass + ".popover.top .arrow:after").removeClass("designation-arrow-size");
				$(designationClass + ".popover-title").removeClass("designation-background");
				$(designationClass + ".popover").removeClass("designation-border");
				//applying classes to the image
				$(".empImage").each(function(innerIndex,myEle){
					var splitingList=myEle.getAttribute("data-designation").split(" "),
						indexValue=splitingList.indexOf(designations[0]);
					if (indexValue!==-1) {
						$(myEle.children[0]).removeClass("image-border");
						$(myEle).tooltip("hide");
					};
				});
			});
		}
	}
	$(".popover").hover(successCallback,errorCallback);
	$(".designation-circle").hover(successCallback,errorCallback);
});