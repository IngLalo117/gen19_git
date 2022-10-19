// var global =10;

// function sumar() {
//     var local=6;
//     console.log(local);
// }

// sumar();

// console.log(global);
// //console.log(local);


// let nombre ='Eduardo';

// console.log(nombre);

// function sumaAntes(a, b) {
//     console.log(a+b);
    
// }


// const sumaAhora =(a,b)=>{
//     console.log(a+b);
// }

// sumaAhora(3,2);


var frase = prompt("Escribe una frase sin espacios");
//var frase = "Escribe una frase sin espacios";
var revertir; 
// console.log(frase);
const palindromo =(a)=>{
    console.log(a);
revertir = a.split("").reverse().join("");
console.log(a);
return revertir === a ? "es palindromo" : "no es palindromo";
}

palindromo(frase);
console.log(palindromo(frase));



///////////////////////////////

let contry = ["Mexico", "Panamas", "Canada", "Rusia", "Japon"];


const paises =(a)=>{

for (let index = 0; index < a.length; index++) {
    //console.log(a[index].length);
    //console.log(a[index]);

}

let maxCadena = a.reduce((a, b) => (b.length > a.length) ? b : a);
console.log("El caracter mas largo: "+maxCadena);
return(maxCadena);

}

paises(contry);
//console.log(paises(contry));


//////////////////////////////////////////////

var grado = prompt("Escribe grados Fahrenheit ");

const grados =(a)=>{
    let grados=(a -32)*5/9;
   
    return(grados);
    
}

console.log(grados(grado));