const toggleInput = document.getElementById("btn");
const body = document.body;
const h4Elements = document.querySelectorAll("h4");
const aElements = document.querySelectorAll("a");

toggleInput.addEventListener("change", function () {
  if (this.checked) {
    // light
    body.style.background = "linear-gradient(0deg, #ffffff 0%, #767e8a 100%)";
    body.style.backgroundAttachment = "fixed";
    body.style.color = "black";
    // color: var(--main-text-color);
    h4Elements.forEach((elem) => (elem.style.color = "#301305"));
    aElements.forEach((elem) => (elem.style.color = "black"));
  } else {
    // dark
    body.style.background = "linear-gradient(180deg, #222b38 0%, #000000 100%)";
    body.style.backgroundAttachment = "fixed";
    body.style.color = "var(--main-text-color)";
    h4Elements.forEach(
      (elem) => (elem.style.color = "var(--orange-main-color)"),
    );
    aElements.forEach((elem) => (elem.style.color = "var(--main-text-color)"));
  }
});
