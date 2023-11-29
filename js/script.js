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

function alertar() {
   if(document.getElementById("tipo").value == "medico") {
      document.getElementById("medico").style.visibility = "visible";
      document.getElementById("paciente").style.visibility = "hidden";
   } else {
      document.getElementById("paciente").style.visibility = "visible";
      document.getElementById("medico").style.visibility = "hidden";
   }
}
   
 
