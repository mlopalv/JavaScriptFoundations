/**
 * @abstract Este ejemplo representa variables que se pueden usar para la venta de boletos para ingresar a un partido de 
 *           futbol
 * 
 * @author Mauro López
 */

let nombre = "Jane";
let apellido = "Doe";
let edad = 33;
let numeroDeTelefono = "3214976780";
let socio = true;
let fechaDelPartido = "2023/04/22";
let horaDelPartido = "20:30";
let numeroDeSilla = "A22";
let precioDelBoleto = 15.5;

console.log("Nombre: "+" "+ nombre+" de tipo -> "+ (typeof nombre));
console.log("Apellido: "+" "+ apellido+" de tipo -> "+ (typeof apellido));
console.log("Edad: "+" "+ edad +" de tipo -> "+ (typeof edad));
console.log("Número de teléfono: "+" "+ numeroDeTelefono +" de tipo -> "+ (typeof numeroDeTelefono));
console.log("Socio: "+" "+ socio +" de tipo -> "+ (typeof socio));
console.log("FechaDelPartido: "+" "+ fechaDelPartido +" de tipo -> "+ (typeof fechaDelPartido));
console.log("Hora del partido: "+" "+ horaDelPartido+" de tipo -> "+ (typeof horaDelPartido));
console.log("Número de silla: "+" "+ numeroDeSilla +" de tipo -> "+ (typeof numeroDeSilla));
console.log("Precio del boleto: "+" "+ precioDelBoleto +" de tipo -> "+ (typeof precioDelBoleto));

console.log("//----------------------------------------------------------------------//");

// Este es un ejemplo con objetos literales, que son similares a diccionarios

let boletaUno = {   nombre: "Jane", 
                    apellido: "Doe", 
                    edad: 42, 
                    numeroDeTelefono: "3214976780", 
                    socio: true, 
                    fechaDelPartido: "2023/04/22", 
                    horaDelPartido: "20:30",
                    numeroDeSilla: "A22",
                    precioDelBoleto: 15.5}

console.log("Objeto literal boletaUno: "+" "+ boletaUno +" de tipo -> "+ (typeof boletaUno));

console.log("Nombre: "+" "+ boletaUno.nombre+" de tipo -> "+ (typeof boletaUno.nombre));
console.log("Apellido: "+" "+ boletaUno.apellido+" de tipo -> "+ (typeof boletaUno.apellido));
console.log("Edad: "+" "+ boletaUno.edad +" de tipo -> "+ (typeof boletaUno.edad));
console.log("Número de teléfono: "+" "+ boletaUno.numeroDeTelefono +" de tipo -> "+ (typeof boletaUno.numeroDeTelefono));
console.log("Socio: "+" "+ boletaUno.socio +" de tipo -> "+ (typeof boletaUno.socio));
console.log("FechaDelPartido: "+" "+ boletaUno.fechaDelPartido +" de tipo -> "+ (typeof boletaUno.fechaDelPartido));
console.log("Hora del partido: "+" "+ boletaUno.horaDelPartido+" de tipo -> "+ (typeof boletaUno.horaDelPartido));
console.log("Número de silla: "+" "+ boletaUno.numeroDeSilla +" de tipo -> "+ (typeof boletaUno.numeroDeSilla));
console.log("Precio del boleto: "+" "+ boletaUno.precioDelBoleto +" de tipo -> "+ (typeof boletaUno.precioDelBoleto));


