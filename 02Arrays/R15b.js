/**********************************************************************************************
*             EJERCICIOS EXTRAS PARA PRACTICAR EL ACCESO A OBJETOS DENTRO DE UN ARRAY         *                                   
**********************************************************************************************/


const futbolistas = [
    {
        nombre: "Lionel Messi",
        equipo: "Inter Miami",
        posicion: "Delantero",
        partidosJugados: [
            { rival: "Orlando City", goles: 1, asistencias: 2, tarjetaAmarilla: false, tarjetaRoja: false },
            { rival: "LA Galaxy", goles: 2, asistencias: 1, tarjetaAmarilla: true, tarjetaRoja: false },
            { rival: "New York Red Bulls", goles: 0, asistencias: 0, tarjetaAmarilla: false, tarjetaRoja: false }
        ]
    },
    {
        nombre: "Cristiano Ronaldo",
        equipo: "Al Nassr",
        posicion: "Delantero",
        partidosJugados: [
            { rival: "Al Hilal", goles: 1, asistencias: 0, tarjetaAmarilla: true, tarjetaRoja: false },
            { rival: "Al Shabab", goles: 2, asistencias: 1, tarjetaAmarilla: false, tarjetaRoja: false },
            { rival: "Al Ahli", goles: 0, asistencias: 1, tarjetaAmarilla: false, tarjetaRoja: true }
        ]
    },
    {
        nombre: "Kevin De Bruyne",
        equipo: "Manchester City",
        posicion: "Mediocampista",
        partidosJugados: [
            { rival: "Liverpool", goles: 0, asistencias: 2, tarjetaAmarilla: false, tarjetaRoja: false },
            { rival: "Chelsea", goles: 0, asistencias: 1, tarjetaAmarilla: true, tarjetaRoja: false },
            { rival: "Manchester United", goles: 0, asistencias: 3, tarjetaAmarilla: false, tarjetaRoja: false }
        ]
    }
];

/**
 * ACT 1 - EXTRA: Calcular el total de goles y asistencias de cada jugador: 
*/

function jugadorGolesAsistencias(){
    let estadisticas = {};
    for (let i = 0; i < futbolistas.length; i++) {
        const futbolista = futbolistas[i];
        for (let j = 0; j < futbolista.partidosJugados.length; j++) {
            if(!estadisticas[futbolista.nombre])
                estadisticas[futbolista.nombre] = {goles : 0,asistencias : 0};
            estadisticas[futbolista.nombre].goles += futbolista.partidosJugados[j].goles;
            estadisticas[futbolista.nombre].asistencias += futbolista.partidosJugados[j].asistencias;
        }
    }
    console.log(estadisticas);
}

jugadorGolesAsistencias();

/**
 * ACT 2 - EXTRA: Filtrar jugadores con tarjetas rojas en algún partido: Encuentra a los jugadores que hayan 
 *  recibido al menos una tarjeta roja en algún partido.
*/

function jugadoresTarjetas(){
    let jugadoresTarjetas = {tarjetaAmarilla: [], tarjetaRoja: []};
    for (let i = 0; i < futbolistas.length; i++) {
        const futbolista = futbolistas[i];
        for (let j = 0; j < futbolista.partidosJugados.length; j++) {
            const partido = futbolista.partidosJugados[j];
            if(partido.tarjetaAmarilla === true)
                jugadoresTarjetas.tarjetaAmarilla.push(futbolista.nombre);
            if(partido.tarjetaRoja === true)
                jugadoresTarjetas.tarjetaRoja.push(futbolista.nombre);
        }
    }
    console.log(jugadoresTarjetas);
}
jugadoresTarjetas();


/**
 * ACT 3 - EXTRA: Listar los rivales en los que un jugador específico anotó: Pide el nombre de un jugador y,
 *   si existe en el array, devuelve una lista de los equipos rivales contra los que anotó.
*/
function rivalJugadorAnoto(){
    let estadisticas = {};
    for (let i = 0; i < futbolistas.length; i++) {
        const futbolista = futbolistas[i];
        for (let j = 0; j < futbolista.partidosJugados.length; j++) {
            const partido = futbolista.partidosJugados[j];
            if(partido.goles > 0){
                if(!estadisticas[futbolista.nombre])
                    estadisticas[futbolista.nombre] = [];
                estadisticas[futbolista.nombre].push(partido.rival);
            }
        }
    }
    console.log(estadisticas);
}

rivalJugadorAnoto();

/**
 * ACT 4 - EXTRA: Calcular el promedio de tarjetas amarillas por jugador en sus partidos: Calcula el promedio de 
 *  tarjetas amarillas recibidas en los partidos para cada jugador.
*/

function promedioYellowCards(){
    let promedioYellowCards = {};
    for (let i = 0; i < futbolistas.length; i++) {
        const futbolista = futbolistas[i];
        for (let j = 0; j < futbolista.partidosJugados.length; j++) {
            const partido = futbolista.partidosJugados[j];
            if(!promedioYellowCards[futbolista.nombre])
                promedioYellowCards[futbolista.nombre] = 0;
            promedioYellowCards[futbolista.nombre] += partido.tarjetaAmarilla;
        }
        promedioYellowCards[futbolista.nombre] /= futbolista.partidosJugados.length;
    }
    console.log(promedioYellowCards);
}
promedioYellowCards();


/**
 * ACT 5 - EXTRA: Contar los jugadores con al menos un gol en todos sus partidos: Filtra los jugadores que hayan 
 *  anotado al menos un gol en cada uno de sus partidos.
*/

function goleadores(){
    let goleadores = [];
    for (let i = 0; i < futbolistas.length; i++) {
        const futbolista = futbolistas[i];
        for (let j = 0; j < futbolista.partidosJugados.length; j++) {
            const partido = futbolista.partidosJugados[j];
            if(partido.goles > 0)
                if(!goleadores.includes(futbolista.nombre))
                    goleadores.push(futbolista.nombre);
        }
    }
    console.log(goleadores);
}
goleadores();