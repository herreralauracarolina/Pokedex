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
  const imagen = document.querySelector("#ImagenPokemon");
  const neimo = document.querySelector("#NombrePokemon");
  const id = document.querySelector("#IdPokemon");
  const ability = document.querySelector("#InfoPokemon1");
  

  document.querySelector("#aquivaelpoke").setAttribute("src", pokemon.sprites.front_default);
  document.querySelector("#aquivaelnombre").textContent = pokemon.name;
  document.querySelector("#aquivaelid").textContent = pokemon.id;
  document.querySelector("#aquivalainfo1").textContent = pokemon.abilities[0].ability.name;
  document.querySelector("#aquivalainfo2").textContent = pokemon.abilities[1].ability.name;
  document.querySelector("#aquivalainfo3").textContent = pokemon.abilities[2].ability.name;
  document.querySelector("#aquivalainfo4").textContent = pokemon.abilities[3].ability.name; 

  imagen.appendChild(imagen);
  neimo.appendChild(neimo);
  id.appendChild(id);
  ability.appendChild(ability);
};
