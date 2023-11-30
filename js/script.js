const menuButton = document.querySelector("#menu-button")
const menuElement = document.querySelector("#menu")

// const closeButton = document.querySelector(".close-button");

 

menuButton.addEventListener("click", function () {

  menuElement.classList.add("open")

})

const xzao =document.querySelector('#xzao')

xzao.addEventListener("click", function () {
   menuElement.classList.remove("open");
 });

   
 
