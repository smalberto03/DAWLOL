import {Libro} from '../vistas/vista.js'

console.log('Hola')

class Controlador{

    constructor(){
       //window.onload = this.iniciar.bind(this)
       this.libro = new Libro('Pulgarcito', 200, 20-10-2004, 'Es un libro infantil donde se trata el tema de la confienza', true)
    }

    prueba()
    {
        this.libro.habla('Hola soy un libro y puedo hablar y mucho más')
    }
}

const app = new Controlador()
app.prueba()