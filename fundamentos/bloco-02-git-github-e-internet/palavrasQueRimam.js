/* Exercício extra @devsakae

Receba duas strings e imprima no console "Palavras que rimam" caso elas possuam as 3 últimas letras iguais.
Caso sejam diferentes, imprima no console "Não rimam".

Por exemplo: function rimador("gato", "sapato") retornaria "Palavras que rimam".
*/



function palavrasQueRimam(pal1,pal2) {
    if (pal1[pal1.length - 1] === pal2[pal2.length - 1] && pal1[pal1.length - 2] === pal2[pal2.length - 2] && pal1[pal1.length - 3] === pal2[pal2.length - 3]) {
    console.log("Palavras que rimam");
    }
    else { console.log("Não rimam"); }
}
palavrasQueRimam("Gato","Sapato");
palavrasQueRimam("Joelho","Orelha");
