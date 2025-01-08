"use strict";
// FUNCIONES
// Declaración de función con tipado explícito:
function sumar(a, b) {
    return a + b;
}
// Funciones flecha con retorno implícito (inferido por TypeScript):
const dividir = (a, b) => a / b;
// Funciones con parámetros opcionales:
function saludar(nombre, edad) {
    if (edad !== undefined) {
        return `Hola, mi nombre es ${nombre} y tengo ${edad} años.`;
    }
    else {
        return `Hola, mi nombre es ${nombre}.`;
    }
}
// Funciones con parámetros por defecto:
function saludar2(nombre, edad = 30) {
    return `Hola, mi nombre es ${nombre} y tengo ${edad} años.`;
}
