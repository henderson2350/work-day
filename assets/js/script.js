// DOM VARIABLES
// var eventsColumn = $("eventsColumn")
// GLOBAL VARIABLES
// Here we set a variable for today's date, then gather that information
// formatted how we want it usuing the moment.js function.
// We then use jQuery to assign the variable todaysDate to the id "date"
var currentDay = moment().format("MMM Do, YYYY");
$("#currentDay").text(currentDay)

// here we gather the current hour
var currentHour = moment().format("h")
console.log(currentHour)

// we will need to pass in 
var currentColumn = $("#eventsColumn")
eventsColumn.attr("class", "present")

// FUNCTION DEFINITIONS
// FUNCTION CALLS

