let a = 3;
let b = 5;
let c = -4;

function maiorDe3(x, y, z) {
    if (x >= y && x >= z) { console.log("O maior número é " + x); }
    else if (y >= x && y >= z) { console.log("O maior número é " + y); }
    else if (z >= x && z >= y) { console.log("O maior número é " + z); }
    else { console.log("Digite números válidos"); }
}

maiorDe3(a, b, c);
maiorDe3(a, c, b);
maiorDe3(b, a, c);
maiorDe3(b, c, a);
maiorDe3(c, b, a);
maiorDe3(c, a, b);
maiorDe3(a, a, b);
maiorDe3(a, b, b);