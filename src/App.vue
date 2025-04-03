<script setup>
import { ref, onMounted, onUnmounted } from 'vue';
import Navbar from './components/Navbar.vue';
import Hero from './components/Hero.vue';
import Proyectos from './components/Proyectos.vue';
import Contact from './components/Contact.vue';
import Footer from './components/Footer.vue';
import Tecnologias from './components/Tecnologias.vue';

const scrollY = ref(0);
const windowHeight = ref(window.innerHeight);

// Función para actualizar el estado con el scroll y altura de la ventana
const handleScroll = () => {
  scrollY.value = window.scrollY;
};
const updateHeight = () => {
  windowHeight.value = window.innerHeight;
};

onMounted(() => {
  window.addEventListener('scroll', handleScroll);
  window.addEventListener('resize', updateHeight);
  updateHeight();
});
onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll);
  window.removeEventListener('resize', updateHeight);
});
</script>

<template>
  <div :style="{
    minHeight: windowHeight + 'px',
    background: `radial-gradient(at 50% ${scrollY / 5}%, var(--color-secundario), var(--color-primario) 70%)`
  }" class="transition-all duration-500" data-aos="fade-down" id="Inicio">
    <!-- Navbar -->
    <Navbar />


    <div class="overflow-hidden">
      <Hero />
      <Proyectos />
      <Tecnologias />
      <Contact />
      <Footer />
    </div>
  </div>
</template>

<style>
:root {
  --color-secundario: #82181a;
  /* Rojo oscuro */
  --color-primario: #000;
  /* Gris oscuro */
}
</style>
