import "./tech-stack.js"; // only here to run the tech-stack file

const dragBoxes = Array.from(document.getElementsByClassName("drag-elem"));
const img = new Image();
img.src = "../assets/images/droptemp.png";

for (const dragBox of dragBoxes) {
  dragBox.addEventListener("dragstart", dragstartHandler);
}

function dragstartHandler(currentEvent) {
  currentEvent.dataTransfer.setDragImage(img, 300, 200);
  currentEvent.dataTransfer.setData(
    "application/my-node", // set draganddrop id
    currentEvent.target.id,
  );
}

const dropBoxes = Array.from(document.getElementsByClassName("just-border"));
dropBoxes.forEach((elem) => {
  elem.addEventListener("drop", dropHandler);
  elem.addEventListener("dragover", dragoverHandler);
});

function dragoverHandler(ev) {
  ev.preventDefault();
  ev.dataTransfer.dropEffect = "move";
}
function dropHandler(ev) {
  ev.preventDefault();
  if (!dropBoxes.includes(ev.target)) {
    return;
  }
  const data = ev.dataTransfer.getData("application/my-node");
  const draggedElement = document.getElementById(data);
  ev.target.appendChild(draggedElement);
}

const modal = document.getElementById("customModal");
const span = document.getElementsByClassName("close")[0];

// Function to open the modal
function openModal() {
  console.log("fires", modal);
  modal.style.display = "block";
}

// Function to close the modal when the user clicks on <span> (x)
span.onclick = function () {
  modal.style.display = "none";
};

if (document.readyState !== "loading") {
  openModal();
}
