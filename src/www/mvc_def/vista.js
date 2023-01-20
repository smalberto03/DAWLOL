/**
	Implementa una vista.
**/
export class Vista{ /*Solo ha y que poner atributos y medtodos que se usen en todas las vistas, aquellos metodos o stributos 
que sean particulares de una vista hay que crearlas en la clase de esa vista*/
	/**
		Constructor de la clase
	**/
	constructor(div, controlador){
		this.div = div
		this.controlador = controlador;
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
}