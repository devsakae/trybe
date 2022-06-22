function movimentosNoXadrez(p) {
    let peca = p.toLowerCase();
    switch (peca) {
        case 'peão':
            console.log("1 casa por vez para a frente");
            break;
        case 'torre':
            console.log("Para frente ou para os lados");
            break;
        case 'bispo':
            console.log("Apenas diagonalmente");
            break;
        case 'cavalo':
            console.log("Em \'L\'");
            break;
        case 'rei':
            console.log("1 casa por vez, para qualquer lado");
            break;
        case 'rainha':
            console.log("Para qualquer lado que não tenha obstáculo");
            break;
        default:
            console.log("Escreva uma peça válida");
    }
}
movimentosNoXadrez("Peão");
movimentosNoXadrez("TORRE");
movimentosNoXadrez("bispo");
movimentosNoXadrez("Cavalo");
movimentosNoXadrez("rei");
movimentosNoXadrez("RAINHA");
movimentosNoXadrez("jumento");