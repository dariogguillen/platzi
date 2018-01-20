function get(URL, callback) {
  const xhr = new XMLHttpRequest(); //crear nueva instancia del objeto XMLHttpRequest

  xhr.onreadystatechange = function() {
    //funcion a ejecutar cuando se envie la peticion
    if (this.readyState === 4) {
      // 4 = se realizo bien la peticion
      if (this.status === 200) {
        //todo ok
        callback(null, JSON.parse(this.responseText)); //se usa null porque no hubo error
      } else {
        //hubo un error
        callback(
          new Error(
            `Se produjo un error al realizar la peticion: ${this.status}`
          )
        );
      }
    }
  };

  xhr.open('GET', URL); //establecer metodo y direccion
  xhr.send(null); //enviar la peticion
}

//Funcion para tratar el error
function handleError(err) {
  console.log(`Requet failed: ${err}`);
}

// Llamada al metodo
get('http://swapi.co/api/people/1/', function onResponse(err, luke) {
  if (err) return handleError(err); //se usa return para cortar el flujo de la funcion y no seguir con la ejecucion

  //traer el mundo
  get(luke.homeworld, function onHomeworldResponse(err, homeworld) {
    if (err) return handleError(err);

    luke.homeworld = homeworld;
    console.log(`${luke.name} nacio en ${luke.homeworld.name}`);
  });
  console.log(`Request succeded`);
  console.log('luke', luke);
});
