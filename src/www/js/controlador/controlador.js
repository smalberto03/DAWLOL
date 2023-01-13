/**
	@file Contiene el controlador principal de la aplicación
	@author Alberto Salazar
	@license GPL-3.0-or-later
**/

import {VistaInicio} from './vistainicio.js'
import {VistaNav} from './vistanav.js'

console.log('Hola')

/**
 * Controlador de la aplicación
 */
class Controlador{

    /**
		Constructor de la clase
		Llama al método iniciar al cargarse la página
	**/
    constructor(){
       window.onload = this.iniciar.bind(this)
       //this.libro = new Libro('Pulgarcito', 200, 20-10-2004, 'Es un libro infantil donde se trata el tema de la confienza', true)
    }

    /**
		Inicia la aplicación
		Crea el modelo y las vistas.
	**/
    inciar()
    {
        this.divInicio = ducument.getElementById('divInicio')
        this.divAnadir = document.getElementById('divAnadir')

        this.vistaInicio = new VistaInicio(this.divInicio)
        this.divAnadir = new VistaAnadir(this.divAnadir)

        this.vistaInicio.mostrar(true)
    }

    /**
	 * Oculta todas las vistas.
	 */
    ocultarVistas()
    {
        this.vistaInicio.mostrar(false)
	    this.vistaAnadir.mostrar(false)
    }

    prueba()
    {
        this.libro.habla('Hola soy un libro y puedo hablar y mucho más')
    }

    /**
		Atención a la pulsación del enlace al Inicio en el menú de navegación.
	**/
	pulsarNavInicio(){
		this.ocultarVistas()
		this.vistaInicio.mostrar(true)
	}
	/**
		Atención a la pulsación del enlace al CRUD en el menú de navegación.
	**/
	pulsarNavCRUD(){
		this.ocultarVistas()
		this.vistaAnadir.mostrar(true)
	}
}

const app = new Controlador()
//app.prueba()