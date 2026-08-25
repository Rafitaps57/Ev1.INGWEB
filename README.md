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