import { isMobileDevice } from "./mobile-check.js";

const modal = document.getElementById("customModal");
const span = document.getElementsByClassName("close")[0];
const modalImage = document.getElementById("modal-image");

function openModal() {
  if (isMobileDevice()) {
    modalImage.src = "./assets/images/please-use-desktop.png";
  }
  modal.style.display = "flex";
  document.body.style.overflow = "hidden";
}

// map escape to close the modal
document.addEventListener("keydown", (ev) => {
  if (ev.key === "Escape") {
    modal.style.display = "none";
    document.body.style.overflow = "auto";
  }
});

span.onclick = function () {
  modal.style.display = "none";
  document.body.style.overflow = "auto";
};

if (document.readyState !== "loading") {
  openModal();
}
