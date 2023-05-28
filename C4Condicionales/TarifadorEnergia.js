/**
 * @abstract este programa presenta la definición de un aumento de tarifa con base en el consumo de energía mediante el uso de un 
 *             condicional ternario.
 *          
 * 
 * @author Mauro López
 *  
 */

pagoMes = 100;
consumoKWH = 450;

//Condicional ternario
nuevoPagoMensual = (consumoKWH > 300) ? (pagoMes * (1.20)) : pagoMes;

//Se despliega el mensaje con algunos caracteres de escape para nuevas líneas y para incorporar los caracteres "(" y ")"
console.log("Debido a que su hogar tuvo un consumo de %s kwh, con base al ajuste tarifario \n" +
    "\(hogares con consumo mayor a 300kwh por mes tendrán un aumento del 20%\)\,\n" +
    "cumplimos con informarle que se ha ajustado el total a pagar, que será de ̉$%s", consumoKWH, nuevoPagoMensual);