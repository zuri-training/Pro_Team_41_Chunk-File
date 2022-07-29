let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides((slideIndex += n));
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides((slideIndex = n));
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("slides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
}

const togglePassword = document.querySelector("#toggle-password");
const password = document.querySelector("#password");

togglePassword.addEventListener("click", (e) => {
  // toggle the type attribute
  const type =
    password.getAttribute("type") === "password" ? "text" : "password";
  password.setAttribute("type", type);
  // toggle the eye slash icon
  togglePassword.classList.toggle("hide");
});

const inputs = document.querySelectorAll(".reg-form .validate");

const form = document.querySelector(".reg-form");
// console.log(inputs);
// console.log(form);

const inputHandler = (event) => {
  if (event.target.value.trim() === "") {
    showError(event.target);
  } else {
    clearError(event.target);
  }
};

inputs.forEach((input) => {
  input.addEventListener("blur", inputHandler);
  input.addEventListener("input", inputHandler);
});

form.addEventListener("submit", (event) => {
  event.preventDefault();
  console.log(inputs);
  console.log(form);
  inputs.forEach((input) => {
    if (input.type === "email") {
      if (input.value === "" || !isValid(input.value)) {
        showError(input);
      }
    } else {
      if (input.value === "") {
        showError(input);
      }
    }
  });
  const errorInput = document.querySelector(".has-error input:first-child");
  if (errorInput) {
    document.querySelector(".has-error input:first-child").focus();
    return;
  }
  inputs.forEach((input) => (input.value = ""));
});

function showError(input) {
  const parent = input.parentElement;
  parent.className = "form-control validate has-error";
}

function clearError(input) {
  const parent = input.parentElement;
  parent.className = "form-control validate";
}

function isValid(email) {
  return /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
    email
  );
}
