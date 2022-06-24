// Usando o objeto abaixo, faça os exercícios a seguir:
let info = {
  personagem: 'Margarida',
  origem: 'Pato Donald',
  nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
};
console.log("[EXERCÍCIO 1] Imprima no console uma mensagem de boas-vindas para a personagem acima, incluindo seu nome.");
function exercicio1(valor) {
  console.log("Bem-vinda,", valor.personagem);
}
exercicio1(info);


console.log("[EXERCÍCIO 2] Insira no objeto uma nova propriedade com o nome de chave 'recorrente' e o valor 'Sim' e, em seguida, imprima o objeto no console");
info.recorrente = 'Sim';
console.log(info);


console.log("[EXERCÍCIO 3] Faça um for/in que mostre todas as chaves do objeto.");
for (let chave in info) {
  console.log(chave);
}


// Usando o objeto abaixo, faça os exercícios a seguir:
let leitor = {
  nome: 'Julia',
  sobrenome: 'Pessoa',
  idade: 21,
  livrosFavoritos: [
    {
      titulo: 'O Pior Dia de Todos',
      autor: 'Daniela Kopsch',
      editora: 'Tordesilhas',
    },
  ],
};

// 🚀 6 - Acesse as chaves nome, sobrenome e titulo, que está dentro da chave livrosFavoritos, e faça um console.log no seguinte formato: "O livro favorito de Julia Pessoa se chama 'O Pior Dia de Todos'".
console.log("O livro favorito de", leitor.nome, leitor.sobrenome, "se chama", leitor['livrosFavoritos'][0].titulo);

// 🚀 7 - Adicione um novo livro favorito na chave livrosFavoritos, que é um array.
leitor.livrosFavoritos.push({
  titulo: 'Harry Potter e o Prisioneiro de Azkaban',
  autor: 'JK Rowling',
  editora: 'Rocco',
});
console.log(leitor);

// 🚀 8 - Acesse as chaves nome e livrosFavoritos e faça um console.log no seguinte formato: "Julia tem 2 livros favoritos".
console.log(leitor.name, "tem", leitor['livrosFavoritos'].length ,"livros favoritos");