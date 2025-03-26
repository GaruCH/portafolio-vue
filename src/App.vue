<script setup>
import { ref, onMounted, onUnmounted } from 'vue';
import Navbar from './components/Navbar.vue';
import Hero from './components/Hero.vue';
import Proyectos from './components/Proyectos.vue'
import Contact from './components/Contact.vue';
import Footer from './components/Footer.vue';

// Estado para controlar la posición del degradado
const scrollY = ref(0);

// Función para actualizar el estado con el scroll
const handleScroll = () => {
  scrollY.value = window.scrollY;
};

// Agregar y remover el evento de scroll
onMounted(() => window.addEventListener('scroll', handleScroll));
onUnmounted(() => window.removeEventListener('scroll', handleScroll));
</script>

<template>
  <div class="min-h-screen transition-all duration-500" data-aos="fade-down" :style="{
    background: `radial-gradient(at 50% ${scrollY / 5}%, var(--color-secundario), var(--color-primario) 80%)`
  }">
    <!-- Navbar que sigue siendo sticky -->
    <Navbar />

    <!-- Contenido que puede desbordarse (pero con overflow-hidden) -->
    <div class="overflow-hidden">
      <Hero />
      <Proyectos />
      <Contact />
      <Footer />
    </div>
  </div>
</template>

<style>
:root {
  --color-secundario: #7f1d1d;
  /* Rojo oscuro */
  --color-primario: #171717;
  /* Gris oscuro */
}
</style>
