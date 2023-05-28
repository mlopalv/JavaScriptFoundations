/**
 * @summary este programa ejecuta operaciones aritméticas con dos números. El tipo de operación depende del de la selecció que se
 * tenga en el arreglo "operacion" el cual luego es evaluado mediante una sentencia "switch".
 * 
 * @author Mauro López
 * 
 */
const operacion = ["sumar", "restar", "multiplicar", "dividir"];
let numeroA = 10;
let numeroB = 20;

switch (operacion[1]) {
    case "sumar":
        console.log("El resultado de sumar %s + %s es -> %s", numeroA, numeroB, (numeroA + numeroB));
        break;
    case "restar":
        console.log("El resultado de restar %s - %s es -> %s", numeroA, numeroB, (numeroA - numeroB));
        break;
    case "multiplicar":
        console.log("El resultado de multiplicar %s * %s es -> %s", numeroA, numeroB, (numeroA * numeroB));
        break;
    case "dividir":
        console.log("El resultado de dividir %s / %s es -> %s", numeroA, numeroB, (numeroA / numeroB));
        break;
    default:
        console.log("Debe especificar una operación aritmética válida");
}

console.log(Math.pow(2,3));
