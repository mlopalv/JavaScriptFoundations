/**
 * @abstract este programa presenta una traducción al inglés de un set de palabras en español. Se realiza la selección mediante la 
 *           aplicación de un condicional "switch"
 * 
 * @author Mauro López
 *  
 */

//Esta variable representa las diferentes opcines que servirán para probar las alternativas de perfiles que se evalúan en el 'switch'
let palabra = ["perro", "gato", "puerta", "ventana", "mesa", "other"];
let palabraIngles = ["dog", "cat", "door", "window", "table"];
let mensajeBase = "La palabra traducida al inglés es -> "


switch (palabra[3]) {
    case "perro":
        console.log(mensajeBase + palabraIngles[0]);
        break;
    case "gato":
        console.log(mensajeBase + palabraIngles[1]);
        break;
    case "puerta":
        console.log(mensajeBase + palabraIngles[2]);
        break;
    case "ventana":
        console.log(mensajeBase + palabraIngles[3]);
        break;
    case "mesa":
        console.log(mensajeBase + palabraIngles[4]);
        break;
    default:
        console.log("La palabra ingresada es incorrecta");
}