const button = document.querySelector('#envio');
let nome = document.querySelector('#nome');

function nomeDoUsuario() {
  console.log(nome.value);

}

button.addEventListener('click', nomeDoUsuario);