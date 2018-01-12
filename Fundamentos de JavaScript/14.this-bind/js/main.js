class Toggable {
    constructor(element){
        // inicializar el estado interno
        this.element = element
        this.element.innerHTML = 'Off'
        this.activated = false
        this.element.addEventListener('click', this.onClick.bind(this))
    }

    onClick(ev){
        //cambiar estado interno 
        /* console.log('Esto es lo que tiene this en el onClick', this) */
        this.activated = !this.activated
        //llamar a toggleText
        this.toggleText()
    }

    toggleText(){
        //cambiar el texto
        this.element.innerHTML = this.activated ? 'On' : 'Off'
    }
}

const button = document.getElementById('boton')
const miBoton = new Toggable(button)