import {Vista} from './vista.js'

export class VistaAnadir extends Vista{

    constructor(div, controlador)
    {
        super(div, controlador)

		
		this.iNombre = this.div.getElementsByTagName('input')[0]
		this.iEjemplar = this.div.getElementsByTagName('input')[1]
		this.iPublicacion = this.div.getElementsByTagName('input')[2]
		this.iDescripcion = this.div.getElementsByTagName('input')[3]
		this.btn1 = document.getElementsByTagName('button')[0]

		this.tabla = this.div.getElementsByTagName('table')[0]

		this.btn1.onclick = this.pulsar1.bind(this)
    }

    /*pulsarAnadir()
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
	*/
	pulsar1(){
		this.controlador.aceptarCRUD(this.iNombre.value, this.iEjemplar.value, this.iPublicacion.value, this.iDescripcion.value)	
	}

}