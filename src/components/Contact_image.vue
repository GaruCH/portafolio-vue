<script setup>

defineProps({
    src: String,
});
</script>


<template>
    <!-- Sección de la imagen (Primero en móvil, derecha en desktop) -->
    <div class="flex justify-center items-center p-5 z-10 w-full md:w-1/2" data-aos="fade-up-left">
        <img :src="src" alt="Contacto" class="w-full max-w-[400px] object-contain drop-shadow-[5px_5px_7px_rgba(255,255,255,0.7)]">
    </div>
</template>