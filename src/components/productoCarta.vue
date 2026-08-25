<script setup>
const props = defineProps({
  producto: {
    type: Object,
    required: true
  }
})

const emit = defineEmits(['notificar-interes'])

const manifestarInteres = () => {
  emit('notificar-interes', props.producto)
}
</script>

<template>
  <div class="product-card" :class="{ 'sin-stock': !producto.disponible }">
    <div class="card-header">
      <span class="comuna-badge">{{ producto.comuna }}</span>
      <span class="categoria-tag">{{ producto.categoria }}</span>
    </div>
    
    <h3>{{ producto.nombre }}</h3>
    <p class="productor"><strong>Productor:</strong> {{ producto.productor }}</p>
    <p class="precio">${{ producto.precio.toLocaleString('es-CL') }}</p>

    <div v-if="producto.disponible" class="estado disponible">
      ✓ Disponible en stock
    </div>
    <div v-else class="estado agotado">
      ✕ Agotado temporalmente
    </div>

    <button 
      class="btn-interes" 
      :disabled="!producto.disponible"
      @click="manifestarInteres"
    >
      {{ producto.disponible ? 'Manifestar Interés' : 'Sin Stock' }}
    </button>
  </div>
</template>

<style scoped>
.product-card {
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  padding: 1.2rem;
  background-color: #ffffff;
  box-shadow: 0 2px 4px rgba(0,0,0,0.05);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.product-card.sin-stock {
  opacity: 0.65;
  background-color: #f9f9f9;
}

.card-header {
  display: flex;
  justify-content: space-between;
  margin-bottom: 0.8rem;
}

.comuna-badge {
  background-color: #2c3e50;
  color: white;
  padding: 0.2rem 0.6rem;
  border-radius: 12px;
  font-size: 0.8rem;
  font-weight: bold;
}

.categoria-tag {
  color: #7f8c8d;
  font-size: 0.85rem;
  font-style: italic;
}

h3 {
  margin: 0.5rem 0;
  color: #2c3e50;
}

.productor {
  color: #555;
  font-size: 0.95rem;
  margin: 0.5rem 0;
}

.precio {
  font-size: 1.2rem;
  font-weight: bold;
  color: #27ae60;
  margin-top: 0.8rem;
}

.estado {
  font-weight: bold;
  font-size: 0.85rem;
  margin-top: 0.5rem;
}

.disponible { color: #27ae60; }
.agotado { color: #c0392b; }

.btn-interes {
  margin-top: 1rem;
  padding: 0.6rem 1rem;
  background-color: #42b983;
  color: white;
  border: none;
  border-radius: 4px;
  font-weight: bold;
  cursor: pointer;
  transition: background-color 0.2s;
}

.btn-interes:hover:not(:disabled) {
  background-color: #369f6e;
}

.btn-interes:disabled {
  background-color: #bdc3c7;
  cursor: not-allowed;
}
</style>