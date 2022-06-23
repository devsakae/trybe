/* Leia atentamente os enunciados e faça o que se pede!
Recomendamos que você utilize o debugger ou o console.log() durante a realização dos exercícios, desse modo será mais fácil acompanhar o comportamento do código e entender o que ocorre em cada uma das linhas. Para saber mais sobre como utilizar o debugger, acesse nosso conteúdo sobre isso. */


/******************** EXERCÍCIO 1 ********************/
console.log("[EXERCÍCIO 1] O fatorial é a multiplicação de um número natural pelos seus antecessores, exceto o zero.");
console.log("Com base nessas informações, crie um algoritmo que retorne o fatorial de 10.");

// Altere a variável númeroParaFatoriar para o número que desejar
let numeroParaFatoriar = 10;

// Não altere nada a partir daqui
let valor = numeroParaFatoriar;
let resultado = 1;
while(numeroParaFatoriar > 0) {
  resultado *= numeroParaFatoriar; 
  numeroParaFatoriar -= 1;
}
console.log("--- O fatorial de", valor ,"é", resultado);

/******************** EXERCÍCIO 2 ********************/
console.log("[EXERCÍCIO 2] Agora, desenvolva um algoritmo que é capaz de inverter uma palavra. Por exemplo, a palavra \"banana\" seria invertida para \"ananab\". Utilize a string abaixo como exemplo, depois troque por outras para verificar se seu algoritmo está funcionando corretamente");
// Altere apenas esta variável
let word = 'Rodrigo da Silva Sakae';
// Não altere nada a partir daqui
let newWord = word[word.length - 1];
for (let i = word.length - 1; i > 0; i -= 1) {
  newWord = newWord + word[i - 1];
}
console.log("A palavra ou expressão '",word,"' invertida fica '",newWord,"'");


/******************** EXERCÍCIO 3 ********************/
console.log("[EXERCÍCIO 3] Escreva dois algoritmos: um que retorne a maior palavra deste array e outro que retorne a menor. Considere o número de caracteres de cada palavra.")

let array = ['java', 'javascript', 'python', 'html', 'css'];

// Retorna a MAIOR palavra
let maiorPalavra = array[0];
for (let i = 1; i < array.length; i += 1) {
  if (maiorPalavra.length < array[i].length) { maiorPalavra = array[i]; }
  else { }
}
console.log("A maior palavra deste array é:", maiorPalavra);

// Retorna a MENOR palavra
let menorPalavra = array[0];
for (let i = 1; i < array.length; i += 1) {
  if (menorPalavra.length > array[i].length) { menorPalavra = array[i]; }
  else { }
}
console.log("A menor palavra deste array é:", menorPalavra);


/******************** EXERCÍCIO 4 ********************/
console.log("[EXERCÍCIO 4] Um número primo é um número inteiro maior do que 1 que possui somente dois divisores, ou seja, é divisível por 1 e por ele mesmo. Sabendo disso, escreva um algoritmo que retorne o maior número primo entre 2 e 50.");

let maiorPrimo = 2;
let k = 0;
for (let i = 3; i < 50; i += 1) {
  for (let j = 2; j < i - 1; j += 1) {
    if ((i % j !== 0) && (k <= 1)) {
      maiorPrimo = j;
      k += 1;
    }
    else { k = 0; }
  }
}
console.log("O maior número primo entre 2 e 50 é", maiorPrimo);