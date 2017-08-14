$(document).ready(function($) {
	function checkScroll(){
	    var startY = $('.scroll').height() - 200  ; //The point where the navbar changes in px
	    if($(window).scrollTop() > startY){
	        $('#navbar').addClass("navbar-white");
	    }else{
	        $('#navbar').removeClass("navbar-white")
	    }
	}
	if($('#navbar').length > 0){
	    $(window).on("scroll load resize", function(){
	        checkScroll();
	    });
	}

	function infratabVideo(state) {
		var div = document.getElementById("popupVideo");
		var iframe = div.getElementsByTagName("iframe")[0].contentWindow;
		div.style.display= state;
		var func = state=='hide' ? 'pauseVideo' : 'playVideo';
		iframe.postMessage('{"event":"command","func":"' + func + '","args":""}','*');
	}

	$('.modal').modal({
	      dismissible: true,
	      complete: function () {
	      	infratabVideo('hide');
	      }
	});

	$('#playVideo').click(function () {
		$('#modal1').modal('open');
		$('.modal').modal();
		$('.modal').modal({
	      dismissible: true,
	      complete: function () {
	      	infratabVideo('hide');
	      }
		});
		infratabVideo('');
	});

	$('#closeVideo').click(function () {
		$('#modal1').modal('close');
		infratabVideo('hide');
	});

	

	// $('#playVideo').click(function () {
	// 	$('#modal1').modal('open');
	// 	$('.modal').modal();
	// 	$('.modal').modal({
	//       dismissible: false
	// 	});
	// 	$('.modal-content').append('<iframe src="https://www.youtube.com/embed/9yc8u471NNw?rel=0&amp;controls=0;autoplay=1"></iframe>');
	// });

	// $('#closeVideo').click(function () {
	// 	$('#modal1').modal('close');
	// 	$('.modal-content iframe').remove();
	// })

/* Know scroll */
	$("#scrollKnowus").on("click", function(e) {
			e.preventDefault();
			$("body, html").animate({
					scrollTop: $("#knowUs").offset().top - 100
			}, 600);
	});

/* Scroll to join us */
//join us scroll
	$("#scrollJoin").on("click", function(e) {
			e.preventDefault();
			$("body, html").animate({
					scrollTop: $("#joinUs").offset().top - 100
			}, 600);
	});

});

	