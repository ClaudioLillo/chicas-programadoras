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
  // que pasa con el 1 ?
  for (let i = 2; i < numero; i++) {
    if (numero % i === 0) {
      return false;
    }
  }
  return true;
}
