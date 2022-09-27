var pokemons = []

fetch('https://pokeapi.co/api/v2/pokemon?limit=9&offset=0')
    .then((resposta) => resposta.json())
    .then((resposta) => Promise.all(resposta.results.map((pokemon) => 
    fetch(pokemon.url)
        .then((resposta) => resposta.json())
        .then((resposta) => {
            pokemon.push({
                id: resposta.id,
                name: resposta.name, 
                image:resposta.sprites.other.dream_world.front_default
            })
        })
    )))
    .finally(() => console.log(pokemons)) 