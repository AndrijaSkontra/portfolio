import { techStack } from "./data.js";

const shownTechImage = document.getElementById("tech-image");
const shownTechDesc = document.getElementById("change-desc");
const shownTechDate = document.getElementById("tech-stack-date");
const nextImageButton = document.getElementById("change-image-button-next");
const prevImageButton = document.getElementById("change-image-button-back");

techStackListCycle(nextImageButton, prevImageButton, (num) => num + 1);
techStackListCycle(prevImageButton, nextImageButton, (num) => num - 1);

/**
 * This is not a pure function so use it with care!
 * It is used to add functionality to the buttons that change the "Tech stack"
 * @param buttonClicked the button that we want to activate on click
 * @param directionFunction function that changes the image data-number
 */
function techStackListCycle(buttonClicked, otherButton, directionFunction) {
  buttonClicked.addEventListener("click", () => {
    let currentNumber = Number(shownTechImage.getAttribute("data-number"));
    const newNumber = directionFunction(currentNumber);
    otherButton.style.display = "inline";

    if (newNumber === techStack.length) {
      shownTechImage.setAttribute("data-number", techStack.length - 1);
      return null;
    }
    if (newNumber === -1) {
      shownTechImage.setAttribute("data-number", 0);
      return null;
    }
    if (newNumber === techStack.length - 1) {
      buttonClicked.style.display = "none";
    }
    if (newNumber === 0) {
      buttonClicked.style.display = "none";
    }

    shownTechImage.setAttribute("data-number", newNumber);
    const currentTech = techStack[newNumber];
    shownTechImage.setAttribute(
      "src",
      `./assets/images/${currentTech.filePath}`,
    );
    shownTechDesc.innerText = currentTech.tool;
    shownTechDate.innerText = currentTech.date;
  });
}
