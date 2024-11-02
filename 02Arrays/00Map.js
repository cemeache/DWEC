const estudiantes = [
    { nombre: "Ana", edad: 20, calificacion: 85 },
    { nombre: "Luis", edad: 22, calificacion: 90 },
    { nombre: "Juan", edad: 21, calificacion: 78 },
    { nombre: "Maria", edad: 23, calificacion: 92 }
];

// Sintaxis básica de map
estudiantes.map((elemento, indice, arrayOriginal) => {
    // Transformación que queremos aplicar
});

/*  1.  Obtener los nombres de todos los estudiantes    */
function nombreAllEstd(){
    console.log("------------ Obtención Nombres -------------");
    let nombres = estudiantes.map(estudiante => estudiante.nombre);

    mostrarDatos(nombres);
}

console.log("------------ Array Inicial -------------");
mostrarDatos(estudiantes);
nombreAllEstd();

/*  2.  Aumentar la calificación de cada estudiante en 5 puntos */
function aumentarCalificacion(){
    console.log("-------------- Aumento Calificaciones ---------------");
    let calificaciones = estudiantes.map(estudiante => estudiante.calificacion + 5);

    mostrarDatos(calificaciones);
}
aumentarCalificacion();

/*  3.  Mensaje personalizado para cada estudiante mostrando su nombre junto con su calificación*/
function mensajePersonalizado(){
    console.log("------------ Mensaje Personalizado -------------");

    let mensajes = estudiantes.map(estudiante => `El estudiante ${estudiante.nombre} tiene como calificaión ${estudiante.calificacion}`);

    mostrarDatos(mensajes);
}

mensajePersonalizado();

/*  4.  Mostrar datos   */
function mostrarDatos(datos = []){
    for (const dato of datos) {
        console.log(dato);
    }
}