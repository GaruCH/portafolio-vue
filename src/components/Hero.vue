<script setup>
import Hero_image from './Hero_image.vue'
import Hero_text from './Hero_text.vue'

</script>

<template>
    <section class="h-screen flex max-lg:flex-col  max-lg:justify-center lg:justify-between  md:px-25 px-5 lg:space-x-10" id="Inicio">
        
        <!-- Contenedor del texto -->
        <Hero_text data-aos="fade-right"/>


        <!-- Contenedor de la imagen -->

        <Hero_image src="/hero_image.svg" data-aos="fade-left"/>

    </section>
</template>