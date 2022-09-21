
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



var depo =document.getElementById("depositarc");

depo.addEventListener('click',depositar);

function depositar() {


    

    var monto=document.getElementById("monto").value;
    var nombre=document.getElementById("nombre").value;

    if(monto=="" || nombre==""){
        alert("Falta informacin")
    }else{
        var name= document.getElementById("name");
        name.innerHTML=nombre;
    
        var saldo= document.getElementById("saldo");
        saldo.value=monto;
    }
    
   

}



var bt1 =document.getElementById("bt1");

bt1.addEventListener('click',cien);

function cien() {
    


    var saldo= document.getElementById("saldo").value;
    if (saldo>99) {
        retiro=saldo-100;

        var resultado= document.getElementById("saldo");
        resultado.value=retiro;    
        
        
    }else{
        alert("Saldo insuficiente");
    }

  alert("Retiraste $100")

}




var bt2 =document.getElementById("bt2");

bt2.addEventListener('click',doscientos);

function doscientos() {
    


    var saldo= document.getElementById("saldo").value;
    if (saldo>199) {
        retiro=saldo-200;

        var resultado= document.getElementById("saldo");
        resultado.value=retiro;    
        
        
    }else{
        alert("Saldo insuficiente");
    }
    alert("Retiraste $200")
  

}

var bt3 =document.getElementById("bt3");

bt3.addEventListener('click',quinientos);

function quinientos() {
    


    var saldo= document.getElementById("saldo").value;
    if (saldo>499) {
        retiro=saldo-500;

        var resultado= document.getElementById("saldo");
        resultado.value=retiro;    
       
        
    }else{
        alert("Saldo insuficiente");
    }

  
    alert("Retiraste $500")
}



var bt4 =document.getElementById("bt4");

bt4.addEventListener('click',mil);

function mil() {
    


    var saldo= document.getElementById("saldo").value;
    if (saldo>999) {
        retiro=saldo-1000;

        var resultado= document.getElementById("saldo");
        resultado.value=retiro;    
        
        
    }else{
        alert("Saldo insuficiente");
    }

    alert("Retiraste $1,000");

}

var bt5 =document.getElementById("bt5");

bt5.addEventListener('click',dosmil);

function dosmil() {
    


    var saldo= document.getElementById("saldo").value;
    if (saldo>1999) {
        retiro=saldo-2000;

        var resultado= document.getElementById("saldo");
        resultado.value=retiro;  
        
        
    }else{
        alert("Saldo insuficiente");
    }

    alert("Retiraste $2,000");

}


var bt6 =document.getElementById("bt6");

bt6.addEventListener('click',cincomil);

function cincomil() {
    


    var saldo= document.getElementById("saldo").value;
    if (saldo>4999) {
        retiro=saldo-5000;

        var resultado= document.getElementById("saldo");
        resultado.value=retiro;    

    
        
    }else{
        alert("Saldo insuficiente");
    }

    alert("Retiraste $5,000");

}




var tranferenciat =document.getElementById("btntras");

tranferenciat.addEventListener('click',movimiento);

function movimiento() {
console.log("Entro");


    var saldo= document.getElementById("saldo").value;

    console.log(saldo);

    var saldoc=parseInt(saldo);
    var montot= document.getElementById("mov").value;
    var trans=document.getElementById("trans").value;

    if (montot=="" ||trans=="") {
        alert("Falta Información")
    }else{

        
    // console.log(saldo);
    console.log(montot);
    if (saldoc>montot) {
        var mov =document.getElementById("mov");
        mov.style.display="inline";
        var etiq =document.getElementById("etiq");
        etiq.style.display="inline";
      
        var movimient=saldoc-montot;

        var resultado= document.getElementById("saldo");
        var mo1= document.getElementById("mo1");
        mo1.style.display="inline";
        
        resultado.value=movimient;  
        mo1.value=montot; 
        
        
    
        var nameTr= document.getElementById("nameTr");
        nameTr.style.display="inline";
        nameTr.innerHTML=trans;
    }else{
        alert("Saldo insuficiente")
    }



    }

    
   
  

}