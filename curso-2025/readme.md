# Curso Chicas Programadoras 2025

## Contenido

1. Funciones, for loops, condicionales, operadores y coerción de datos
2. Algoritmos iterativos
3. Estructuras de datos (objetos)
4. Algoritmos recursivos
5. Métodos de iterables
6. Programación reactiva (estados, componentes)

## Cómo usar este curso

### Clonar repositorio

Tomando como base /Documentos/programacion/ ejecutar:

```
git clone https://github.com/ClaudioLillo/chicas-programadoras.git club-chicas-programadoras-2025
```

luego crear una rama con tu nombre corriendo el comando:

```
git switch -C mi_nombre
```

Esto creara una carpeta llamada club-chicas-programadoras-2025 con el repositorio dentro.

### Ejercicios

Posicionarse en la carpeta /Documentos/programacion/club-chicas-programadoras-2025 como base.
Ingresar al ejercicio, revisar si tiene un archivo README.md, luego tomar como base los ejercicios mostrados en clase para resolver los problemas propuestos.

### Validación

Luego de implementar la solucion, validar las respuestas ejecutando los test con `npm test` **en la carpeta del ejercicio correspondiente**

### Empujar la rama

Primer commit

```bash
git add .
git commit -m "{aqui escribo mi mensaje}"
git push --set-upstream origin {nombre-de-la-rama}
```

Siguientes commits

```bash
git add .
git commit -m "{aqui escribo mi mensaje}"
git push
```

Traer las actualizaciones

```bash
git checkout main
git pull
git checkout {nombre-de-la-rama}
git merge main
```

...
