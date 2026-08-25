<template>
  <main class="page-container">
    <section class="hero-section">
      <h2>Conecta con el Ñuble</h2>
      <p class="hero-subtitle">
        Descubre hortalizas, mieles, vinos, artesanías y productos típicos elaborados directamente por emprendedores y familias de nuestras 21 comunas.
      </p>
      <div class="hero-buttons">
        <router-link to="/productos" class="btn-primary">Ver Catálogo</router-link>
        <router-link to="/productores" class="btn-secondary">Conocer Productores</router-link>
      </div>
    </section>

    <section class="caracteristicas-grid">
      <div class="card-feature">
        <h3>📍 Local y Auténtico</h3>
        <p>Identifica el origen exacto de cada producto, desde la cordillera en Pinto hasta la costa en Cobquecura.</p>
      </div>
      <div class="card-feature">
        <h3>🤝 Trato Directo</h3>
        <p>Manifiesta tu interés y ponte en contacto directo con las agrupaciones de productores locales.</p>
      </div>
      <div class="card-feature">
        <h3>🌱 Desarrollo Regional</h3>
        <p>Fomenta el comercio justo y apoya el crecimiento económico de los emprendedores de la Región de Ñuble.</p>
      </div>
    </section>
  </main>
</template>

<style scoped>
.page-container {
  padding: 2rem 1rem;
  max-width: 1100px;
  margin: 0 auto;
}
.hero-section {
  text-align: center;
  padding: 3rem 1.5rem;
  background: linear-gradient(135deg, #1b4332 0%, #2d6a4f 100%);
  color: white;
  border-radius: 12px;
  margin-bottom: 2.5rem;
  box-shadow: 0 4px 15px rgba(0,0,0,0.1);
}
.hero-section h2 {
  font-size: 2.2rem;
  margin-bottom: 1rem;
}
.hero-subtitle {
  font-size: 1.1rem;
  max-width: 700px;
  margin: 0 auto 2rem;
  line-height: 1.5;
  opacity: 0.95;
}
.hero-buttons {
  display: flex;
  gap: 1rem;
  justify-content: center;
  flex-wrap: wrap;
}
.btn-primary, .btn-secondary {
  padding: 0.8rem 1.6rem;
  border-radius: 6px;
  font-weight: bold;
  text-decoration: none;
  transition: transform 0.2s, background 0.2s;
}
.btn-primary {
  background-color: #52b788;
  color: #081c15;
}
.btn-secondary {
  background-color: rgba(255,255,255,0.15);
  color: white;
  border: 1px solid white;
}
.btn-primary:hover, .btn-secondary:hover {
  transform: translateY(-2px);
}
.caracteristicas-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 1.5rem;
}
.card-feature {
  background: white;
  padding: 1.8rem;
  border-radius: 8px;
  border: 1px solid #e0e0e0;
  box-shadow: 0 2px 5px rgba(0,0,0,0.04);
}
.card-feature h3 {
  color: #2d6a4f;
  margin-top: 0;
  margin-bottom: 0.8rem;
}
</style>