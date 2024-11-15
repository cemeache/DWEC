
/**
 * Ejercicio 1: Buscar y mostrar información del Pokemon con FETCH
 */
/**
 * Función para buscar pokemon ejercicio 1 y 2.
 * 
*/

//https://pokeapi.co/api/v2/pokemon/rattata -> Accedes al pokemon rattata

async function buscarPokemon(){
    pokemonBsc = document.getElementById("pokemon-input").value;
    //console.log(`https://pokeapi.co/api/v2/pokemon/${pokemonBsc}`);
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonBsc}`);
    const pokemon = await response.json();
    
    //console.log(pokemon);
    
    const contenedor = document.getElementById("pokemon-data");

    let id = document.createElement('p');
    id.innerText = "ID: " + pokemon.id;
    contenedor.appendChild(id);

    let name = document.createElement('p');
    name.innerText = "Nombre: " + pokemon.name;
    contenedor.appendChild(name);

    
    console.log(pokemon.sprites);

    for (let i = 0; i < pokemon.sprites.length; i++) {
        const sprite = pokemon.sprites[i];
        console.log(sprite);
        let img = document.createElement('img');
        img.src = sprite;
        contenedor.appendChild(img);
    }
}
/**
 *  Descomentar para hacer uso de la función.
 */
//document.getElementById('search-btn').addEventListener('click',buscarPokemon);


/**
 * Ejercicio 3: buscar pokemon con JQuery AJAX.
 */

function buscarPokemonJQueryAJAX(){
    /**
     * Tu código aquí.
     */
}

/**
 * Haciendo uso de JQuery, descomentar para usar la función buscarPokemonJQueryAJAX
*/
/**
$(document).ready(function(){
    $('#search-btn').on('click', buscarPokemonJQueryAJAX);
}); 
*/
