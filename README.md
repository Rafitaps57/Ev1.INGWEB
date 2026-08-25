## Estudiante
Rafael Aruti
## Descripción
Frontend funcional para "Mercado Ñuble Digital", una SPA desarrollada en Vue 3 que permite visibilizar productos locales de distintas comunas de la Región de Ñuble, conocer a sus productores y manifestar interés de compra sin necesidad de un backend.
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

## Parte D - Comunicación mediante Emit
- **Acción realizada:** El usuario presiona el botón "Manifestar Interés" en la tarjeta de un producto disponible.
- **Componente emisor:** `ProductoCarta.vue` emite un evento personalizado denominado `notificar-interes`
- **Componente receptor:** `productos.vue` (padre) captura el evento 
- **Resultado:** Tras recibir el evento, el componente padre actualiza la variable reactiva `mensajeInteres` mostrando una confirmación en la parte superior con los detalles del producto y del productor.
## Parte E - Formulario y validación
- **Campos implementados:** Se habilitaron los campos de nombre, correo electrónico, teléfono, comuna y mensaje, todos enlazados reactivamente mediante `v-model`.
- **Validaciones:** Se implementó una función de validación que verifica que ningún campo esté vacío y que el formato del correo electrónico sea válido.
- **Respuesta:** Al ingresar información correcta y presionar enviar, la aplicación oculta el formulario y despliega una tarjeta de confirmación que contiene el resumen completo con los datos ingresados por el usuario.
## Parte F - Diseño y presentación
- **Propuesta Visual:** Sistema de colores verdes agrícolas y tonos tierra neutros con tipografía clara y tarjetas sombreadas.
- **Consistencia y Responsive:** Distribución basada en CSS Grid y Flexbox adaptada para dispositivos móviles y escritorio.

## Tecnologías utilizadas
- Vue 3 (Composition API / `<script setup>`)
- Vue Router 4
- Vite
- HTML5 / CSS3 / JavaScript (ES6+)

## Ejecución
1. Clonar el repositorio.
2. Instalar dependencias:
   ```bash
   npm install

## Reflexión final 
El trabajo no fue dificil se vieron los conocimientos vistos en clases y se copiaron muchas de las actividades vistas, lo que costo mas fue la comunicación mediante el Emit que ese estoy al debe pero por lo demas la pagina quedo visualmente bien y funcional.