/**
 * 
 * Ejemplo de spread operator sobre arrays
 * 
 */
let coloresPrimarios = ["Rojo", "Azul", "Amarillo"];
let otrosColores = [...coloresPrimarios, "Violeta", "Verde", "Morado"];

console.log(otrosColores);

/**
 * 
 * Ejemplo de spread operator sobre objetos literales
 * 
 */
let teslaBasic = {
    marca: "Tesla",
    modelo: "X",
    motor: 2500
};

let teslaExpandido = {
    color: "Azul",
    AIVersion: "25.6",
    encender: () => { console.log("arrancando ... ") }
};

let teslaBasicPlusExpandido = {
    ...teslaBasic,
    ...teslaExpandido
};

console.log(teslaBasicPlusExpandido);0



