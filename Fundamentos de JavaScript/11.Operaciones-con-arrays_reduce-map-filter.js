function suma(...numeros) {
    // console.log(numeros)
    /* let acum = 0;
    for (let i = 0; i < numeros.length; i++) {
        acum += numeros[i];
    } 
    return acum;
    */

    return numeros.reduce(function (acum, numero) {
        acum += numero;
        return acum;
    }, 0);
}

suma(4,8,12,8954,7,9);

/* ------------------------------------------------ */

// function dobles(...numeros) {
//     /* const resultado = [];
//     for (let i = 0; i < numeros.length; i++) {
//         resultado.push(numeros[i] * 2);
//     }
//     return resultado; */

//     return numeros.map(numero => numero * 2);

// }

const dobles = (...numeros) => numeros.map(numero => numero * 2);

dobles(4, 8, 12, 8954, 7, 9);

/* ////////////////////////////////////////////////////////////////// */

function pares(...numeros) {
    /* const par = [];
    const length = numeros.length;
    for (let i = 0; i < length; i++) {
        const numero = numeros[i];
        if (numero % 2 === 0) {
            par.push(numero);
        }
    }
    return par; */
    return numeros.filter(numero => numero % 2 === 0);
}

const pares = (...numeros) => numeros.filter(numero => numero % 2 === 0);

pares(1,2,3,4,5,6,7,8);
