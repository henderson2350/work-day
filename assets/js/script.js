// DOM VARIABLES
var timeBlocks = $(".time-block")
var textArea = $(".description")
// var saveButtons = $(".saveBtn")
var saveButton1 = $("#saveButton1")
var saveButton2 = $("#saveButton2")
var saveButton3 = $("#saveButton3")
var userInput1 = $("#userInput1")
var userInput3 = $("#userInput3")
var test = $("#test")

userInputs = document.querySelectorAll(".description")

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

saveButton1.on("click", function() {
    console.log("button working")
    test.attr("class", "suck")
    
})

saveButton2.on("click", function() {
    var value = userInput2.value
    localStorage.setItem("hello", value)
    var secured = localStorage.getItem("hello")
    console.log(secured)
    test.text(secured)
    // $("saveButton1").text(secured)
})

saveButton3.on("click", function() {
    console.log("hello")
})
// saveButtons.each(function (i, element) {
//     $(element).on("click", function() {
//         console.log("hello")
//     }
//     )
// })
// function consoleLogging() {
//     console.log("hello")
// }

// for (i=0; i<saveButtons.length; i++) {
//     var values = textArea[i]
//     saveButtons[i].onclick = function() {
//         console.log(values.value)
//     }
// }


// saveButtons.each(function(i, element) {
//     $(element).on("click", function() {
//         console.log(userInput1.value)
//     })
// })

// $(saveButtons).on("click", function() {
//     console.log(userInput1.value)
// })

// $(saveButtons).on("click", function() {
//     $(textArea).text("Hello")
// })



