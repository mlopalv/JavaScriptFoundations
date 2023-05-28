/**
 * Usa la función reduce de arrays para totalizar el número de vueltas representado en un array
 * 
 */
let vueltas = [5, 8, 12, 3, 22]

let sumarTotalVueltas = (totalVueltas, vueltas) => {
    
    return totalVueltas + vueltas;

};

let totalVueltas = vueltas.reduce(sumarTotalVueltas, 0);

console.log(totalVueltas);
