$(document).ready(function(){

	//24 calendar items, this will be randomized later
	var daysToXmas = ['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24'];

	//Here we get which day of the month it is today
	var today = new Date();
    var dd = today.getDate();

    //init the date cheat form with todays date.
    $("#setDate").val(dd);


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
		$(".calendar-panel").append('<div class="col-xs-6 col-sm-4 col-md-3 col-lg-2 col-xl-2"><div class="panel panel-default"><div id="' + randomDay + '" class="panel-body image"><img id="luckbild-' + randomDay + '" class="img-responsive img-thumbnail" src="assets/image/' + randomDay + '.jpg"><h2 id="lucka-' + randomDay + '">' + randomDay + '</h2></div></div></div>');  
		/*
		The above will append the following block to the DOM tree (assuming "randomDay=1")
		
		<div class="col-xs-6 col-sm-4 col-md-3 col-lg-2 col-xl-2">
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
	Input form to allow user to "cheat" on todays date, 
	for a sneak preview of future items
	
	$('select').on('change', function() {
	  dd = this.value;
	})
	*/
	

	/*
	This is where we open an advent item.
	When opening, we set the IMG opacity to 1 
	and then adds class hidden to the h2 containing the advent number

	An advent item will only open if its ID is less than or equal todays date.
	*/
	$(".image").bind('click', function() {

		var myID = $(this).attr('id');

		var dateFromInput = $( "#setDate" ).val();
		//dd = ("#setDate").val();
		
		console.log();
		console.log("new click");
    	console.log("myid is: --" + myID + "-- and dateFromInput is: --" + dateFromInput + "--");
    	console.log("myID <= dateFromInput = "+ (myID <= dateFromInput));
		console.log("end click");
		console.log();
		/*
		Check so we are allowed to reveal the clicked item
		*/
	    if(myID <= dateFromInput){
	    	/*
	    	Check if the clicked item is already opened. 
	    	In that case, we close it.
	    	*/
			if($("#luckbild-" + myID).hasClass('opened')){
				$("#luckbild-" + myID).css({ opacity: 0 });
				$("#luckbild-" + myID).removeClass('opened');
				$("#lucka-" + myID).removeClass('hidden'); 
			}
			/*
			If the clicked item is not already open, reveal it now
			*/
			else{
				$("#luckbild-" + myID).css({ opacity: 1 });
				$("#luckbild-" + myID).addClass('opened');
				$("#lucka-" + myID).addClass('hidden'); 
			}
    	}
    	/*
    	If we are not allowed to reveal clicked item, 
    	display a short shake effect with jQuery UI.
    	*/
    	else{
    		$(this).effect( "shake" );
    	}
	});
});
