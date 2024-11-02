//  El método reduce en JavaScript es muy poderoso para reducir un array a un único valor
//  (que puede ser un número, un objeto, una cadena, etc.), aplicando una función de acumulación 
//  sobre cada elemento del array.

/*La sintaxis básica de reduce...
estudiantes.reduce((acumulador, elementoActual, indice, arrayOriginal) => {
    // Lógica de acumulación
  }, valorInicial);
*/

/** 
  - acumulador: Es el valor acumulado que vamos construyendo a medida que recorremos el array.
  - elementoActual: El elemento actual que está siendo procesado.
  - indice: La posición del elemento actual (opcional).
  - arrayOriginal: El array completo que está siendo reducido (opcional).
  - valorInicial: El valor inicial del acumulador.
*/

const estudiantes = [
    { nombre: "Ana", edad: 20, calificacion: 85 },
    { nombre: "Luis", edad: 22, calificacion: 90 },
    { nombre: "Juan", edad: 21, calificacion: 78 },
    { nombre: "Maria", edad: 23, calificacion: 92 }
];

/*  1.  Total Calificaciones    */
function totalCalificaciones(){
    console.log("-------------- Total Calificaciones ---------------");

    const totalCalif = estudiantes.reduce((acumulador,estudiante) => {
        return acumulador + estudiante.calificacion;
    },0);

    console.log(totalCalif);
}

console.log("-------------- Array Inicial ---------------");
mostrarDatos(estudiantes);
totalCalificaciones();

/*  2.  Estudiante con calificaion más alta */
function estudianteCalificacionMayor(){
    console.log("---------- Estudiante Calificación Mayor -----------");

    const estdMyCalf = estudiantes.reduce((acumulador,estudiantes) => {
        return (estudiantes.calificacion > estudiantes.calificacion) ? acumulador : estudiantes;
    },0);

    console.log(estdMyCalf);
}
estudianteCalificacionMayor();

/*  3.  Agrupar estudiantes según aprobados o suspensos   */
function agruparAprobadoSuspenso(){
    console.log("---------- Estudiante Aprobado Suspenso -----------");

    const calificacion = estudiantes.reduce((acumulador,estudiantes) => {
        if(estudiantes.calificacion >= 50)
            acumulador.aprobado.push(estudiantes);
        else
            acumulador.suspemso.push(estudiantes);
        return acumulador;
    },{aprobado: [],suspenso: []});

    console.log(calificacion);
}

agruparAprobadoSuspenso();

/*  4.  Mostrar Datos   */
function mostrarDatos(datos){
    for (const dato of datos) {
        console.log(dato);
    }
}
