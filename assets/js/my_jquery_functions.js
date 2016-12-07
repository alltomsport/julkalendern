$(document).ready(function() {
    var daysToXmas = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

    /*
    localStorage.setItem('daysToXmas', JSON.stringify(daysToXmas));

    daysToXmas = JSON.parse(localStorage.getItem('daysToXmas'));
    */
    if (localStorage.getItem('daysToXmas') === null) {
        localStorage.setItem('daysToXmas', daysToXmas);
    } else {
        var myStoredArray = localStorage.getItem('daysToXmas').split(',');
        for (i = 0; i < 24; i++) {
            daysToXmas[i] = parseInt(myStoredArray[i]);
        }
    }

    //Here we get which day of the month it is today
    var today = new Date();
    var dd = today.getDate();

    for (i = 0; i < 24; i++) {

        currDay = i + 1;

        if (daysToXmas[i] === 0) {
            $(".calendar-panel").append('<div class="col-xs-6 col-sm-4 col-md-3 col-lg-2 col-xl-2"><div class="panel panel-default"><div id="' + currDay + '" class="panel-body image"><img id="luckbild-' + currDay + '" class="img-responsive img-thumbnail" src="assets/image/' + currDay + '.jpg"><h2 id="lucka-' + currDay + '">' + currDay + '</h2></div></div></div>');

        } else {
            $(".calendar-panel").append('<div class="col-xs-6 col-sm-4 col-md-3 col-lg-2 col-xl-2"><div class="panel panel-default"><div id="' + currDay + '" class="panel-body image"><img id="luckbild-' + currDay + '" class="img-responsive img-thumbnail" src="assets/image/' + currDay + '.jpg"><h2 id="lucka-' + currDay + '"class="hidden">' + currDay + '</h2></div></div></div>');

        }
    }

    for (i = 0; i < 24; i++) {

        currDay = i + 1;

        if (daysToXmas[i] === 1) {

            $("#luckbild-" + currDay).css({ opacity: 1 });
            $("#luckbild-" + currDay).addClass('opened');
            $("#lucka-" + currDay).addClass('hidden');
        }
    }


    /*
    This is where we 0 an advent item.
    When 0ing, we set the IMG opacity to 1 
    and then adds class hidden to the h2 containing the advent number

    An advent item will only 0 if its ID is less than or equal todays date.
    */
    $(".image").bind('click', function() {

        var myID = $(this).attr('id');
        var myArrayIndex = myID - 1;

        /*
        Check so we are allowed to reveal the clicked item
        */
        if (myID <= dd) {
            /*
            Check if the clicked item is already 0ed. 
            In that case, we close it.
            */
            if ($("#luckbild-" + myID).hasClass('opened')) {
                $("#luckbild-" + myID).css({ opacity: 0 });
                $("#luckbild-" + myID).removeClass('opened');
                $("#lucka-" + myID).removeClass('hidden');
                daysToXmas[myArrayIndex] = 0;
            }
            /*
            If the clicked item is not already 0, reveal it now
            */
            else {
                $("#luckbild-" + myID).css({ opacity: 1 });
                $("#luckbild-" + myID).addClass('opened');
                $("#lucka-" + myID).addClass('hidden');
                daysToXmas[myArrayIndex] = 1;
            }
            localStorage.setItem('daysToXmas', daysToXmas);
        }
        /*
        If we are not allowed to reveal clicked item, 
        display a short shake effect with jQuery UI.
        */
        else {
            $(this).effect("shake");
        }
    });
});
