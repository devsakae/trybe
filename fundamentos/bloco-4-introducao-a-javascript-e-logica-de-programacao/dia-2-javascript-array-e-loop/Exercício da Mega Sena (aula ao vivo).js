let dez1 = Math.floor(Math.random() * 60) + 1;
let dez2 = Math.floor(Math.random() * 60) + 1;
let dez3 = Math.floor(Math.random() * 60) + 1;
let dez4 = Math.floor(Math.random() * 60) + 1;
let dez5 = Math.floor(Math.random() * 60) + 1;
let dez6 = Math.floor(Math.random() * 60) + 1;

let dezenasSorteadas = [dez1, dez2, dez3, dez4, dez5, dez6];

let apostaDoRodrigo = [10, 12, 33, 35, 42, 51];

let meusAcertos = 0;

for (let i = 0; i < dezenasSorteadas.length; i += 1) {
  for (let j = 0; j < apostaDoRodrigo.length; j += 1) {
    if (dezenasSorteadas[i] === apostaDoRodrigo[j]) {
      meusAcertos += 1;
    }
  }
}
console.log('Números da Mega Sena:', dezenasSorteadas);
console.log('Dezena acertada:', apostaDoRodrigo);
console.log('Total de acertos:', meusAcertos);

