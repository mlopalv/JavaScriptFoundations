/**
 * @summary Este progrmama calcula el costo total de una hambuerguesa dependiendo del tipo y sus adiciones (i.e. cebolla, tomate) 
 * Lo valores válidos para el tipo de hamburguesa son: "Carne a la parrilla", "Pollo", "Vegetariana".
 * 
 * 
 * @author Mauro López
 */



/**
 * 
 * 
 * @param {*} tipoDeHamburguesa 
 * @param {*} tieneJamon 
 * @param {*} tieneQueso 
 * @param {*} tieneSalsaDeTomate 
 * @param {*} tieneMayonesa 
 * @param {*} tieneMostaza 
 * @param {*} tieneTomate 
 * @returns 
 */
function calcularTotalAPagar(tipoDeHamburguesa, tieneJamon, tieneQueso,
    tieneSalsaDeTomate, tieneMayonesa, tieneMostaza, tieneTomate, tieneLechuga, tieneCebolla) {

    let costoPorTipoHamburguesa = 0.0;
    let costoPorAdiciones = 0.0;
    let costoTotalHamburguesa = 0.0;

    //costoPorTipoHamburguesa = calcularCostoPorTipoHamburguesa(tipoDeHamburguesa);
    costoPorTipoHamburguesa = (tipoDeHamburguesa) => {
        
        let costoPorTipoHamburguesa = 0.0;

        switch (tipoDeHamburguesa) {
            case "Carne a la parrilla":
                costoPorTipoHamburguesa = 1800;
                break;
            case "Pollo":
                costoPorTipoHamburguesa = 1500;
                break;
            case "Vegetariana":
                costoPorTipoHamburguesa = 1200;
                break;
        }
        
        return costoPorTipoHamburguesa;
    };

    costoPorAdiciones = calcularCostoPorAdiciones(tieneJamon, tieneQueso,
        tieneSalsaDeTomate, tieneMayonesa, tieneMostaza, tieneTomate, tieneLechuga, tieneCebolla);

    costoTotalHamburguesa = costoPorTipoHamburguesa(tipoDeHamburguesa) + costoPorAdiciones;

    return costoTotalHamburguesa;
}


/**
 * 
 * @param {*} tipoDeHamburguesa 
 * @returns 
 */
function calcularCostoPorTipoHamburguesa(tipoDeHamburguesa) {
    let costoPorTipoHamburguesa = 0.0;

    switch (tipoDeHamburguesa) {
        case "Carne a la parrilla":
            costoPorTipoHamburguesa = 1800;
            break;
        case "Pollo":
            costoPorTipoHamburguesa = 1500;
            break;
        case "Vegetariana":
            costoPorTipoHamburguesa = 1200;
            break;
    }

    return costoPorTipoHamburguesa;

}

/**
 * 
 * @param {*} tieneJamon indica si tiene o no jamon y debe ser un booleano
 * @param {*} tieneQueso 
 * @param {*} tieneSalsaDeTomate 
 * @param {*} tieneMayonesa 
 * @param {*} tieneMostaza 
 * @param {*} tieneTomate 
 * @param {*} tieneLechuga 
 * @param {*} tieneCebolla 
 * @returns 
 */
function calcularCostoPorAdiciones(tieneJamon, tieneQueso,
    tieneSalsaDeTomate, tieneMayonesa, tieneMostaza, tieneTomate, tieneLechuga, tieneCebolla) {

    //tieneJamon es un Boolean

    let costoAdiciones = 0.0;

    costoAdiciones += tieneJamon ? 30 : 0; // if (tieneJamon){ costoAdiciones = 30 }else{costoAdiciones = 0}
    costoAdiciones += tieneQueso ? 25 : 0;
    costoAdiciones += tieneSalsaDeTomate ? 5 : 0;
    costoAdiciones += tieneMayonesa ? 5 : 0;
    costoAdiciones += tieneMostaza ? 5 : 0;
    costoAdiciones += tieneTomate ? 15 : 0;
    costoAdiciones += tieneLechuga ? 10 : 0;
    costoAdiciones += tieneCebolla ? 10 : 0;

    return costoAdiciones;

}

/**
 * 
 * @param {*} nombreUsuario 
 * @param {*} apellidoUsuario 
 * @param {*} tipoHamburguesa 
 * @param {*} tieneJamon 
 * @param {*} tieneQueso 
 * @param {*} tieneSalsaDeTomate 
 * @param {*} tieneMayonesa 
 * @param {*} tieneMostaza 
 * @param {*} tieneTomate 
 * @param {*} tieneLechuga 
 * @param {*} tieneCebolla 
 */
function indicarTotalAPagar(nombreUsuario, apellidoUsuario, tipoHamburguesa, tieneJamon, tieneQueso,
    tieneSalsaDeTomate, tieneMayonesa, tieneMostaza, tieneTomate, tieneLechuga, tieneCebolla, fnCosto) {

    //Este es el uso de CallBaks pero para mi no es un use-case válido. Es solo por práctica.
    let totalAPagar = fnCosto(tipoHamburguesa, tieneJamon, tieneQueso,
        tieneSalsaDeTomate, tieneMayonesa, tieneMostaza, tieneTomate, tieneLechuga, tieneCebolla);

    console.log("Estimad@ %s %s, el monto total a pagar es de: $%s ", nombreUsuario, apellidoUsuario, totalAPagar);

}


//Inicializamos variables para probar el restaurante de comidas rápidas
const nombreUsuario = "Jane";
const apellidoUsuario = "Doe";
const tipoHamburguesa = "Pollo";
const tieneJamon = false;
const tieneQueso = true;
const tieneSalsaDeTomate = false;
const tieneMayonesa = false;
const tieneMostaza = true;
const tieneTomate = true;
const tieneLechuga = true;
const tieneCebolla = true;

indicarTotalAPagar(nombreUsuario, apellidoUsuario, tipoHamburguesa, tieneJamon, tieneQueso,
    tieneSalsaDeTomate, tieneMayonesa, tieneMostaza, tieneTomate, tieneLechuga, tieneCebolla, calcularTotalAPagar);






