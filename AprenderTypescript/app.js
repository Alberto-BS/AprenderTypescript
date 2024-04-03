"use strict";
class persona {
    constructor(edad, nombre, apellido, sexo) {
        this.edad = 0;
        this.nombre = "";
        this.apellido = "";
        this.sexo = "";
        this.edad = edad;
        this.nombre = nombre;
        this.apellido = apellido;
        this.sexo = sexo;
    }
    imprimir() {
        return "objeto de nombre: " + this.nombre + ""
            + this.apellido + ", tiene una edad de: " + this.edad.toString()
            + "y es del sexo: " + this.sexo;
    }
}
let Alberto = new persona(27, "Alberto", "Bernal", "Hombre");
let Adrian = new persona(21, "Adrian", "Cruz", "Hombre");
let jacinto = new persona(34, "Jacinto", "Aisa", "Hombre");
document.write("objeto de nombre:" + Alberto.nombre + "" + Alberto.apellido + ",tiene una edad de:" + Alberto.edad.toString()
    + "y el sexo es" + Alberto.sexo);
document.write("objeto de nombre:" + Adrian.nombre + "" + Adrian.apellido + ",tiene una edad de:" + Adrian.edad.toString()
    + "y el sexo es" + Adrian.sexo);
//# sourceMappingURL=app.js.map