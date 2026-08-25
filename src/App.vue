<script setup>
import Navbar from './components/Navbar.vue'
</script>

<template>
  <div id="app">
    <Navbar />
    <router-view />
  </div>
</template>

<style>
:root {
  --primary: #2d6a4f;
  --primary-dark: #1b4332;
  --accent: #52b788;
  --bg-light: #f8f9fa;
  --text-dark: #2d3748;
}

body {
  margin: 0;
  font-family: 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;
  background-color: var(--bg-light);
  color: var(--text-dark);
  line-height: 1.6;
}

/* Adaptación responsive para pantallas móviles */
@media (max-width: 600px) {
  .page-container {
    padding: 1rem !important;
  }
}
</style>
