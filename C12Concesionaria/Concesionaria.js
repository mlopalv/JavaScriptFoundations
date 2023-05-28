let autosImportados = require("./autos");

const concesionaria = {
   
   autos: autosImportados,

   buscarAuto: function (patente) {
      let auto = this.autos.find((element) => {
         return element.patente === patente;
      }
      );

      if (auto === undefined) {
         return null;
      }
      console.log(auto);
      return auto;
   },

   venderAuto: function (patente) {
      let auto = this.buscarAuto(patente);

      if (auto !== null) {
         auto.vendido = true;
      }
      console.log(auto);
   },

   autosParaLaVenta: function () {
      return this.autos.filter((elemento) => {
         return elemento.vendido === false;
      }
      );
   },

   autosNuevos: function () {
      let autosParaLaVenta = this.autosParaLaVenta();

      return autosParaLaVenta.filter((elemento) => {
         return elemento.km < 100;

      });

   },

   listaDeVentas: function () {

      let autosVendidos = this.autos.filter((elemento) => {
         return elemento.vendido === true;
      });

      return autosVendidos.map((elemento) => {
         return elemento.precio;
      });
   },

   totalDeVentas: function () {

      return this.listaDeVentas().reduce((acumulador, precio) => {

         return acumulador + precio;

      }, 0);
   },

   puedeComprar: function (auto, persona) {
      
      const valorCuota = auto.precio / auto.cuotas;
      
      console.log("Precio auto: "+auto.precio);
      console.log("Cuotas: "+auto.cuotas);
      console.log("Valor cuota: "+valorCuota);

      if(auto.precio < persona.capacidadDePagoTotal
         && (valorCuota < persona.capacidadDePagoEnCuotas)){
            return true;
      }

      return false;

   },

   autosQuePuedeComprar: function(persona) {

      let autosParaLaVenta = this.autosParaLaVenta();
      let autosQuePuedeComprarVar = autosParaLaVenta.filter( 
         (elemento)=>{
            return this.puedeComprar(elemento, persona);
         }        
      );

      return autosQuePuedeComprarVar;


   }

}


// Ejemplo de utilización de la función puede comprar:

console.log("Esta persona puede comprar este carro ? -> ",concesionaria.puedeComprar(
    {
            marca: "Ford Fiesta",
            modelo: 2019,
            precio: 150000,
            km: 200,
            color: "Azul",
            cuotas: 12,
            anio: 2019,
            patente: "APL123",
            vendido: false
    },
    {
    nombre: "Juan",
    capacidadDePagoEnCuotas: 30000,
    capacidadDePagoTotal: 100000000
    }
    ));