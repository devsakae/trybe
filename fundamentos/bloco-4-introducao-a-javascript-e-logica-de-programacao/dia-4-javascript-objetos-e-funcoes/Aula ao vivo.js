let numeros = [3, 5, 123, 33, 532, 23, 6, 11, 123, 44];
let maiorNumero = Math.max.apply(null, numeros);
console.log(maiorNumero);


//Verifique se a pessoa está na lista de convidados
let listaDeConvidados = ['Rodrigo Sakae', 'Caroline Hobold', 'Letícia da Silva', 'Maria Fernanda', 'Trybe Atanes'];
let pessoa = 'Rodrigo da Silva'
for (convidado of listaDeConvidados) {
  if (pessoa === convidado) { console.log(pessoa, 'está na lista'); return; }
  else if (convidado === listaDeConvidados[listaDeConvidados.length -1]) { console.log(pessoa, 'não foi convidado'); return; }
  else { }
}

