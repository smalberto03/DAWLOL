/**
 * Contine la clase libro
 */
export class Libro{

    constructor(nombre, ejemplar, fechap, descripcion, premiado){
        this.nombre = nombre
        this.ejemplar = ejemplar
        this.fechap = fechap
        this.descripcion = descripcion
        this.premiado = premiado
    }

    habla(texto){
        console.log(texto)
    }
}