const modal = document.querySelector(".modal");
const btnLogin = document.querySelectorAll(".btn-login");
const closeButton = document.querySelector(".close-button");

function toggleModal() {
  modal.classList.toggle("show-modal");
}

function windowOnClick(event) {
  if (event.target === modal) {
    toggleModal();
  }
}

btnLogin.forEach((button) => {
  button.addEventListener("click", toggleModal);
});
closeButton.addEventListener("click", toggleModal);
window.addEventListener("click", windowOnClick);
