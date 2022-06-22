const numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

// 1. Nesse primeiro exercício, percorra o array imprimindo todos os valores nele contidos com a função console.log();
console.log("#1. Nesse primeiro exercício, percorra o array imprimindo todos os valores nele contidos com a função console.log();");
for (let i = 0; i < numbers.length; i++) {
  console.log(numbers[i]);
}

// 2. Para o segundo exercício, some todos os valores contidos no array e imprima o resultado;
console.log("#2. Para o segundo exercício, some todos os valores contidos no array e imprima o resultado;");
let soma = 0;
for (let i = 0; i < numbers.length; i++) {
  soma += numbers[i];
}
console.log(soma);

// 3. Para o terceiro exercício, calcule e imprima a média aritmética dos valores contidos no array;
console.log("#3. Para o terceiro exercício, calcule e imprima a média aritmética dos valores contidos no array;");
for (let i = 0; i < numbers.length; i++) {
  soma += numbers[i];
}
let media = soma / numbers.length;
console.log(media);

// 4. Com o mesmo código do exercício anterior, caso o valor final seja maior que 20, imprima a mensagem: "valor maior que 20". Caso não seja, imprima a mensagem: "valor menor ou igual a 20";
console.log("#4. Com o mesmo código do exercício anterior, caso o valor final seja maior que 20, imprima a mensagem: \"valor maior que 20\". Caso não seja, imprima a mensagem: \"valor menor ou igual a 20\"");
if (media > 20) {
  console.log("Valor maior que 20");
} else {
  console.log("Valor menor ou igual a 20");
}

// 5. 🚀 Utilizando for, descubra qual o maior valor contido no array e imprima-o;
console.log("#5. 🚀 Utilizando for, descubra qual o maior valor contido no array e imprima-o;");
let maior = numbers[0];
for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] > maior) { maior = numbers[i]; }
  else { }
}
console.log(maior);

// 6. Descubra quantos valores ímpares existem no array e imprima o resultado. Caso não exista nenhum, imprima a mensagem: "nenhum valor ímpar encontrado";
console.log("#6. Descubra quantos valores ímpares existem no array e imprima o resultado. Caso não exista nenhum, imprima a mensagem: \"nenhum valor ímpar encontrado\";");
let totalImpares = 0;
let impares = [];
for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] % 2 != 0) {
    totalImpares++;
    impares.push(numbers[i]);
  }
  else { }
}
if (totalImpares === 0) {
  console.log("Nenhum valor ímpar encontrado");
} else {
  console.log("Números ímpares encontrados:", totalImpares, "-", impares);
}

// 7. Utilizando for, descubra qual o menor valor contido no array e imprima-o;
console.log("#7. Utilizando for, descubra qual o menor valor contido no array e imprima-o;");
let menor = numbers[0];
for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] < menor) {
    menor = numbers[i];
  } else {
  }
}
console.log(menor);

// 8. Utilizando for, crie um array que vá de 1 até 25 e imprima o resultado;
console.log("#8. Utilizando for, crie um array que vá de 1 até 25 e imprima o resultado;");
let ate25 = [];
for (let i = 1; i <= 25; i++) {
  ate25.push(i);
}
console.log(ate25);

// 9. Utilizando o array criado no exercício anterior imprima o resultado da divisão de cada um dos elementos por 2.
console.log("9. Utilizando o array criado no exercício anterior imprima o resultado da divisão de cada um dos elementos por 2.");
for (let i = 0; i < ate25.length; i++) {
  console.log(ate25[i] / 2);
}