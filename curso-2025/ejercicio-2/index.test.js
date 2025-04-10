import { describe, it } from "node:test";
import { equal, deepStrictEqual } from "node:assert/strict";
import {
  contarApellidosElegantes,
  esPrimo,
  ordenarDescendente,
  sumarHastaEl4,
  menoresQue
} from "./index.js";

// describe("contarApellidosElegantes", () => {
//   it("retorna cero si no encuentra ninguno", () => {
//     const result = contarApellidosElegantes(["Ávila", "Pérez", "Ruiz"]);
//     deepStrictEqual(result, 0);
//   });
//   it("retorna cero si recibe una lista vacía", () => {
//     const result = contarApellidosElegantes([]);
//     deepStrictEqual(result, 0);
//   });
//   it("retorna la cantidad correcta", () => {
//     const result = contarApellidosElegantes([
//       "Armstrong",
//       "Swarzeneger",
//       "Calvo",
//       "Pino",
//       "Lewandowsky",
//     ]);
//     deepStrictEqual(result, 3);
//   });
// });

// describe("esPrimo", () => {
//   it("retorna true si es primo", () => {
//     const result = esPrimo(23);
//     deepStrictEqual(result, true);
//   });
//   it("retorna false si no es primo", () => {
//     const result = esPrimo(15);
//     deepStrictEqual(result, false);
//   });
//   it("retorna false para el 1", () => {
//     deepStrictEqual(esPrimo(1), false);
//   });
//   it("retorna true para el 2", () => {
//     deepStrictEqual(esPrimo(2), true);
//   });
// });

// describe("sumarHastaEl4", () => {
//   it("suma todos si nunca encuentra el 4", () => {
//     const result = sumarHastaEl4([3, 9, 7, 3, 1]);
//     deepStrictEqual(result, 23);
//   });
//   it("suma todos si termina en 4", () => {
//     const result = sumarHastaEl4([3, 9, 7, 3, 1, 4]);
//     deepStrictEqual(result, 27);
//   });
//   it("devuelve 0 si recibe un arreglo vacío", () => {
//     deepStrictEqual(sumarHastaEl4([]), 0);
//   });
//   it("devuelve la suma solo hasta el 4", () => {
//     deepStrictEqual(sumarHastaEl4([2, 4, 3]), 6);
//   });
// });

// describe("menoresQue", () => {
//   it("devuelve el arreglo con los numeros menores al límite", () => {
//     const result = menoresQue([3, 9, 7, 3, 1], 4);
//     deepStrictEqual(result, [3, 3, 1]);
//   });
//   it("devuelve un arreglo vacío si no encuentra ninguno", () => {
//     const result = menoresQue([3, 9, 7, 3, 2], 1);
//     deepStrictEqual(result, []);
//   });
// });

describe("ordenarDescendente", () => {
  it("devuelve el arreglo con los numeros en orden descendente", () => {
    const result = ordenarDescendente([3, 9, 7, 2, 1]);
    deepStrictEqual(result, [9, 7, 3, 2, 1]);
  });
});