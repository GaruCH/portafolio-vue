<script setup>
import { ref, onMounted, onUnmounted } from 'vue';
import Contact_formulario from './Contact_formulario.vue';
import Contact_image from './Contact_image.vue';
import contact from '@/assets/Contact.svg';

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
    <section 
        :style="{ minHeight: windowHeight + 'px' }" 
        class="relative w-full bg-transparent flex items-center justify-center p-5 md:p-10" 
        id="Contacto"
    >
        <!-- Contenedor principal -->
        <div class="relative flex flex-col-reverse md:flex-row w-full max-w-6xl items-center justify-center gap-10">
            <Contact_formulario />
            <Contact_image :src="contact" />
        </div>
    </section>
</template>
