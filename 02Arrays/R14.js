const personas = [
    { nombre: "Ana", edad: 25, ciudad: "Madrid" },
    { nombre: "Luis", edad: 30, ciudad: "Barcelona" },
    { nombre: "Sara", edad: 22, ciudad: "Sevilla" },
    { nombre: "Miguel", edad: 28, ciudad: "Valencia" },
    { nombre: "Maria", edad: 21, ciudad: "Sevilla" },
    { nombre: "Adriana", edad: 21, ciudad: "Barcelona" },
    { nombre: "Celia", edad: 18, ciudad: "Sevilla" }
];


/**
 *  1. Obtener un array con todos los nombres
 */
function arrayNombres(){
    let nombres = [];
    for(i=0;i<personas.length;i++)
        nombres[i]=personas[i].nombre;
    console.log(nombres);
}

arrayNombres();

/**
 *  2. Encontrar a la persona con nombre "Sara" y mostrar su nombre y edad
 */
function buscarByNombre(){
    for(i=0;i<personas.length && personas[i].nombre != "Sara";i++);
    if(i<personas.length)
        console.log(personas[i].nombre + "," + personas[i].edad);
    else
        console.log("No encontrado");
}
buscarByNombre();

/**
 *  3. Almacenar en un array nuevo llamado "mayoresDe25" todas las personas que sean mayores de 25 y mostrarlos por pantalla
 */
function arrayMayores25(){
    let mayoresDe25 = [];
    for (let i = 0; i < personas.length; i++) {
        if(personas[i].edad>25)
            mayoresDe25.push(personas[i]);
    }
    console.log(mayoresDe25);
}
arrayMayores25();

/**
 *  4. Calcular la edad promedio de todas las personas
 */
function edadPromedio(){
    let mediaEdad = 0;
    for (let i = 0; i < personas.length; i++) 
        mediaEdad += personas[i].edad;  
    mediaEdad /= personas.length;
    console.log(mediaEdad);
}
edadPromedio();

/**
 *  5. Agregar una nueva propiedad (atributo) a cada persona, por ejemplo, un valor booleano que se llame "activoEnTrabajo"
 */
function addPropiedad(){
    for (let i = 0; i < personas.length; i++)
        personas[i].activoTrabajo = false;
    console.log(personas);
}
addPropiedad();

/**
 *  6. Listar todas las ciudades sin duplicar
 */
function listarCiudades(){
    let ciudades = [];
    for (let i = 0; i < personas.length; i++)
        if(!ciudades.includes(personas[i].ciudad))
            ciudades.push(personas[i].ciudad);
    console.log(ciudades);
}
listarCiudades();

/**
 *  7. Ordenar el array por edad (de menor a mayor)
 */
function ordenarByEdad(){
    personas.sort((a,b) => a.edad - b.edad);
    console.log(personas);
}
ordenarByEdad();

/**
 *  8. Contar el número de personas por ciudad.
 */
function numPersPorCiudad(){
    let perCiu = [];
    for (let i = 0; i < personas.length; i++) {
        if(!perCiu[personas[i].ciudad])
            perCiu[personas[i].ciudad] = 0;
        perCiu[personas[i].ciudad] += 1; 
    }
    console.log(perCiu);
}
numPersPorCiudad();

/**
 *  9. Obtener el objeto de persona con mayor edad y mostrar su nombre, edad y ciudad
 */
function personaMayorEdad(){
    personas.sort((a,b) => b.edad-a.edad);
    console.log(personas[0]);
}
personaMayorEdad();

/**
 * 10. Comprobar si todas las personas son mayores de 20 años y mostrar un mensaje 
 * por pantalla ("Son mayores de 20") en caso de que sea cierto.
 */
function sonMayores20(){
    for (i = 0; i < personas.length && personas[i].edad > 20; i++);
    if(i < personas.length)
        console.log("No son mayores de 20");
    else
        console.log("Son mayores de 20");
}
sonMayores20();