/**
	Implementa una vista.
**/
export class Vista{
	/**
		Constructor de la clase
	**/
	constructor(div, controlador, base){
		this.div = div
		this.controlador = controlador;
		this.base = base;
	}
	/**
		Muestra u oculta el div principal de la vista.
		@param ver {Boolean} True muestra la vista y false la oculta.
	**/
	mostrar(ver){
		if (ver)
			this.div.style.display = 'block'
		else
			this.div.style.display = 'none'
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