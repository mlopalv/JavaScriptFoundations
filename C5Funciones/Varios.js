function saludar(nombre, apellido){
    nombre = nombre.repeat(2);
    
    return "Hola!"+ nombre + " " + apellido;
}

let saludo = saludar("Mauricio", "Lopez");
console.log(saludo);
