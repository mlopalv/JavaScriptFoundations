
/**
 * @description implementaación simple de una tabla de multiplicar desde un número base hasta el 10 yendo hasta la tabla del 10
 * 
 * @author Mauro López
 */
function generarTablasDeMultiplicar() {


	const CANTIDAD_MULTIPLICACIONES = 10;
	let multiplicador = 1;
	let resultadoMultiplicacion = 0;

	for (numeroBase = 1; numeroBase <= 10; numeroBase++) {
		console.log("\nTabla de multiplicar del %s", numeroBase);
		console.log("--------------------------------------------------------------------------\n");
		
		while (multiplicador <= CANTIDAD_MULTIPLICACIONES) {

			resultadoMultiplicacion = (numeroBase * multiplicador);
			console.log("%s * %s = %s", numeroBase, multiplicador, resultadoMultiplicacion);
			multiplicador++;
		}
		multiplicador = 1;
	}

}

generarTablasDeMultiplicar();