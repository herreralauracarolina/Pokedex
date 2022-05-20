
    document.addEventListener('DOMContentLoaded', () => {
         const random = getRandom(1, 151) 
         fetchData(random)
     })
  const getRandom = (min, max) => {
     return Math.floor(Math.random() * (max - min)) + min;
  }



    const fetchData = async (id)=> {
    try {
        const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
        const data = await res.json()
        mostrarCarta(data)
    }catch (error) {
        console.log(error);
    }
}



const mostrarCarta = (pokemon) => {//pokemon es la data de la funcion anterior
    console.log(pokemon)
    const imagen = document.querySelector('#ImagenPokemon')
    const neimo = document.querySelector('#TipoPokemon').innerHTML
    const id = document.querySelector('#IdPokemon').innerHTML
    const ability = document.querySelector('#InfoPokemon').innerHTML

    document.querySelector('#aquivaelpoke').setAttribute('src', pokemon.sprites.other.dream_world.front_default)
    document.querySelector('#aquivaeltipo').innerHTML= pokemon.name
    document.querySelector('#aquivaelid').innerHTML= pokemon.id
    document.querySelector('#aquivalainfo').innerHTML = pokemon.moves.move.name

    imagen.appendChild(imagen)
    neimo.appendChild(neimo)
    id.appendChild(id)
    ability.appendChild(name)
    
}


 