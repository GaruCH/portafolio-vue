import { createApp } from 'vue'
import './style.css'
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init();
AOS.init({
    duration: 1300, // Animaciones más suaves
    easing: 'ease-in-out',
    once: false, // Solo se anima una vez por elemento
    mirror: true, // Se anima al entrar y salir
  });
  
import App from './App.vue'


createApp(App).mount('#app')
