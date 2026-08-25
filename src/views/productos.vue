<script setup>
import { ref, computed } from 'vue'
import ProductCard from '../components/ProductoCarta.vue'

// PARTE C: Agregamos la propiedad 'disponible'
const listaProductos = ref([
  { id: 1, nombre: 'Miel Multifloral Orgánica', categoria: 'Alimentos', productor: 'Apícola Los Lleuques', comuna: 'Pinto', precio: 6500, disponible: true },
  { id: 2, nombre: 'Vino Pipeño Tradicional', categoria: 'Bebidas', productor: 'Viña Viejas Cepas', comuna: 'Portezuelo', precio: 4500, disponible: true },
  { id: 3, nombre: 'Longaniza Artesanal de San Carlos', categoria: 'Embutidos', productor: 'Cecinas Don Pedro', comuna: 'San Carlos', precio: 8900, disponible: true },
  { id: 4, nombre: 'Greda Negra Tradicional', categoria: 'Artesanía', productor: 'Alfareras de Quinchamalí', comuna: 'Chillán', precio: 12000, disponible: false },
  { id: 5, nombre: 'Queso Mantecoso de Cabaña', categoria: 'Lácteos', productor: 'Lácteos El Carmen', comuna: 'El Carmen', precio: 7200, disponible: true },
  { id: 6, nombre: 'Mermelada Artesanal de Cereza', categoria: 'Conservas', productor: 'SABORES de Bulnes', comuna: 'Bulnes', precio: 3800, disponible: false }
])

// PARTE C: Reactividad para filtrado
const soloDisponibles = ref(false)

// Propiedad computada para filtrar la lista dinámicamente
const productosFiltrados = computed(() => {
  if (soloDisponibles.value) {
    return listaProductos.value.filter(prod => prod.disponible)
  }
  return listaProductos.value
})
</script>

<template>
  <main class="page-container">
    <h2>Catálogo de Productos de Ñuble</h2>
    <p>Conoce la oferta local directo de los productores de la región.</p>

    <!-- PARTE C: Control para alterar lo que ve el usuario -->
    <div class="panel-filtros">
      <label class="checkbox-label">
        <input type="checkbox" v-model="soloDisponibles" />
        Mostrar solo productos con stock disponible
      </label>
    </div>

    <!-- PARTE C: Evaluación condicional v-if / v-else -->
    <div v-if="productosFiltrados.length > 0" class="grid-productos">
      <ProductCard 
        v-for="prod in productosFiltrados" 
        :key="prod.id" 
        :producto="prod" 
      />
    </div>

    <!-- Mensaje cuando la condición no permita mostrar información -->
    <div v-else class="mensaje-vacio">
      <p>⚠️ No hay productos disponibles con el criterio seleccionado en este momento.</p>
    </div>
  </main>
</template>

<style scoped>
.page-container {
  padding: 2rem;
  max-width: 1200px;
  margin: 0 auto;
}

.panel-filtros {
  background-color: #ecf0f1;
  padding: 1rem;
  border-radius: 6px;
  margin-bottom: 1.5rem;
}

.checkbox-label {
  font-weight: bold;
  color: #2c3e50;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.grid-productos {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 1.5rem;
}

.mensaje-vacio {
  text-align: center;
  padding: 3rem;
  background-color: #fff3cd;
  color: #856404;
  border: 1px solid #ffeeba;
  border-radius: 8px;
  font-size: 1.1rem;
}
</style>