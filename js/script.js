let estrela = document.querySelector('.estrela')
let titulo1 = document.querySelector('.titulo1')
let paragrafo = document.querySelector('.paragrafo')
let options = document.querySelector('.options')
let paragrafo2 = document.querySelector('.paragrafo2')
let botaoEnvia = document.querySelector('.botaoEnviar')

botaoEnvia.addEventListener('click', function() {
  estrela.style.backgroundImage = "url('../img/illustration-thank-you.svg')"
  estrela.style.width = "120px"

  titulo1.classList.add('estiloTitulo1')
  titulo1.innerText = 'You selected 4 out of 5'

  paragrafo.innerText = 'Thank you!'
  paragrafo.style.fontSize = "25px"

  options.style.display = "none"
  
  paragrafo2.classList.add('paragrafo2_visivel')
  paragrafo2.innerText = "We appreciate you taking the time to give a rating. If you ever need more support, don't hesitate to get in touch!"

  botaoEnvia.style.display = 'none'
  
})