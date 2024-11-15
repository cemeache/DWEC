
/**
 * Ejercicio 1: Buscar y mostrar información del Pokemon con FETCH
 */
/**
 * Función para buscar pokemon ejercicio 1 y 2.
 * 
*/

//https://pokeapi.co/api/v2/pokemon/rattata -> Accedes al pokemon rattata

async function buscarPokemon(){
    pokemon = document.getElementById("pokemon-input").value;
    //console.log(`https://pokeapi.co/api/v2/pokemon/${pokemon}`);
    fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`)
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
