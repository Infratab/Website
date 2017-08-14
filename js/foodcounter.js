$(document).ready(function($) {

	var totalFoodWastage = 1300000000 ;
	var totalSec = 31536000;
	var averageFoodWastage = totalFoodWastage/totalSec;
	console.log(averageFoodWastage);
	var seconds = 0;
	setInterval(function(){
		seconds++;
		$('#foodSeconds').text(seconds);
		var foodWastage = Number(parseInt(seconds * averageFoodWastage)).toLocaleString();
		$('.averageFood').text(foodWastage);

	},1000);

});

	