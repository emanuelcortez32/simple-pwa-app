## Service Worker

Es lo que hace posible que las PWA funcionen, es un script que nuestro navegador corre detrás de escena y este no puede tocar el DOM.

Podemos tener control absoluto a nivel red de nuestra aplicación gracias a los service workers.

**Features del Service Workers**:
* Soporte Offline
* Proxy In-Browser
* Push Notifications

<div align="right">
  <small><a href="#tabla-de-contenido">🡡 volver al inicio</a></small>
</div>

## Estrategias de Carga

Existen diferentes estrategias de carga.

**Network Only**

La primera y fundamental se llama Network Only. Esta se encarga checar si hay conexión a internet, si existe una conexión realiza la petición de información, en caso de no haber conexión se rompe la página.

¿Cuándo usar Network Only?
Por defecto si no queremos cache o manejamos información en tiempo real.

<div align="center">
  <img src="img/network-only.jpg">
  <small><p>Network Only</p></small>
</div>

**Network First**

Network First es otra estrategia de carga, se encarga mandar la petición a internet, si la conexión a internet esta caída entonces tomara la información que tenga almacenada en cache.

¿Cuándo usar Network First?
Cuando queremos la última versión de un asset y tener soporte offline.

<div align="center">
  <img src="img/network-first.jpg">
  <small><p>Network First</p></small>
</div>

**Cache First**

Es una estrategia de carga que lo primero que hace es ir al cache y si encuentra el recurso lo sirve directamente. En caso de no encontrarlo va a ir a red, guardar la información en cache y servir esa versión.

Esta estrategia puede ser peligrosa y solo es recomendable cuando queremos máxima velocidad y estamos manejando un recurso que nunca cambia, como una imagen o alguna fuente.

<div align="center">
  <img src="img/cache-first.jpg">
  <small><p>Cache First</p></small>
</div>

**Stale While Revalidate**

Esta es una estrategia de carga muy particular y que mejor funciona a la hora de mejorar el rendimiento. Lo que hace es ir a cache y a red al mismo tiempo, toma la versión más rápida que siempre será la de cache y en cuanto recibe la de red va a actualizar la versión de cache.

Es recomendable esta estrategia cuando queremos mucha velocidad y estamos manejando un recurso que puede estar levemente desactualizado.

<div align="center">
  <img src="img/stale-while-revalidate.jpg">
  <small><p>Stale While revalidate</p></small>
</div>

<div align="right">
  <small><a href="#tabla-de-contenido">🡡 volver al inicio</a></small>
</div>

## Workbox
NUNCA conviene escribir nuestro propio service worker especialmente con herramientas de bajo nivel.

Para implementar nuestro propio service worker usaremos Workbox, una librería creada por Google para crear Service Workers.