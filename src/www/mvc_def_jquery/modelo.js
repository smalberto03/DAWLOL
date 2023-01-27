export class Modelo{

	constructor(controlador){
		this.controlador = controlador
		//this.idb = new Idb()

		this.lista = [] //Array de datos
		this.callbacks = [] //Array de callbacks para implementar el observador
	}
	
	/*insertar(objeto, callback){
		this.idb.insertar(objeto, callback)
	}*/

	registrar(callback){
        this.callbacks.push(callback)
	}
	/**
	 * Ejecuta todos los callback registrados.
	 **/
	 avisar(){
		for(let callback of this.callbacks)
			callback()
	}

	insertar(nombre, ejemplar, fecha, descripcion){
		this.lista.push({'nombre': nombre, 'ejemplar': ejemplar, 'fecha': fecha, 'descripcion': descripcion})
		this.avisar()
	}

	getDatos(){
		return this.lista
	}
}