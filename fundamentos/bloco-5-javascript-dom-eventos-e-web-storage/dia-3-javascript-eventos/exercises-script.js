
window.onload = onibus;
function onibus() {
  document.querySelector('body').style.backgroundColor = 'green';
  let paragrafo = document.createElement('p');
  paragrafo.innerHTML = 'Socorram-me subi no ônibus em Marrocos';
  document.querySelector('body').appendChild(paragrafo);
  paragrafo.className = 'exercicio';
}