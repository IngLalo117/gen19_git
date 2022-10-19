class Alumnos{
    constructor(nombre, apellido){
        ///this es Alumnos////
        this.nombre=nombre;
        this.apellido=apellido;


    }
}



class Animal{
    constructor(tipo, numPatas, nombre){
        this.tipo=tipo;
        this.numPatas=numPatas;
        this.nombre=nombre;
    }

    comer(alimentacion){
        return 'Los animales de tipo ' + this.
        tipo + ' se alimenta: '+
        alimentacion
    }
    movilidad(transportacion){
        return 'Los animales '+ this.
        tipo + ' pueden '+ transportacion
    }

    suma(variable){
        var total = this.tipo + this.numPatas;
        return total+ ' Esto es la variable '+ variable;
    }


}





var gato= new Animal(3, 4,'gato');

// console.log(gato.suma(2));

// console.log(gato);
// console.log(gato.comer('perro'));
// console.log(gato.movilidad('volar por el cielo'));

// console.log(Animal);


class Mascota{
    constructor(nombre, cerebro){
        this.nombre=nombre;
        this.cerebro=true;
    }
    comer(){
        return this.nombre + ' esta coamiendo :)';
    }


}

// console.log(Mascota);

//Herencia
class Gatito extends Mascota{
    constructor(nombre,cerebro, raza){
        /// super jala valores de la super clase
        super(nombre, cerebro);
        this.raza=raza;
    }

    ronronear(){
        return this.nombre + ' esta ronroneando';
    }
}

class Perrito extends Mascota{
    constructor (nombre,cerebro,raza){
        super(nombre, cerebro);
        this.raza=raza;
      
    }
    ladrar(){
        return this.nombre + ' Esta ladrando'
    }
}



var gatitoChido = new Gatito('Name', true, 'pinto');

var perro = new Perrito('Dog', true, 'pinto');


console.log(gatitoChido.comer());
console.log(gatitoChido.ronronear());
console.log(perro.ladrar());


///Super clase
class Maestro{
    constructor(alumno, calificacion){
        this.alumno=alumno;
        this.calificacion=calificacion;
    }
   
    datosMaestro(){
        return this.nombre + ' Este tiene esos años';
    }

}

/////sub clase

class maestro_fisica extends Maestro{
    constructor(alumno,calificacion, antiguedad){
        /// super jala valores de la super clase
        super(alumno, calificacion, antiguedad);
        this.antiguedad=antiguedad;
    }

    datosAlumno(){
        return this.alumno + ' Este tiene esos años';
    }
}


////objeto

var maestro_vae = new maestro_fisica('Eduardo', 10, 3);

console.log(maestro_vae.datosAlumno());

