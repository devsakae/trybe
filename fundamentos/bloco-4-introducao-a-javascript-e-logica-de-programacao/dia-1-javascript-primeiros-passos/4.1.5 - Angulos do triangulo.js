let a = 90;
let b = 60;
let c = 30;
let d = -15;
let e = 70;

function angulos(x, y, z){
    if (x <= 0 || y <= 0 || z <= 0) { console.log("Um dos ângulos é inválido"); }
    else { console.log((x + y + z) <= 180); }
}
angulos(a, b, c);
angulos(a, b, d);
angulos(a, b, e);