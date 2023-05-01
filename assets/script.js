//_________Global Variables______________________________
let saveButton = document.querySelectorAll(".saveBtn");
let currentDay = document.getElementById("currentDay");
let textEnter = document.querySelectorAll(".description");

$(function () {
//________________________local storage set from save___________________________________
  //This will apply the event listener for each save button targeting parent ID
  //value will target sibling element of id's value
  $(saveButton).on('click', function() {
    //This is a reference to every single button.
    // console.log(this);
    let id = $(this).parent().attr('id');
    // console.log(id);
    // console.log( $(this).siblings());
    //.val is specific to input or textarea only.
    let value = $(this).siblings('.description').val();
    //this will check to seee if the saved button was already pressed
    let saved = $(this).data('saved');

    if (saved) {
      localStorage.removeItem(id);
      //This will set data to false if an item is removed from the local storage.
      $(this).data('saved', false);
    } else {
    // Store the value in local storage with the ID as the key
    localStorage.setItem(id, JSON.stringify(value));
    //this will set saved to true if it was set into local storage
    $(this).data('saved', true);
    // console.log(id + value);
    }
  });

//_________________________local storage get___________________________________________
  //This will get any items and set it to its appropriate place.
  // Loop through all the elements with the "time-block" class
$('.time-block').each(function() {
  // Get the ID of the current element
  let id = $(this).attr('id');
  // Get the value from local storage using the ID as the key
  let value = JSON.parse(localStorage.getItem(id));
  // Set the value of the textarea to the value retrieved from local storage
  $(this).find('.description').val(value);
});

//_________________________color selector based on time_________________________________  
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
    } else if (hourNow === timeElement) {
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
