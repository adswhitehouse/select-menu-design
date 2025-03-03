// Variables
let select = document.querySelector(".jsSelect");
let arrow = document.querySelector(".jsArrow");
let options = document.querySelector(".jsOptions");
let optionList = document.querySelectorAll(".jsOption");
let chosenOption = document.querySelector(".jsChosenOption");
let selectContainer = document.querySelector(".jsSelectContainer");

// Toggle animations when clicking select
select.addEventListener("click", toggleAnimations);

// Update select content with option and toggle animations
optionList.forEach((option) => {
  option.addEventListener("click", () => {
    chosenOption.textContent = option.textContent;
    toggleAnimations();
  });
});

// If area outside of select/options is clicked, toggle animations
document.body.addEventListener("click", (e) => {
  if (
    !selectContainer.contains(e.target) &&
    arrow.classList.contains("rotate")
  ) {
    toggleAnimations();
  }
});

// Toggles animations
function toggleAnimations() {
  arrow.classList.toggle("rotate");
  options.classList.toggle("dropdown");
}
