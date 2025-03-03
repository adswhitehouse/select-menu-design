// Variables
let select = document.querySelector(".jsSelect");
let arrow = document.querySelector(".jsArrow");
let options = document.querySelector(".jsOptions");
let optionList = document.querySelectorAll(".jsOption");
let chosenOption = document.querySelector(".jsChosenOption");
let selectContainer = document.querySelector(".jsSelectContainer");

// Toggle arrow and option animation when clicking select box
select.addEventListener("click", () => {
  arrow.classList.toggle("rotate");
  options.classList.toggle("dropdown");
});

// Choose option to remove animations and update select box text
optionList.forEach((option) => {
  option.addEventListener("click", () => {
    chosenOption.textContent = option.textContent;
    arrow.classList.remove("rotate");
    options.classList.remove("dropdown");
  });
});

// If area outside of select/options is clicked... hide dropdown
document.body.addEventListener("click", (e) => {
  if (!selectContainer.contains(e.target)) {
    arrow.classList.remove("rotate");
    options.classList.remove("dropdown");
  }
});
