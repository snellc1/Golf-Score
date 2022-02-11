const  names = ["Hole-in-one!", "Eagle", "Birdie", "Par", "Bogey", "Double Bogey", "Go Home!"];

function golfScore(par, strokes) {

    if (strokes == 1) {

        $("#msg").html("<p class='results'>" + names[0] + "</p>"); 

    } else if ((par - 2 ) >= strokes) {

        $("#msg").html("<p class='results'>" + names[1] + "</p>");

    } else if ((par - 1) == strokes) {

        $("#msg").html("<p class='results'>" + names[2] + "</p>");

    } else if (par == strokes) {

        $("#msg").html("<p class='results'>" + names[3] + "</p>");

    } else if ((par + 1) == strokes) {

        $("#msg").html("<p class='results'>" + names[4] + "</p>");

    } else if ((par + 2) == strokes) {

        $("#msg").html("<p class='results'>" + names[5] + "</p>");

    } else if ((par + 3) <= strokes) {

        $("#msg").html("<p class='results'>" + names[6] + "</p>");

    } else {

        $("#msg").html("<p class='error'>Error try again.</p>")
    }

}

$("#results").click( function () {

    const par = $("#par").val();

    const strokes = $("#strokes").val();



    if ($.isNumeric(par) && $.isNumeric(strokes) ) {

        if ( par <= 0 || strokes <= 0) {

            $("#msg").html( "<p class='error'>Please enter a positive number.</p>");

        } else {

            golfScore(parseInt(par), parseInt(strokes));

        }      

    } else {

        $("#msg").html("<p class='error'>Please enter a number.</p>");
    }

    

})