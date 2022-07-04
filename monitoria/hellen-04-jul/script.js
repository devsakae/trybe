const buttonStart = document.getElementById('button');
const fatherColor = document.getElementById('container-game');

let arrayColors = [];
let myArrayColors = [];
let gamestarted = false;


function randomNumber() {
   const numeroAleatorio = Math.floor(Math.random() * 4);
   return numeroAleatorio;
}

function lightColors() {
  for (let i = 0; i < arrayColors.length; i += 1) {
    const elemento = document.getElementById('color-' + arrayColors[i]);
    elemento.classList.add('select');
    setTimeout(function() {
      elemento.classList.remove('select');
    }, 1000);
  }
}

function play() {
  arrayColors = [];
  myArrayColors = [];
  gameStarted = true;
  const numero = randomNumber();
  arrayColors.push(numero);

  lightColors();
}

function clickColor() {
  
}

buttonStart.addEventListener('click', play);
fatherColor.addEventListener('click', clickColor);