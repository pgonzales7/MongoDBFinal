const pokemonContainer = document.querySelector(".pokemon-container");


getFavoritos()
function getFavoritos() {
  const storage = JSON.parse(localStorage.getItem("usuario"))

  fetch("http://localhost:9000/api/users/favorites/" + storage._id, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json'
    },
  })
    .then((response) => response.json())
    .then((data) => {
      const favoritos = data.favoritos;

      if (favoritos.length > 0) {
        for (const index in favoritos) {
          createPokemon(favoritos[index])
        }
      }
    });
}

function createPokemon(pokemon) {
  const card = document.createElement("div");
  card.classList.add("pokemon-block");

  const spriteContainer = document.createElement("div");
  spriteContainer.classList.add("img-container");

  const sprite = document.createElement("img");
  sprite.src = pokemon.img

  spriteContainer.appendChild(sprite);

  const number = document.createElement("p");
  number.textContent = pokemon.type;

  const name = document.createElement("p");
  name.classList.add("name");
  name.textContent = pokemon.name;

  const removeButton = document.createElement("button");
  removeButton.textContent = "Quitar de Favoritos";
  removeButton.classList.add("remove-button", "btn", "btn-danger");

  // Agregar el botón de eliminar a la tarjeta de pokémon
  card.appendChild(removeButton);
  pokemonContainer.appendChild(card);

  removeButton.addEventListener("click", () => {
    let obj = { favorito: { name: pokemon.name, type: pokemon.type, img: pokemon.img } }
    //obtener id del usuario
    const storage = JSON.parse(localStorage.getItem("usuario"))
    fetch("http://localhost:9000/api/users/favorites/" + storage._id, {
      method: 'DELETE',
      body: JSON.stringify(obj),
      headers: {
        'Content-Type': 'application/json'
      },
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.modifiedCount == 1) {
          alert('pokemon eliminado')
          location.reload();
        }
        console.log(data)
      });
  });



  card.appendChild(spriteContainer);
  card.appendChild(number);
  card.appendChild(name);
  pokemonContainer.appendChild(card);

}


