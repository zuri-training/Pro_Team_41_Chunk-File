const resetForm = document.querySelector("#reset-form");
console.log(resetForm);

resetForm.addEventListener("submit", (event) => {
  event.preventDefault();
  window.location.href = "./set-new-password.html";
});
