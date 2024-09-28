import { techStack } from "./data.js";

// get all need document elements
const shownTechImage = document.getElementById("tech-image");
const shownTechDesc = document.getElementById("change-desc");
const shownTechDate = document.getElementById("tech-stack-date");
const changeImageButton = document.getElementById("change-image-button");

changeImageButton.addEventListener("click", () => {
  shownTechImage.setAttribute(
    "data-number",
    String(Number(shownTechImage.getAttribute("data-number")) + 1),
  );

  const currentPicture =
    "./assets/images/" +
    techStack[shownTechImage.getAttribute("data-number")].filePath;
  shownTechImage.setAttribute("src", currentPicture);

  shownTechDesc.innerText =
    techStack[shownTechImage.getAttribute("data-number")].tool;

  shownTechDate.innerText =
    techStack[shownTechImage.getAttribute("data-number")].date;
});
