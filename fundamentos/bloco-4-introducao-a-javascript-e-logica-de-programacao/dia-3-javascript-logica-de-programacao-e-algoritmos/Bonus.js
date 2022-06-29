/* BÔNUS 1 */
console.log("[BÔNUS 1] Agora vamos trabalhar com algumas formas geométricas! Faça um programa que, dado um valor n qualquer, seja n > 1, imprima na tela um quadrado feito de asteriscos de lado de tamanho n.");
//Altere o tamanho do lado do quadrado aqui
n = 5;
//Não altere o código a seguir
let linha = "";
if (n < 1) { console.log("O lado precisa ser igual ou maior a 1"); }
else {
  for (let i = 1; i <= n; i += 1) {
    linha = linha + "*";
  }
  for (let j = 1; j <= n; j += 1) {
    console.log(linha);
  }
}

/* BÔNUS 2 */
console.log("[BÔNUS 2] Para o segundo exercício, faça o mesmo que antes, mas que imprima um triângulo retângulo com 5 asteriscos de base.")
linha = "";
for (let i = 0; i < n; i += 1) {
  linha = linha + "*";
  console.log(linha);
}

/* BÔNUS 3 */
console.log("3- Agora inverta o lado do triângulo.")
let n = 5;
let linha = "";
for (let i = 0; i < n; i += 1) {
  if (linha.length === n - i) { linha = linha + "*"; }
  else { linha = " " + linha; }
  console.log(linha);
}