$(document).ready(function () {

    var DateTime = luxon.DateTime.local().setZone("America/New_york");
    var currentHour = DateTime.toFormat("HH");

    var currentDay = DateTime.toLocaleString({
        weekday: 'long',
        month: 'long',
        day: '2-digit',
        year: 'numeric',
        hour: 'numeric',
        minute: 'numeric',

    });

    $("#currentDay").text(currentDay);

    var hour = [

        {
            hourDisplay: "09:00 AM",
            hour: 9
        },
        {
            hourDisplay: "10:00 AM",
            hour: 10
        },
        {
            hourDisplay: "11:00 AM",
            hour: 11
        },
        {
            hourDisplay: "12:00 PM",
            hour: 12
        },
        {
            hourDisplay: "01:00 PM",
            hour: 13
        },
        {
            hourDisplay: "02:00 PM",
            hour: 14
        },
        {
            hourDisplay: "03:00 PM",
            hour: 15
        },
        {
            hourDisplay: "04:00 PM",
            hour: 16
        },
        {
            hourDisplay: "05:00 PM",
            hour: 17
        },
    ];
    //var hour = [09, 10, 11, 12, 13, 14, 15, 16, 17 ]

    $(".container").addClass("time-block");

     hour.forEach(function (hour) {

        var row = $("<div>").addClass("row");
        $(".container").append(row);

        var time = $("<div>").addClass("col-1 hour");
        time.text(hour.hourDisplay);
        row.append(time);

        var textInput = $("<input>").addClass("textArea col-10 description");
        row.append(textInput);

        var saveBtn = $("<button>").addClass("saveBtn col-1");
        row.append(saveBtn);

        var btnImg = $("<i>").addClass("far fa-save fa-lg");
        saveBtn.append(btnImg);

    });



        if (hour.hour === currentHour) {
            textArea.addClass("present");
        } else if (hour.hour < currentHour) {
            textArea.addClass("past");
        } else {
            textArea.addClass("future");
        }

    




})