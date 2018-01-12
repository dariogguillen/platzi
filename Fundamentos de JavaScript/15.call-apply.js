const dario = {
    nombre: 'Dario',
    apellido: 'Garcia'
}

function saludar(veces) {
    for (let i = 0; i < veces; i++) {
        console.log(`Hola ${this.nombre} ${this.apellido}`)
    }
}

saludar.call(dario, 3)

/**************************** */

const dario = {
    nombre: 'Dario',
    apellido: 'Garcia'
}

function saludar(veces) {
    for (let i = 0; i < veces; i++) {
        console.log(`Hola ${this.nombre} ${this.apellido}`)
    }
}

saludar.apply(dario,[3])