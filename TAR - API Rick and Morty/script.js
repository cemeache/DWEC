function recapInfo(){
  fetch('https://rickandmortyapi.com/api/character') // Ruta Archivo
        .then(response => {
            if (!response.ok)
                throw new Error('Error al cargar el archivo');
            return response.json(); // Leemos archivo como json
        })
        .then(data => {
            mostrarPersonaje(data);
        })
        .catch(error => {
            console.log('Error:', error);
        });  
}

function mostrarPersonaje(data) {
    const contenedor = document.getElementById('contenedor-imagenes');
    for (let i = 0; i < data.results.length; i++) {
        const personaje = data.results[i];
        const img = document.createElement('img');
        img.src = personaje.image;
        img.style.width = '20%';
        contenedor.appendChild(img);
    }
}