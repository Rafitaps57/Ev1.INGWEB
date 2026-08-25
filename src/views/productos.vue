<script setup>
import { ref } from 'vue'
import ProductCard from '../components/productoCarta.vue'

// PARTE B: Estructura de datos con 6 productos y al menos 3 comunas de Ñuble
const listaProductos = ref([
  {
    id: 1,
    nombre: 'Miel Multifloral Orgánica',
    categoria: 'Alimentos',
    productor: 'Apícola Los Lleuques',
    comuna: 'Pinto',
    precio: 6500
  },
  {
    id: 2,
    nombre: 'Vino Pipeño Tradicional',
    categoria: 'Bebidas',
    productor: 'Viña Viejas Cepas',
    comuna: 'Portezuelo',
    precio: 4500
  },
  {
    id: 3,
    nombre: 'Longaniza Artesanal de San Carlos',
    categoria: 'Embutidos',
    productor: 'Cecinas Don Pedro',
    comuna: 'San Carlos',
    precio: 8900
  },
  {
    id: 4,
    nombre: 'Greda Negra Tradicional',
    categoria: 'Artesanía',
    productor: 'Alfareras de Quinchamalí',
    comuna: 'Chillán',
    precio: 12000
  },
  {
    id: 5,
    nombre: 'Queso Mantecoso de Cabaña',
    categoria: 'Lácteos',
    productor: 'Lácteos El Carmen',
    comuna: 'El Carmen',
    precio: 7200
  },
  {
    id: 6,
    nombre: 'Mermelada Artesanal de Cereza',
    categoria: 'Conservas',
    productor: 'SABORES de Bulnes',
    comuna: 'Bulnes',
    precio: 3800
  }
])
</script>

<template>
  <main class="page-container">
    <h2>Catálogo de Productos de Ñuble</h2>
    <p>Conoce la oferta local directo de los productores de la región.</p>

    <!-- PARTE B: Contenedor donde se pasa la prop a cada tarjeta -->
    <div class="grid-productos">
      <ProductCard 
        v-for="prod in listaProductos" 
        :key="prod.id" 
        :producto="prod" 
      />
    </div>
  </main>
</template>

<style scoped>
.page-container {
  padding: 2rem;
  max-width: 1200px;
  margin: 0 auto;
}

.grid-productos {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 1.5rem;
  margin-top: 1.5rem;
}
</style>