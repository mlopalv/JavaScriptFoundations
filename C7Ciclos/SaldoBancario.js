

function saldoBancario(){

    let operacionesBancarias = [200, 300, -200, 6000, -500];
    console.log("Tamaño de array operacionesBancarias: " + operacionesBancarias.length);
    
    let saldoActualDepositos = calcularSaldos(calcularSaldoDepositos, operacionesBancarias);
    let saldoActualRetiros = calcularSaldos(calcularSaldoRetiros, operacionesBancarias);
    let saldoActual = calcularSaldos(calcularSaldoTotal, operacionesBancarias);

    console.log("Saldo total de depositos: %s", saldoActualDepositos);
    console.log("Saldo total de retiros: %s", saldoActualRetiros);
    console.log("Saldo total: %s", saldoActual);

}

function calcularSaldos(operacionSaldos, operacionesBancarias){
    return operacionSaldos(operacionesBancarias);
}


function calcularSaldoDepositos(operaciones){
    let saldoDepositos = 0;
    let valorOperacion = 0;
    
    console.log("Invocado calcularSaldoDepositos.");
    console.log("Tamaño del array operaciones: " + operaciones.length);

    //calcular saldos depositos    
    for(let z = 0; z < operaciones.length; z++){        
        valorOperacion  = operaciones[z];
        console.log("valorOperacion = %s", valorOperacion);
        valorOperacion > 0 ? saldoDepositos += valorOperacion : 0;
    }

    return saldoDepositos;
}

function calcularSaldoRetiros(operacionesBancarias){

    let saldoRetiros = 0;
    let valorOperacion = 0;
    
    //calcular saldos retiros   
    for(let z = 0; z < operacionesBancarias.length; z++){        
        valorOperacion  = operacionesBancarias[z];
        valorOperacion < 0 ? saldoRetiros += valorOperacion : 0;
    }

    return saldoRetiros;


}

function calcularSaldoTotal(operacionesBancarias){

    let saldoTotal = 0;
    let valorOperacion = 0;
    
    //calcular saldos retiros   
    for(let z = 0; z < operacionesBancarias.length; z++){        
        valorOperacion  = operacionesBancarias[z];
        saldoTotal += valorOperacion;
    }

    return saldoTotal;


}

saldoBancario();
