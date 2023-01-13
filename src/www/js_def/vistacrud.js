/**
	@file Contiene la vista del CRUD de la aplicación
	@author Miguel Jaque <mjaque@fundacionloyola.es>
	@license GPL-3.0-or-later
**/

import {Vista} from './vista.js'

/**
	Vista del CRUD
	Contiene el formulario de inserción y la tabla de listado.
**/
export class VistaCRUD extends Vista{
	/**
		Constructor de la clase
		@param div {HTMLDivElement} Div principal de la vista.
		@param controlador {Controlador} Controlador de la vista.
	**/
	constructor(div, controlador){
		super(div)
		this.controlador = controlador

		//Hacemos que la VistaCRUD "observe" al Modelo
		this.modelo = this.controlador.getModelo()
		this.modelo.registrar(this.actualizar.bind(this))

		//Cojo referencias a los elementos del interfaz
		this.iNombre = this.div.getElementsByTagName('input')[0]
		this.iEmail = this.div.getElementsByTagName('input')[1]
		this.btnCancelar = this.div.getElementsByTagName('button')[0]
		this.btnAceptar = this.div.getElementsByTagName('button')[1]
		
		this.tabla = this.div.getElementsByTagName('tbody')[0]

		//Asigno Eventos
		this.btnAceptar.onclick = this.aceptar.bind(this)
	}
	/**
		Atención al click sobre el botón Aceptar de la vista.
	**/
	aceptar(){
		//Validar los campos
		
		//Llamar al Controlador
		this.controlador.aceptarCRUD(this.iNombre.value, this.iEmail.value)
	}
	/**
	 * Recibe el aviso del modelo cuando ha sido actualizado.
	 * Actualiza los datos de la vista.
	 **/
	actualizar(){
	    this.borrarTabla()
	    for(let dato of this.modelo.getDatos()){
	        let tr = document.createElement('tr')
	        this.tabla.appendChild(tr)
	        let td1 = document.createElement('td')
	        tr.appendChild(td1)
	        td1.textContent = dato.nombre
	        let td2 = document.createElement('td')
	        tr.appendChild(td2)
	        td2.textContent = dato.email
	        let td3 = document.createElement('td')
	        tr.appendChild(td3)
            	let spanEliminar = document.createElement('span')
            	td3.appendChild(spanEliminar)
            	spanEliminar.classList.add('icono')
            	spanEliminar.textContent = '🗑'
		spanEliminar.onclick = this.eliminar.bind(this, dato)
            	let spanEditar = document.createElement('span')
            	td3.appendChild(spanEditar)
            	spanEditar.classList.add('icono')
            	spanEditar.textContent = '✏'
		spanEditar.onclick = this.editar.bind(this, dato)
       		}
	}
	/**
	 * Borra las filas de la tabla
	 */
	 borrarTabla(){
	     while (this.tabla.firstElementChild)
	        this.tabla.firstElementChild.remove()
	 }
	/**
		Atención al evento eliminar de una fila.
		@param dato {Object} Dato contenido en la fila
	**/
	eliminar(dato){
		//Llamada al controlador
		this.controlador.eliminarCRUD(dato)
	}
	/**
		Atención al evento editar de una fila.
		@param dato {Object} Dato contenido en la fila
	**/
	editar(dato){
		console.log('Editando... ', dato)
	}
}
