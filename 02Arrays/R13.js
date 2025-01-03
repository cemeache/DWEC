/**********************************************************************************************
*               EJERCICIOS PARA PRACTICAR EL ACCESO A OBJETOS DENTRO DE UN ARRAY              *
**********************************************************************************************/

/**********************************************************************************************
 *     - ACT 1 - Realizar una función para filtrar los jugadores que tengan más de 20 goles   *
 *     - ACT 2 - Obtener el total de goles de todos los jugadores                             *
 *     - ACT 3 - Ordenar los jugadores por asistencias (de mayor a menor)   	              *
 *     - ACT 4 - Contar tarjetas rojas y amarillas por equipo                                 *
 *     - ACT 5 - Obtener el promedio de goles por partido para cada jugador                   *
 *     - ACT 6 - Encontrar el jugador con más asistencias                                     *
 *     - ACT 7 - Listar los nombres de los jugadores por posición                             *
 *********************************************************************************************/

const futbolistas = [
    {
        nombre: "Lionel Messi",
        equipo: "Inter Miami",
        posicion: "Delantero",
        goles: 40,
        asistencias: 18,
        partidosJugados: 30,
        tarjetaAmarilla: 3,
        tarjetaRoja: 0
    },
    {
        nombre: "Cristiano Ronaldo",
        equipo: "Al Nassr",
        posicion: "Delantero",
        goles: 35,
        asistencias: 12,
        partidosJugados: 28,
        tarjetaAmarilla: 5,
        tarjetaRoja: 1
    },
    {
        nombre: "Kevin De Bruyne",
        equipo: "Manchester City",
        posicion: "Mediocampista",
        goles: 10,
        asistencias: 22,
        partidosJugados: 25,
        tarjetaAmarilla: 2,
        tarjetaRoja: 0
    },
    {
        nombre: "Virgil van Dijk",
        equipo: "Liverpool",
        posicion: "Defensa",
        goles: 5,
        asistencias: 3,
        partidosJugados: 27,
        tarjetaAmarilla: 4,
        tarjetaRoja: 1
    },
    {
        nombre: "Thibaut Courtois",
        equipo: "Real Madrid",
        posicion: "Portero",
        goles: 0,
        asistencias: 1,
        partidosJugados: 29,
        tarjetaAmarilla: 2,
        tarjetaRoja: 0
    },
    {
        nombre: "Erling Haaland",
        equipo: "Manchester City",
        posicion: "Delantero",
        goles: 45,
        asistencias: 5,
        partidosJugados: 30,
        tarjetaAmarilla: 3,
        tarjetaRoja: 0
    },
    {
        nombre: "Kylian Mbappé",
        equipo: "Paris Saint-Germain",
        posicion: "Delantero",
        goles: 42,
        asistencias: 10,
        partidosJugados: 29,
        tarjetaAmarilla: 2,
        tarjetaRoja: 0
    },
    {
        nombre: "Neymar Jr",
        equipo: "Al-Hilal",
        posicion: "Delantero",
        goles: 20,
        asistencias: 15,
        partidosJugados: 26,
        tarjetaAmarilla: 4,
        tarjetaRoja: 1
    }
];


/*--- ACT 1 - Realizar una función para filtrar los jugadores que tengan más de 20 goles ---*/
function filtrarGoles(){
    for(let i = 0; i<futbolistas.length;i++){
        if(futbolistas[i].goles > 20)
            console.log(futbolistas[i]);
    } 
    console.log("-----------------------------------------------------------------------");   
}

filtrarGoles();

/*--- ACT 2 - Obtener el total de goles de todos los jugadores ---*/

function totalGoles(){
    let tg = 0;
    for(let i = 0; i<futbolistas.length;i++){
        tg += futbolistas[i].goles;
    }    
    console.log(tg);
    console.log("-----------------------------------------------------------------------"); 
}

totalGoles();

/*--- ACT 3 - Ordenar los jugadores por asistencias (de mayor a menor) ---*/

function ordenarAsistencia(){
    futbolistas.sort((a, b) => b.asistencias - a.asistencias);
    console.log(futbolistas);
    console.log("-----------------------------------------------------------------------"); 
}

ordenarAsistencia();

/*--- ACT 4 - Contar tarjetas rojas y amarillas por equipo ---*/

function contarTarjetasEquipo(){

    const tarjetas = {};
    for(i=0;i<futbolistas.length;i++){
        const equipo = futbolistas[i].equipo;
        if(!tarjetas[equipo]){
            tarjetas[equipo] = [0,0];
        }
        tarjetas[equipo][0] += futbolistas[i].tarjetaAmarilla;
        tarjetas[equipo][1] += futbolistas[i].tarjetaRoja;
    }

    for (const equipo in tarjetas) {
        const numTarj = tarjetas[equipo];
        console.log(equipo + ' : ' + numTarj.join(', '));        
    }

    console.log("-----------------------------------------------------------------------"); 
}

contarTarjetasEquipo();

/*--- ACT 5 - Obtener el promedio de goles por partido para cada jugador ---*/

function promedioGoles(){
    for(let i = 0;i<futbolistas.length;i++)
        console.log(futbolistas[i].nombre + " => " + futbolistas[i].goles / futbolistas[i].partidosJugados);
    console.log("-----------------------------------------------------------------------"); 
}

promedioGoles();

/*--- ACT 6 - Encontrar el jugador con más asistencias ---*/

function jugadorMayorAsistencias() {
    let maxAsistencias = 0;
    let jugador = null;
    for (let i = 0; i < futbolistas.length; i++)
        if (futbolistas[i].asistencias > maxAsistencias) {
            maxAsistencias = futbolistas[i].asistencias;
            jugador = futbolistas[i];
        }
    console.log(jugador);
    console.log("-----------------------------------------------------------------------"); 
}

jugadorMayorAsistencias();

/*--- ACT 7 - Listar los nombres de los jugadores por posición ---*/
function listarJugadoresPorPosicion() {
    const posiciones = {};

    for (let i = 0; i < futbolistas.length; i++) {
        const posicion = futbolistas[i].posicion;
        // Si no existe esa posición en el objeto la crea 
        if (!posiciones[posicion]) {
            posiciones[posicion] = [];
        }
        posiciones[posicion].push(futbolistas[i].nombre);
    }

    // Recorre el objeto 'posiciones' con 'posicion' como índice
    for (const posicion in posiciones) {
        // Guarda todos los nombres de esa posición en un array
        const nombres = posiciones[posicion];
        //Separa los elementos del array por ',' cuando hay varios jugadores en una posición
        console.log(posicion + ' : ' + nombres.join(', '));
    }
    console.log("-----------------------------------------------------------------------"); 
}

listarJugadoresPorPosicion();