let dez1 = 02;
let dez2 = 05;
let dez3 = 12;
let dez4 = 39;
let dez5 = 42;
let dez6 = 56;

let dezenasSorteadas = [dez1, dez2, dez3, dez4, dez5, dez6];

let apostaDoRodrigo = [10, 12, 33, 35, 42, 51];

let meusAcertos = 0;

for (let i = 0; i < dezenasSorteadas.length; i += 1) {
  for (let j = 0; j < apostaDoRodrigo.length; j += 1) {
    if (dezenasSorteadas[i] === apostaDoRodrigo[j]) {
      meusAcertos += 1;
      console.log('Dezena sorteada.......', apostaDoRodrigo[j]);
    }
  }
}
console.log('Total de acertos:', meusAcertos);
