<script setup>
defineProps({
    nombre_proyecto: String,
    src: String,
    alt: String,
    descripcion: String,
    sizeImage: String
});
</script>

<template>
    <div class="relative w-full" data-aos="fade-down">
        <!-- Fondo con blur -->
        <div class="absolute inset-0 bg-terciario opacity-25 blur-lg rounded-lg"></div>
        
        <!-- Contenido principal -->
        <div class="p-4 shadow rounded text-white relative z-10 font-primario text-center max-w-full">
            <h1 class="font-bold text-2xl">{{ nombre_proyecto }}</h1> 

            <!-- Imagen (Asegurar que no sea más grande que el contenedor) -->
            <div class="flex justify-center py-10">
                <img :src="src" :alt="alt" :class="['max-w-full', sizeImage]">
            </div>

            <!-- Texto (Evitar text-justify si causa problemas en móviles) -->
            <div>
                <p class="text-lg text-justify">{{ descripcion }}</p>
            </div>

            <!-- Botón -->
            <div class="flex justify-end pt-4">
                <a href="#" class="bg-secundario hover:bg-red-800 rounded-2xl px-5 py-2 hover:animate-jump hover:animate-duration-1000">
                    <i class="fa-solid fa-magnifying-glass"></i> Ver más detalles
                </a>
            </div>
        </div>
    </div>
</template>


<style>

</style>
