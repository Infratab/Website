
//navigation javascript
(function($){$(function(){$('#navbar').affix({offset:{top:function(){return(this.top=$('.section.welcome').height()- 70)}}});$(function(){$('.gallery').mixitup({easing:'snap',  resizeContainer:true});});$(document).off('click.tab.data-api');$('a.tab').hover(function(){$(this).tab('show');});$("li a").tooltip({animation:false});$("li a").tooltip({animation:false});$(window).scroll(function(){var top=$(window).scrollTop();var width=$(window).width();var bottom=top+ $(window).height();if(width>768){$("img.background").css({top:-1*Math.abs(top/2)});}
else{if(top>$(".section.welcome").height()){$(".section.welcome").css("visibility","hidden");}
else{$(".section.welcome").css("visibility","visible");}}
$(".parallax").each(function(){if((bottom>$(this).offset().top)&&(width>768)){if($(this).offset().top>top){var parallax=(Math.abs(top- $(this).offset().top)/2);}
else{var parallax=($(this).offset().top- top)/2;}
$(this).css("backgroundPosition",("0px "+(parseInt(parallax)).toString()+"px"));}
else{$(this).css("backgroundPosition","0px 0px");}});});$("a.navbar-brand[href^='#'], ul.nav li a[href^='#'], a.scroll-down").click(function(e){e.preventDefault();$('html, body').animate({scrollTop:$(this.hash).offset().top},400);});$("ul.nav li a[href^='#']").click(function(){$(".navbar-collapse.in").collapse('hide');});});})(jQuery);



//map javascript
function initialize() {
        var mapCanvas = document.getElementById('map_canvas');
        var mapOptions = {
          center: new google.maps.LatLng(12.935368, 77.613104),
          zoom: 18,
          mapTypeId: google.maps.MapTypeId.ROADMAP
        }
        var map = new google.maps.Map(mapCanvas, mapOptions)
		
		  var contentString = '<div id="content">'+
                '<div id="siteNotice">'+
                '</div>'+
                '<h5 id="firstHeading" class="firstHeading">Infratab Banglore Pvt Ltd.</h5>'+
                '<div id="bodyContent">'+
                '<p><br>Door No:386/5, 1st A Cross,<br> 7th Block, Koramangala,<br> Bangalore â€“ 560095.<br> Phone: (+91) 80 6454 3666.<br> Website: <a href="http://infratab.in" target="_blank">http://infratab.in</a></p>'+
                '</div>'+
                '</div>';
            var infowindow = new google.maps.InfoWindow({
                content: contentString
            });
			
		
		var point= new google.maps.LatLng(12.935368, 77.613104)
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
	
	$(".empList a").hover(function(){
		var dataDesignation = $(arguments[0].target).parent().attr("data-designation");		
		if(dataDesignation!== undefined){
			var designations = dataDesignation.split(" ");
			$.each(designations, function( index, designation ) {
				var designationClass = "." + designation + " ";			
				$(designationClass + "a").addClass("designation-span-background");
				$(designationClass + ".popover-title").addClass("designation-background");
				$(designationClass + ".popover").addClass("designation-border");
			});
		}
	}, function(){
		var dataDesignation = $(arguments[0].target).parent().attr("data-designation");		
		if(dataDesignation!== undefined){
			var designations = dataDesignation.split(" ");
			$.each(designations, function( index, designation ) {
				var designationClass = "." + designation + " ";
				$(designationClass + "a").removeClass("designation-span-background");
				$(designationClass + ".popover-title").removeClass("designation-background");
				$(designationClass + ".popover").removeClass("designation-border");
			});
		}
	});		
});