let html5 = "30 45 25 34 18 23 16 50 72 70";
let css3 = "50 45 71 34 23 45 65 75 63 43 74 70";
let javaScript = "70 65 58 45 23 57 34 17 72";
let nodeJs = "45 56 73 34 65 72 70 32";

let arrHTML5 = html5.split(" ");
let arrCSS3 = css3.split(" ");
let arrJavaScript = javaScript.split(" ");
let arrNode = nodeJs.split(" ");

//console.log(arrHTML5);


function calcularPromedio(grad1,grad2,grad3,grad4,seleccion){
    let promedio =0;
    switch (seleccion) {
        case 1:
            promedio = devolverPromedio(grad1)
            break;
        case 2:
            promedio = devolverPromedio(grad2)
            break;
        case 3:
            promedio = devolverPromedio(grad3)
            break;
        case 4:
            promedio = devolverPromedio(grad4)
            break; 
        default:
            promedio = 'Seleccion invalida. Selecciones posibles: \n' + 
            '1 = HTML5 \n' + 
            '2 = CSS3 \n' +
            '3 = JAVASCRIPT \n' +
            '4 = NODEJS \n'
    }
    return promedio;

}

function devolverPromedio(arr){
    let suma = 0;
    for (let i = 0; i < arr.length; i++){
        suma += parseInt(arr[i]);
    }
    return suma / arr.length;

}

console.log(calcularPromedio(arrHTML5,arrCSS3,arrJavaScript,arrNode,1))
console.log(calcularPromedio(arrHTML5,arrCSS3,arrJavaScript,arrNode,2))
console.log(calcularPromedio(arrHTML5,arrCSS3,arrJavaScript,arrNode,3))
console.log(calcularPromedio(arrHTML5,arrCSS3,arrJavaScript,arrNode,4))
console.log(calcularPromedio(arrHTML5,arrCSS3,arrJavaScript,arrNode,5))
