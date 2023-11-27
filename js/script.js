const menuButton = document.querySelector("#menu-button")

const menuElement = document.querySelector("#menu")

 

menuButton.addEventListener("click", function () {

  menuElement.classList.add("open")

})



function exibirNome() {
   var nome = document.getElementById('exame').value;
   localStorage.setItem('exame', nome);
   window.location.href = 'medico3.html';
}

window.onload = function() {
   var nome = localStorage.getItem('exame');
   document.getElementById('exibicaoNome').innerHTML = nome;
}

