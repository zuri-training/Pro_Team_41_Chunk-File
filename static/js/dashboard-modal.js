// // Get the modal
// const downloadModal = document.querySelector("#download-modal");

// // Get the button that opens the modal
// const downloadBtn = document.querySelector("tbody .btn-download");

// // Get the <span> element that closes the modal
// const span = document.getElementsByClassName("close")[0];

// // When the user clicks on the button, open the modal
// downloadBtn.onclick = function () {
//   downloadModal.style.display = "block";
// };

// // When the user clicks on <span> (x), close the modal
// span.onclick = function () {
//   downloadModal.style.display = "none";
// };

// // When the user clicks anywhere outside of the modal, close it
// window.onclick = function (event) {
//   if (event.target == downloadModal) {
//     downloadModal.style.display = "none";
//   }
// };

const downloadModal = document.querySelector("#download-modal");
const downloadBtn = document.querySelector("tbody .btn-download");
const closeButton = document.querySelector(".close-button");

function toggleModal() {
  downloadModal.classList.toggle("show-modal");
}

function windowOnClick(event) {
  if (event.target === downloadModal) {
    toggleModal();
  }
}

downloadBtn.addEventListener("click", toggleModal);
closeButton.addEventListener("click", toggleModal);
window.addEventListener("click", windowOnClick);
