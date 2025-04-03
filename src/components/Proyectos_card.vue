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
    <div
        class=" bg-neutral-900 rounded-2xl font-primario hover:shadow-lg hover:shadow-white hover:transition hover:duration-600">
        <div class="relative ">
            <div class="bg-neutral-900/80 absolute w-full text-wrap rounded-t-2xl text-center">
                <h1 class="font-bold text-md  lg:text-lg px-2">{{ nombre_proyecto }}</h1>
            </div>
            <div class="flex justify-center">
                <img :src="src" :alt="alt" :class="['max-w-full', 'rounded-t-2xl', sizeImage]">
            </div>
            

        </div>
        <div class="p-5">

            <!-- Texto (Evitar text-justify si causa problemas en móviles) -->
            <div class="">
                <p class="text-lg text-justify">{{ descripcion }}</p>
            </div>
            <div>
                <div class="flex justify-end pt-4">
                    <a href="#"
                        class="bg-secundario hover:bg-red-800 rounded-2xl px-5 py-2 hover:animate-jump hover:animate-duration-1000">
                        <i class="fa-solid fa-magnifying-glass"></i> Ver más detalles
                    </a>
                </div>
            </div>
        </div>

    </div>
</template>


<style></style>
