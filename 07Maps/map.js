const map = new Map();                                         // Map({}) (Mapa vacío)
const map1 = new Map([[1, "uno"]]);                            // Map({ 1=>"uno" })
const map2 = new Map([[1, "uno"], [2, "dos"], [3, "tres"]]);   // Map({ 1=>"uno", 2=>"dos", 3=>"tres" })

map.constructor.name;                     // "Map"

/*-- Propiedad | Size --*/

const map3 = new Map();
map3.size;    // 0

const map4 = new Map([[1, "uno"], [2, "dos"]]);
map4.size;    // 2

const map5 = new Map([[1, "uno"], [2, "dos"], [1, "tres"]]);
map5.size;    // 2 (El 1->"tres" sobreescribe al anterior)

/*-- Introducir Elementos | Set --*/

const map6 = new Map();

map6.set(5, "cinco");
map6.set("A", "letra A");
map6.set(5, "cinco sobreescrito");   // Sobreescribe el anterior

map6;            // Map({ 5=>"cinco sobreescrito", "A"=>"letra A" })

/*-- Comprobar Si Existen | Has --*/

const map7 = new Map([[1, "uno"], [2, "dos"], [3, "tres"]]);

map7.has(2);     // true
map7.has(34);    // false
map7.set(34, "treinta y cuatro");
map7.has(34);    // true

/*--- Borrar Elementos --*/

const map8 = new Map([[1, "uno"], [2, "dos"], [3, "tres"]]);

map8.delete(3);    // true
map8.delete(39);   // false

map8;              // Map({ 1=>"uno", 2=>"dos" })

/*-- Vaciar Map Por Completo | clear --*/

const map9 = new Map([[1, "uno"], [2, "dos"], [3, "tres"]]);

map9.clear();

map9.size;         // 0

/*-- Convertir Map a Array --*/

const map10 = new Map([[1, "uno"], [2, "dos"], [3, "tres"]]);

map10.size;                   // 3 (Contiene 3 elementos)
map10.constructor.name;       // "Map"
const entries = [...structuredClone(map10)];

entries.constructor.name;   // "Array"
entries;                    // [[1, "uno"], [2, "dos"], [3, "tres"]]