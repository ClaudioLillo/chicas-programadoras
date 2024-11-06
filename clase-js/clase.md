### Declarar variables

```js
var largo = 34; // variable global
const largo = 34; // constante
let largo = 34; // variable local
```

### Tipos de variables

```js
const num = 1; // number
const isOpen = true; // boolean
const name = "Andrea"; // string
```

### Tipos complejos

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

```js
console.log(perro.sonido);

console.log(numbers[2]);
```

### Funciones

```js
function sumar(a, b) {
  return a + b;
}

console.log(sumar(1 + 2));
```

### Ciclos For y While

```js
for (let i = 0; i < 30; i++) {
  console.log(i);
}

let c = 0;
while (c < 20) {
  console.log("gato: ", c);
  c++; // si se me olvida esta línea, el loop no tiene fin
}
```
