import {Vista} from './vista.js'

/**
	Implementa una vista de inicio.
**/
export class VistaInicio extends Vista{
	/**
		Constructor de la clase.
		@param div {HtmlDivElement} Div de HTML en el que se desplegará la vista.
	**/
	constructor(div, controlador){
		super(div, controlador)

		this.jquerybtn = $('#btnjquery')

		this.jquerybtn.click(this.pulsarjquery.bind(this))
	}

	pulsarjquery()
	{
		this.controlador.anadirdivjquery()
		//console.log('Has pulsado el boton')
	}
}
