
import {Vista} from './vista.js'
/**
	@file Contiene el modelo de la vista de menú de navegación de la aplicación
	@author Alberto Salazar 
	@license GPL-3.0-or-later
**/

/**
	Implementa una vista del menú de navegación. La clase extiende (hereda) de extends Vista
**/
export class VistaNav extends Vista{

	/**
		Constructor de la clase.
		@param controlador {Controlador} Controlador de la vista.
		@param nav {HtmlNavElement} Nav de HTML en el que se desplegará la vista.
	**/
    constructor(nav, controlador){
        
        super(nav, controlador)
		

        //this.liInicio = document.getElementById('liLista')
		this.liInicio = $('#liLista')

        //this.liAnadir = document.getElementById('lianadir')
		this.liAnadir = $('#lianadir')

        //this.liInicio.onclick = this.pulsarInicio.bind(this)ç
		this.liInicio.click(this.pulsarInicio.bind(this))

		//this.liAnadir.onclick = this.pulsarCRUD.bind(this)
		this.liAnadir.click(this.pulsarCRUD.bind(this))
    }

    /**
		Atención a la pulsación sobre el enlace de Inicio
	**/
	pulsarInicio(){
		this.controlador.pulsarNavInicio()
		console.log('Has pulsado en el li')
	}
	/**
		Atención a la pulsación sobre el enlace de CRUD
	**/
	pulsarCRUD(){
		this.controlador.pulsarNavCRUD()
	}
}