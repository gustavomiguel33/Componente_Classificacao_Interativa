let botaoEnvia = document.querySelector('.botaoEnviar')
let estrela = document.querySelector('.estrela')
let titulo1 = document.querySelector('.titulo1')

botaoEnvia.addEventListener('click', function() {
  estrela.style.backgroundImage = "url('../img/illustration-thank-you.svg')"
  estrela.style.width = "120px"

  titulo1.classList.add('estiloTitulo1')
  titulo1.innerText = 'You selected 4 out of 5'
})