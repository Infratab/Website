$(document).ready(function($) {

	/*Food wastage counter */
	var totalFoodWastage = 1300000000;
	var totalSec = 31536000;
	var averageFoodWastage = totalFoodWastage/totalSec;
	var seconds = 0;
	var foodCounterOffset = Math.floor($('#foodCounter').offset().top);
	var counterTrigger = true;

	function foodCounter() {
		setInterval(function(){
			seconds++;
			$('#foodSeconds').text(seconds);
			var foodWastage = Number(parseInt(seconds * averageFoodWastage)).toLocaleString();
			$('.averageFood').text(foodWastage);
		},1000);
	}

	$(window).scroll(function() {
		var windowOffset = $(window).scrollTop();
		if((windowOffset >= foodCounterOffset - 500) && counterTrigger) {
			counterTrigger = false;
			foodCounter();
		}
	})

});

	