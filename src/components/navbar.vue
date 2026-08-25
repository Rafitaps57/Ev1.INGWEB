<template>
  <header class="navbar">
    <div class="logo">
      <h1>Mercado Ñuble Digital</h1>
    </div>
    <nav class="nav-links">
      <router-link to="/">Inicio</router-link>
      <router-link to="/productos">Productos</router-link>
      <router-link to="/productores">Productores</router-link>
      <router-link to="/contacto">Contacto</router-link>
    </nav>
  </header>
</template>

<style scoped>
.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  background-color: #2c3e50;
  color: white;
}

.logo h1 {
  margin: 0;
  font-size: 1.5rem;
}

.nav-links a {
  color: white;
  text-decoration: none;
  margin-left: 1.5rem;
  font-weight: 500;
  transition: color 0.3s;
}

.nav-links a:hover {
  color: #42b983;
}

.nav-links a.router-link-exact-active {
  color: #42b983;
  border-bottom: 2px solid #42b983;
}
</style>