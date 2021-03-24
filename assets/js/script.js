// Here we set a variable for today's date, then gather that information
// formatted how we want it usuing the moment.js function.
// We then use jQuery to assign the variable todaysDate to the id "date"
var todaysDate = moment().format("MMM Do, YYYY");
$("#date").text(todaysDate)