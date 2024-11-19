
/**
 * Ejercicio 1: Buscar y mostrar información del Pokemon con FETCH
 */
/**
 * Función para buscar pokemon ejercicio 1 y 2.
 * 
*/

//https://pokeapi.co/api/v2/pokemon/rattata -> Accedes al pokemon rattata

/*---------- EJER1 ----------*/
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
}

/*---------- EJER2 ----------*/
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
//document.getElementById('search-btn').addEventListener('click',buscarPokemon);


/**
 * Ejercicio 3: buscar pokemon con JQuery AJAX.
 */

function buscarPokemonJQueryAJAX(){
    pokemonBsc = $('#pokemon-input').val();  //pokemonBsc = document.getElementById("pokemon-input").value;
    coleccion = [];

    $.ajax({
        url: `https://pokeapi.co/api/v2/pokemon/${pokemonBsc}`,
        method: 'GET',
        success: function(pokemon){
            const contenedor = $('#pokemon-data');
            
            //Borrar contenido #pokemon-data
            contenedor.empty(); 
            
            const name = $('<h4>').text("Nombre: " + pokemon.name);
            contenedor.append(name);

            const id = $('<p>').text("ID: " + pokemon.id);
            contenedor.append(id);

            const img = $('<img>').attr('src', `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.id}.png`);
            contenedor.append(img);
        },
        error: function(){
            alert("Pokemon no encontrado");
        }
    })
}

/**
 * Haciendo uso de JQuery, descomentar para usar la función buscarPokemonJQueryAJAX
*/

/*$(document).ready(function(){
    $('#search-btn').on('click', buscarPokemonJQueryAJAX);
}); */


/**
 * Ejercicio 4: Crear una lista de Pokémon capturados
 */

function buscarPokemonJQueryAJAXEjer4(){
    pokemonBsc = $('#pokemon-input').val();  //pokemonBsc = document.getElementById("pokemon-input").value;
    coleccion = [];

    $.ajax({
        url: `https://pokeapi.co/api/v2/pokemon/${pokemonBsc}`,
        method: 'GET',
        success: function(pokemon){
            const contenedor = $('#pokemon-data');
            
            //Borrar contenido #pokemon-data
            contenedor.empty(); 
            
            const name = $('<h4>').text("Nombre: " + pokemon.name);
            contenedor.append(name);

            const id = $('<p>').text("ID: " + pokemon.id);
            contenedor.append(id);

            const img = $('<img>').attr('src', `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.id}.png`);
            contenedor.append(img);

            const addColec = $('<button>').text("Agregar a la colección");
            addColec.attr('id','agregar-collection');
            contenedor.append(addColec);   
            
            $(document).on('click','agregar-collection',agregarColeccion(coleccion,pokemon));
        },
        error: function(){
            alert("Pokemon no encontrado");
        }
    })
}

function agregarColeccion(coleccion,pokemon){
    coleccion.push({
        nombre: pokemon.name,
        sprite: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.id}.png`
    });
    console.log('coleccion');
}

$(document).ready(function(){
    $('#search-btn').on('click', buscarPokemonJQueryAJAXEjer4);
});
