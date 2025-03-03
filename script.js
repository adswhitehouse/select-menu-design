// Variables
let select = document.querySelector(".jsSelect")
let arrow = document.querySelector(".jsArrow")
let options = document.querySelector(".jsOptions")

select.addEventListener("click", () => {
  arrow.classList.toggle("rotate")
  options.classList.toggle("dropdown")
})