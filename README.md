## Service Worker

Es lo que hace posible que las PWA funcionen, es un script que nuestro navegador corre detrás de escena y este no puede tocar el DOM.

Podemos tener control absoluto a nivel red de nuestra aplicación gracias a los service workers.

**Features del Service Workers**:
* Soporte Offline
* Proxy In-Browser
* Push Notifications

## El ciclo de vida del service worker

Un service worker tiene un ciclo de vida completamente separado de tu página web.

Si quieres instalar un service worker para tu sitio, debes registrarlo. Esto se realiza en el lenguaje JavaScript de tu página. Cuando registres un service worker, el navegador iniciará la etapa de instalación del proceso en segundo plano.

Por lo general, durante la etapa de instalación, te convendrá almacenar en caché algunos elementos estáticos. Si todos los archivos se almacenan correctamente en caché, se instalará el service worker. Si no se puede descargar o almacenar en caché alguno de los archivos, el paso de instalación fallará y el service worker no se activará (es decir, no se instalará). Si esto ocurre, no te preocupes; se realizará un nuevo intento la próxima vez. Sin embargo, si la instalación tiene éxito, podrás estar seguro de que dichos elementos estáticos estarán en la caché.

Después de la instalación, comenzará el paso de activación. Es una excelente oportunidad para administrar las cachés anteriores.

Después de la etapa de activación, el service worker controlará todas las páginas que estén a su alcance. Sin embargo, no se controlará la página que registró por primera vez el service worker hasta que se vuelva a cargar. Una vez que un service worker tiene el control, estará en uno de dos estados: el service worker se rescindirá para ahorrar memoria o controlará eventos de mensaje y extracción que ocurran cuando se emita un mensaje o solicitud de red desde tu página.

A continuación, se muestra una versión muy simplificada del ciclo de vida del service worker cuando se instala por primera vez.

<div align="center">
  <img src="https://developers.google.com/web/fundamentals/primers/service-workers/images/sw-lifecycle.png?hl=es">
  <small><p>Ciclo de vida de un Service Worker</p></small>
</div>

## Estrategias de Carga

Existen diferentes estrategias de carga.

**Network Only**

La primera y fundamental se llama Network Only. Esta se encarga checar si hay conexión a internet, si existe una conexión realiza la petición de información, en caso de no haber conexión se rompe la página.

¿Cuándo usar Network Only?
Por defecto si no queremos cache o manejamos información en tiempo real.

<div align="center">
  <img src="https://developers.google.com/web/tools/workbox/images/modules/workbox-strategies/network-only.png">
  <small><p>Network Only</p></small>
</div>

**Cache Only**

Cache Only sirve el contenido solo si este se encuentra cacheado, lo que nos obligaría a establecer estrategias de precacheo.

<div align="center">
  <img src="https://developers.google.com/web/tools/workbox/images/modules/workbox-strategies/cache-only.png">
  <small><p>Cache Only</p></small>
</div>

**Network First**

Network First es otra estrategia de carga, se encarga mandar la petición a internet, si la conexión a internet esta caída entonces tomara la información que tenga almacenada en cache.

¿Cuándo usar Network First?
Cuando queremos la última versión de un asset y tener soporte offline.

<div align="center">
  <img src="https://developers.google.com/web/tools/workbox/images/modules/workbox-strategies/network-first.png">
  <small><p>Network First</p></small>
</div>

**Cache First**

Es una estrategia de carga que lo primero que hace es ir al cache y si encuentra el recurso lo sirve directamente. En caso de no encontrarlo va a ir a red, guardar la información en cache y servir esa versión.

Esta estrategia puede ser peligrosa y solo es recomendable cuando queremos máxima velocidad y estamos manejando un recurso que nunca cambia, como una imagen o alguna fuente.

<div align="center">
  <img src="https://developers.google.com/web/tools/workbox/images/modules/workbox-strategies/cache-first.png">
  <small><p>Cache First</p></small>
</div>

**Stale While Revalidate**

Esta es una estrategia de carga muy particular y que mejor funciona a la hora de mejorar el rendimiento. Lo que hace es ir a cache y a red al mismo tiempo, toma la versión más rápida que siempre será la de cache y en cuanto recibe la de red va a actualizar la versión de cache.

Es recomendable esta estrategia cuando queremos mucha velocidad y estamos manejando un recurso que puede estar levemente desactualizado.

<div align="center">
  <img src="https://developers.google.com/web/tools/workbox/images/modules/workbox-strategies/stale-while-revalidate.png">
  <small><p>Stale While revalidate</p></small>
</div>

## Workbox
NUNCA conviene escribir nuestro propio service worker especialmente con herramientas de bajo nivel.

Para implementar nuestro propio service worker usaremos Workbox, una librería creada por Google para crear Service Workers.

* [Guides](https://developers.google.com/web/tools/workbox/guides/get-started)
* [Modules](https://developers.google.com/web/tools/workbox/modules)
