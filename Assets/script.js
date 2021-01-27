//set ready method to ensure the document is fully loaded before execute any function
$(document).ready(function () {
    //set variable for luxon 
    var DateTime = luxon.DateTime.local().setZone("America/New_york");
    var currentHour = DateTime.toFormat("HH");

    console.log(currentHour);


    var currentDay = DateTime.toLocaleString({
        weekday: 'long',
        month: 'long',
        day: '2-digit',
        year: 'numeric',
        hour: 'numeric',
        minute: 'numeric',

    });
    //set day and time to html
    $("#currentDay").text(currentDay);

    var timeSlot = [

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
   
    //added class to container
    $(".container").addClass("time-block");

    //create schedule with row , txt input and save button
    timeSlot.forEach(function (timeSlot) {

        var row = $("<div>").addClass("row").attr("id", timeSlot.hour);
        $(".container").append(row);

        var time = $("<div>").addClass("col-1 hour");
        time.text(timeSlot.hourDisplay);
        row.append(time);

        var textInput = $("<input>").addClass("textArea col-10 description ");
        row.append(textInput);

        var saveBtn = $("<button>").addClass("saveBtn col-1");
        row.append(saveBtn);

        var btnImg = $("<i>").addClass("far fa-save fa-lg");
        saveBtn.append(btnImg);

        //set time to color code past, present , future
        if (timeSlot.hour > currentHour) {
            $(textInput).addClass("future")
        }
        else if (timeSlot.hour < currentHour) {
            $(textInput).addClass("past")
        }

        else  {
            $(textInput).addClass("present")
        }
    });
    
    //set click event to save to local storage
    $("button").on("click", function(){
       
        var value = $(this).siblings(".textArea").val().trim()
        var hour = $(this).parent().attr("id")
        localStorage.setItem(hour, value);

    })

    //get event and input to textArea
    $("#9 .textArea").val(localStorage.getItem("9"))
    $("#10 .textArea").val(localStorage.getItem("10"))
    $("#11 .textArea").val(localStorage.getItem("11"))
    $("#12 .textArea").val(localStorage.getItem("12"))
    $("#13 .textArea").val(localStorage.getItem("13"))
    $("#14 .textArea").val(localStorage.getItem("14"))
    $("#15 .textArea").val(localStorage.getItem("15"))
    $("#16 .textArea").val(localStorage.getItem("16"))
    $("#17 .textArea").val(localStorage.getItem("17"))

})