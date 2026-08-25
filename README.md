## Parte A - Estructura y navegación
Se organizó el proyecto separando vistas y componentes en las carpetas `src/views` y `src/components`.
Se crearon las 4 vistas requeridas: Inicio, Productos, Productores y Contacto.
La navegación SPA se implementó mediante Vue Router (`router/index.js`)..
## Parte B - Componentes y Props
Se creó el componente reutilizable `ProductCard.vue` encargado de estructurar y visualizar la información de un producto individual.
Se definió una lista de 6 productos pertenecientes a distintas comunas de la Región de Ñuble.
La vista `productos.vue` envía la información correspondiente a cada producto
## Parte C - Listas y condicionales
Se implementó `v-for` conectada a un arreglo `listaProductos`.
Con las directivas `v-if` y `v-else`, el sistema renderiza la lista filtrada o muestra un mensaje de advertencia indicando que no hay productos disponibles si no se cumplen las condiciones.