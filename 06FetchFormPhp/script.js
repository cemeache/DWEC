//Añadimos un evento al Form para que no realice el envío a php
document.getElementById("form").addEventListener('submit', async function (event) {
    event.preventDefault();    

    const identf = document.getElementById('identf').value;
    const pswd = document.getElementById('pswd').value;

    //Creamos Objeto con los datos del form
    const formData = new FormData();
    formData.append('identificador',identf);
    formData.append('contrasenia',pswd);

    try {
        const response = await fetch ('iniSsn.php',{
            method: 'POST',
            body: formData,
        });

        //Verificamos si la respuesta del server es correcta
        if(response.ok){
            const result = await response.text();
            document.getElementById('resultado').innerText = `Respuesta del server: ${result}`;
        }else
            document.getElementById('resultado').innerText = `Error al enviar los datos`;
    } catch (error) {
        console.error('Error:', error);
        document.getElementById('resultado').innerText = 'Error de conexión';
    }
});

