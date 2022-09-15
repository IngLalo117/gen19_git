// saludo(12);

// function saludo(numero, num=12) {
//     // console.log('Hola ' + nombre + ' dede js')
//     return numero+num;
// }

// console.log(saludo(3));


// console.log(saludo(1));

// console.log(saludo(10,10));

cuadrado(3);

rectangulo(12,15);

triangulo(3,5);

adulto(15);

numeros(-12);


letras('a')


function cuadrado(l) {
    area=l*l;
    return console.log(area);
}

function rectangulo(b, h) {
    area=b*h;
    return console.log(area);
}


function triangulo(b, h) {
    area=(b*h)/2;
    return console.log(area);
}


function adulto(edad) {
    if (edad>=18) {
        
        return console.log("Es un adulto mayor de edad");
    }else{
        return console.log("No es un adulto mayor de edad");
    }

}

function numeros(numero) {
    if (numero>0) {
        
        return console.log("Es positivo");
    }else{
        return console.log("es negativo");
    }

}


function letras(letra) {
    if (letra=="a"||letra=="e"||letra=="i"||letra=="o"||letra=="u") {
        
        return console.log("Es vocal");
    }else{
        return console.log("Es consonante");
    }

}


var edadL = prompt("¿Cúal es tu Edad?");
licencia(edadL);
function licencia(edadL) {
    if (edadL<=15) {
        return console.log("No puedes sacar licencia");
    }else if (edadL>=15 && edadL<19) {
        return console.log("Puedes sacar un permiso");
    }else{
        return console.log("Puedes sacar tu licencia");
    }

}