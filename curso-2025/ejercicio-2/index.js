/*
  recibe: una lista de apellidos
  devuelve: la cantidad de apellidos con más de 5 consonantes
*/
export function contarApellidosElegantes(apellidos) {
  let total = 0;
  for (const apellido of apellidos) {
    let consonantes = 0;
    for (const letra of apellido) {
      if (
        letra !== "a" &&
        letra !== "e" &&
        letra !== "i" &&
        letra !== "o" &&
        letra !== "u"
      ) {
        consonantes++;
      }
    }
    if (consonantes > 5) {
      total++;
    }
  }
  return total;
}

/*
  recibe: un número entero positivo
  devuelve: true si es primo, false en caso contrario
*/
export function esPrimo(numero) {
  if (numero === 1) {
    return false;
  }
  for (let i = 2; i < numero; i++) {
    if (numero % i === 0) {
      return false;
    }
  }
  return true;
}

/*
  recibe: un arreglo de números enteros
  devuelve: la suma de los números hasta el primer 4, inclusive
  ejemplo: ([3,1,7,3,4,11,0,1,6]) => 18
*/
export function sumarHastaEl4(numeros) {
  let suma = 0;
  for (let numero of numeros) {
    suma = suma + numero;
    if (numero === 4) {
      break;
    }
  }
  return suma;
}

/*
  recibe: un arreglo de números enteros y otro número entero
  devuelve: un arreglo que contiene solo los numeros del primer arreglo que son menores que el segundo argumento
  ejemplo: ([3,11,7,8], 9) => [3,7,8]
*/
export function menoresQue(numeros, limite) {
  // escriba su código aquí
  // el método para agregar un elemento a un arreglo es .push
  // arreglo.push(nuevo_elemento)
}

/*
  recibe: un arreglo de números enteros, sin repeticiones
  devuelve: el arreglo ordenado de mayor a menor
  ejemplo: ([3,2,7,1,4,5]) => [7,5,4,3,2,1]
*/
export function ordenarDescendente(numeros) {
  // escriba su código aquí
  // está prohibido usar el método .sort
  // el largo de un arreglo es arreglo.length
}
