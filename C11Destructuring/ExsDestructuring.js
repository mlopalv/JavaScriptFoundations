
/**
 * Ejemplo de desestructuración de un array 
 * 
 */
let colores = ["Rojo", "Azul", "Amarillo"];

//obtengo los ìndices 0 y 1 mediante la destructuración
let [rojo, , amarillo] = colores;

console.log(rojo, amarillo);

/**
 * Ejemplo de desestructuración de un objeto literal
 * 
 */
let auto = {marca: "Ford", modelo: "Explorer", motor: 2800};

let {marca, motor} = auto;
console.log(marca, motor);


