/*
 * el metodo listarAmigos no recuerda this.nombre, 
 */

class Persona {
    constructor(nombre, amigos = []) {
        this.nombre = nombre
        this.amigos = amigos
    }

    listarAmigo(){
        this.amigos.forEach(function (amigo) {
            console.log(`Hola, mi nombre es ${this.nombre} y soy amigo de ${amigo}`)
        })
    }
}

const dario = new Persona('Dario', ['Pedro', 'Juan', 'Pepe']);

/*
 * se crea una variable _this y se asigna this y se usa _this.nombre
 */

class Persona {
    constructor(nombre, amigos = []) {
        this.nombre = nombre
        this.amigos = amigos
    }

    listarAmigo(){
        const _this = this
        this.amigos.forEach(function (amigo) {
            console.log(`Hola, mi nombre es ${_this.nombre} y soy amigo de ${amigo}`)
        })
    }
}

const dario = new Persona('Dario', ['Pedro', 'Juan', 'Pepe']);

/*
 * se utiliza .bind(this) al final de la funcion amigo 
 */

class Persona {
    constructor(nombre, amigos = []) {
        this.nombre = nombre
        this.amigos = amigos
    }

    listarAmigo(){
        this.amigos.forEach(function (amigo) {
            console.log(`Hola, mi nombre es ${this.nombre} y soy amigo de ${amigo}`)
        }.bind(this))
    }
}

const dario = new Persona('Dario', ['Pedro', 'Juan', 'Pepe']);

/*
 * usando arrow-function el bind va incluido
 */

class Persona {
    constructor(nombre, amigos = []) {
        this.nombre = nombre
        this.amigos = amigos
    }

    listarAmigo(){
        this.amigos.forEach((amigo) => {
            console.log(`Hola, mi nombre es ${this.nombre} y soy amigo de ${amigo}`)
        })
    }
}

const dario = new Persona('Dario', ['Pedro', 'Juan', 'Pepe']);