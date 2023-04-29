//_________Global Variables______________________________
const saveButton = document.querySelectorAll(".saveBtn");
let currentDay = document.getElementById("currentDay");

$(function () {
  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?
  //
  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?

  //________Change color based on time function______________________
  let current = dayjs()
  let hourNow = current.hour();
  $('.time-block').each(function() {
    //parse the data into an integer
    //Split the id into two parts where index 1 is the integer needed.
    const timeElement = parseInt($(this).attr("id").split("-")[1]);
    if (hourNow > timeElement) {
      $(this).addClass("past");
      $(this).removeClass("future");
      $(this).removeClass("present");
    } else if (hourNow == timeElement) {
      $(this).removeClass("past");
      $(this).removeClass("future");
      $(this).addClass("present");
    } else {
      $(this).removeClass("past");
      $(this).addClass("future");
      $(this).removeClass("present");
    }
  });
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  //
  currentDay = dayjs();
  $('#currentDay').text(currentDay.format('MMM DD, YYYY'));
});

