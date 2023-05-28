
let importarArchivo = require("./modulos/datosBici");

let arrayBicis = importarArchivo();


let dhBici = {
    bicicletas : arrayBicis,
    buscarBici : function (id) {
        
        const bici = this.bicicletas.filter( (bicicleta) => bicicleta.id === id);  

        if(bici.length >= 1){
            return bici[0];
        }else{
            return null;
        }

    },
    
    obtenerAumentoBici: function(porcentaje) {
        
        const listaBicisAumentada = this.bicicletas.map((bicicleta) => {
            //Utilizamos spread-operator para copiar los atributos de bicilceta en el nuevo objeto que se retorna
            //creando un objeto nuevo en el retorno
            return ({
                ...bicicleta,
                precio: bicicleta.precio = bicicleta.precio * (1 + (porcentaje / 100))

            });           
    
        });

        return listaBicisAumentada;
    },

    obtenerBiciPorRodado: function (rodado) {
        
        const bicisPorRodado = this.bicicletas.filter( (bicicleta) => bicicleta.rodado === rodado);  
        //aplicamos destructuring en los parámetros de entrada. Esto significa que de la bicicleta que entra de cada elemento
        //del array, tomamos los valores de sus atributos marca y modelo.
        const bicisPorRodadoMapped = bicisPorRodado.map( ({marca, modelo}) => {
            //retornamos un nuevo objeto que solo tiene marca y modelo
           return  {marca: marca, modelo: modelo};
        
        });
        
        return bicisPorRodadoMapped;
     
    },
};

console.log("Mostrando el array de bicicletas completo -> ");
console.log(dhBici.bicicletas);

console.log("Ejecutando la función buscarBici -> ");
console.log(dhBici.buscarBici(2));

console.log("Ejecutando obtener aumentos de precios -> ");
console.log(dhBici.obtenerAumentoBici(10));

console.log("Ejecutando obtener bicicletas por rodado -> ");
console.log(dhBici.obtenerBiciPorRodado(26));