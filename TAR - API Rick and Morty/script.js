fetch('https://rickandmortyapi.com/api/character') // Ruta Archivo
        .then(response => {
            if (!response.ok)
                throw new Error('Error al cargar el archivo');
            return response.json(); // Leemos archivo como json
        })
        .then(data => {
            mostrarPersonajes(data);
        })
        .catch(error => {
            console.log('Error:', error);
        });

function mostrarPersonajes(data){
    console.log(data.results);
    for (let i = 0; i < data.length; i++) {
        const personajes = data.results;
        console.log(personajes);
        for (let j = 0; j < personajes.length; j++) {
            const personaje = personajes[j].episode;
            console.log(personaje);
            for (let x = 0; x < personaje.length; x++) {
                const img = personaje[x];
                document.createElement('<img src="' + img[x] + '>"');
                console.log(img);
            }
        }
    }
}