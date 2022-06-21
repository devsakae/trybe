let a = 12;
let b = -12;
function posOuNeg(n) {
    if (n > 0) { console.log("O número é POSITIVO (+)"); }
    else if (n < 0) { console.log("O número é NEGATIVO (-)"); }
    else if (n === 0) { console.log("O número é ZERO"); }
    else { console.log("É um número?"); }
}
posOuNeg(a);
posOuNeg(b);
posOuNeg(0);
posOuNeg("zero");