const DUMMY_FILES = [
  {
    filename: "Filename1.csv",
    size: "5.41 MB",
    type: "CSV",
    modified: "Jul 25, 2022 - 3:30 PM",
    files: 5,
  },
  {
    filename: "Superfly.json",
    size: "2.65 MB",
    type: "JSON",
    modified: "Jul 20, 2022 - 1:12 PM",
    files: 3,
  },
  {
    filename: "RandonFilenameThatIsLongSomehow.json",
    size: "5.41 MB",
    type: "JSON",
    modified: "Jul 19, 2022 - 12:56 PM",
    files: 4,
  },
];

function renderSavedFiles(files) {
  const myTable = document.querySelector(".saved-files tbody");
  files.forEach((file) => {
    const newRow = document.createElement("tr");
    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    const firstCell = document.createElement("td");
    firstCell.appendChild(checkbox);
    newRow.appendChild(firstCell);
    Object.values(file).forEach((value) => {
      let cell = document.createElement("td");
      cell.innerText = value;
      newRow.appendChild(cell);
    });

    const lastCell = document.createElement("td");
    lastCell.innerHTML = `
        <div>
            <button>
                <img src="assets/icons/file_download.png" alt="" />
            </button>
            <button>
                <img src="assets/icons/delete_outline.png" alt="" />
            </button>
        </div>`;
    newRow.appendChild(lastCell);
    myTable.appendChild(newRow);
  });
}

renderSavedFiles(DUMMY_FILES);

const selectAllCheckbox = document.querySelector("#select-all");
const checkboxes = document.querySelectorAll("tbody input");

selectAllCheckbox.addEventListener("change", () => {
  if (selectAllCheckbox.checked) {
    checkboxes.forEach((checkbox) => {
      checkbox.checked = true;
    });
  } else {
    checkboxes.forEach((checkbox) => {
      checkbox.checked = false;
    });
  }
});
