// 1 - Crie uma função que receba uma string e retorne true se for um palíndromo, ou false, se não for.
// Exemplo de palíndromo: arara.

function verificaPalindrome(palavra) {
let palindromo = "";
  for (letra of palavra) {
    palindromo = letra + palindromo;
  }
  console.log(palavra === palindromo);
}
verificaPalindrome('arara');
//Retorno esperado: true
verificaPalindrome('desenvolvimento');
//Retorno esperado: false


//2 - Crie uma função que receba um array de inteiros e retorne o índice do maior valor.
let array2 = [2, 3, 6, 7, 10, 1];
//Valor esperado no retorno da função: 4.
function maiorValor(ver) {
  let maiorNumero = Math.max(...ver);
  return ver.indexOf(maiorNumero);
}
console.log(maiorValor(array2));


// 3 - Crie uma função que receba um array de inteiros e retorne o índice do menor valor.
let array3 = [2, 4, 6, 7, 10, 0, -3];
// Valor esperado no retorno da função: 6.
function menorValor(ver) {
  let menorNumero = Math.min(...ver);
  return ver.indexOf(menorNumero);
}
console.log(menorValor(array3));


// 4 - Crie uma função que receba um array de nomes e retorne o nome com a maior quantidade de caracteres.
let array4 = ['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana'];
// Valor esperado no retorno da função: Fernanda.
function maisLongo(ver) {
  let maisLongo = ver[0];
  for (let i = 0; i < ver.length; i += 1) {
    if (ver[i].length >= maisLongo.length) { maisLongo = ver[i]; }
    else { }
  }
  return maisLongo;
}
console.log(maisLongo(array4));


// 🚀 5 - Crie uma função que receba um array de inteiros e retorne o inteiro que mais se repete.
array5 = [2, 3, 2, 5, 8, 2, 3];
// Valor esperado no retorno da função: 2.
function inteiroQueMaisRepete(ver) {
  
}

// 6 - Crie uma função que receba um número natural (número inteiro não negativo) N e retorne o somatório de todos os números de 1 até N.
let n = 5;
// Valor esperado no retorno da função: 1+2+3+4+5 = 15.

// 7 - Crie uma função que receba uma string word e outra string ending. Verifique se a string ending é o final da string word. Considere que a string ending sempre será menor que a string word.
// Valor de teste: 'trybe' e 'be'
// Valor esperado no retorno da função: true

verificaFimPalavra('trybe', 'be');
//Retorno esperado: true
verificaFimPalavra('joaofernando', 'fernan');
//Retorno esperado: false
