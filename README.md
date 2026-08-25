## Parte A - Estructura y navegación
Se organizó el proyecto separando vistas y componentes en las carpetas `src/views` y `src/components`.
Se crearon las 4 vistas requeridas: Inicio, Productos, Productores y Contacto.
La navegación SPA se implementó mediante Vue Router (`router/index.js`)..
## Parte B - Componentes y Props
Se creó el componente reutilizable `ProductCard.vue` encargado de estructurar y visualizar la información de un producto individual.
Se definió una lista de 6 productos pertenecientes a distintas comunas de la Región de Ñuble.
La vista `productos.vue` envía la información correspondiente a cada producto