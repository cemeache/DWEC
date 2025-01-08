let estudiantesJS: boolean = true;

if(estudiantesJS){
    console.log('Puedes seguir viendo el curso de TS');
}else{
    console.log('Primero mira el curso de JS');
}

/*---------------------------------------------------*/

let cdBerlg = 5;
let cfSanJorge = 4;

function jugar(equipo1: number, equipo2: number): void{
    if(equipo1 > equipo2) console.log(`Berlanga Gana`);
    if(equipo1 < equipo2) console.log(`San Jorge Gana`);
    if(equipo1 === equipo2) console.log(`Empate`);
}

jugar(cdBerlg,cfSanJorge);