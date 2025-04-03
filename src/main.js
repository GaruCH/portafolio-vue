import { createApp } from 'vue'
import App from './App.vue'
import './style.css'
import AOS from 'aos'
import 'aos/dist/aos.css'
import Vue3Toastify from 'vue3-toastify'
import 'vue3-toastify/dist/index.css'


// Inicializa AOS
AOS.init({
  duration: 1300,
  easing: 'ease-in-out',
  once: false,
  mirror: true,
})

// Crea la app y registra Toastify
createApp(App)
  .use(Vue3Toastify, {
    autoClose: 3000,
    position: 'top-right',
    pauseOnHover: true,
    theme: 'auto',
    closeOnClick: true,
    hideProgressBar: false,
  })
  .mount('#app')
