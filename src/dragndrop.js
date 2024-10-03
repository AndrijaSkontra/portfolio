// state
const dragBoxes = Array.from(document.getElementsByClassName("drag-elem"));
const img = new Image();
img.src = "../assets/images/droptemp.png";

for (const dragBox of dragBoxes) {
  dragBox.addEventListener("dragstart", dragstartHandler);
}

//listeners
const dropBoxes = Array.from(document.getElementsByClassName("droppable-zone"));
dropBoxes.forEach((elem) => {
  elem.addEventListener("drop", dropHandler);
  elem.addEventListener("dragover", dragoverHandler);
  elem.addEventListener("dragenter", handleEnterEvent);
  elem.addEventListener("dragleave", (ev) => {
    makeBackgroundOfElemTransparent(ev.currentTarget);
  });
  elem.addEventListener("dragend", (ev) => {
    makeBackgroundOfElemTransparent(ev.currentTarget);
  });
});

// functions
function handleEnterEvent(ev) {
  if (checkDoesNodeHaveChildren(ev.target)) {
    return;
  }
  ev.currentTarget.style.backgroundColor = "rgba(255, 255, 255, 0.1)";
}

function dragstartHandler(currentEvent) {
  currentEvent.dataTransfer.setDragImage(img, 300, 200);
  currentEvent.dataTransfer.setData(
    "application/my-node", // set draganddrop id
    currentEvent.target.id,
  );
}

function checkDoesNodeHaveChildren(node) {
  return !dropBoxes.includes(node) || node.childElementCount > 0;
}

function makeBackgroundOfElemTransparent(elem) {
  elem.style.backgroundColor = "transparent";
}

function dragoverHandler(ev) {
  ev.preventDefault();
  ev.dataTransfer.dropEffect = "move";
}
function dropHandler(ev) {
  ev.preventDefault();
  if (checkDoesNodeHaveChildren(ev.target)) {
    return;
  }
  const data = ev.dataTransfer.getData("application/my-node");
  const draggedElement = document.getElementById(data);
  ev.target.appendChild(draggedElement);
  makeBackgroundOfElemTransparent(ev.target);
}
