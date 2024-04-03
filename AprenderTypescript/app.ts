

class persona {
    edad: bigint = 0 as unknown as bigint;
    nombre: string = ""
    apellido: string = ""
    sexo: string = ""

    constructor(edad: bigint, nombre: string, apellido: string, sexo: string) {

        this.edad = edad
        this.nombre = nombre
        this.apellido = apellido
        this.sexo = sexo
    }
    imprimir(): string {
        return "objeto de nombre: " + this.nombre + ""
            + this.apellido + ", tiene una edad de: " + this.edad.toString()
            + "y es del sexo: " + this.sexo;
    }
}

let Alberto = new persona(27 as unknown as bigint, "Alberto", "Bernal", "Hombre")

let Adrian = new persona(21 as unknown as bigint, "Adrian", "Cruz", "Hombre")

let jacinto = new persona(34 as unknown as bigint, "Jacinto", "Aisa", "Hombre")



document.write( Alberto.nombre + "" + Alberto.apellido + ",tiene una edad de:" + Alberto.edad.toString()
    + "y el sexo es" + Alberto.sexo);
document.write("objeto de nombre:" + Adrian.nombre + "" + Adrian.apellido + ",tiene una edad de:" + Adrian.edad.toString()
    + "y el sexo es" + Adrian.sexo)