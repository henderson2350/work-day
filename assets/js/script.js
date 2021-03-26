// DOM VARIABLES
var timeBlocks = $(".time-block")
var textArea = $(".description")
var saveButtons = $(".saveBtn")
var saveButton1 = $("#saveButton1")
var saveButton2 = $("#saveButton2")
var saveButton3 = $("#saveButton3")
var userInput1 = $("#userInput1")
var userInput3 = $("#userInput3")
var test = $("#test")

// GLOBAL VARIABLES
// Here we set a variable for today's date, then gather that information
// formatted how we want it usuing the moment.js function.
// We then use jQuery to assign the variable todaysDate to the id "date"
var currentDay = moment().format("MMM Do, YYYY");
var currentHour = moment().format("h")

// DOM MANIPULATION
$("#currentDay").text(currentDay)

timeBlocks.each(function(i, element) {
    var hour = ($(element).attr("id").replace("hour-",""));
    if (hour===currentHour) {
        $(element).addClass("present")
    } else if (hour > currentHour && hour >= 9) {
        $(element).addClass("past")
    } else if (hour < currentHour) {
        $(element).addClass("past")
    } else if (hour > currentHour) {
        $(element).addClass("future")
    }

})

saveButtons.on("click", function() {
    var saved = ($(this).siblings(".description").val())
    var key = $(this).parent().attr("id")
    localStorage.setItem(key, saved)
})

$("#hour-9 .description").val(localStorage.getItem("hour-9"))
$("#hour-10 .description").val(localStorage.getItem("hour-10"))
$("#hour-11 .description").val(localStorage.getItem("hour-11"))
$("#hour-12 .description").val(localStorage.getItem("hour-12"))
$("#hour-1 .description").val(localStorage.getItem("hour-1"))
$("#hour-2 .description").val(localStorage.getItem("hour-2"))
$("#hour-3 .description").val(localStorage.getItem("hour-3"))
$("#hour-4 .description").val(localStorage.getItem("hour-4"))
$("#hour-5 .description").val(localStorage.getItem("hour-5"))

