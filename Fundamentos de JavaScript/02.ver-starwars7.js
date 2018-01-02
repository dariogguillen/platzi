const starWars7 = 'Star Wars: El Despertar de la Fuerza'
const pgStarWars7 = 13

const nameDario = 'Dario'
const ageDario = 28

const nameDana = 'Dana'
const ageDana = 12

const puedeVerStarWars7 = (name, age, isWithAdult = false) => {
    if (age >= pgStarWars7) {
        alert(`${name} puede pasar a ver ${starWars7}`)
    } else if (isWithAdult) {
        alert(`${name} puede pasar a ver ${starWars7}.
    Aunque su edad es ${age}, viene acompanado/a por un adulto `)
    } else {
        alert(`${name} no puede pasar a ver ${starWars7}.
    Tiene ${age} anos y necesita tener ${pgStarWars7}.`)
    }
}

puedeVerStarWars7(nameDario, ageDario)
puedeVerStarWars7(nameDana, ageDana, true)


/* function puedeVerStarWars7(name, age, isWithAdult = false) {
    if (age >= pgStarWars7){
        alert(`${name} puede pasar a ver ${starWars7}`)
    } else if (isWithAdult){
        alert(`${name} puede pasar a ver ${starWars7}.
        Aunque su edad es ${age}, viene acompanado/a por un adulto `)
    } else{
        alert(`${name} no puede pasar a ver ${starWars7}.
        Tiene ${age} anos y necesita tener ${pgStarWars7}.`)
    }
} */