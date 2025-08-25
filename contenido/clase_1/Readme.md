### HTML

HTML es un lenguaje de hipertexto, que permite la creación y transmisión del contenido de las páginas web. Se compone de etiquetas, que componen un árbol, tal como en el siguiente ejemplo

```html
<html>
    <head>
        <title>Título de la Página</title>
    </head>
    <body>
        <h1>Cuerpo del documento</h1>
    </body>
</html>
```

En el ejemplo de arriba, el elemento `html` tiene 2 hijos, `head` y `body`. A su vez, estos tienen sus propios hijos `title` y `h1` respectivamente. Se dice que el documento sigue la estructura de un árbol, ya que se puede considerar que los elementos hijos son como ramas que salen de un tronco, y que estas ramas puede tener más ramás a su vez. Desde esta perspectiva, el elemento que ya no tiene más hijos es una rama terminal.

Significado de las etiquetas (tags)
- html: se utiliza para que el intérprete reconozca que el documento es un html. Debe ser la primera etiqueta en abrirse y la última en cerrarse.
- head: contiene información que no es visible en el cuerpo de la página, como el título de la página y metadata que requiere el navegador.
- body: contiene la parte visible de la página
- title: permite insertar el título de la página, que es el texto visible en la parte superior de la pestaña del navegador
- h1: es una etiqueta de encabezado. Se utiliza para escribir títulos dentro del cuerpo del documento. Existen desde el h1 hasta el h6 según su relevancia.

