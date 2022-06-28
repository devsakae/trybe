
document.getElementsByTagName('section')[0].style.backgroundColor = '#FF9F84';
document.getElementsByTagName('section')[1].style.backgroundColor = '#F9DB5E';
document.querySelectorAll('.emergency-tasks h3')[0].style.backgroundColor = '#a500f3';
document.querySelectorAll('.emergency-tasks h3')[1].style.backgroundColor = '#a500f3';
document.querySelectorAll('.no-emergency-tasks h3')[0].style.backgroundColor = '#000000';
document.querySelectorAll('.no-emergency-tasks h3')[1].style.backgroundColor = '#000000';
document.getElementById('footer-container').style.backgroundColor = '#003533';
document.getElementById('header-container').style.backgroundColor = '#00B069';
document.getElementById('header-container').style.color = '#FFFFFF';

let footer = document.getElementById('footer-container');
footer.style.padding = '0';
footer.firstChild.nextSibling.style.padding = '10px';

let div = document.createElement('div');
div.style.backgroundColor = 'white';
div.style.color = 'black';
div.style.padding = '10px 0';
let texto = document.createTextNode('Encerramento do Trybe tarefas');
div.appendChild(texto);
document.getElementById('footer-container').appendChild(div);