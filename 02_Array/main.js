
// var cosas = ['Texto', 1, true, false, 'Texto 2, 10'];
// console.log(cosas);

// var animales= ['Hipopotamo', 'Cocodrilo', 'Perro', 'Gato'];

// console.log(animales);
// ////agrega un dato al final
// animales.push('Mariposa');
//  console.log(animales);
//  console.log(animales[2]);


//  //borra datos desde el final
//  //animales.pop();


//  animales[0]="Leon";

//  console.log(animales);


//  //splice()

//  animales.splice(1,2,"Jirafa");

//  console.log(animales);

// //objeto///
//  var persona ={
//     nombre:'eduardo hernandez',
//     edad:24,
//     cel:'55667788',
//  }

//  console.log(persona);
//  console.log(persona.cel);


//  var persona1 ={
//     nombre:'eduardo hernandez',
//     edad:24,
//     cel:'55667788',
//     musica:{
//         genero:{
//             pais: 'mexico',
//             region: 'españa',

            
//         }
// }
//  }
//  console.log(persona1);
//  console.log(persona1.musica.genero.pais);

var edad = prompt("¿Escribe un número?");
if(edad % 2==1){
    console.log("El numero: "+edad+ " es impar");
}else{
    console.log("El numero: " + edad + " es par");
}



var jugardor1 = prompt("¿Escribe piedra, papel o tijera?");
var jugardor2 = prompt("¿Escribe piedra, papel o tijera?");

if (jugardor1=="piedra"&& jugardor2=="papel" ) {
    console.log("Jugador 2 Gana, papel mata piedra")
    
}else if (jugardor1=="papel" && jugardor2 =="tijera"){

    console.log("Jugador 2 Gana, tijera mata papel");
}else if(jugardor1=="tijera" && jugardor2 =="piedra"){
    console.log("Jugador 2 Gana, piedra mata tijera");
}else if (jugardor1==jugardor2) {
    console.log("Empate");
}else{
    console.log("Jugador 1 Gana");
}