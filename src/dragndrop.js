// state
const dragBoxes = Array.from(document.getElementsByClassName("drag-elem"));
const dropBoxes = Array.from(document.getElementsByClassName("droppable-zone"));
const img = new Image(); // template image when dragging
img.src = "../assets/images/droptemp.png";

// listeners dragBox
for (const dragBox of dragBoxes) {
  dragBox.addEventListener("dragstart", dragstartHandler);
}

// listeners dropBox
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
  const position = getChildIndex(draggedElement);
  localStorage.setItem(`layoutId: ${draggedElement.id}`, position);
  makeBackgroundOfElemTransparent(ev.target);
}

function getChildIndex(childElement) {
  const droppableZone = childElement.closest(".droppable-zone");

  // Return -69 if there is no parent with class "droppable-zone"
  if (!droppableZone) {
    return -69;
  }

  const droppableZoneParent = droppableZone.parentNode;
  const children = Array.from(droppableZoneParent.children);
  const index = children.indexOf(droppableZone);

  return index;
}
