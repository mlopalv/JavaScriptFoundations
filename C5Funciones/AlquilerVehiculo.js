/**
 * Este programa define funciones básicas para determinar cuánto es el costo del alquiler de un vehículo
 * 
 * @author Mauro López
 */

/**
 * Retorna el costo total de alquilar un vehiculo
 * 
 * @param tipoDeVehiculo el tipo de vehiculo que puede ser solo de valores "Compacto", "Mediano" o "Camioneta"
 * @param diasDeAlquiler los días de alquiler del vehículo
 * @param sillaParaBebe define si requiere o no silla para bebé
 * 
 * @returns el total a pagar por el alquiler del vehículo
 * 
 */
function alquilerVehiculo(tipoDeVehiculo, diasDeAlquiler, sillaParaBebe) {
    let totalAPagar = 0.0;
    const tarifaPorTipoVehiculo = definirTarifaPorTipoVehiculo(tipoDeVehiculo);
    const tarifaPorSillaBebe = (sillaParaBebe === true) ? 1200 : 0;

    totalAPagar = (tarifaPorTipoVehiculo * diasDeAlquiler) + (tarifaPorSillaBebe * diasDeAlquiler);
    
    return totalAPagar;   
}

/**
 * Retorna tarifa de vehiculo con base en su tipo
 * 
 * @param {*} tipoDeVehiculo indica el tipo de vehiculo que se está alquilando
 * @returns tarifa de acuerdo con el tipo de vehiculo que se está alquilando
 */
function definirTarifaPorTipoVehiculo(tipoDeVehiculo){
    let tarifaPorTipoVehiculo =0.0;

    switch (tipoDeVehiculo) {
        case "Compacto":
            tarifaPorTipoVehiculo = 14000;
            break;
        case "Mediano":
            tarifaPorTipoVehiculo = 17000;
            break;
        case "Camioneta":
            tarifaPorTipoVehiculo = 28000;
            break;
    }

    return tarifaPorTipoVehiculo;

}

//Invocar las funciones e imprimir por pantalla el resultado
let tipoDeVehiculo = "Camioneta";
let sillaParaBebe = false;
let diasDeAlquiler = 10;
let totalAPagar = alquilerVehiculo(tipoDeVehiculo, diasDeAlquiler, sillaParaBebe);
console.log("Estimado cliente: con base al tipo de vehículo %s alquilado, considerando que " + (sillaParaBebe ? "si":"no") + " utiliza silla para bebé y los %s días utilizados, \n"
             +"el monto total a pagar es de $ %s ",tipoDeVehiculo, diasDeAlquiler, totalAPagar);