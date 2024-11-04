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
            { rival: "Liverpool", goles: 1, asistencias: 2, tarjetaAmarilla: false, tarjetaRoja: false },
            { rival: "Chelsea", goles: 0, asistencias: 1, tarjetaAmarilla: true, tarjetaRoja: false },
            { rival: "Manchester United", goles: 0, asistencias: 3, tarjetaAmarilla: false, tarjetaRoja: false }
        ]
    }
];

/**
 * ACT 1 - EXTRA: Calcular el total de goles y asistencias de cada jugador: 
 *  Usa map() y reduce() para calcular el total de goles y asistencias de cada jugador en sus partidos.
*/
function golesAsistenciasTotalesJugador(){
    let estadisticas = {};
    for (let i = 0; i < futbolistas.length; i++) {
        const futbolista = futbolistas[i];
        //Add if no exits
        if(!estadisticas[futbolista.nombre]){
            estadisticas[futbolista.nombre] = {
                goles: 0,
                asistencias: 0
            };
        }
        //Acumular goles y asistencias del jugador
        for (let j = 0; j < futbolista.partidosJugados.length; j++) {
            estadisticas[futbolista.nombre].goles += futbolista.partidosJugados[j].goles;
            estadisticas[futbolista.nombre].asistencias += futbolista.partidosJugados[j].asistencias;
        }
    }
    console.log(estadisticas);
}

golesAsistenciasTotalesJugador();

/**
 * ACT 2 - EXTRA: Filtrar jugadores con tarjetas rojas en algún partido: Encuentra a los jugadores que hayan 
 *  recibido al menos una tarjeta roja en algún partido.
*/
function jugadoresTarjetasRojas(){
    let jugadoresRojos = {};
    for (let i = 0; i < futbolistas.length; i++) {
        const futbolista = futbolistas[i];

        for (let j = 0; j < futbolista.partidosJugados.length; j++) {
            if (futbolista.partidosJugados[j].tarjetaRoja === true)
                if(!jugadoresRojos[futbolista.nombre])
                    jugadoresRojos[futbolista.nombre] == true;
        }
    }
    console.log(jugadoresRojos);
}
jugadoresTarjetasRojas();

function jugadoresTarjetasRojas(){
    let jugadoresRojos = [];
    for (let i = 0; i < futbolistas.length; i++) {
        const futbolista = futbolistas[i];

        for (let j = 0; j < futbolista.partidosJugados.length; j++) {
            if (futbolista.partidosJugados[j].tarjetaRoja === true)
                if(!jugadoresRojos.includes(futbolista.nombre))
                    jugadoresRojos.push(futbolista.nombre);
        }
    }
    console.log(jugadoresRojos);
}
jugadoresTarjetasRojas();

/**
 * ACT 3 - EXTRA: Listar los rivales en los que un jugador específico anotó: Pide el nombre de un jugador y,
 *   si existe en el array, devuelve una lista de los equipos rivales contra los que anotó.
*/
function golesVsRivales(){
    let listaJugadores = {};
    for (let i = 0; i < futbolistas.length; i++) {
        const futbolista = futbolistas[i];
        
        if(!listaJugadores[futbolista.nombre])
            listaJugadores[futbolista.nombre] = {rival: []};

        for (let j = 0; j < futbolista.partidosJugados.length; j++) {
            if(futbolista.partidosJugados[j].goles > 0)
                listaJugadores[futbolista.nombre].rival.push(futbolista.partidosJugados[j].rival);            
        }
    }

    console.log(listaJugadores);
}
golesVsRivales();

/**
 * ACT 4 - EXTRA: Calcular el promedio de tarjetas amarillas por jugador en sus partidos: Calcula el promedio de 
 *  tarjetas amarillas recibidas en los partidos para cada jugador.
*/
function promedioTarjetasAmarillasJugador(){
    let jugadoresYellow = [];
    for (let i = 0; i < futbolistas.length; i++) {
        const futbolista = futbolistas[i];
        for (let j = 0; j < futbolista.partidosJugados.length; j++) {
            if(!jugadoresYellow.includes(futbolista.nombre))
                jugadoresYellow[futbolista.nombre] = 0;

            if (futbolista.partidosJugados[j].tarjetaAmarilla === true) {
                jugadoresYellow[futbolista.nombre] += 1;
            }
        }        
        jugadoresYellow[futbolista.nombre] /= futbolista.partidosJugados.length;
    }
    console.log(jugadoresYellow);
}

promedioTarjetasAmarillasJugador();

/**
 * ACT 5 - EXTRA: Contar los jugadores con al menos un gol en todos sus partidos: Filtra los jugadores que hayan 
 *  anotado al menos un gol en cada uno de sus partidos.
*/