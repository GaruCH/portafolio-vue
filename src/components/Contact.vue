<script setup>

import Contact_formulario from './Contact_formulario.vue';
import Contact_image from './Contact_image.vue';
</script>

<template>
    <section class="relative w-full bg-transparent min-h-screen flex items-center justify-center p-10" id="Contacto">
        <!-- Fondo curvado -->
        <div class="absolute inset-0  "></div>

        <!-- Contenedor principal -->
        <div class="relative flex flex-col-reverse md:flex-row w-full max-w-6xl items-center justify-center gap-10">

            <Contact_formulario/>

            <Contact_image/>

        </div>
    </section>
</template>

<style scoped>
.clip-diagonal {
    clip-path: polygon(0 0, 100% 30%, 100% 70%, 0 100%);
}
</style>