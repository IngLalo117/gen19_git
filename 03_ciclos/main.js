// var x=0;
// while (x<=10) {
//     console.log(x);
//     x++;
// }


// for (let i = 100; i >=0; i--) {
//     console.log("Estas son las iteraciones: "+i)
    
// }

// for (let i = 0; i <=500; i=i+50) {
//     console.log("Estas son las iteraciones de 50 en 50: "+i)
    
// }


// for (let i = 100; i >=-100; i=i-10) {
//     console.log("Estas son las iteraciones de 10 en 10: "+i)
    
// }


// var animales = ['leon', 'escorpion', 'cuervo', 'mariposa','jirafa', 'hipopotamo'];


// for (let index = 0; index < animales.length; index++) {
//     const element = animales[index];
//     console.log("Este animal "+ element+ " que esta en el index "+[index]);
    
// }



for (let index = 1; index <=100; index++){
    if(index % 2==1){
        console.log("El numero: "+index+ " es impar");
    }else{
        console.log("El numero: " + index + " es par");
    }
   
}


for (let index = 1; index <=100; index++){
    if (index % 3 ==0 && index % 5 ==0) {
        console.log(index+': fizzbuzz');
    }

    else
  if (index % 3 ==0) {
    console.log(index+': fizz');
  }else if (index % 5 ==0) {
    console.log(index+': buzz');
  }else{
    console.log("Sin dividir "+index);
  }
   
}

// for (let y = 1; y <=10; y++){
//     console.log('$');
//     for (let x = 1; x <=10; x++) {
//         console.log('#');
        
//     }
   
// }


////  eje x                0                       1                              2                     3                           
//// eje   y     0   1   2    3  4   5      
var ajedrez = [['#',' ','#',' ','#',' '],[' ','#',' ','#',' ','#'],['#',' ','#',' ','#',' '],[' ','#',' ','#',' ','#']];
for (x=0;x<ajedrez.length;x++) {
    text = ""
    for (y=0;y<ajedrez[x].length;y++) {
        text += ajedrez[x][y] + "\t";
    }
    console.log(text)
}