/* function insere(vcoins) {
  const lista = document.querySelector('coins-list');
  const itemDeLista = document.createElement('li');
  itemDeLista.innerHTML = vcoins[0].name;
  lista.appendChild(itemDeLista);
  vcoins.forEach((vcoin) => {
    li.innerHTML = `${vcoin.name} (${vcoin.symbol}): US$ ${vcoin.priceUsd}`
    ul.appendChild(li);
  })
}; */

const fetchCoins = async () => {
  const coinsAPI = 'http://api.coincap.io/v2/assets';
  const fetchado = await fetch(coinsAPI)
  .then(response => response.json())
  .then(coin => coin.data)
  .catch((error) => console.log(`Erro: ${error}`));
  console.log(fetchado);
};

/* function fetchPokemonJSON(nomePokemon) {
  return fetch(`https://pokeapi.co/api/v2/pokemon/${nomePokemon}`).then((respostaAPI) =>
    respostaAPI.json()
  );
}

function fetchPokemon(nomePokemon) {
  fetch(`https://pokeapi.co/api/v2/pokemon/${nomePokemon}`)
    .then((respostaAPI) => respostaAPI.json())
    .then((objetoPokemon) => {
      const pokemon = { nome: objetoPokemon.name, imageUrl: objetoPokemon.sprites.front_default };
      append(pokemon);
    })
    .catch((erro) => console.log(erro));
}

function requestPokemons() {
  pokemons.forEach((pokemon) => fetchPokemon(pokemon));
}

function requestPokemonsOrdered() {
  const arrayDePromessas = pokemons.map((pokemon)=>fetchPokemonJSON(pokemon))
  Promise.all(arrayDePromessas)
    .then((pokemonList) => {
      pokemonList.forEach((pokemon) => {
        const pokemonObjeto = { nome: pokemon.name, imageUrl: pokemon.sprites.front_default };
        append(pokemonObjeto);
      });
    })
    .catch((erro) => console.log(erro));
}

async function fetchPokemonAsynAwait() {
  try {
    const pokemonList = [
      await fetchPokemonJSON('pikachu'),
      await fetchPokemonJSON('bulbasaur'),
      await fetchPokemonJSON('squirtle'),
    ];
    pokemonList.forEach((objetoPokemon)=>{
      const pokemonObjeto = { nome: objetoPokemon.name, imageUrl: objetoPokemon.sprites.front_default };
        append(pokemonObjeto);
    })
  } catch (error) {
    console.log(error.message);
  }
} */

window.onload = fetchCoins()