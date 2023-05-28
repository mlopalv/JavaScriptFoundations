/**
 * @summary Este es un ejemplo de cómo funciona una calculadora mediante call-backs
 * 
 * @author Obtenido del sitio PlayGround de Digital House
 * 
 */

let sumar = (numeroA, numeroB) => numeroA + numeroB;
let restar = (numeroA, numeroB) => numeroA - numeroB;
let multiplicar = (numeroA, numeroB) => numeroA * numeroB;
let dividir = (numeroA, numeroB) => numeroA / numeroB;

// operacion es una funcion que se envía por parámetro y que luego la función arrow ejecuta.
// en tiempo de ejecuciòn, la función arrow cambia operación literalmente de acuerdo al valor de la función que le llega
// que puede sumar, restar, multiplicar o dividir
let calculadora = (numeroA, numeroB, operacion) => operacion(numeroA, numeroB);

console.log(calculadora(18, 3, sumar));