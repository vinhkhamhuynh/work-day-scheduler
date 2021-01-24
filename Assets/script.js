$(document).ready(function () {
    

    var DateTime = luxon.DateTime.local().setZone("America/New_york")

    var currentDay = DateTime.toLocaleString({
        weekday: 'long',
        month: 'long',
        day: '2-digit',
        year: 'numeric',
        hour: 'numeric',
        minute: 'numeric',
        
    });
  
    $("#currentDay").text(currentDay);

    var hour = ["9:00 AM", "10:00 AM", "11:00 AM", "12:00 PM", "1:00 PM", "2:00 PM", "3:00 PM", "4:00 PM", "6:00 PM", ];
   
    for (var i=0; i < hour.length; i++) {
        var time = $("<div>",);
        time.addClass("row row-cols-auto time-block");
        time.attr("time", hour[i]);
        time.text(hour[i]);

        $(".container").append(time);
        
        var textArea = $("div");
        textArea.addClass("col-sm-10 description textarea");

        time.append(textArea);

        var button =$("<button>");
        button.addClass("saveBtn far fa-save");
        time.append(button)

    }





})