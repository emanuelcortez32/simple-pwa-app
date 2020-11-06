# Progressive Web App con ReactJS ⚛️

## ¿Qué es PWA?
    PWA (Progressive Web App) no es un término nuevo (Google lo introdujo en 2015),
    pero es desconocido para muchas personas. Las PWA se definen comúnmente como
    las Apps que reúnen lo mejor de las aplicaciones web y de las nativas, incluso
    llegando a ser entendidas como un punto medio o una forma evolucionada.

    La base son páginas webs, pero utilizan tecnologías que hacen que su estética y
    funcionamiento se asemejen enormemente a una App nativa, por ejemplo, mediante
    la ejecución en segundo plano. Se accede a ellas a través de un navegador, pero se
    puede anclar un acceso directo en nuestro dispositivo (en la pantalla de inicio o en el
    menú de aplicaciones). No dependen de sistemas operativos (se ejecutan en el
    navegador) y van incorporando funcionalidades nativas del dispositivo.

**Características de una PWA**

* Responsive
    En la actualidad, la mayoría de webs cuentan con diseño responsive que las permite
    adaptarse a diferentes dispositivos, algo imprescindible con el papel predominante de
    los smartphones. A pesar de que las PWA van más allá del simple diseño responsive,
    este se puede seguir mencionando como una de sus características principales. Estas
    Apps deben adaptarse automáticamente a cualquier formato, navegador o dispositivo
    (con los consecuentes cambios de medidas y resolución), y más considerando la
    naturaleza mobile de las mismas.

* Seguras
    Se usa siempre el protocolo seguro HTTPS que, además, es necesario para la
    instalación del Service Worker. Esto posibilita asegurar que el acceso sea seguro y
    que el contenido servido no haya sido sujeto a manipulaciones. Se emplean
    tecnologías como TLS para el cifrado web.

* Rápida
    Por lo general, una PWA tiene la velocidad, tanto de carga como de navegación,
    optimizada. Esto permite que los contenidos se muestren al usuario prácticamente al
    instante, ya que se apoyan en el almacenamiento en la caché. Las interacciones, tales
    como clics o scroll, también deben ser inmediatas. El menor peso de la Progressive
    Web App en comparación a la App nativa es un factor decisivo para ello.

* Offline
    Una PWA debe permitir el acceso, ya sea de manera parcial o incluso total, a pesar
    de que no haya conexión a Internet (o esta sea de baja calidad).

* Multiplataforma
    En su desarrollo, la tecnología utilizada contempla su ejecución en diversos
    dispositivos, sistemas operativos y navegadores. Esto, además de ser clave a la hora
    de ofrecer una experiencia de usuario satisfactoria y alcanzar a más público
    potencial, supone facilidades para los desarrolladores y permite abaratar costes,
    puesto que no se requieren programaciones diferenciadas (algo que sí ocurre con las
    Apps nativas).

**Ejemplos de PWA:**
[Inspire You](https://appstronauts.co/blog/3-examples-of-successful-pwas-that-will-inspire-you/)
[PWA Directory](https://pwa-directory.appspot.com/)

**Ventajas**
    • Bajo coste
    • Requieren menos recursos:
    • Son seguras
    • Disponibles en la pantalla de inicio
    • Acceso sin conexión
    • Similar a una App nativa
    • No depende de los markets de aplicaciones

**Desventajas**
    • No aparecen en las tiendas de aplicaciones
    • Consumen mucha batería
    • El uso de funcionalidades nativas es limitado


## Google Lighthouse

Es una herramienta oficial de Google que viene con Chrome, con la cual podemos
hacer un diagnóstico a una Web App. Estos diagnósticos se centran en Performance y
Accesibilidad, pero también tiene una herramienta para diagnosticar si nuestra Web
App se considera una PWA o no y que pasos debemos de tomar para que lo sea.

Lighthouse no sustituye hacer pruebas con un dispositivo móvil real, siempre realiza
pruebas en un dispositivo móvil.

El diagnostico de Performance nos muestra dos de los conceptos más importantes en performance: 

 * First meaningful Paint y First interactive.
    First meaningful Paint o primer pintado significativo, esto señala cuanto tiempo tardo el navegador en renderizar la aplicación de una forma que tenga sentido.
    Generalmente queremos que este situado entre 1 y 2 segundos.
 * First interactive o primera interacción, señala el tiempo cuando ya se cargó 

<div align="center">
  <img src="https://developers.google.com/web/ilt/pwa/img/85ba5f21895251ff.png">
</div>

## Scripts

- `npm install` => Instalar dependencias
- `npm start` => Entorno desarrollo
- `npm run build && serve -s build` => Entorno producción
- API Utilizada en la app => [Flickr](https://www.flickr.com/services/api/)
