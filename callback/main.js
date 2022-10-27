// console.log(1)

// setTimeout(() => {
//     console.log(2)
// }, 3000)

// setTimeout(() => {
//     console.log(3)
// }, 3000)

// console.log(4)



// console.log(1)

// setTimeout(() => {
//     console.log(2)
// }, 2000)

// for(let i = 0; i <= 10; i++) {
//     console.log(i, 'Simulando cuello de botella');
// }

// console.log(3);


// -------- Ejercicios --------

// el primer parametro 'imprimir' es una funcion -> callback
// const saludo = (imprimir, mensaje) => {
//     imprimir(mensaje)
// }




// const valor = (queTipo, variable) => {
//     queTipo(variable)
// }

// valor((variable) => {
//     console.log(`El tipo de valor de "${variable}" es: ${typeof(variable)}`)
// }, true)

// function callback() {
// console.log("Soy un callback")
// }

// function mensaje(fn) {
//     fn();
// }

// mensaje(callback);


// function funcion1() {
//     setTimeout(function name(params) {
//         console.log("mensaje 1")
//     }, 5000)
// }

// function funcion2() {
//     console.log("mensaje 2")
// }

// funcion1();
// funcion2();
var numeros =[1,2]

function suma(numeros) {
    console.log(numeros)
    var resultado=numeros[0]+numeros[1]
    console.log("Es una suma " +resultado)
    }
    function resta(numeros) {
        console.log(numeros)
        var resultado=numeros[1]-numeros[0]
        console.log("Es una suma " +resultado)
        }
    
    function mensaje(fn) {
        fn(numeros);
    }
    
    mensaje(suma);

    mensaje(resta);






    var tiempo =[120, 80, 200, 100]

function cambiar(tiempo) {

    if (tiempo[0]==120) {
        console.log("Son las 1:20 "+ tiempo[0])
    }else if (tiempo[1]==120) {
        console.log("Son las 8:00 "+ tiempo[1])
    }else  if (tiempo[1]==200) {
        console.log("Son las 2:00 "+ tiempo[2])
    }else{
        console.log("Son las 1:00 "+ tiempo[3])
    }
   
    }
 
    
    function hora(fn) {
        fn(tiempo);
    }
    
    
    hora(cambiar);
   




    // mensaje(resta);


// matematicas(resta(cantidades));


// const texto ="Hola mundo"

// function mayusculas(letras) {
//     var resultado =letras.toUpperCase();
//     console.log("Texto original "+letras+" Texto a mayusculas "+ resultado);
// }

 
// function letras(fn2) {
//    fn2();

    
// }
// letras(mayusculas(texto));



// Challege 

// 1.- funcion que me ayude a saber que tipo de operacion es y el resultado 
// suma de 5 + 5 = 10 
// division de 10/5 = 2



// 2.- Funcion que puda conventir de minusculas a mayusculas, mayusculas a minusculas
// o mixto dependiendo del caso
// parametros (convertir, texto, caso) 

// 3.- devolver la hora de un arreglo que lleva [120, 80, 200, 100] -> en horas