const shownIcon = document.getElementById("shown-icon");
const shownDesc = document.getElementById("change-desc");

const tools = [
  {},
  { filePath: "pygame1.png", tool: "Pygame" },
  { filePath: "java1.png", tool: "Java" },
  { filePath: "datastructure1.png", tool: "Algorithms and Data Structures" },
  { filePath: "linux1.png", tool: "GNU/Linux" },
  { filePath: "archlinux.svg", tool: "Distro Hopping" },
  { filePath: "patterns2.png", tool: "Design Patterns" },
  {
    filePath: "network1.png",
    tool: "Computer Networking and Protocols (Basics)",
  },
  { filePath: "database2.png", tool: "Database" },
  { filePath: "nestjs.svg", tool: "Backend basic app in NESTJS" },
  { filePath: "angular.svg", tool: "Angular" },
  { filePath: "react.svg", tool: "React" },
  { filePath: "javascript1.png", tool: "Pure JavaScript, HTML, CSS" },
];

const changeImageButton = document.getElementById("change-image");
changeImageButton.addEventListener("click", () => {
  shownIcon.setAttribute(
    "data-number",
    String(Number(shownIcon.getAttribute("data-number")) + 1),
  );
  const currentPicture =
    "./assets/images/" + tools[shownIcon.getAttribute("data-number")].filePath;
  shownIcon.setAttribute("src", currentPicture);
  shownDesc.innerText = tools[shownIcon.getAttribute("data-number")].tool;
});
