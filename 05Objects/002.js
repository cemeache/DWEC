/* Segunda parte (carga de datos directamente del fichero .txt)

Para cargar el fichero de texto y realizar la simulación de la carga de un archivo externo
(bien sea .txt o .json), utilizaremos la función fetch, la cual nos permite realizar solicitudes
HTTP y obtener datos de un recurso externo. En una aplicación real, este archivo podría
estar alojado en un servidor.

Comprobar mediante los ejercicios de la parte 1 que la carga con fetch se realiza
correctamente. */

function cargarDatosFetch() {
    fetch('./empleados2DAW.txt') // Ruta Archivo
        .then(response => {
            if (!response.ok)
                throw new Error('Error al cargar el archivo');
            return response.text(); // Leemos archivo como texto
        })
        .then(data => {
            // Convertimos los datos a objetos
            let empleado = cargarDatos(data);

            // Mostrar los empleados cargados
            mostrarEmpleados(empleado);

        })
        .catch(error => {
            console.log('Error:', error);
        });
}

/* Funcion para cargar datos */
function cargarDatos(dataEmpleados) {
    let personas = dataEmpleados.split('\n');
    let datosPersona = new Array();

    for (let i = 0; i < personas.length; i++)
        datosPersona[i] = personas[i].split(',');

    let empleado = [];

    for (let i = 0; i < datosPersona.length; i++) {
        let datosEmpleado = {
            id: datosPersona[i][0],
            nombre: datosPersona[i][1],
            edad: datosPersona[i][2],
            sexo: datosPersona[i][3],
            puesto: datosPersona[i][4],
        };
        empleado.push(datosEmpleado);
    }

    return empleado;
}

/* Mostrar datos */
function mostrarEmpleados(empleados) {
    console.log("Empleados:");
    empleados.forEach(empleado => {
        console.log(`ID: ${empleado.id}, Nombre: ${empleado.nombre}, Edad: ${empleado.edad}, Sexo: ${empleado.sexo}, Puesto: ${empleado.puesto}`);
    });
}

/* Crear una función para buscar un empleado por el número de documento.
Implementar una función que nos permita buscar un empleado por su número de
documento dentro del array y nos devuelva toda la información asociada a este. */

function buscarId(empleados, idBuscar) {
    for (let i = 0; i < empleados.length; i++)
        if (empleados[i].id === idBuscar)
            return empleados[i];
    return false;
}

/* Crear una función que nos permita agregar a un empleado nuevo al registro (array). */
function addEmpleado(empleados) {
    let newEmpleado = {
        id: prompt("ID: "),
        nombre: prompt("Nombre: "),
        edad: prompt("Edad: "),
        sexo: prompt("Sexo: "),
        puesto: prompt("Puesto: "),
    };
    empleados.push(newEmpleado);
}

/* Crear una función que nos permita eliminar a un empleado dado su número de
documento. */
function removeEmpleado(empleados, idEmplRmv) {
    let i;
    for (i = 0; i < empleados.length && empleados[i].id != idEmplRmv; i++);
    if (i >= empleados.length)
        console.log(`Empleado con ID ${idEmplRmv} no encontrado.`);
    else {
        empleados.splice(i, 1); // SPLICE --> Elimina ese elemento del array
        console.log(`Empleado con ID ${idEmplRmv} eliminado.`);
    }
}

/* MAIN */
cargarDatosFetch(); 