// const docs = document.querySelectorAll(".others .doc");
const dropdowns = document.querySelectorAll(".doc-head .btn-dropdown");

dropdowns.forEach((button) => {
  button.addEventListener("click", () => {
    const parentContainer = button.parentElement.parentElement;
    parentContainer.classList.toggle("slide");
  });
});

// console.log(docs);
