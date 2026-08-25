<script setup>
import { ref } from 'vue'

const formulario = ref({
  nombre: '',
  correo: '',
  telefono: '',
  comuna: '',
  mensaje: ''
})

const errores = ref({})
const enviado = ref(false)
const resumenDatos = ref(null)

const comunasNuble = [
  'Chillán',
  'Chillán Viejo',
  'Bulnes',
  'Cobquecura',
  'Coelemu',
  'Coihueco',
  'El Carmen',
  'Ninhue',
  'Ñiquén',
  'Pemuco',
  'Pinto',
  'Portezuelo',
  'Quillón',
  'Quirihue',
  'Ránquil',
  'San Carlos',
  'San Fabián',
  'San Ignacio',
  'San Nicolás',
  'Treguaco',
  'Yungay'
]

const validarFormulario = () => {
  errores.value = {}

  if (!formulario.value.nombre.trim()) {
    errores.value.nombre = 'El nombre es obligatorio.'
  }

  if (!formulario.value.correo.trim()) {
    errores.value.correo = 'El correo electrónico es obligatorio.'
  } else if (!/\S+@\S+\.\S+/.test(formulario.value.correo)) {
    errores.value.correo = 'Ingrese un correo electrónico válido.'
  }

  if (!formulario.value.telefono.trim()) {
    errores.value.telefono = 'El teléfono es obligatorio.'
  }

  if (!formulario.value.comuna) {
    errores.value.comuna = 'Debe seleccionar una comuna de Ñuble.'
  }

  if (!formulario.value.mensaje.trim()) {
    errores.value.mensaje = 'El mensaje no puede estar vacío.'
  }

  return Object.keys(errores.value).length === 0
}

const enviarFormulario = () => {
  if (validarFormulario()) {
    resumenDatos.value = { ...formulario.value }
    enviado.value = true

    formulario.value = {
      nombre: '',
      correo: '',
      telefono: '',
      comuna: '',
      mensaje: ''
    }
  }
}

const reiniciarFormulario = () => {
  enviado.value = false
  resumenDatos.value = null
}
</script>

<template>
  <main class="page-container">
    <h2>Contacto - Mercado Ñuble Digital</h2>
    <p>¿Tienes dudas o te gustaría participar como productor? Completa el formulario a continuación.</p>

    <div v-if="enviado" class="tarjeta-resumen">
      <div class="header-resumen">
        ✓ ¡Formulario enviado con éxito!
      </div>
      <p>A continuación se presenta un resumen de la información ingresada:</p>
      
      <ul class="lista-resumen">
        <li><strong>Nombre:</strong> {{ resumenDatos.nombre }}</li>
        <li><strong>Correo electrónico:</strong> {{ resumenDatos.correo }}</li>
        <li><strong>Teléfono:</strong> {{ resumenDatos.telefono }}</li>
        <li><strong>Comuna:</strong> {{ resumenDatos.comuna }}</li>
        <li><strong>Mensaje:</strong> {{ resumenDatos.mensaje }}</li>
      </ul>

      <button @click="reiniciarFormulario" class="btn-nuevo">Enviar otro mensaje</button>
    </div>

    <form v-else @submit.prevent="enviarFormulario" class="formulario-contacto" novalidate>
      
      <div class="campo">
        <label for="nombre">Nombre completo *</label>
        <input 
          id="nombre" 
          type="text" 
          v-model="formulario.nombre" 
          :class="{ 'input-error': errores.nombre }"
          placeholder="Ej: María González"
        />
        <span v-if="errores.nombre" class="error-texto">{{ errores.nombre }}</span>
      </div>

      <div class="campo">
        <label for="correo">Correo electrónico *</label>
        <input 
          id="correo" 
          type="email" 
          v-model="formulario.correo" 
          :class="{ 'input-error': errores.correo }"
          placeholder="Ej: maria@ejemplo.cl"
        />
        <span v-if="errores.correo" class="error-texto">{{ errores.correo }}</span>
      </div>

      <div class="campo">
        <label for="telefono">Teléfono *</label>
        <input 
          id="telefono" 
          type="tel" 
          v-model="formulario.telefono" 
          :class="{ 'input-error': errores.telefono }"
          placeholder="Ej: +56 9 1234 5678"
        />
        <span v-if="errores.telefono" class="error-texto">{{ errores.telefono }}</span>
      </div>

      <div class="campo">
        <label for="comuna">Comuna de la Región de Ñuble *</label>
        <select 
          id="comuna" 
          v-model="formulario.comuna"
          :class="{ 'input-error': errores.comuna }"
        >
          <option value="" disabled>Seleccione una comuna...</option>
          <option v-for="comuna in comunasNuble" :key="comuna" :value="comuna">
            {{ comuna }}
          </option>
        </select>
        <span v-if="errores.comuna" class="error-texto">{{ errores.comuna }}</span>
      </div>
      <div class="campo">
        <label for="mensaje">Mensaje *</label>
        <textarea 
          id="mensaje" 
          rows="4" 
          v-model="formulario.mensaje" 
          :class="{ 'input-error': errores.mensaje }"
          placeholder="Escriba su consulta o comentario aquí..."
        ></textarea>
        <span v-if="errores.mensaje" class="error-texto">{{ errores.mensaje }}</span>
      </div>

      <button type="submit" class="btn-enviar">Enviar Mensaje</button>
    </form>
  </main>
</template>

<style scoped>
.page-container {
  padding: 2rem;
  max-width: 700px;
  margin: 0 auto;
}

.formulario-contacto {
  background: white;
  padding: 2rem;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0,0,0,0.05);
  border: 1px solid #e0e0e0;
}

.campo {
  display: flex;
  flex-direction: column;
  margin-bottom: 1.2rem;
}

label {
  font-weight: bold;
  margin-bottom: 0.4rem;
  color: #2c3e50;
}

input, select, textarea {
  padding: 0.7rem;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 1rem;
  font-family: inherit;
}

input:focus, select:focus, textarea:focus {
  outline: none;
  border-color: #42b983;
}

.input-error {
  border-color: #e74c3c !important;
  background-color: #fdf2f2;
}

.error-texto {
  color: #e74c3c;
  font-size: 0.85rem;
  margin-top: 0.3rem;
  font-weight: bold;
}

.btn-enviar {
  background-color: #2c3e50;
  color: white;
  padding: 0.8rem 1.5rem;
  border: none;
  border-radius: 4px;
  font-size: 1rem;
  font-weight: bold;
  cursor: pointer;
  width: 100%;
  transition: background-color 0.2s;
}

.btn-enviar:hover {
  background-color: #1a252f;
}

.tarjeta-resumen {
  background: #ffffff;
  border: 1px solid #c3e6cb;
  border-radius: 8px;
  padding: 2rem;
  box-shadow: 0 4px 6px rgba(0,0,0,0.05);
}

.header-resumen {
  background-color: #d4edda;
  color: #155724;
  padding: 1rem;
  border-radius: 6px;
  font-size: 1.2rem;
  font-weight: bold;
  margin-bottom: 1rem;
}

.lista-resumen {
  list-style: none;
  padding: 0;
  margin: 1.5rem 0;
}

.lista-resumen li {
  padding: 0.5rem 0;
  border-bottom: 1px solid #eee;
}

.btn-nuevo {
  background-color: #42b983;
  color: white;
  border: none;
  padding: 0.6rem 1.2rem;
  border-radius: 4px;
  font-weight: bold;
  cursor: pointer;
}
</style>