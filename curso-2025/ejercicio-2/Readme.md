# Algoritmos Iterativos

El objetivo de esta clase es estudiar como el uso de bucles nos permite resolver problemas
que requieren repetir la misma lógica en multiples ocasiones.

- Utilizar ciclos `for` y `while`
- Entender la sintaxis utilizada en JS para obtener iteradores desde los arreglos u objetos (`of`, `in`)
- Interrumpir ciclos utilizando `break`

### Ejemplos

Todos los bloques de código siguiente imprimen los números del 1 al 10

Con un ciclo for

```js
for (let i = 1; i < 11; i++) {
  console.log(i);
}
```

Con un ciclo while

```js
let i = 1;
while (i < 11) {
  console.log(i);
  i++;
}
```

Con los elementos de un arreglo

```js
const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
for (const numero of numeros) {
  console.log(numero);
}
```

Con los índices de un arreglo

```js
const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
for (const numero in numeros) {
  console.log(numero + 1);
}
```

Truncando un ciclo infinito con un break

```js
let i = 1;
while (true) {
  if (i === 11) {
    break;
  }
  console.log(i);
  i++;
}
```

### Ejemplos adicionales

Agregar un elemento a un arreglo

```js
const arr = [];

arr.push(3);
arr.push(4);
```

Obtener el largo de un arreglo

```js
const arr = [2, 5, 8, 9];

const largo = arr.length;

console.log(largo);
```
