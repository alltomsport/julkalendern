$(document).ready(function(){

	//24 calendar items, this will be randomized later
	var daysToXmas = ['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24'];

	//Here we get which day of the month it is today
	var today = new Date();
    var dd = today.getDate();


	$.each(daysToXmas, function (index, value) {

		/*
		The following code snippet to pick out random array value. 
		Borrowed from stackoverflow:
		http://stackoverflow.com/questions/4550505/getting-random-value-from-an-array
		*/
		var randomDay = daysToXmas[Math.floor(Math.random() * daysToXmas.length)];

		daysToXmas = jQuery.grep(daysToXmas, function(value) {
		  return value != randomDay;
		});

		/*
		Append a advent calendar item under the "calendar-panel" element in DOM
		*/
		$(".calendar-panel").append('<div class="col-xs-12 col-sm-6 col-md-3"><div class="panel panel-default"><div id="' + randomDay + '" class="panel-body image"><img id="luckbild-' + randomDay + '" class="img-responsive img-thumbnail" src="assets/image/' + randomDay + '.jpg"><h2 id="lucka-' + randomDay + '">' + randomDay + '</h2></div></div></div>');  
		/*
		The above will append the following block to the DOM tree (assuming "randomDay=1")
		
		<div class="col-xs-12 col-sm-6 col-md-3">
        	<div class="panel panel-default">
          		<div id="1" class="panel-body image">
            		<img id="luckbild-1" class="img-responsive img-thumbnail" src="assets/image/1.jpg">
            		<h2 id="lucka-1">1</h2>    
          		</div>
        	</div>
      	</div>

		*/

	    
	    //Stop doing this when we have added 24 items
		return (value !== '24');
	}); 

	/*
	This is where we open an advent item.
	When opening, we set the IMG opacity to 1 
	and then adds class hidden to the h2 containing the advent number

	An advent item will only open if its ID is less than or equal todays date.
	*/
	$(".image").bind('click', function() {
		var myID = $(this).attr('id');

	    if(myID <= dd){
			$("#luckbild-" + myID).css({ opacity: 1 });
			$("#luckbild-" + myID).addClass('opened');
			$("#lucka-" + myID).addClass('hidden'); 
    	}
    	else{
    		//need to add something nice here
    	}
	});
});
