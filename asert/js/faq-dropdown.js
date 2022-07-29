const question = document.querySelector(".question-container .inner");

const dropdowns = document.querySelectorAll(".btn-dropdown");

dropdowns.forEach((dropdown) => {
  const question = dropdown.parentElement.parentElement;
  dropdown.addEventListener("click", () => {
    question.classList.toggle("slide");
  });
});
