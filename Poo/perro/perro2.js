/* Ejercicios 1 y 2 */
class perro{
    constructor(nombre){
        this.nombre = nombre;
    }

    ladrar(){
        console.log(" ¡Woof! " + this.nombre);
    }
}

const miPerro = new miPerro("Malu");
miPerro.ladrar();