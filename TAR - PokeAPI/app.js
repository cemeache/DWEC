
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

    try {
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonBsc}`);

        if(!response.ok)
            throw new Error("Pokemon no encontrado");
        
        const pokemon = await response.json();
        
        const contenedor = document.getElementById("pokemon-data");
        
        let name = document.createElement('h4');
        name.innerText = "Nombre: " + pokemon.name;
        contenedor.appendChild(name);
        
        let id = document.createElement('p');
        id.innerText = "ID: " + pokemon.id;
        contenedor.appendChild(id);

        let img = document.createElement('img');
        img.src = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.id}.png`;
        contenedor.appendChild(img);
    } catch (error) {
        alert(error);
    }
    //console.log(`https://pokeapi.co/api/v2/pokemon/${pokemonBsc}`);
}

async function buscarPokemonVol2(){
    pokemonBsc = document.getElementById("pokemon-input").value;
    
    fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonBsc}`)
    .then(response => {
        if(!response.ok)
            throw new Error("Pokemon no encontrado");
        return response.json();
    })
    .then(data => {
        const contenedor = document.getElementById("pokemon-data");
    
        let name = document.createElement('h4');
        name.innerText = "Nombre: " + data.name;
        contenedor.appendChild(name);
        
        let id = document.createElement('p');
        id.innerText = "ID: " + data.id;
        contenedor.appendChild(id);

        let img = document.createElement('img');
        img.src = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${data.id}.png`;
        contenedor.appendChild(img);
    })
    .catch(error => {
        console.log("Error: ", error)
    });

}


/**
 *  Descomentar para hacer uso de la función.
 */
document.getElementById('search-btn').addEventListener('click',buscarPokemon);


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
