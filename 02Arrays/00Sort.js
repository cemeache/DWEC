const navegadores = [
    {
        name: 'Chrome',
        year: 2008
    },
    {
        name: 'Firefox',
        year: 2004
    },
    {
        name: 'Safari',
        year: 2003
    },
    {
        name: 'Opera',
        year: 1996
    },
    {
        name: 'IE',
        year: 1995
    },
    {
        name: 'Edge',
        year: 2015
    }
]

/*  1.  Ordena alfabéticamente por nombre [sort + localcompare] */
function ordenAlfabeticoNombre(){
    console.log("-------- Orden Alfabético By Nombre --------");
    let nav = [...navegadores];

    nav.sort((a,b) => a.name.localeCompare(b.name));

    mostrarNavegadores(nav);
}

console.log("-------------- Array Inicial ---------------");
mostrarNavegadores(navegadores);
ordenAlfabeticoNombre();

/*  2.  Ordena por año de forma ascendente  */
function ordenarAnioAsc(){
    console.log("--------- Orden Ascendente By Año ----------");
    let nav = [...navegadores];

    nav.sort((a,b) => a.year - b.year);

    mostrarNavegadores(nav);
}

ordenarAnioAsc();

/*  3.  Mostrar Navegadores */
function mostrarNavegadores(navegadores = []){
    for (const navegador of navegadores) {
        console.log(navegador);        
    }
}