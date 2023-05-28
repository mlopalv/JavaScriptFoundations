
const fs = require("fs");
const path = require("path");

function importarArchivo () {

    let ubicacion = __dirname;
    let ruta = path.resolve(ubicacion, "../../datos/bicicletas.json");
    //console.log(ruta);
    //Lee la data del archivo en formato string
    const archivo = fs.readFileSync(ruta, "utf8");

    //Convierto el string en objeto JSON
    const dataJSON = JSON.parse(archivo);

    return dataJSON;

}

//console.log("testing this module .." + importarArchivo());
module.exports = importarArchivo;

