<script setup>
import { ref, onMounted, onUnmounted } from 'vue';
import Hero_image from './Hero_image.vue';
import Hero_text from './Hero_text.vue';
import heroImage from '@/assets/hero_image.svg';

const windowHeight = ref(window.innerHeight);

const updateHeight = () => {
  windowHeight.value = window.innerHeight;
};

onMounted(() => {
  window.addEventListener('resize', updateHeight);
  updateHeight();
});
onUnmounted(() => {
  window.removeEventListener('resize', updateHeight);
});
</script>

<template>
  <section :style="{ minHeight: windowHeight + 'px' }"
    class="flex max-lg:flex-col lg:items-center justify-center  md:px-20">
    <!-- Contenedor del texto -->
    <Hero_text data-aos="fade-right" />

    <!-- Contenedor de la imagen -->
    <Hero_image :src="heroImage" data-aos="fade-left" />

    
  </section>
</template>
