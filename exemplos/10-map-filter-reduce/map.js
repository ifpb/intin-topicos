// const lista = [1,2,3,4,5,6,7,8,9,10];

// const pares = lista.filter( (item) => item % 2 == 0);

// const impares = lista.filter( (item) => item % 2 != 0);

const pokemons = [{
    numero: 15,
    nome: "Pikachu",
    tipo: "Elétrico"
}, {
    numero: 1,
    nome: "Bulbasauro",
    tipo: "Grama"
}, {
    numero: 4,
    nome: "Charmander",
    tipo: "Fogo"
}, {
    numero: 7,
    nome: "Squirtle",
    tipo: "Água"
}, {
    numero: 9,
    nome: "Blastoise",
    tipo: "Água"
}, {
    numero: 9,
    nome: "Super Blastoise",
    tipo: "Água"
}];

const aquaticos = pokemons.filter((pokemon) => pokemon.tipo == 'Água' || pokemon.nome == 'Charmander');

const pokemonsContainer = document.querySelector("#pokemons");

pokemons.sort( (a,b) => a.nome < b.nome).sort((a, b) => a.numero > b.numero);
const pokemonsFormatado = pokemons.map((pokemon) => "<li>(#"+pokemon.numero+") Nome = " + pokemon.nome + " Tipo = " + pokemon.tipo + "</li>");
pokemonsContainer.innerHTML = "<ul>" + pokemonsFormatado.reduce((i1, i2) => i1 + i2) + "</ul>";
