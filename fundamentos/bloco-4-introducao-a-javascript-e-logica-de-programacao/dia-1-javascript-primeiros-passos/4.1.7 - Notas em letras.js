/* Escreva um programa que converte uma nota dada em porcentagem (de 0 a 100) em conceitos de A a F. Siga essas regras:
Porcentagem >= 90 -> A
Porcentagem >= 80 -> B
Porcentagem >= 70 -> C
Porcentagem >= 60 -> D
Porcentagem >= 50 -> E
Porcentagem < 50 -> F
O programa deve retornar uma mensagem de erro e encerrar se a nota passada for menor que 0 ou maior que 100.
 */

function notas(n) {
    if (n >= 90) { console.log("A"); }
    else if (n >= 80) { console.log("B"); }
    else if (n >= 70) { console.log("C"); }
    else if (n >= 60) { console.log("D"); }
    else if (n >= 50) { console.log("E"); }
    else if (n < 50) { console.log("F"); }
    else { console.log("Digite um valor entre 0 e 100"); }
}
notas(5);
notas(51);
notas(65);
notas(78);
notas(84);
notas(100);
notas('abc');