// router/index.js
import { createRouter, createWebHistory } from 'vue-router'

// Import your components
import Home from '@/views/Home.vue'
import Products from '@/views/Products.vue'
import ProductDetails from '@/views/ProductDetails.vue'
import Cart from '@/views/Cart.vue'
import Checkout from '@/views/Checkout.vue'
import NotFound from '@/views/NotFound.vue'
import path from 'path'
import Login from '@/views/Login.vue'
import Signup from '@/views/Signup.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/products',
    name: 'Products',
    component: Products
  },
  {
    path: '/products/:id',
    name: 'ProductDetails',
    component: ProductDetails,
    props: true
  },
  {
    path: '/cart',
    name: 'Cart',
    component: Cart
  },
  {
    path: '/checkout',
    name: 'Checkout',
    component: Checkout
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'NotFound',
    component: NotFound
  },
  {path:'/login',
   name:'Login',
   component:Login

  },
  
  {path:'/signup',
   name:'signup',
   component:Signup

  }

]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router
