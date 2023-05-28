
productosElectrodimesticos = ["Nevera", "Lavadora", "Televisor", "Secadora", "Laptop", "PlayStation", "EquipoSonido"];
//quitamos el primer elemento y lo adicionamos al final
console.log("//--------------------------------------------------------------//");
console.log("Quitamos el primer elemento y lo adicionamos al final ->");
productosElectrodimesticos.push(productosElectrodimesticos.shift())
console.log(productosElectrodimesticos);

//Adicionamos dos nuevos elementos
console.log("//--------------------------------------------------------------//");
console.log("Adicionando 'Microondas' y 'Tostadora' al arreglo ->");
productosElectrodimesticos.push("Microondas");
productosElectrodimesticos.push("Tostadora");
console.log(productosElectrodimesticos);

//Mostrar cantidad de elementos del arreglo
console.log("//--------------------------------------------------------------//");
console.log("El arreglo de electrodomesticos tiene un tamaño de -> " + productosElectrodimesticos.length);

//Buscar un producto e indicar si se encontró o no
console.log("//--------------------------------------------------------------//");
console.log("Buscando 'Secadora' dentro del arreglo de electrodomésticos ->");
console.log(productosElectrodimesticos.includes("Secadora") ? "Producto encontrado" : "El producto buscado no existe");

//Unificar los elementos del array separando los elementos por espacios en blanco
console.log("//--------------------------------------------------------------//");
console.log("Unificando el arreglo en un String ->");
let arrayEnCadena = productosElectrodimesticos.join(" ");
console.log("Este es el arreglo unificado: %s", arrayEnCadena);
console.log("Este es el lenght de la cadena resultado del arreglo unificado: %s", arrayEnCadena.length);

//Cambiar el nombre de algún producto de la cadena de texto por otro
console.log("//--------------------------------------------------------------//");
console.log("Reemplazando 'Laptop' por 'TeatroEnCasa' ->");
arrayEnCadena = arrayEnCadena.replace("Laptop","TeatroEnCasa");
console.log("Este es la cadena de texto después de cambiar Laptop por Teatro en casa: ");
console.log(arrayEnCadena);

//Crear un nuevo array con la nueva cadena de texto
console.log("//--------------------------------------------------------------//");
console.log("Reemplazando los espacios del arreglo por comas ->");
arrayEnCadena = arrayEnCadena.replaceAll(" ",",");
console.log("Esta es la cadena después de reemplazar espacios por comas: " + arrayEnCadena);
productosElectrodomesticosB = arrayEnCadena.split(",");
console.log("Este el nuevo arreglo productosElectrodomesticosB una vez se carga desde la cadena: %s", productosElectrodomesticosB);



