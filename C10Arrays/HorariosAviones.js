/**
 * Toma un array de horarios de partida y los mapea con un horario que tiene una hora menos, es decir adelantado.
 * 
 */
let horariosPartida = [12, 14, 18, 21];

let adelantarHorarios = (horaPartida) => horaPartida - 1;

let horariosAtrasados = horariosPartida.map(adelantarHorarios);


//imprimir usando un forEach y una declaración de función completa como parámetro callback
horariosAtrasados.forEach(
    
    function (hora, index) {

        console.log("Horario adelantado con función explícita como parámetro -> " + hora);

    }
);

//Imprimir usando un forEach y una funciòn arrow embebida como parámetro callback
horariosAtrasados.forEach((hora, index) => console.log("Horario adelantado con función arrow como parámetro -> " + hora));
console.log("Probando modificación Git!");