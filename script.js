const btn = document.querySelector("#btn")

function garcom(){
    let api  = fetch(`https://pokeapi.co/api/v2/pokemon/`)
    .then((res) => res.jason)
}

function gerarPokemon() {
   
}

btn.Eventlistener("click", gerarPokemon)