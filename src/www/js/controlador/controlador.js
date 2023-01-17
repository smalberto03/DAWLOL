/**
	@file Contiene el controlador principal de la aplicación
	@author Alberto Salazar
	@license GPL-3.0-or-later
**/

import {VistaInicio} from './vistainicio.js'
import {VistaNav} from '../vistas/vistanav.js'
import {Libro} from '../vistas/libro.js'
import {Idb} from '../vistas/idb.js'
import {Vista} from '../vistas/vista.js'
import {Modelo} from '../modelo/modelo.js'

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
		this.modelo = new Modelo(this)
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





        this.divAnadir = new Vista (this, document.getElementById('divAnadir'))




        this.vistaInicio = new VistaInicio(this.divInicio)
        this.divAnadir = new VistaAnadir(this.divAnadir)

        this.vistaInicio.mostrar(true)
    }




	insertar(objeto){
		this.modelo.insertar(objeto, this.insertarOK.bind(this))
	}
	/**
	 * Método que comprueba que se haya insertadonlos datos correctamente
	 */
	insertarOK(){
		console.log('Todo ha ido bien')
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

	/*
	pulsarNavInicio(){
		this.ocultarVistas()
		this.vistaInicio.mostrar(true)
	}*/
	/**
		Atención a la pulsación del enlace al CRUD en el menú de navegación.
	**/

	/*
	pulsarNavCRUD(){
		this.ocultarVistas()
		
		this.vistaAnadir.mostrar(true)
	}
	*/
}

/*
class Vista{
	constructor(controlador, base)
	{
		this.controlador = controlador;
		this.base = base;

		//Biscamos el boton donde se mandarán los datos
		this.btnAnadir = document.getElementsByTagName('button')[0]

		//Le añadimos al boton un evento
		this.btnAnadir.onclick = this.pulsarAnadir.bind(this)
	}

	pulsarAnadir()
	{
		let nombre = 'Pulgarcito'
		let fechap = 2003
		let ejemplar = 1240
		let descripcion = 'Cuenta la historia de lo importamte que es no confiar en los desconocidos'
		let premiado = true;

		//Creamos el objeto
		let objeto = new Libro(nombre, fechap, ejemplar, descripcion, premiado)

		this.controlador.insertar(objeto)
	}
}
*/

/*class Libro{

	constructor(nombre, fechap, descripcion, premiado)
	{
		this.nombre = nombre;
		this.fechap = fechap;
		this.descripcion = descripcion;
		this.premiado = premiado;
	}
}
*/


const app = new Controlador()
//app.prueba()