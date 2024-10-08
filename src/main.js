import "./tech-stack.js"; // only here to run the tech-stack file
import "./dragndrop.js";
import "./modal-on-start.js";
import "./setup-layout.js";
import { isMobileDevice } from "./mobile-check.js";

if (isMobileDevice()) {
  //send user to /mobile-error
  window.location.href = "../pages/mobile-error.html";
}
