/*//Promesas
const promise = new Promise(function (resolve, reject){
  setTimeOut(function(){
    resolve(new Error('Se produjo un error'))
  }, 1000)
})

promise
  .then(function(){
  
})
  .catch(function(err) {
  
})*/
function get(URL) {
  return new Promise(function (resolve, reject) {
    const xhr = new XMLHttpRequest();

    xhr.onreadystatechange = function () {
      const DONE = 4
      const OK = 200
      if (this.readyState === DONE) {
        if (this.status === OK) {
          //Todo OK
          resolve(JSON.parse(this.responseText))
        } else {
          //Hubo un error
          reject(newError(`Se produjo un error al realizar el request ${this.status}`))
        }
      }
    }
    xhr.open('GET', URL);
    xhr.send(null);
  })
}

/* Funcion para tratar el error */
function handleError(err) {
  console.log(`Request failed: ${err}`)
}

let luke;
/*llamada al metodo */
get('https://www.swapi.co/api/people/1/')
  .then(function (response) {
    luke = response;
    return get(luke.homeworld);
  })
  .then(function (homeworld) {
    luke.homeworld = homeworld
    console.log(`${luke.name} nació en ${luke.homeworld.name}`)
  })
  .catch(function (err) {
    handleError(err)
  })


/************FETCH ***********/

function get(URL) {
  return new Promise(function (resolve, reject) {
    const xhr = new XMLHttpRequest();

    xhr.onreadystatechange = function () {
      const DONE = 4
      const OK = 200
      if (this.readyState === DONE) {
        if (this.status === OK) {
          resolve(JSON.parse(this.responseText))
        } else {
          reject(newError(`Se produjo un error al realizar el request ${this.status}`))
        }
      }
    }

    xhr.open('GET', URL);
    xhr.send(null);
  })
}

function handleError(err) {
  console.log(`Request failed: ${err}`)
}

let luke;
fetch('https://www.swapi.co/api/people/1/')
  .then(function (response) {
    return response.json()
  })
  .then(function (json) {
    luke = json;
    return fetch(luke.homeworld);
  })
  .then(function (response) {
    return response.json()
  })
  .then(function (json) {
    luke.homeworld = json
    console.log(`${luke.name} nació en ${luke.homeworld.name}`)
  })
  .catch(function (err) {
    handleError(err)
  })