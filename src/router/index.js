import { createRouter, createWebHistory } from 'vue-router'
import Inicio from '../views/inicio.vue'
import Productos from '../views/productos.vue'
import Productores from '../views/productores.vue'
import Contacto from '../views/contacto.vue'

const routes = [
  {
    path: '/',
    name: 'Inicio',
    component: Inicio
  },
  {
    path: '/productos',
    name: 'Productos',
    component: Productos
  },
  {
    path: '/productores',
    name: 'Productores',
    component: Productores
  },
  {
    path: '/contacto',
    name: 'Contacto',
    component: Contacto
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router