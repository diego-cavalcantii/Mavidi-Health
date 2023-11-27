const menuButton = document.querySelector("#menu-button")

const menuElement = document.querySelector("#menu")

 

menuButton.addEventListener("click", function () {

  menuElement.classList.add("open")

})