// let DUMMY_FILES = [
//   {
//     filename: "Filename1.csv",
//     size: "5.41 MB",
//     type: "CSV",
//     modified: "Jul 25, 2022 - 3:30 PM",
//     files: 5,
//   },
//   {
//     filename: "Superfly.json",
//     size: "2.65 MB",
//     type: "JSON",
//     modified: "Jul 20, 2022 - 1:12 PM",
//     files: 3,
//   },
//   {
//     filename: "RandonFilenameThatIsLongSomehow.json",
//     size: "5.41 MB",
//     type: "JSON",
//     modified: "Jul 19, 2022 - 12:56 PM",
//     files: 4,
//   },
// ];

// let filterFiles = DUMMY_FILES;

// function renderSavedFiles(files) {
//   const myTable = document.querySelector(".saved-files tbody");
//   // myTable.innerHTML = ``;
//   files.forEach((file) => myTable.removeChild);
//   files.forEach((file) => {
//     const newRow = document.createElement("tr");
//     const checkbox = document.createElement("input");
//     checkbox.type = "checkbox";
//     const firstCell = document.createElement("td");
//     firstCell.appendChild(checkbox);
//     newRow.appendChild(firstCell);
//     Object.values(file).forEach((value) => {
//       let cell = document.createElement("td");
//       cell.innerText = value;
//       newRow.appendChild(cell);
//     });

//     const lastCell = document.createElement("td");
//     lastCell.innerHTML = `
//         <div>
//             <button class='btn-download'>
//                 <img src="assets/icons/file_download.png" alt="" />
//             </button>
//             <button class='btn-delete'>
//                 <img src="assets/icons/delete-icon-dark.png" alt="" />
//             </button>
//         </div>`;
//     newRow.appendChild(lastCell);
//     myTable.appendChild(newRow);
//   });
// }

// console.log(filterFiles);
// renderSavedFiles(DUMMY_FILES);

const selectAllCheckbox = document.querySelector("#select-all");
const checkboxes = document.querySelectorAll("tbody input");
const deleteMultipleBtn = document.querySelector(
  ".library-actions .btn-delete"
);

selectAllCheckbox.addEventListener("change", function () {
  if (selectAllCheckbox.checked) {
    deleteMultipleBtn.disabled = false;
    checkboxes.forEach((checkbox) => {
      checkbox.checked = true;
    });
  } else {
    deleteMultipleBtn.disabled = true;
    checkboxes.forEach((checkbox) => {
      checkbox.checked = false;
    });
  }
});

checkboxes.forEach((checkbox) =>
  checkbox.addEventListener("change", () => {
    if (checkbox.checked) {
      deleteMultipleBtn.disabled = false;
      return;
    } else {
      if (document.querySelectorAll("tbody input:checked").length === 0) {
        deleteMultipleBtn.disabled = true;
      }
    }
  })
);

// Dashboard Modal
const downloadModal = document.querySelector("#download-modal");
const deleteModal = document.querySelector("#delete-modal");
const downloadBtn = document.querySelectorAll("tbody .btn-download");
const deleteBtn = document.querySelectorAll("tbody .btn-delete");
const closeDownloadModal = downloadModal.querySelector(".close-button");
const downloadModalCancelButton = document.querySelector(
  "#download-modal .inner-modal-content .cancel"
);
const deleteModalCancelButton = document.querySelector(
  "#delete-modal .inner-modal-content .cancel"
);
const confirmDeleteButton = document.querySelector("#delete-modal .danger");

function toggleDownloadModal() {
  downloadModal.classList.toggle("show-modal");
}

function toggleDeleteModal() {
  deleteModal.classList.toggle("show-modal");
}

function windowOnClick(event) {
  if (event.target === downloadModal) {
    toggleDownloadModal();
  }
  if (event.target === deleteModal) {
    toggleDeleteModal();
  }
}

// console.log(downloadBtn);
downloadBtn.forEach((btn) => {
  const modalContent = document.querySelector(
    "#download-modal .inner-modal-content"
  );
  btn.addEventListener("click", function (event) {
    const fileNameOnModal = modalContent.querySelector("#name");
    const parent = btn.parentElement.parentElement.parentElement;
    const fileName = parent.querySelector("td:nth-of-type(2)").textContent;
    fileNameOnModal.innerHTML = `<strong>${fileName}</strong>`;
    downloadModal.classList.toggle("show-modal");
  });
});

deleteBtn.forEach((btn) => {
  const modalContent = document.querySelector(
    "#delete-modal .inner-modal-content"
  );
  btn.addEventListener("click", function (event) {
    const fileNameOnModal = modalContent.querySelector("#name");
    const parent = btn.parentElement.parentElement.parentElement;
    const fileName = parent.querySelector("td:nth-of-type(2)").textContent;
    fileNameOnModal.innerHTML = `<strong>${fileName}</strong>`;
    deleteModal.classList.toggle("show-modal");
  });
});

confirmDeleteButton.addEventListener("click", function (event) {
  const parentElement =
    confirmDeleteButton.parentElement.querySelector("#name");
  const fileName = parentElement.textContent;

  // DUMMY_FILES = DUMMY_FILES.filter((file) => file.filename !== fileName);

  // console.log(DUMMY_FILES);
  deleteModal.classList.toggle("show-modal");
});

closeDownloadModal.addEventListener("click", toggleDownloadModal);
downloadModalCancelButton.addEventListener("click", toggleDownloadModal);
deleteModalCancelButton.addEventListener("click", toggleDeleteModal);
window.addEventListener("click", windowOnClick);
