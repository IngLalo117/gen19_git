
//Dom me mustra todo
//Dom me mustra todo
var nombre=document.getElementById("nombre");
var direccion=document.getElementById("direccion");
var pizza= document.getElementById("pizza");
var direccionh= document.getElementById("direccionh");
var direccionp= document.getElementById("direccionp");
var nombreh= document.getElementById("nombreh");
var nombrep= document.getElementById("nombrep");
var hawallana =document.getElementById("hawallana");
var peperoni =document.getElementById("peperoni");
////EScribre


var boton =document.getElementById("boton");

boton.addEventListener('click',cambio);

function cambio() {
    if (pizza.value=="si" && nombre.value!=""&& direccion.value!="") {
        console.log("Muestra pizza de hawallana");
        direccionh.innerHTML= direccion.value;
        nombreh.innerHTML= nombre.value;
        hawallana.style.display="inline";
        peperoni.style.display="none";

    }else if (pizza.value=="no" && nombre.value!="" && direccion.value!="") {
        console.log("muestra pizza pepe");
        direccionp.innerHTML= direccion.value;
        nombrep.innerHTML= nombre.value;
        peperoni.style.display="inline";
        hawallana.style.display="none";
        
    }else{
        alert("No compatible");
    }
}


