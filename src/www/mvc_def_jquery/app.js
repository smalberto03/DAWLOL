'use strict'
import { VistaNav } from "./vistanav.js"
import { VistaInicio } from "./vistainicio.js"
import { VistaAnadir } from "./vistaanadir.js"
import {Modelo} from "./modelo.js"
/*import {Libro} from "./libro.js"
import{Idb} from "./idb.js"*/

class Controlador{

    /**
		Constructor de la clase
		Llama al método iniciar al cargarse la página
	**/
    constructor(){
		this.modelo = new Modelo(this)
        //window.onload = this.iniciar.bind(this)
        $(window).on('load', this.iniciar.bind(this))
       //this.libro = new Libro('Pulgarcito', 200, 20-10-2004, 'Es un libro infantil donde se trata el tema de la confienza', true)
    }

    /**
		Inicia la aplicación
		Crea el modelo y las vistas.
	**/
    iniciar()
    {
		//Cogemos referencias al DOM
		//this.nav = document.getElementsByTagName('nav')[0]
        this.nav = $('#nav')
        console.log('Hola')

        //this.divInicio = document.getElementById('divInicio')
        this.divInicio = $('#divInicio')

		//this.divAnadir = document.getElementById('divAnadir')
        this.divAnadir = $('#divAnadir')

		//Creamos las Vistas
        this.vistaNav = new VistaNav(this.nav, this)
		this.vistaInicio = new VistaInicio(this.divInicio, this) //Ponemos el this al final para pasar el controlador
        this.vistaAnadir = new VistaAnadir(this.divAnadir, this)

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

    
    pulsarNavInicio()
    {
        this.ocultarVistas()
        this.vistaInicio.mostrar(true)

        /*DOM 
        this.li1 = document.getElementsByTagName('li')[1]
        this.li1.style.color='cyan'
        this.li1.style.textDecoration='underline'*/

        //JQuery
        this.li1 = $('#liLista')
        this.li1.css('color', 'cyan')
        this.li1.css('textDecoration', 'underline')

        /*DOM
        this.li2 = document.getElementsByTagName('li')[2]
        this.li2.style.color='orange'
        this.li2.style.textDecoration='none'*/

        this.li2 = $('#lianadir')
        this.li2.css('color', 'orange')
        this.li2.css('textDecoration', 'none')
    }
    
    //LLame a ocultar vistas y al vistaAnadir.mostrar(true)
    pulsarNavCRUD()
    {
        this.ocultarVistas()
        this.vistaAnadir.mostrar(true)

        /*DOM
        this.li1 = document.getElementsByTagName('li')[1]
        this.li1.style.color='orange'
        this.li1.style.textDecoration='none'*/

        //JQuery
        this.li1 = $('#liLista')
        this.li1.css('color', 'orange')
        this.li1.css('textDecoration', 'none')

        /*DOM
        this.li2 = document.getElementsByTagName('li')[2]
        this.li2.style.color='cyan'
        this.li2.style.textDecoration='underline'*/

        //JQuery
        this.li2 = $('#lianadir')
        this.li2.css('color', 'cyan')
        this.li2.css('textDecoration', 'underline')
    }



    /*PARA AÑADIR FILAS A LA BASE DE DATOS INDEXEDDB
    insertar(objeto){
		this.modelo.insertar(objeto, this.insertarOK.bind(this))
	}
	insertarOK(){
		console.log('La inserción ha ido bien')
	}*/

    aceptarCRUD(nombre, ejemplar, fecha, descripcion){
		this.modelo.insertar(nombre, ejemplar, fecha, descripcion)
	}

    anadirdivjquery()
    {
        //Generacion dinámica con JQuery
        console.log('Estoy aqui')

        /*this.divNuevo = $('<div id="div"></div>')
        this.divNuevo.css('backgroundColor', 'orange')
        this.divNuevo.css('width', '200px')
        this.divNuevo.css('height', '100px')
        $('body').append(this.divNuevo)*/

        this.pNuevo = $('<p>Este párrafo es nuevo y se crea mediante JQuery</p>')
        $('body').append(this.pNuevo)
        this.pNuevo.css('color', 'orange')

        //$('#div').append(this.pNuevo) 
    }
}

new Controlador()