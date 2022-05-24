const getRandom = (min, max) => {
  return Math.floor(Math.random() * (max - min)) + min;
};

document.addEventListener("DOMContentLoaded", () => {
  const random = getRandom(1, 802);
  fetchData(random);
});

const fetchData = async (id) => {
  try {
    const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
    const data = await res.json();

    mostrarCarta(data);
  } catch (error) {
    console.log(error);
  }
};

const mostrarCarta = (pokemon) => {

  console.log(pokemon);  

  document.querySelector("#aquivaelpoke").setAttribute("src", pokemon.sprites.front_default);
  document.querySelector("#aquivaelnombre").textContent = pokemon.name;
  document.querySelector("#aquivaelid").textContent = pokemon.id;
  
  document.querySelector("#aquivaelstat1").textContent = "HP " + pokemon.stats[0].base_stat;
  document.querySelector("#aquivaelstat2").textContent = "ATK " + pokemon.stats[1].base_stat;
  document.querySelector("#aquivaelstat3").textContent = "DEF " + pokemon.stats[2].base_stat;
  document.querySelector("#aquivalalocation").textContent = "weight: " + pokemon.weight;

  document.querySelector("#aquivaeltype1").textContent = pokemon.types[0].type.name;

  document.querySelector("#aquivalainfo1").textContent = pokemon.abilities[0].ability.name;
  document.querySelector("#aquivalainfo2").textContent = pokemon.abilities[1].ability.name;
  document.querySelector("#aquivalainfo3").textContent = pokemon.abilities[2].ability.name;
  
  document.querySelector("#aquivaeltype1").textContent = pokemon.types[1].type.name;


};


// //const imagen = document.querySelector("#ImagenPokemon");
// const neimo = document.querySelector("#NombrePokemon");
// const id = document.querySelector("#IdPokemon");

