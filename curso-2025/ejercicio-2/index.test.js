import { describe, it } from "node:test";
import { equal } from "node:assert/strict";
import { contarApellidosElegantes, esPrimo } from "./index.js";

describe("contarApellidosElegantes", () => {
  it("retorna cero si no encuentra ninguno", () => {
    const result = contarApellidosElegantes(["Ávila", "Pérez", "Ruiz"]);
    equal(result, 0);
  });
  it("retorna cero si recibe una lista vacía", () => {
    const result = contarApellidosElegantes([]);
    equal(result, 0);
  });
  it("retorna la cantidad correcta", () => {
    const result = contarApellidosElegantes([
      "Armstrong",
      "Swarzeneger",
      "Calvo",
      "Pino",
      "Lewandowsky",
    ]);
    equal(result, 3);
  });
});

describe("esPrimo", () => {
  it("retorna true si es primo", () => {
    const result = esPrimo(23);
    equal(result, true);
  });
  it("retorna false si no es primo", () => {
    const result = esPrimo(15);
    equal(result, false);
  });
  it("retorna false para el 1", () => {
    equal(esPrimo(1), false);
  });
  it("retorna true para el 2", () => {
    equal(esPrimo(2), true);
  });
});
