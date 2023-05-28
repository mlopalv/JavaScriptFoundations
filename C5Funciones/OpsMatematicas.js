const PI = 3.14;

function perimetro(radio){    
    //return 2 * Math.PI * radio;
    return 2 * PI * radio;
}

function area(radio){
    return PI * Math.pow(radio,2);    
}

console.log("Perímetro de círculo con radio 2 = " + perimetro(2));