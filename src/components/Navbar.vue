<script setup>
import { ref, onMounted, onUnmounted } from 'vue';
import Navbar_button from './Navbar_button.vue';
import Navbar_info from './Navbar_info.vue';
import Navbar_redes from './Navbar_redes.vue';

// Estado para cambiar el fondo del navbar al hacer scroll
const isScrolled = ref(false);
const menuOpen = ref(false); // Estado del menú en móviles

// Función para detectar el scroll
const handleScroll = () => {
  isScrolled.value = window.scrollY > 50; // Cambia el navbar si baja más de 50px
};

// Agregar y remover el evento de scroll
onMounted(() => window.addEventListener('scroll', handleScroll));
onUnmounted(() => window.removeEventListener('scroll', handleScroll));


// Función para alternar el menú en móviles
const toggleMenu = () => {
  menuOpen.value = !menuOpen.value;
};

</script>

<template>
  <nav :class="[
    'sticky top-0 z-50 flex justify-between items-center max-md:py-3 max-lg:bg-black rounded-b-2xl  md:py-4 px-5 md:px-10 transition-all duration-400',
    isScrolled ? 'lg:bg-black lg:shadow-lg lg:rounded-3xl lg:mx-5 lg:top-6' : 'bg-transparent'
  ]">
    <!-- Sección de Información del Usuario -->
    <Navbar_info src="/imagen_profesional.png" nombre="Gabriel Cervantes" class=" lg:flex" />

    <!-- Sección de Botones de Navegación -->
    <div class="hidden lg:flex space-x-6">
      <Navbar_button url="#Inicio" titulo="Inicio" />
      <Navbar_button url="#Proyectos" titulo="Proyectos" />
      <Navbar_button url="#Contacto" titulo="Contacto" />
    </div>

    <div class="lg:hidden text-white text-4xl ">

      <div>
        <!-- Botón de Menú en Móviles -->
        <button @click="toggleMenu" class="">
          ☰
        </button>
      </div>

    </div>


    <!-- Menú en Móviles con Animación -->
    <div :class="[
      'fixed top-0 right-0 w-full h-full bg-black shadow-lg flex flex-col items-center justify-center space-y-6 transition-transform duration-300',
      menuOpen ? 'translate-x-0' : 'translate-x-full'
    ]">
      <button @click="toggleMenu" class="absolute  top-4 right-6 text-white text-2xl">✖</button>
      <Navbar_button url="#Inicio" titulo="Inicio" />
      <Navbar_button url="#Proyectos" titulo="Proyectos" />
      <Navbar_button url="#Contacto" titulo="Contacto" />
    </div>

    <!-- Sección de Redes Sociales -->
    <Navbar_redes class="hidden lg:block" />
  </nav>
</template>

<style scoped></style>
