<script setup>
defineProps({
    src: String,
    nombre: String
});
</script>


<template>

    <div class="flex justify-center items-center space-x-3 md:space-x-6">
        <div>
            <img :src="src" alt="profile-image" class="w-10 md:w-12 md:h-12 rounded-full ring-2 ring-white">
        </div>
        <div>
            <h2 class=" md:text-xl font-bold text-white font-primario">{{ nombre }}</h2>
        </div>
    </div>

</template>