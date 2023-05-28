/**
 * Una función constructura es un método deprecado de lo que se puede hacer con clases
 * Una función constructora es diferente a un objeto literal. No tienen nada que ver.
 * 
 * @param {*} marca 
 * @param {*} model 
 */

function Auto(marca, model) {
    this.marca = marca;
    this.model = model;
    
    this.arrancar = () => {
        console.log("El carro " + this.marca + " arrancó");
    }
}

const auto2 = new Auto("Ferrari", "F50");
const auto3 = new Auto("Tesla", "Model S");

auto3.arrancar();