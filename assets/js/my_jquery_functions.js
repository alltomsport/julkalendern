$(document).ready(function(){
    $(".lucka-src").hide();
	console.log("doc ready!")



var daysToXmas = ['01','02','03','04','05','06','07','08','09','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24'];


	$.each(daysToXmas, function (index, value) {

	var randomDay = daysToXmas[Math.floor(Math.random() * daysToXmas.length)];

		daysToXmas = jQuery.grep(daysToXmas, function(value) {
		  return value != randomDay;
		});

		$(".calendar-panel").append(
	      '<div class="col-xs-12 col-sm-6 col-md-3"><div class="panel panel-default"><div class="panel-body"><img class="img-responsive img-thumbnail lucka-src hidden" src="assets/image/'+ randomDay +'.jpg"><img class="img-responsive img-thumbnail lucka-placeholder" src="assets/image/placeholder.jpg"></div></div></div>');   


		//console.log(value);
		console.log(randomDay);
	    
		return (value !== '24');
	}); 
      

	$(".lucka-placeholder").bind('click', function() {
	  console.log("öppnar lucka")
	  $(".lucka-placeholder").addClass('hidden');
	  $(".lucka-src").removeClass('hidden');
	});

	$(".lucka-src").bind('click', function() {
	  console.log("stänger lucka")
	  $(".lucka-src").addClass('hidden');
	  $(".lucka-placeholder").removeClass('hidden');
	});


});
