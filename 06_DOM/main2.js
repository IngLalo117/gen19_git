

var botonj =document.getElementById("botonj");
var resiltado =document.getElementById("resultado");
var eleccion =document.getElementById("eleccion");
var resultado =document.getElementById("resultado");
var piedra =document.getElementById("piedra");
var papel =document.getElementById("papel");
var tijera =document.getElementById("tijera");

botonj.addEventListener('click',cambioj);

function cambioj() {
    var x = Math.floor(Math.random()*3);

console.log(x);
// 7
if (x==0 && eleccion.value=="papel") {
    resultado.innerHTML= "Ganaste";
    piedra.style.display="inline";
    papel.style.display="none";
    tijera.style.display="none";

    
}else if (x==0 && eleccion.value=="tijeras") {
    resultado.innerHTML= "Pierdes";
    piedra.style.display="inline";
    papel.style.display="none";
    tijera.style.display="none";
    
}else if (x==0 && eleccion.value=="piedra") {
    resultado.innerHTML= "Empate";
    piedra.style.display="inline";
    papel.style.display="none";
    tijera.style.display="none";
    
}else if (x==1 && eleccion.value=="papel") {
    resultado.innerHTML= "Empate";
    piedra.style.display="none";
    papel.style.display="inline";
    tijera.style.display="none";

    
}else if (x==1 && eleccion.value=="tijeras") {
    resultado.innerHTML= "Ganas";
    piedra.style.display="none";
    papel.style.display="inline";
    tijera.style.display="none";
    
}else if (x==1 && eleccion.value=="piedra") {
    resultado.innerHTML= "Pierdes";
    piedra.style.display="none";
    papel.style.display="inline";
    tijera.style.display="none";


}else if (x==2 && eleccion.value=="papel") {
    resultado.innerHTML= "Pierdes";
    piedra.style.display="none";
    papel.style.display="none";
    tijera.style.display="inline";

    
}else if (x==2 && eleccion.value=="tijeras") {
    resultado.innerHTML= "Empate";
    piedra.style.display="none";
    papel.style.display="none";
    tijera.style.display="inline";
    
}else if (x==2 && eleccion.value=="piedra") {
    resultado.innerHTML= "Ganas";
    piedra.style.display="none";
    papel.style.display="none";
    tijera.style.display="inline";
}
else{
    resultado.innerHTML= "Escribe piedra, papel o tijera";
}
}