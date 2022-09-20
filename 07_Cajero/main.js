
var boton =document.getElementById("depo");

boton.addEventListener('click',cambio);

function cambio() {
    
    document.getElementById("retir").style.display="none";
    document.getElementById("tra").style.display="none";
    document.getElementById("depositas").style.display="flex";
}


var boton1 =document.getElementById("ret");

boton1.addEventListener('click',cambio1);

function cambio1() {
    
    document.getElementById("depositas").style.display='none';
    document.getElementById("tra").style.display='none';
    document.getElementById("retir").style.display="flex";
}

var boton2 =document.getElementById("transfer");

boton2.addEventListener('click',cambio2);

function cambio2() {
    
    document.getElementById("depositas").style.display='none';
    document.getElementById("tra").style.display='flex';
    document.getElementById("retir").style.display="none";
}
