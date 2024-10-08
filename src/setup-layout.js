/**
 * This file is used to set the layout of about-me and tech-stack to the
 * proper parts of the screen based on the user localStorage
 */
const mainDiv = document.getElementById("main-div");
const techStack = document.getElementById("tech-div-main-main");
const aboutMe = document.getElementById("about-me");
const techPosition = parseInt(
  localStorage.getItem("layoutId: tech-div-main-main"),
  10,
);
const aboutMePosition = parseInt(
  localStorage.getItem("layoutId: about-me"),
  10,
);

// check do the positions even exist

if (!isNaN(aboutMePosition)) {
  insertAtPosition(mainDiv, aboutMe, aboutMePosition);
}

if (!isNaN(techPosition)) {
  insertAtPosition(mainDiv, techStack, techPosition);
}

function insertAtPosition(parent, element, position) {
  const insertNode = parent.children[position];
  console.log("insert node", insertNode);
  insertNode.appendChild(element);
}
