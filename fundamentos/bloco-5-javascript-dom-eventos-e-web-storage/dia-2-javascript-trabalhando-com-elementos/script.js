let divCasa = document.getElementById('casa');
let divNum1 = document.createElement('div');
let divNum2 = document.createElement('div');
let pNum1 = document.createElement('p');
let pNum2 = document.createElement('p');

divCasa.appendChild(divNum1);
divNum1.appendChild(pNum1);
divCasa.appendChild(divNum2);
divNum2.appendChild(pNum2);

divNum1.className = 'circulo azul medio';
divNum2.className = 'quadrado verde medio';
pNum1.innerHTML = '<center>Bola</center>';
pNum2.innerHTML = '<center><strong>Careta</strong></center>';