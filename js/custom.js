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