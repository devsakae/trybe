/* Escreva um programa que defina três números em constantes e retorne true se pelo menos uma das três for par. Caso contrário, ele retorna false.
Bonus: use somente um if. */

const a = 3;
const b = 4;
const c = 5;
function temPar(v1, v2, v3) {
    console.log((v1 % 2) === 0 || (v2 % 2) === 0 || (v3 % 2) === 0);
}

temPar(a, b, c);
temPar(a, a, c);
temPar(b, b, b);
temPar(c, a, c);
temPar(c, a, b);