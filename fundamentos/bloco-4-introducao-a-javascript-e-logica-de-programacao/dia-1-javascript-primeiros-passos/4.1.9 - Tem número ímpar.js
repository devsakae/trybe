/* Escreva um programa que defina três números em constantes e retorne true se pelo menos uma das três for ímpar. Caso contrário, ele retorna false.
Bonus: use somente um if. */

const a = 2;
const b = 3;
const c = 4;

function temImpar(v1, v2, v3) {
    console.log((v1 % 2) !== 0 || (v2 % 2) !== 0 || (v3 % 2) !== 0);
}

temImpar(a, b, c);
temImpar(a, a, c);
temImpar(b, b, b);
temImpar(c, a, c);
temImpar(c, a, b);