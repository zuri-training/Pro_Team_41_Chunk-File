const navigationDrawer = document.querySelector(".nav-drawer");
const hamburger = document.querySelector(".nav-drawer .hamburger");
const backdrop = document.querySelector(".backdrop");

function toggleDrawer() {
  if (navigationDrawer.classList.toggle("expand")) {
    backdrop.style.display = "block";
    return;
  }
  backdrop.style.display = "none";
}

function windowOnClick(event) {
  if (event.target === backdrop) {
    toggleDrawer();
  }

  if (event.target === fileUploadModal) {
    toggleFileUploadModal();
  }

  if (event.target === downloadChunkModal) {
    toggleDownloadChunkModal();
  }
}

window.addEventListener("click", windowOnClick);
hamburger.addEventListener("click", toggleDrawer);

const fileUploadButtons = document.querySelectorAll(".btn-upload");
const fileUploadModal = document.querySelector("#file-upload-modal");
const filUploadForm = fileUploadModal.querySelector("form");
const downloadChunkModal = document.querySelector("#download-chunk-modal");
const closeButton = document.querySelector("#file-upload-modal .close-button");
const closeDownloadChunkModalBtn = document.querySelector(
  "#download-chunk-modal .close-button"
);

function toggleFileUploadModal() {
  fileUploadModal.classList.toggle("show-modal");
}

function toggleDownloadChunkModal() {
  downloadChunkModal.classList.toggle("show-modal");
}

// function windowOnClick(event) {
//   if (event.target === fileUploadModal) {
//     toggleFileUploadModal();
//   }
// }

// downloadBtn.addEventListener("click", toggleModal);
closeButton.addEventListener("click", toggleFileUploadModal);
closeDownloadChunkModalBtn.addEventListener("click", toggleDownloadChunkModal);
window.addEventListener("click", windowOnClick);

fileUploadButtons.forEach((button) =>
  button.addEventListener("click", toggleFileUploadModal)
);

const fileInput = document.querySelector(".file-drop-area input");
fileInput.addEventListener("change", () => {
  const inputContainer = fileInput.parentElement;
  inputContainer.classList.toggle("is-active");
  const fileName = inputContainer.querySelector("#name");
  fileName.textContent = fileInput.files[0].name;
});

