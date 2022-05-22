
    document.addEventListener('DOMContentLoaded', () => {
        const random = getRandom(1, 802) 
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
   const neimo = document.querySelector('#NombrePokemon').textContent
   const id = document.querySelector('#IdPokemon').textContent
   const abilites = document.querySelector('#InfoPokemon1').textContent

   document.querySelector('#aquivaelpoke').setAttribute('src', pokemon.sprites.other.dream_world.front_default)
   document.querySelector('#aquivaelnombre').textContent= pokemon.name
   document.querySelector('#aquivaelid').textContent= pokemon.id
   document.querySelector('#aquivalainfo1').textContent = pokemon.stat.name


   imagen.appendChild(imagen)
   neimo.appendChild(neimo)
   id.appendChild(id)
   
}


 