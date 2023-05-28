/**
 * @abstract este programa presenta la selecciòn de una opción con base en un perfil simulado de usuario
 * 
 * @author Mauro López
 *  
 */

//Esta variable representa las diferentes opcines que servirán para probar las alternativas de perfiles que se evalúan en el 'switch'
//let perfil = ["administrador", "asistente", "invitado",""];

//Toma el valor del argumento que ingresa por consola ejemplo de ejecución node Perfiles.js "administrador"
let perfil = process.argv[2]; 


switch (perfil) {
    case "administrador":
    case "Administrador":
    case "ADMINISTRADOR":
        console.log("Usted tiene todos los privilegios de uso del sistema");
        break;
    case "asistente":
        console.log("Usted solo tiene permisos de registrar, modificar y consultar datos");
        break;
    case "invitado":
        console.log("Usted solo tiene permisos de consultar datos");
        break;
    case "":
        console.log("Debe especificar el perfil de usuario");
        break;
    default:
        console.log("Debe especificar un perfil válido");
}