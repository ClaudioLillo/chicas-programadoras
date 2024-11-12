### Declarar variables

Las variables en un lenguaje de programación, nos permiten almacenar valores en memoria y luego acceder a ellos
En javascript las variables pueden ser delclaras usando 3 prefijos (var, const y let).

```js
var largo = 34; // variable global
const largo = 34; // constante
let largo = 34; // variable local
```

### Tipos de variables

Javascript infiere el tipo de las variables de forma automática, no es necesario indicar el tipo de forma explícita

```js
const num = 1; // number
const isOpen = true; // boolean
const name = "Andrea"; // string
```

### Tipos complejos

Los tipos mas simples o primitivos, pueden ser utilizados en listas (arreglos) o en estructuras llamadas objetos

```js
// Objetos
const perro = {
  patas: 4,
  sonido: "guau",
  cola: true,
};

const gato = {
  patas: 4,
  sonido: "miau",
  cola: true,
};

// Arreglos
const numbers = ["uno", "dos", "tres", "cuatro"];
```

### Acceso a los valores

Los valores en una lista se acceden utilizando el índice del elemento deseaado, mientras que en un objeto, se utiliza la llave

```js
console.log(perro.sonido); // guau

console.log(numbers[2]); // tres
```

Nota: Los índices de las listas comienzan con cero: `[0,1,2, ...]`

### Funciones

Las funciones nos permiten encapsular código, es decir, sirven para separar un gran problema en varios problemas más pequeños.

```js
function sumar(a, b) {
  return a + b;
}

console.log(sumar(1 + 2)); // 3
```

### Ciclos For y While

Los ciclos nos permiten realizar tareas repetitivas, en base a un valor de referencia o un iterable. Un iterable es cualquier tipo de dato que puede ser recorrido linealmente, como un arreglo por ejemplo.

```js
// Para cada valor de i entre 0 y 29, imprime i
for (let i = 0; i < 30; i++) {
  console.log(i);
}

let c = 0;
// Mientras c sea menor que 20, imprimir gato: c, y luego sumar uno a la c
while (c < 20) {
  console.log("gato: ", c);
  c++; // si se me olvida esta línea, el loop no tiene fin
}
```

### Condicionales

Las sentencias condicionales nos permiten hacer que el programa tome decisiones

```js
if (x == y) {
  console.log("x es igual a y");
} else {
  console.log("x es distinto de y");
}
```
