<script setup>
import { ref, onMounted, onUnmounted } from 'vue';
import Navbar_button from './Navbar_button.vue';
import Navbar_info from './Navbar_info.vue';
import Navbar_redes from './Navbar_redes.vue';
import imagen_profesional from '@/assets/imagen_profesional.png'

const isScrolled = ref(false);
const menuOpen = ref(false);
const isHidden = ref(false); // Estado para ocultar el navbar al bajar
let lastScrollY = 0; // Almacena la última posición del scroll

// Detectar la dirección del scroll
const handleScroll = () => {
  const currentScrollY = window.scrollY;

  isScrolled.value = currentScrollY > 50; // Cambia el estilo si pasa los 50px

  // Ocultar si el usuario baja, mostrar si sube
  isHidden.value = currentScrollY > lastScrollY && currentScrollY > 50;
  lastScrollY = currentScrollY;
};

// Agregar y remover el evento de scroll
onMounted(() => window.addEventListener('scroll', handleScroll));
onUnmounted(() => window.removeEventListener('scroll', handleScroll));

const toggleMenu = () => {
  menuOpen.value = !menuOpen.value;
};
</script>


<template>
  <nav :class="[
    'fixed max-lg:sticky  max-lg:bg-black top-0 left-0 w-full z-50 flex justify-between items-center py-4 px-5 md:px-10 transition-all duration-600',
    isScrolled ? '' : 'bg-transparent',
    isHidden ? 'lg:-translate-y-full' : 'lg:translate-y-0'
  ]">
    <div :class="['max-lg:hidden lg:absolute lg:inset-0 lg:bg-neutral-950/95 lg:transition-all lg:duration-600',
      isScrolled ? ' ' : 'lg:bg-transparent']"></div>
    <!-- Sección de Información del Usuario -->
    <Navbar_info :src="imagen_profesional" nombre="Gabriel Cervantes" class=" lg:flex lg:z-10" />

    <!-- Sección de Botones de Navegación -->
    <div class="hidden lg:flex space-x-6 lg:z-10">
      <Navbar_button url="#Inicio" titulo="Inicio" />
      <Navbar_button url="#Proyectos" titulo="Proyectos" />
      <Navbar_button url="#tecnologias" titulo="Tecnologias" />
      <Navbar_button url="#Contacto" titulo="Contacto" />
    </div>

    <div class="lg:hidden text-white text-4xl">

      <div>
        <!-- Botón de Menú en Móviles -->
        <button @click="toggleMenu"
          class="relative z-50 flex flex-col items-center justify-center w-10 h-10 p-2 transition-all duration-300">
          <span class="block w-8 h-1 bg-white rounded transition-all duration-300"
            :class="{ 'rotate-45 translate-y-2': menuOpen }"></span>
          <span class="block w-8 h-1 bg-white rounded transition-all duration-300 my-1"
            :class="{ 'opacity-0': menuOpen }"></span>
          <span class="block w-8 h-1 bg-white rounded transition-all duration-300"
            :class="{ '-rotate-45 -translate-y-2': menuOpen }"></span>
        </button>
      </div>

    </div>


    <!-- Menú en Móviles con Animación -->


    <!-- Sección de Redes Sociales -->
    <Navbar_redes class="hidden lg:block lg:z-10" />
  </nav>
  <!-- Menú Desplegable -->
  <div :class="[
    'fixed z-40 left-0 w-full bg-neutral-950/95 text-white shadow-lg transition-transform duration-300 lg:hidden',
    menuOpen ? 'translate-y-0' : '-translate-y-[100%]'
  ]">


    <ol class="w-full font-primario font-bold text-2xl">
      <li class="w-full">
        <a href="#Inicio" class="block w-full py-3 text-center border-b-2 border-black hover:bg-red-800/40">
          Inicio
        </a>
      </li>
      <li class="w-full">
        <a href="#Proyectos" class="block w-full py-3 text-center border-b-2 border-black hover:bg-red-800/40">
          Proyectos
        </a>
      </li>
      <li class="w-full">
        <a href="#tecnologias" class="block w-full py-3 text-center border-b-2 border-black hover:bg-red-800/40">
          Tecnologia
        </a>
      </li>
      <li class="w-full">
        <a href="#Contacto" class="block w-full py-3 text-center border-b-2 border-black  hover:bg-red-800/40">
          Contacto
        </a>
      </li>
    </ol>
  </div>


</template>

<style scoped></style>
