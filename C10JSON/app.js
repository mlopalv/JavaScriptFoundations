const fs = require('fs');

//Lee la data del archivo en formato string
const data = fs.readFileSync("prueba.json", "utf8");
//console.log(data);

//Convierto el string en objeto JSON
const dataJSON = JSON.parse(data);

console.log(dataJSON);
console.log("Titulo primer elemento del JSON: " + dataJSON[0].title);
console.log("Titulo segundo elemento del JSON: " + dataJSON[1].title);

//Usando foerEach de arrays

dataJSON.forEach(element => {
    console.log(element.title);    
});

/*fs.readFile('prueba.json', 'utf8', (err, data) => {
  
  if (err) {
    console.error(err);
    return;
  }

  console.log(data);

});*/