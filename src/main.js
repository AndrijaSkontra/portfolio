import { techStack } from "./data.js";

// get all need document elements
const shownIcon = document.getElementById("shown-icon");
const shownDesc = document.getElementById("change-desc");
const changeImageButton = document.getElementById("change-image");

changeImageButton.addEventListener("click", () => {
  shownIcon.setAttribute(
    "data-number",
    String(Number(shownIcon.getAttribute("data-number")) + 1),
  );
  const currentPicture =
    "./assets/images/" +
    techStack[shownIcon.getAttribute("data-number")].filePath;
  shownIcon.setAttribute("src", currentPicture);
  shownDesc.innerText = techStack[shownIcon.getAttribute("data-number")].tool;
});
