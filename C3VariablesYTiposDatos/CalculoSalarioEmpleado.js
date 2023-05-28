/**
 * @abstract Este programa calcula el salario aumentado de un trabajador con base en un valor inicial y un pocentaje asignado
 * 
 * @author Mauro López
 */
let nombre="John";
let apellido="Doe";
let sueldoActual=8000;
let porcentajeAumento=20;

let calculoAumento = (sueldoActual * porcentajeAumento) / 100;
let nuevoSueldo = sueldoActual + calculoAumento;

console.log("Hola estimad@ " + nombre + " " + apellido);
console.log("Con base en su sueldo actual: ");
console.log(sueldoActual);
console.log("Ha recibido un aumento del " + porcentajeAumento);
console.log(calculoAumento);
console.log("y su nuevo sueldo es: " + nuevoSueldo);
