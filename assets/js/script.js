// DOM VARIABLES
var timeBlocks = $(".time-block")

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
