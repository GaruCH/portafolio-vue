<script setup>
defineProps({
    direccion: String,
    texto: String,
});
</script>
<template>
    <div class="flex flex-col items-center hover:transition hover:duration-500">
        <img :src="direccion" :alt="texto" class="w-20 h-20">
    </div>
</template>

<style scoup></style>