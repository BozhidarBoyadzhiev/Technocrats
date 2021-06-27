/* FIRST MODAL START*/

var first_modal = document.getElementById("first_modal");
var first_modal_button = document.getElementById("first_modal_button");
var first_button_close = document.getElementsByClassName("first_button_close")[0];

window.onclick = function(event) {
  if (event.target == first_modal) {
    modal.style.display = "none";
  }
}

first_modal_button.onclick = function() {
  first_modal.style.display = "block";
}

first_button_close.onclick = function() {
  first_modal.style.display = "none";
}

/* FIRST MODAL END */

/* SECOND MODAL START*/

var second_modal = document.getElementById("second_modal");
var second_modal_button = document.getElementById("second_modal_button");
var second_button_close = document.getElementsByClassName("second_button_close")[0];

second_modal_button.onclick = function() {
  second_modal.style.display = "block";
}

second_button_close.onclick = function() {
  second_modal.style.display = "none";
}

window.onclick = function(event) {
  if (event.target == second_modal) {
    second_modal.style.display = "none";
  }
}

/* SECOND MODAL END */

/* THIRD MODAL START*/

var third_modal = document.getElementById("third_modal");
var third_modal_button = document.getElementById("third_modal_button");
var third_button_close = document.getElementsByClassName("third_button_close")[0];

third_modal_button.onclick = function() {
  third_modal.style.display = "block";
}

third_button_close.onclick = function() {
  third_modal.style.display = "none";
}

window.onclick = function(event) {
  if (event.target == third_modal) {
    third_modal.style.display = "none";
  }
}

/* THIRD MODAL END */

/* FOURTH MODAL START*/

var fourth_modal = document.getElementById("fourth_modal");
var fourth_modal_button = document.getElementById("fourth_modal_button");
var fourth_button_close = document.getElementsByClassName("fourth_button_close")[0];

fourth_modal_button.onclick = function() {
  fourth_modal.style.display = "block";
}

fourth_button_close.onclick = function() {
  fourth_modal.style.display = "none";
}

window.onclick = function(event) {
  if (event.target == fourth_modal) {
    fourth_modal.style.display = "none";
  }
}

/* FOURTH MODAL END */