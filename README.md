## Web Manifest

El web manifest permite implementar la funcionalidad de Add to Homescreen.

Create-react-app nos da un Web Manifest pre armado el cual debemos configurar. Todo lo que tiene que ver con nuestro Web Manifest está dentro de los archivos index.html y manifest.json de la carpeta public de nuestro proyecto.

En el **manifest.json** se pueden ver varios atributos:
* **short_name**: Es el nombre que se utiliza en la Homescreen.
* **name**: Es el nombre de nuestra aplicación.
* **icons**: Especifica un array de imágenes que servirán como iconos de la aplicación. Cambiaremos el "favicon.ico" por "icon.png", especificamos el tamaño a 512x512 y el tipo a "image/png".
* **start_url**: Nos indica en que página comienza nuestra aplicación, por compatibilidad siempre conviene que sea "/" en lugar de "./index.html".
* **display**: Define el modo de visualización para la aplicación. Standalone significa que la aplicación puede correr por su misma.
* **theme_color**: Define qué color vamos a usar en la barra de tareas de Android para que combine con nuestra aplicación.
* **related_applications**: Sirve si queremos que Chrome en el Add to Homescreen recomiende una aplicación del Store.

```json
{
  "short_name": "Recetas",
  "name": "Platzi Recetas",
  "icons": [
    {
      "src": "/icon.png",
      "sizes": "512x512",
      "type": "image/png"
    }
  ],
  "start_url": "/",
  "scope": "/",
  "display": "standalone",
  "theme_color": "#ffa500",
  "background_color": "#ffffff",
  "related_applications": [],
  "prefer_related_applications": false
}
```

Finalmente, hay que linkear el manifest en el HTML.

```html
<link rel="manifest" href="manifest.json">
```

En iOS necesitamos añadir alguna metadata al index.html de nuestro proyecto. Al momento de probar nuestra aplicación en iOS nos daremos cuenta de que el Add to Homescreen en este caso debe ser añadido manualmente por el usuario.

```html
<link rel='apple-touch-icon' href='/icon.png' />
<meta name='apple-mobile-web-app-title' content='PlatziRecetas' />
<meta name='apple-mobile-web-app-capable' content='yes' />
<meta name='apple-mobile-web-app-status-bar-style' content='black-translucent' />
```