/**
 * 
 * 
 */

function convertirAMayusculas(cadenaDeCaracteres){    
    return cadenaDeCaracteres.toUpperCase();
}

function obtenerTipoDeDato(objeto){
    return typeof(objeto);
}

function anosPerro(anosHumano){
    return anosHumano / 7;
}

function valorHoraTrabajo(salarioMensual, cantidadDiasTrabajados, cantidadHorasTrabajadasPorDia){
    return salarioMensual / (cantidadHorasTrabajadasPorDia * cantidadDiasTrabajados);
}

//Probar pasar cadena de carateres a upperCase
console.log("Covirtiendo jane doe a mayúsculas con resultado -> %s", convertirAMayusculas("jane doe"));

//Probar pasar obtener el tipo de un dato u objeto
console.log("Obteniendo el tipo de datos de un objeto {} con resultado -> %s", obtenerTipoDeDato({nombre: "Carlos", apellido: "Gomez"}));

//Probar pasar años humano a años perro
console.log("Covirtiendo 30 años humanos a años perro con resultado -> %s", anosPerro(30));

//Probando calcular rate por hora con base en salario, días que trabaja por mes 
console.log("Probando cálculo de rate por hora con 5500 dolares mensuales trabajando 20 dias al mes y 7 horas por dia -> %s x hora", 
                valorHoraTrabajo(5500, 20, 7));

