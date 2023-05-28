/**
 * Los objetos lietarales pueden tener otros objetos literales de forma anidada
 * 
 * Los objetos literales puedne tener funciones
 * 
 */
const usuario = {
    nombre: "Lucas",
    apellido: "Gonzáles",
    domicilio: {
        calle: "Av. Luro",
        altura: 1234,
        localidad: {
            ciudad: {
                nombre: "Mar del plata",
                poblacion: 800000
            },
            municipio: "Gral. Pueyrredon"
        }
    },
    
    obtenerNombreCompleto: function () {
        return this.nombre + " " + this.apellido;
    }
};

const usuario2 = {
    nombre: "Juan",
    apellido: "Gonzáles",
    domicilio: {
        calle: "Av. Luro",
        altura: 1234,
        obtenerDomicilio: function () {
            return this.calle + " " + this.altura;
        },
        localidad: {
            ciudad: {
                nombre: "Mar del plata",
                poblacion: 800000,
            },
            municipio: "Gral. Pueyrredon"
        }
    },
    obtenerNombreCompleto: function () {
        return this.nombre + " " + this.apellido;
    }
};

console.log("El usuario " + usuario2.obtenerNombreCompleto() + " vive en " + usuario2.domicilio.obtenerDomicilio());

const usuarios = [];
usuarios.push(usuario);

// console.log('>>> Ciudad usuario 1:', usuarios[0].domicilio.localidad.ciudad);

function imprimirDatosCiudad(ciudad) {
    console.log("La ciudad llamada ", ciudad.nombre, " tiene ", ciudad.poblacion, " habitantes.");
}

const ciudadMarDelPlata = usuarios[0].domicilio.localidad.ciudad;
// imprimirDatosCiudad(ciudadMarDelPlata);