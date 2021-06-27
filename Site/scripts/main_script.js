const scrollElements = document.querySelectorAll(".scroll-down");
const elementInView = (el, dividend = 1) => {
const elementTop = el.getBoundingClientRect().top;

  return (
    elementTop <= (window.innerHeight || document.documentElement.clientHeight) / dividend);
};

const elementOutofView = (el) => {
const elementTop = el.getBoundingClientRect().top;

  return (
    elementTop > (window.innerHeight || document.documentElement.clientHeight)
  );
};

const displayScrollElement = (element) => {
  element.classList.add("scrolled");
};

const hideScrollElement = (element) => {
  element.classList.remove("scrolled");
};

const handleScrollAnimation = () => {
  scrollElements.forEach((el) => {
    if (elementInView(el, 1.25)) {
      displayScrollElement(el);
    } else if (elementOutofView(el)) {
      hideScrollElement(el)
    }
  })
}

window.addEventListener("scroll", () => { 
  handleScrollAnimation();
});

function succes_message() {
  const name_string = document.getElementById("name-text");
  const surname_string = document.getElementById("surname-text");
  const email_string = document.getElementById("email-text");
  const notes = document.getElementById("notes-text");

  if (name_string.value.length > 3 && surname_string.value.length > 3 && email_string.value.length > 3) {
    if (notes.value.length > 15) {
      var succes_message = document.getElementById("succes_message");
      succes_message.style.display = "block";
      succes_message.style.color = "lightgreen";

      var notes_message = document.getElementById("notes_error_message");
      notes_message.style.display = "none";

      var input_message = document.getElementById("input_error_message");
      input_message.style.display = "none";

      document.getElementById('name-text').value = '';
      document.getElementById('surname-text').value = '';
      document.getElementById('email-text').value = '';
      document.getElementById('notes-text').value = '';
    }
    else {
      var notes_message = document.getElementById("notes_error_message");
      notes_message.style.display = "block";
      notes_message.style.color = "red";

      var input_message = document.getElementById("input_error_message");
      input_message.style.display = "none";
    }
  }
  else {
    var input_message = document.getElementById("input_error_message");
    input_message.style.display = "block";
    input_message.style.color = "red";

    var succes_message = document.getElementById("succes_message");
    succes_message.style.display = "none";
  }

  var form = document.getElementById("contact-page");
  function handleForm(event) { event.preventDefault(); } 
  form.addEventListener('submit', handleForm);
}