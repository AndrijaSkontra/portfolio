import { isMobileDevice } from "./mobile-check.js";

const modal = document.getElementById("customModal");
const span = document.getElementsByClassName("close")[0];
const modalImage = document.getElementById("modal-image");
console.log(modalImage);

function openModal() {
  if (isMobileDevice()) {
    modalImage.src = "./assets/images/please-use-desktop.png";
  }
  modal.style.display = "flex";
  document.body.style.overflow = "hidden";
}

span.onclick = function () {
  modal.style.display = "none";
  document.body.style.overflow = "auto";
};

if (document.readyState !== "loading") {
  openModal();
}
