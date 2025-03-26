<script setup>

defineProps({
    src: String,
});

</script>

<template>
    <div class="flex justify-center">
        <img :src="src" alt="image_hero" class="lg:w-full w-3/5">
    </div>
</template>